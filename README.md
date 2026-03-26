# Agricultural Wonders Management System

A comprehensive, modern farm management application built with Next.js 16, featuring a beautiful glass morphism UI design with dark theme and emerald accent colors.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC)
![Prisma](https://img.shields.io/badge/Prisma-6.11.1-2D3748)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [User Roles & Permissions](#user-roles--permissions)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [UI Components](#ui-components)
- [Design System](#design-system)

---

## Overview

Agricultural Wonders Management System is a comprehensive farm management platform designed to help farmers, agronomists, and farm managers efficiently manage all aspects of their agricultural operations. The system features a modern, responsive UI with glass morphism effects, real-time data visualization, and role-based access control.

### Key Highlights

- **Glass Morphism Design**: Beautiful frosted glass effects with backdrop blur
- **Dark Theme**: Modern dark interface with emerald (#10B981) accents
- **Responsive Layout**: Fully responsive design for desktop, tablet, and mobile
- **Collapsible Sidebar**: 280px → 72px animated sidebar with smooth transitions
- **Real-time Data**: Interactive charts and live data updates
- **Role-based Access**: 9 distinct user roles with granular permissions

---

## Features

### 1. Dashboard
The central hub providing an overview of all farm operations.

**Features:**
- Welcome banner with personalized greeting
- Key statistics cards (Revenue, Active Crops, Livestock Count, Pending Tasks)
- Revenue trend charts with interactive tooltips
- Weather widget with current conditions and 5-day forecast
- Activity timeline showing recent farm activities
- Quick action buttons for common tasks
- Alert notifications panel
- Mini stats for growth rate, inventory, workers, and fields

**Components:**
- `StatCard` - Animated statistics cards with trend indicators
- `RevenueChart` - Area chart for revenue trends
- `CropYieldChart` - Bar chart for crop yield comparison
- `ResourceUsageChart` - Radial chart for resource monitoring
- `LivestockChart` - Bar chart for livestock distribution
- `WeatherWidget` - Weather display with icons and forecasts
- `ActivityTimeline` - Scrollable activity feed
- `QuickActionsPanel` - Quick action buttons grid
- `AlertsPanel` - Priority alerts list

---

### 2. Crop Management
Comprehensive crop tracking and management system.

**Features:**
- Crop inventory with planting details
- Growth stage tracking (Germination → Harvest Ready)
- Health status monitoring (0-100 scale)
- Treatment history and scheduling
- Harvest records and yield tracking
- Field assignment and area management
- Variety and expected yield calculations

**Data Tracked:**
- Crop name and variety
- Field assignment and planted area
- Planting date and expected harvest
- Growth stage progression
- Health status percentage
- Expected vs actual yield
- Treatment applications (fertilizer, pesticide, irrigation)
- Harvest records with quality ratings

---

### 3. Livestock Management
Complete animal tracking and health management.

**Features:**
- Individual animal profiles with unique tag numbers
- Health records and vaccination tracking
- Production records (milk, eggs, wool, etc.)
- Breeding and lineage tracking
- Weight monitoring
- Location assignment
- Status tracking (Healthy, Sick, Pregnant, Quarantine, Sold, Deceased)

**Animal Types Supported:**
- Cattle
- Sheep
- Goats
- Poultry
- Pigs
- Horses
- Other

**Data Tracked:**
- Tag number and name
- Type, breed, and gender
- Birth date and weight
- Health status and records
- Production records with quantities
- Parent lineage (mother/father IDs)
- Current location

---

### 4. Inventory & Equipment
Stock management and equipment tracking system.

**Features:**
- Real-time inventory levels
- Low stock alerts and reorder notifications
- Purchase order management
- Supplier tracking
- Equipment maintenance scheduling
- Category-based organization

**Inventory Categories:**
- Seeds
- Fertilizers
- Pesticides
- Equipment
- Fuel
- Tools
- Feed
- Other

**Stock Status:**
- In Stock
- Low Stock (with warning badge)
- Out of Stock (with alert)
- Discontinued

**Purchase Order Status:**
- Pending
- Approved
- Shipped
- Delivered
- Cancelled

---

### 5. Weather Center
Weather monitoring and forecasting integration.

**Features:**
- Current weather conditions
- 7-day weather forecast
- Temperature, humidity, wind readings
- Precipitation tracking
- UV index monitoring
- Weather alerts and warnings
- Historical weather data

**Data Points:**
- Temperature (°C/°F)
- Humidity percentage
- Wind speed and direction
- Precipitation amount
- Atmospheric pressure
- UV index
- Weather condition (sunny, cloudy, rainy, etc.)

---

### 6. Financial Hub
Complete financial management and reporting.

**Features:**
- Income and expense tracking
- Invoice generation and management
- Financial reports and analytics
- Budget planning tools
- Payment status monitoring
- Multi-currency support

**Transaction Types:**
- Income
- Expense

**Invoice Status:**
- Pending
- Paid
- Overdue
- Cancelled

**Reports Available:**
- Revenue trends
- Expense breakdown
- Profit/Loss statements
- Cash flow analysis

---

### 7. Reports & Analytics
Comprehensive reporting and data analysis tools.

**Features:**
- Custom report generation
- Export to PDF/Excel
- Scheduled automatic reports
- Data visualization dashboards
- Trend analysis
- Comparative reports

**Report Types:**
- Crop yield reports
- Livestock production reports
- Financial summaries
- Inventory status reports
- Weather impact analysis
- Task completion reports

---

### 8. IoT & Sensors
Smart farm sensor integration and monitoring.

**Features:**
- Real-time sensor data display
- Sensor health monitoring
- Battery level tracking
- Alert configuration
- Historical data charts
- Field mapping integration

**Sensor Types Supported:**
- Soil Moisture
- Temperature
- Humidity
- pH Level
- Weather Station
- GPS Tracker
- Water Level
- Other

**Sensor Status:**
- Online
- Offline
- Maintenance
- Low Battery

---

### 9. Marketplace (Coming Soon)
Buy and sell agricultural products.

**Planned Features:**
- Product listings
- Supplier network
- Contract management
- Price comparisons
- Order management

---

### 10. User Management
User administration and role management.

**Features:**
- User creation and editing
- Role assignment
- Permission management
- Activity logging
- Status management (Active, Inactive, Pending)
- Bulk user operations

**User Status:**
- Active
- Inactive
- Pending

**Management Features:**
- Add/Edit/Delete users
- Role-based filtering
- Activity log viewing
- Password reset
- User profile management

---

### 11. Settings
Application configuration and preferences.

**Setting Categories:**

#### General Settings
- Farm profile (name, location, area)
- Timezone configuration
- Units & measurements (temperature, area)

#### Notification Settings
- Email notifications (weather alerts, task reminders, inventory alerts, financial reports, system updates)
- Push notifications (critical alerts, daily summary)

#### Security Settings
- Password management
- Two-factor authentication (2FA)
- Active session management

#### Appearance Settings
- Theme selection (Dark, Light, System)
- Accent color customization
- Sidebar preferences

#### Integrations
- Weather API connection (OpenWeather)
- Payment gateway (Stripe)
- Map service (Google Maps)
- SMS service (Twilio)

#### Data & Backup
- Automatic backup configuration
- Data export/import
- Storage usage monitoring

---

## User Roles & Permissions

The system implements 9 distinct user roles with hierarchical permissions:

### 1. Super Admin
**Access Level:** Full system access
- Complete control over all features
- User management and role assignment
- System configuration and settings
- All data access and modification
- API key management
- Audit log access

### 2. Farm Owner
**Access Level:** Full farm access
- All farm operations management
- Financial reports and dashboards
- User management (except Super Admins)
- Settings configuration
- All data access for their farm

### 3. Farm Manager
**Access Level:** Operations management
- Crop and livestock management
- Inventory management
- Task assignment and tracking
- Report generation
- Staff scheduling
- Limited financial access

### 4. Agronomist
**Access Level:** Crop-focused access
- Crop management and monitoring
- Treatment planning and recording
- Soil and field analysis
- Growth stage tracking
- Harvest planning
- Weather data access
- Report generation (crop-related)

### 5. Livestock Manager
**Access Level:** Animal management
- Animal profile management
- Health record management
- Production tracking
- Breeding records
- Feed management
- Report generation (livestock-related)

### 6. Field Worker
**Access Level:** Task execution
- View assigned tasks
- Update task status
- Record daily activities
- View crop information
- Report issues
- Limited inventory access

### 7. Inventory Manager
**Access Level:** Stock management
- Inventory tracking and updates
- Purchase order management
- Supplier coordination
- Stock alerts management
- Equipment maintenance scheduling
- Report generation (inventory-related)

### 8. Financial Analyst
**Access Level:** Financial data access
- Financial reports and dashboards
- Transaction recording
- Invoice management
- Budget planning
- Financial forecasting
- Export financial data

### 9. Viewer
**Access Level:** Read-only access
- View dashboard
- View reports (read-only)
- View crop and livestock data
- View weather information
- No modification permissions

---

## Technology Stack

### Frontend
- **Framework:** Next.js 16.1.1 with App Router
- **Language:** TypeScript 5.0
- **Styling:** Tailwind CSS 4.0
- **UI Components:** shadcn/ui (New York style)
- **Icons:** Lucide React
- **Animations:** Framer Motion 12.x
- **Charts:** Recharts 2.15
- **State Management:** Zustand 5.0
- **Forms:** React Hook Form with Zod validation

### Backend
- **Runtime:** Node.js (via Bun)
- **Database:** SQLite with Prisma ORM 6.11
- **API:** Next.js API Routes (REST)
- **Authentication:** NextAuth.js v4 (configured)

### Development Tools
- **Package Manager:** Bun
- **Linting:** ESLint 9
- **PostCSS:** @tailwindcss/postcss

---

## Installation

### Prerequisites
- Node.js 18+ or Bun runtime
- SQLite3

### Setup Steps

```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.example .env

# Initialize database
bun run db:push

# (Optional) Seed sample data
bun run db:seed

# Start development server
bun run dev
```

### Environment Variables

```env
DATABASE_URL="file:./db/custom.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main page with module routing
│   ├── globals.css         # Global styles and glass morphism
│   └── api/                # API routes
│       ├── route.ts        # Base API
│       ├── dashboard/      # Dashboard data endpoint
│       ├── crops/          # Crops CRUD operations
│       ├── livestock/      # Livestock CRUD operations
│       ├── inventory/      # Inventory CRUD operations
│       ├── sensors/        # IoT sensors endpoints
│       ├── financial/      # Financial data endpoints
│       ├── users/          # User management endpoints
│       └── tasks/          # Task management endpoints
│
├── components/
│   ├── layout/
│   │   ├── app-layout.tsx  # Main layout wrapper
│   │   ├── app-header.tsx  # Header with notifications/profile
│   │   └── app-sidebar.tsx # Collapsible navigation sidebar
│   │
│   ├── dashboard/
│   │   ├── dashboard-page.tsx
│   │   ├── stat-card.tsx
│   │   ├── charts.tsx
│   │   ├── weather-widget.tsx
│   │   ├── activity-timeline.tsx
│   │   └── quick-actions.tsx
│   │
│   ├── crops/
│   │   └── crops-page.tsx
│   │
│   ├── livestock/
│   │   └── livestock-page.tsx
│   │
│   ├── inventory/
│   │   └── inventory-page.tsx
│   │
│   ├── weather/
│   │   └── weather-page.tsx
│   │
│   ├── financial/
│   │   └── financial-page.tsx
│   │
│   ├── reports/
│   │   └── reports-page.tsx
│   │
│   ├── iot/
│   │   └── iot-page.tsx
│   │
│   ├── users/
│   │   └── users-page.tsx
│   │
│   ├── settings/
│   │   └── settings-page.tsx
│   │
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── switch.tsx
│       ├── select.tsx
│       ├── tabs.tsx
│       ├── table.tsx
│       └── ... (40+ components)
│
├── stores/
│   ├── navigation-store.ts  # Current module state
│   └── sidebar-store.ts     # Sidebar collapse state
│
├── hooks/
│   ├── use-toast.ts         # Toast notifications
│   └── use-mobile.ts        # Mobile detection
│
└── lib/
    ├── utils.ts             # Utility functions
    └── db.ts                # Prisma client instance

prisma/
├── schema.prisma            # Database schema
└── seed.ts                  # Sample data seeder
```

---

## API Endpoints

### Dashboard
- `GET /api/dashboard` - Get dashboard statistics

### Crops
- `GET /api/crops` - List all crops
- `POST /api/crops` - Create new crop
- `PUT /api/crops` - Update crop
- `DELETE /api/crops` - Delete crop

### Livestock
- `GET /api/livestock` - List all animals
- `POST /api/livestock` - Add new animal
- `PUT /api/livestock` - Update animal
- `DELETE /api/livestock` - Remove animal

### Inventory
- `GET /api/inventory` - List inventory items
- `POST /api/inventory` - Add inventory item
- `PUT /api/inventory` - Update inventory
- `DELETE /api/inventory` - Remove item

### Sensors
- `GET /api/sensors` - List all sensors
- `POST /api/sensors` - Register sensor
- `PUT /api/sensors` - Update sensor
- `DELETE /api/sensors` - Remove sensor

### Financial
- `GET /api/financial` - Get financial data
- `POST /api/financial` - Record transaction
- `PUT /api/financial` - Update transaction

### Users
- `GET /api/users` - List users
- `POST /api/users` - Create user
- `PUT /api/users` - Update user
- `DELETE /api/users` - Delete user

### Tasks
- `GET /api/tasks` - List tasks
- `POST /api/tasks` - Create task
- `PUT /api/tasks` - Update task
- `DELETE /api/tasks` - Delete task

---

## Database Schema

### Core Tables

| Table | Description |
|-------|-------------|
| `users` | User accounts and profiles |
| `farms` | Farm information |
| `fields` | Field subdivisions |
| `crops` | Crop records |
| `treatments` | Crop treatments |
| `harvest_records` | Harvest history |
| `animals` | Livestock records |
| `health_records` | Animal health history |
| `production_records` | Animal production data |
| `inventory_items` | Stock items |
| `purchase_orders` | Purchase orders |
| `sensors` | IoT sensor devices |
| `sensor_readings` | Sensor data points |
| `transactions` | Financial transactions |
| `invoices` | Invoice records |
| `tasks` | Task assignments |
| `activities` | Activity log |
| `notifications` | User notifications |
| `weather_data` | Weather records |
| `settings` | System settings |

### Enums

- **Role**: SUPER_ADMIN, FARM_OWNER, FARM_MANAGER, AGRONOMIST, LIVESTOCK_MANAGER, FIELD_WORKER, INVENTORY_MANAGER, FINANCIAL_ANALYST, VIEWER
- **UserStatus**: ACTIVE, INACTIVE, PENDING
- **FieldStatus**: AVAILABLE, PLANTED, FALLOW, MAINTENANCE
- **GrowthStage**: GERMINATION, VEGETATIVE, FLOWERING, MATURATION, HARVEST_READY
- **CropStatus**: ACTIVE, HARVESTED, FAILED, CANCELLED
- **AnimalType**: CATTLE, SHEEP, GOAT, POULTRY, PIG, HORSE, OTHER
- **Gender**: MALE, FEMALE
- **AnimalStatus**: HEALTHY, SICK, PREGNANT, QUARANTINE, SOLD, DECEASED
- **ItemCategory**: SEEDS, FERTILIZER, PESTICIDE, EQUIPMENT, FUEL, TOOLS, FEED, OTHER
- **ItemStatus**: IN_STOCK, LOW_STOCK, OUT_OF_STOCK, DISCONTINUED
- **SensorType**: SOIL_MOISTURE, TEMPERATURE, HUMIDITY, PH, WEATHER_STATION, GPS_TRACKER, WATER_LEVEL, OTHER
- **SensorStatus**: ONLINE, OFFLINE, MAINTENANCE, LOW_BATTERY
- **TransactionType**: INCOME, EXPENSE
- **InvoiceStatus**: PENDING, PAID, OVERDUE, CANCELLED
- **Priority**: LOW, MEDIUM, HIGH, URGENT
- **TaskStatus**: PENDING, IN_PROGRESS, COMPLETED, CANCELLED
- **NotificationType**: INFO, WARNING, ERROR, SUCCESS

---

## UI Components

### Available Components (shadcn/ui)

| Component | Description |
|-----------|-------------|
| `Button` | Primary, secondary, ghost, outline variants |
| `Input` | Text input with glass morphism styling |
| `Card` | Glass card container |
| `Badge` | Status and category badges |
| `Avatar` | User avatar with fallback |
| `Switch` | Toggle switches |
| `Select` | Dropdown select |
| `Tabs` | Tab navigation |
| `Dialog` | Modal dialogs |
| `DropdownMenu` | Context menus |
| `Progress` | Progress bars |
| `Slider` | Range sliders |
| `Checkbox` | Checkboxes |
| `RadioGroup` | Radio button groups |
| `Textarea` | Multi-line text input |
| `Tooltip` | Hover tooltips |
| `Toast` | Notification toasts |
| `Alert` | Alert messages |
| `Skeleton` | Loading placeholders |
| `ScrollArea` | Custom scrollbars |
| `Separator` | Dividers |
| `Accordion` | Collapsible sections |
| `Calendar` | Date picker |
| `Popover` | Popover containers |
| `Sheet` | Side panel sheets |
| `Drawer` | Mobile drawer |
| `Command` | Command palette |
| `Form` | Form components |
| `Table` | Data tables |
| `Chart` | Recharts wrapper |

---

## Design System

### Colors

```css
/* Primary */
--primary: #10B981 (Emerald)

/* Backgrounds */
--bg-dark: #0f172a
--bg-card: rgba(255, 255, 255, 0.05)
--bg-hover: rgba(255, 255, 255, 0.08)

/* Text */
--text-primary: #ffffff
--text-secondary: rgba(255, 255, 255, 0.7)
--text-muted: rgba(255, 255, 255, 0.5)

/* Status Colors */
--success: #22C55E
--warning: #F59E0B
--error: #EF4444
--info: #3B82F6
```

### Glass Morphism Effects

```css
/* Glass Card */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
}

/* Modal Content */
.modal-content {
  background: rgba(30, 41, 59, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}

/* Input Glass */
.input-glass {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
}
```

### Typography

- **Font Sizes**: 12px - 15px (body text), 18px - 20px (headings)
- **Font Weight**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Line Height**: tight for headings, normal for body

### Border Radius

- **Small**: 8px (buttons, inputs)
- **Medium**: 12px (cards, modals)
- **Large**: 16px (containers)
- **XL**: 20px (feature cards)
- **Full**: 9999px (badges, avatars)

### Animations

- **Transitions**: 200ms - 300ms with cubic-bezier(0.4, 0, 0.2, 1)
- **Hover Effects**: Scale 1.02 - 1.05, color transitions
- **Page Transitions**: Fade in/out with Y-axis movement
- **Sidebar**: Width transition 280px ↔ 72px

---

## Available Scripts

```bash
bun run dev        # Start development server (port 3000)
bun run build      # Build for production
bun run start      # Start production server
bun run lint       # Run ESLint
bun run db:push    # Push schema to database
bun run db:generate # Generate Prisma client
bun run db:migrate # Run migrations
bun run db:reset   # Reset database
```

---

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

---

## License

This project is proprietary and confidential.

---

## Support

For issues and feature requests, please contact the development team.
