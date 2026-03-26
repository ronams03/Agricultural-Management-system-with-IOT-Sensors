'use client';

import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
} from 'recharts';
import { cn } from '@/lib/utils';

interface ChartContainerProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}

export function ChartContainer({ title, subtitle, children, className, action }: ChartContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn('chart-container', className)}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-[14px] font-semibold text-white">{title}</h3>
          {subtitle && (
            <p className="text-[12px] text-[rgba(255,255,255,0.5)] mt-0.5">{subtitle}</p>
          )}
        </div>
        {action}
      </div>
      {children}
    </motion.div>
  );
}

const revenueData = [
  { month: 'Jan', revenue: 45000, expenses: 32000 },
  { month: 'Feb', revenue: 52000, expenses: 35000 },
  { month: 'Mar', revenue: 48000, expenses: 30000 },
  { month: 'Apr', revenue: 61000, expenses: 38000 },
  { month: 'May', revenue: 55000, expenses: 33000 },
  { month: 'Jun', revenue: 67000, expenses: 40000 },
  { month: 'Jul', revenue: 72000, expenses: 42000 },
];

export function RevenueChart({ className }: { className?: string }) {
  return (
    <ChartContainer
      title="Revenue Trend"
      subtitle="Monthly revenue vs expenses"
      className={className}
    >
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis
              dataKey="month"
              stroke="rgba(255,255,255,0.4)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="rgba(255,255,255,0.4)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                background: 'rgba(30, 41, 59, 0.95)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                fontSize: '12px',
              }}
              labelStyle={{ color: 'rgba(255,255,255,0.7)' }}
              itemStyle={{ color: 'white' }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#10B981"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              name="Revenue"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="#F59E0B"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorExpenses)"
              name="Expenses"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#10B981]" />
          <span className="text-[11px] text-[rgba(255,255,255,0.6)]">Revenue</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
          <span className="text-[11px] text-[rgba(255,255,255,0.6)]">Expenses</span>
        </div>
      </div>
    </ChartContainer>
  );
}

const cropYieldData = [
  { crop: 'Wheat', yield: 4500, target: 4200 },
  { crop: 'Corn', yield: 5200, target: 5000 },
  { crop: 'Rice', yield: 3800, target: 4000 },
  { crop: 'Soybean', yield: 2900, target: 3000 },
  { crop: 'Barley', yield: 2100, target: 2000 },
];

export function CropYieldChart({ className }: { className?: string }) {
  return (
    <ChartContainer
      title="Crop Yield Comparison"
      subtitle="Actual vs Target yield (tons)"
      className={className}
    >
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={cropYieldData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
            <XAxis
              type="number"
              stroke="rgba(255,255,255,0.4)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              type="category"
              dataKey="crop"
              stroke="rgba(255,255,255,0.4)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              width={70}
            />
            <Tooltip
              contentStyle={{
                background: 'rgba(30, 41, 59, 0.95)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                fontSize: '12px',
              }}
              formatter={(value: number) => [`${value} tons`, '']}
            />
            <Bar dataKey="yield" fill="#10B981" radius={[0, 4, 4, 0]} name="Actual" />
            <Bar dataKey="target" fill="rgba(255,255,255,0.1)" radius={[0, 4, 4, 0]} name="Target" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartContainer>
  );
}

const resourceData = [
  { name: 'Water', value: 35, color: '#3B82F6' },
  { name: 'Fertilizer', value: 25, color: '#10B981' },
  { name: 'Seeds', value: 20, color: '#F59E0B' },
  { name: 'Labor', value: 15, color: '#8B5CF6' },
  { name: 'Equipment', value: 5, color: '#EC4899' },
];

export function ResourceUsageChart({ className }: { className?: string }) {
  return (
    <ChartContainer
      title="Resource Usage"
      subtitle="Distribution by category"
      className={className}
    >
      <div className="h-[220px] flex items-center">
        <ResponsiveContainer width="50%" height="100%">
          <PieChart>
            <Pie
              data={resourceData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {resourceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: 'rgba(30, 41, 59, 0.95)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                fontSize: '12px',
              }}
              formatter={(value: number) => [`${value}%`, '']}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex-1 space-y-2">
          {resourceData.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-[12px] text-[rgba(255,255,255,0.6)]">{item.name}</span>
              <span className="text-[12px] font-medium text-white ml-auto">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </ChartContainer>
  );
}

const livestockData = [
  { month: 'Jan', cattle: 245, sheep: 180, poultry: 520 },
  { month: 'Feb', cattle: 250, sheep: 185, poultry: 540 },
  { month: 'Mar', cattle: 248, sheep: 190, poultry: 560 },
  { month: 'Apr', cattle: 255, sheep: 188, poultry: 580 },
  { month: 'May', cattle: 260, sheep: 195, poultry: 600 },
  { month: 'Jun', cattle: 258, sheep: 200, poultry: 620 },
];

export function LivestockChart({ className }: { className?: string }) {
  return (
    <ChartContainer
      title="Livestock Population"
      subtitle="Monthly headcount trend"
      className={className}
    >
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={livestockData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis
              dataKey="month"
              stroke="rgba(255,255,255,0.4)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="rgba(255,255,255,0.4)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                background: 'rgba(30, 41, 59, 0.95)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                fontSize: '12px',
              }}
            />
            <Line
              type="monotone"
              dataKey="cattle"
              stroke="#10B981"
              strokeWidth={2}
              dot={false}
              name="Cattle"
            />
            <Line
              type="monotone"
              dataKey="sheep"
              stroke="#F59E0B"
              strokeWidth={2}
              dot={false}
              name="Sheep"
            />
            <Line
              type="monotone"
              dataKey="poultry"
              stroke="#8B5CF6"
              strokeWidth={2}
              dot={false}
              name="Poultry"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-6 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#10B981]" />
          <span className="text-[11px] text-[rgba(255,255,255,0.6)]">Cattle</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
          <span className="text-[11px] text-[rgba(255,255,255,0.6)]">Sheep</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#8B5CF6]" />
          <span className="text-[11px] text-[rgba(255,255,255,0.6)]">Poultry</span>
        </div>
      </div>
    </ChartContainer>
  );
}
