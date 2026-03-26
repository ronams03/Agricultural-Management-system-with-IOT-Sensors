import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    // Get counts from database
    const [
      userCount,
      cropCount,
      animalCount,
      inventoryCount,
      sensorCount,
      transactionCount
    ] = await Promise.all([
      db.user.count(),
      db.crop.count({ where: { status: 'ACTIVE' } }),
      db.animal.count({ where: { status: 'HEALTHY' } }),
      db.inventoryItem.count({ where: { status: 'IN_STOCK' } }),
      db.sensor.count({ where: { status: 'ONLINE' } }),
      db.transaction.count()
    ]);

    // Calculate revenue (mock data for now)
    const totalRevenue = await db.transaction.aggregate({
      where: { type: 'INCOME' },
      _sum: { amount: true }
    });

    const totalExpenses = await db.transaction.aggregate({
      where: { type: 'EXPENSE' },
      _sum: { amount: true }
    });

    return NextResponse.json({
      stats: {
        totalUsers: userCount,
        activeCrops: cropCount,
        healthyAnimals: animalCount,
        inventoryItems: inventoryCount,
        onlineSensors: sensorCount,
        totalTransactions: transactionCount,
        revenue: totalRevenue._sum.amount || 0,
        expenses: totalExpenses._sum.amount || 0,
        profit: (totalRevenue._sum.amount || 0) - (totalExpenses._sum.amount || 0)
      },
      recentActivity: [],
      alerts: []
    });
  } catch (error) {
    console.error('Dashboard API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}
