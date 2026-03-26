import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const status = searchParams.get('status');
    
    const where: any = {};
    if (category) where.category = category;
    if (status) where.status = status;

    const items = await db.inventoryItem.findMany({
      where,
      orderBy: { updatedAt: 'desc' }
    });

    // Get summary stats
    const stats = await db.inventoryItem.aggregate({
      _count: true,
      _sum: { unitPrice: true }
    });

    const lowStockCount = await db.inventoryItem.count({
      where: { status: 'LOW_STOCK' }
    });

    const outOfStockCount = await db.inventoryItem.count({
      where: { status: 'OUT_OF_STOCK' }
    });

    return NextResponse.json({
      items,
      stats: {
        totalItems: stats._count,
        totalValue: stats._sum.unitPrice || 0,
        lowStock: lowStockCount,
        outOfStock: outOfStockCount
      }
    });
  } catch (error) {
    console.error('Inventory GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch inventory' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const item = await db.inventoryItem.create({
      data: {
        name: body.name,
        category: body.category,
        description: body.description,
        quantity: body.quantity,
        unit: body.unit,
        reorderLevel: body.reorderLevel,
        unitPrice: body.unitPrice,
        location: body.location,
        supplier: body.supplier,
        status: body.status || 'IN_STOCK'
      }
    });

    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error('Inventory POST error:', error);
    return NextResponse.json(
      { error: 'Failed to create inventory item' },
      { status: 500 }
    );
  }
}
