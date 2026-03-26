import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type');
    const status = searchParams.get('status');
    
    const where: any = {};
    if (type) where.type = type;
    if (status) where.status = status;

    const sensors = await db.sensor.findMany({
      where,
      include: {
        field: true,
        readings: {
          take: 10,
          orderBy: { timestamp: 'desc' }
        }
      },
      orderBy: { updatedAt: 'desc' }
    });

    // Get stats
    const onlineCount = await db.sensor.count({
      where: { status: 'ONLINE' }
    });

    const lowBatteryCount = await db.sensor.count({
      where: { status: 'LOW_BATTERY' }
    });

    const offlineCount = await db.sensor.count({
      where: { status: 'OFFLINE' }
    });

    return NextResponse.json({
      sensors,
      stats: {
        total: sensors.length,
        online: onlineCount,
        lowBattery: lowBatteryCount,
        offline: offlineCount
      }
    });
  } catch (error) {
    console.error('Sensors GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch sensors' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const sensor = await db.sensor.create({
      data: {
        sensorId: body.sensorId,
        name: body.name,
        type: body.type,
        fieldId: body.fieldId,
        location: body.location,
        batteryLevel: body.batteryLevel || 100,
        status: body.status || 'ONLINE'
      }
    });

    return NextResponse.json(sensor, { status: 201 });
  } catch (error) {
    console.error('Sensors POST error:', error);
    return NextResponse.json(
      { error: 'Failed to create sensor' },
      { status: 500 }
    );
  }
}
