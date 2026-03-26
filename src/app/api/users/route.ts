import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const role = searchParams.get('role');
    const status = searchParams.get('status');
    
    const where: any = {};
    if (role) where.role = role;
    if (status) where.status = status;

    const users = await db.user.findMany({
      where,
      include: {
        tasks: {
          where: { status: { in: ['PENDING', 'IN_PROGRESS'] } },
          take: 5
        },
        activities: {
          take: 5,
          orderBy: { createdAt: 'desc' }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    // Get stats
    const activeCount = await db.user.count({
      where: { status: 'ACTIVE' }
    });

    const pendingCount = await db.user.count({
      where: { status: 'PENDING' }
    });

    return NextResponse.json({
      users,
      stats: {
        total: users.length,
        active: activeCount,
        pending: pendingCount
      }
    });
  } catch (error) {
    console.error('Users GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const user = await db.user.create({
      data: {
        email: body.email,
        name: body.name,
        avatar: body.avatar,
        role: body.role || 'FIELD_WORKER',
        phone: body.phone,
        timezone: body.timezone || 'UTC'
      }
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error('Users POST error:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
