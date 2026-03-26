import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type');
    const assignedTo = searchParams.get('assignedTo');
    
    const where: any = {};
    if (type) where.type = type;
    if (assignedTo) where.assignedTo = assignedTo;

    const tasks = await db.task.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true
          }
        }
      },
      orderBy: { dueDate: 'asc' }
    });

    // Get stats
    const pendingCount = await db.task.count({
      where: { status: 'PENDING' }
    });

    const inProgressCount = await db.task.count({
      where: { status: 'IN_PROGRESS' }
    });

    const completedCount = await db.task.count({
      where: { status: 'COMPLETED' }
    });

    const urgentCount = await db.task.count({
      where: { 
        priority: 'URGENT',
        status: { in: ['PENDING', 'IN_PROGRESS'] }
      }
    });

    return NextResponse.json({
      tasks,
      stats: {
        total: tasks.length,
        pending: pendingCount,
        inProgress: inProgressCount,
        completed: completedCount,
        urgent: urgentCount
      }
    });
  } catch (error) {
    console.error('Tasks GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tasks' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const task = await db.task.create({
      data: {
        title: body.title,
        description: body.description,
        assignedTo: body.assignedTo,
        dueDate: new Date(body.dueDate),
        priority: body.priority || 'MEDIUM',
        status: body.status || 'PENDING'
      }
    });

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    console.error('Tasks POST error:', error);
    return NextResponse.json(
      { error: 'Failed to create task' },
      { status: 500 }
    );
  }
}
