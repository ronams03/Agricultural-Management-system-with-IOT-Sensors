import { db } from '../src/lib/db';

async function main() {
  console.log('🌱 Seeding database...');

  // Create Users
  const users = await Promise.all([
    db.user.create({
      data: {
        email: 'john@greenvalleyfarm.com',
        name: 'John Doe',
        role: 'FARM_OWNER',
        status: 'ACTIVE',
        phone: '+1-555-0100',
        timezone: 'America/Los_Angeles'
      }
    }),
    db.user.create({
      data: {
        email: 'sarah@greenvalleyfarm.com',
        name: 'Sarah Smith',
        role: 'FARM_MANAGER',
        status: 'ACTIVE',
        phone: '+1-555-0101',
        timezone: 'America/Los_Angeles'
      }
    }),
    db.user.create({
      data: {
        email: 'mike@greenvalleyfarm.com',
        name: 'Mike Johnson',
        role: 'AGRONOMIST',
        status: 'ACTIVE',
        phone: '+1-555-0102',
        timezone: 'America/Los_Angeles'
      }
    }),
    db.user.create({
      data: {
        email: 'emily@greenvalleyfarm.com',
        name: 'Emily Brown',
        role: 'LIVESTOCK_MANAGER',
        status: 'ACTIVE',
        phone: '+1-555-0103',
        timezone: 'America/Los_Angeles'
      }
    }),
    db.user.create({
      data: {
        email: 'tom@greenvalleyfarm.com',
        name: 'Tom Wilson',
        role: 'FIELD_WORKER',
        status: 'ACTIVE',
        phone: '+1-555-0104',
        timezone: 'America/Los_Angeles'
      }
    })
  ]);

  console.log(`✅ Created ${users.length} users`);

  // Create Farm
  const farm = await db.farm.create({
    data: {
      name: 'Green Valley Farm',
      description: 'A sustainable family farm specializing in organic crops and free-range livestock.',
      location: 'California, USA',
      totalArea: 500,
      latitude: 36.7783,
      longitude: -119.4179
    }
  });

  console.log(`✅ Created farm: ${farm.name}`);

  // Create Fields
  const fields = await Promise.all([
    db.field.create({
      data: {
        name: 'Field A-12',
        farmId: farm.id,
        area: 45,
        soilType: 'Loam',
        irrigationType: 'Drip',
        status: 'PLANTED'
      }
    }),
    db.field.create({
      data: {
        name: 'Field B-7',
        farmId: farm.id,
        area: 60,
        soilType: 'Clay Loam',
        irrigationType: 'Sprinkler',
        status: 'PLANTED'
      }
    }),
    db.field.create({
      data: {
        name: 'Field C-3',
        farmId: farm.id,
        area: 30,
        soilType: 'Sandy Loam',
        irrigationType: 'Flood',
        status: 'PLANTED'
      }
    }),
    db.field.create({
      data: {
        name: 'Pasture A',
        farmId: farm.id,
        area: 100,
        soilType: 'Grassland',
        irrigationType: 'Natural',
        status: 'AVAILABLE'
      }
    }),
    db.field.create({
      data: {
        name: 'Pasture B',
        farmId: farm.id,
        area: 80,
        soilType: 'Grassland',
        irrigationType: 'Natural',
        status: 'AVAILABLE'
      }
    })
  ]);

  console.log(`✅ Created ${fields.length} fields`);

  // Create Crops
  const crops = await Promise.all([
    db.crop.create({
      data: {
        name: 'Wheat',
        variety: 'Winter Wheat',
        fieldId: fields[0].id,
        plantedArea: 45,
        plantingDate: new Date('2024-03-15'),
        expectedHarvest: new Date('2024-07-20'),
        growthStage: 'FLOWERING',
        healthStatus: 95,
        yieldExpected: 2.4,
        status: 'ACTIVE'
      }
    }),
    db.crop.create({
      data: {
        name: 'Corn',
        variety: 'Sweet Corn Hybrid',
        fieldId: fields[1].id,
        plantedArea: 60,
        plantingDate: new Date('2024-04-01'),
        expectedHarvest: new Date('2024-08-15'),
        growthStage: 'VEGETATIVE',
        healthStatus: 88,
        yieldExpected: 3.1,
        status: 'ACTIVE'
      }
    }),
    db.crop.create({
      data: {
        name: 'Rice',
        variety: 'Jasmine Rice',
        fieldId: fields[2].id,
        plantedArea: 30,
        plantingDate: new Date('2024-03-20'),
        expectedHarvest: new Date('2024-09-01'),
        growthStage: 'VEGETATIVE',
        healthStatus: 92,
        yieldExpected: 2.8,
        status: 'ACTIVE'
      }
    })
  ]);

  console.log(`✅ Created ${crops.length} crops`);

  // Create Animals
  const animals = await Promise.all([
    db.animal.create({
      data: {
        tagNumber: 'CAT-001',
        name: 'Bessie',
        type: 'CATTLE',
        breed: 'Holstein',
        birthDate: new Date('2020-03-15'),
        gender: 'FEMALE',
        weight: 520,
        status: 'HEALTHY',
        location: 'Pasture A'
      }
    }),
    db.animal.create({
      data: {
        tagNumber: 'CAT-002',
        name: 'Duke',
        type: 'CATTLE',
        breed: 'Angus',
        birthDate: new Date('2019-06-20'),
        gender: 'MALE',
        weight: 680,
        status: 'HEALTHY',
        location: 'Pasture A'
      }
    }),
    db.animal.create({
      data: {
        tagNumber: 'SHP-001',
        name: 'Woolly',
        type: 'SHEEP',
        breed: 'Merino',
        birthDate: new Date('2022-02-10'),
        gender: 'FEMALE',
        weight: 65,
        status: 'PREGNANT',
        location: 'Pasture B'
      }
    }),
    db.animal.create({
      data: {
        tagNumber: 'GOT-001',
        name: 'Billy',
        type: 'GOAT',
        breed: 'Boer',
        birthDate: new Date('2023-04-05'),
        gender: 'MALE',
        weight: 45,
        status: 'HEALTHY',
        location: 'Pasture B'
      }
    })
  ]);

  console.log(`✅ Created ${animals.length} animals`);

  // Create Sensors
  const sensors = await Promise.all([
    db.sensor.create({
      data: {
        sensorId: 'SM-001',
        name: 'Soil Moisture Sensor A1',
        type: 'SOIL_MOISTURE',
        fieldId: fields[0].id,
        location: 'Field A-12 - North',
        batteryLevel: 85,
        status: 'ONLINE',
        lastReading: '45%',
        lastUpdate: new Date()
      }
    }),
    db.sensor.create({
      data: {
        sensorId: 'TMP-001',
        name: 'Temperature Sensor A1',
        type: 'TEMPERATURE',
        fieldId: fields[0].id,
        location: 'Field A-12 - Center',
        batteryLevel: 92,
        status: 'ONLINE',
        lastReading: '24°C',
        lastUpdate: new Date()
      }
    }),
    db.sensor.create({
      data: {
        sensorId: 'WS-001',
        name: 'Weather Station Main',
        type: 'WEATHER_STATION',
        location: 'Main Office',
        batteryLevel: 100,
        status: 'ONLINE',
        lastReading: '24°C / 65% RH',
        lastUpdate: new Date()
      }
    }),
    db.sensor.create({
      data: {
        sensorId: 'GPS-001',
        name: 'Cattle Tracker - Bessie',
        type: 'GPS_TRACKER',
        batteryLevel: 78,
        status: 'ONLINE',
        lastReading: 'Pasture A - Moving',
        lastUpdate: new Date()
      }
    })
  ]);

  console.log(`✅ Created ${sensors.length} sensors`);

  // Create Inventory Items
  const inventoryItems = await Promise.all([
    db.inventoryItem.create({
      data: {
        name: 'Wheat Seeds (Premium)',
        category: 'SEEDS',
        quantity: 450,
        unit: 'kg',
        reorderLevel: 200,
        unitPrice: 5.20,
        location: 'Warehouse A',
        supplier: 'AgriSupply Co.',
        status: 'IN_STOCK'
      }
    }),
    db.inventoryItem.create({
      data: {
        name: 'NPK Fertilizer 20-20-20',
        category: 'FERTILIZER',
        quantity: 85,
        unit: 'bags',
        reorderLevel: 100,
        unitPrice: 15.00,
        location: 'Warehouse B',
        supplier: 'FarmChem Ltd.',
        status: 'LOW_STOCK'
      }
    }),
    db.inventoryItem.create({
      data: {
        name: 'Diesel Fuel',
        category: 'FUEL',
        quantity: 2500,
        unit: 'liters',
        reorderLevel: 1000,
        unitPrice: 1.50,
        location: 'Fuel Station',
        supplier: 'Local Fuel Co.',
        status: 'IN_STOCK'
      }
    }),
    db.inventoryItem.create({
      data: {
        name: 'Pesticide A',
        category: 'PESTICIDE',
        quantity: 45,
        unit: 'liters',
        reorderLevel: 50,
        unitPrice: 20.00,
        location: 'Warehouse C',
        supplier: 'CropProtect Inc.',
        status: 'LOW_STOCK'
      }
    })
  ]);

  console.log(`✅ Created ${inventoryItems.length} inventory items`);

  // Create Transactions
  const transactions = await Promise.all([
    db.transaction.create({
      data: {
        type: 'INCOME',
        category: 'Crop Sales',
        description: 'Wheat sale - Batch #A12',
        amount: 15400,
        date: new Date()
      }
    }),
    db.transaction.create({
      data: {
        type: 'EXPENSE',
        category: 'Supplies',
        description: 'Fertilizer purchase',
        amount: 2800,
        date: new Date(Date.now() - 86400000)
      }
    }),
    db.transaction.create({
      data: {
        type: 'INCOME',
        category: 'Livestock Sales',
        description: 'Livestock sale',
        amount: 8200,
        date: new Date(Date.now() - 172800000)
      }
    })
  ]);

  console.log(`✅ Created ${transactions.length} transactions`);

  // Create Tasks
  const tasks = await Promise.all([
    db.task.create({
      data: {
        title: 'Irrigate Field A-12',
        description: 'Complete irrigation cycle for wheat field',
        assignedTo: users[4].id,
        dueDate: new Date(Date.now() + 86400000),
        priority: 'HIGH',
        status: 'PENDING'
      }
    }),
    db.task.create({
      data: {
        title: 'Health check - Cattle',
        description: 'Routine health checkup for cattle herd',
        assignedTo: users[3].id,
        dueDate: new Date(Date.now() + 172800000),
        priority: 'MEDIUM',
        status: 'PENDING'
      }
    }),
    db.task.create({
      data: {
        title: 'Soil sampling Field B-7',
        description: 'Collect soil samples for nutrient analysis',
        assignedTo: users[2].id,
        dueDate: new Date(Date.now() + 259200000),
        priority: 'MEDIUM',
        status: 'PENDING'
      }
    })
  ]);

  console.log(`✅ Created ${tasks.length} tasks`);

  console.log('\n🎉 Database seeding completed!');
  console.log('\nSummary:');
  console.log(`- ${users.length} users`);
  console.log(`- 1 farm (${farm.name})`);
  console.log(`- ${fields.length} fields`);
  console.log(`- ${crops.length} crops`);
  console.log(`- ${animals.length} animals`);
  console.log(`- ${sensors.length} sensors`);
  console.log(`- ${inventoryItems.length} inventory items`);
  console.log(`- ${transactions.length} transactions`);
  console.log(`- ${tasks.length} tasks`);
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
