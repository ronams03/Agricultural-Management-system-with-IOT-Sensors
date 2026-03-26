import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const fieldId = searchParams.get('fieldId');
    
    const where: any = {};
    if (status) where.status = status;
    if (fieldId) where.fieldId = fieldId;

    const crops = await db.crop.findMany({
      where,
      include: {
        field: {
          include: {
            farm: true
          }
        },
        treatments: {
          take: 5,
          orderBy: { appliedAt: 'desc' }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(crops);
  } catch (error) {
    console.error('Crops GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch crops' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const crop = await db.crop.create({
      data: {
        name: body.name,
        variety: body.variety,
        fieldId: body.fieldId,
        plantedArea: body.plantedArea,
        plantingDate: new Date(body.plantingDate),
        expectedHarvest: body.expectedHarvest ? new Date(body.expectedHarvest) : null,
        growthStage: body.growthStage || 'GERMINATION',
        healthStatus: body.healthStatus || 90,
        yieldExpected: body.yieldExpected,
        notes: body.notes
      }
    });

    return NextResponse.json(crop, { status: 201 });
  } catch (error) {
    console.error('Crops POST error:', error);
    return NextResponse.json(
      { error: 'Failed to create crop' },
      { status: 500 }
    );
  }
}
