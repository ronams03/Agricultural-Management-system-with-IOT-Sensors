import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    
    const where: any = {};
    if (type) where.type = type;
    if (startDate && endDate) {
      where.date = {
        gte: new Date(startDate),
        lte: new Date(endDate)
      };
    }

    const transactions = await db.transaction.findMany({
      where,
      orderBy: { date: 'desc' }
    });

    // Calculate totals
    const incomeTotal = await db.transaction.aggregate({
      where: { type: 'INCOME' },
      _sum: { amount: true }
    });

    const expenseTotal = await db.transaction.aggregate({
      where: { type: 'EXPENSE' },
      _sum: { amount: true }
    });

    // Get pending invoices
    const pendingInvoices = await db.invoice.count({
      where: { status: 'PENDING' }
    });

    const overdueInvoices = await db.invoice.count({
      where: { status: 'OVERDUE' }
    });

    return NextResponse.json({
      transactions,
      summary: {
        totalIncome: incomeTotal._sum.amount || 0,
        totalExpenses: expenseTotal._sum.amount || 0,
        netProfit: (incomeTotal._sum.amount || 0) - (expenseTotal._sum.amount || 0),
        pendingInvoices,
        overdueInvoices
      }
    });
  } catch (error) {
    console.error('Financial GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch financial data' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const transaction = await db.transaction.create({
      data: {
        type: body.type,
        category: body.category,
        description: body.description,
        amount: body.amount,
        date: new Date(body.date),
        reference: body.reference,
        notes: body.notes
      }
    });

    return NextResponse.json(transaction, { status: 201 });
  } catch (error) {
    console.error('Financial POST error:', error);
    return NextResponse.json(
      { error: 'Failed to create transaction' },
      { status: 500 }
    );
  }
}
