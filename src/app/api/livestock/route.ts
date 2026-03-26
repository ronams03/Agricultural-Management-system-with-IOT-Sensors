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

    const animals = await db.animal.findMany({
      where,
      include: {
        healthRecords: {
          take: 3,
          orderBy: { checkupDate: 'desc' }
        },
        productionRecords: {
          take: 5,
          orderBy: { date: 'desc' }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(animals);
  } catch (error) {
    console.error('Livestock GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch animals' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const animal = await db.animal.create({
      data: {
        tagNumber: body.tagNumber,
        name: body.name,
        type: body.type,
        breed: body.breed,
        birthDate: body.birthDate ? new Date(body.birthDate) : null,
        gender: body.gender,
        weight: body.weight,
        status: body.status || 'HEALTHY',
        location: body.location,
        notes: body.notes
      }
    });

    return NextResponse.json(animal, { status: 201 });
  } catch (error) {
    console.error('Livestock POST error:', error);
    return NextResponse.json(
      { error: 'Failed to create animal record' },
      { status: 500 }
    );
  }
}
