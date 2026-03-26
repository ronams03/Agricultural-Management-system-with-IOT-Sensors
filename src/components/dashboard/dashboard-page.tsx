'use client';

import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Sprout, 
  Beef, 
  CheckSquare,
  TrendingUp,
  Package,
  Users,
  MapPin
} from 'lucide-react';
import { StatCard } from './stat-card';
import { WeatherWidget } from './weather-widget';
import { ActivityTimeline } from './activity-timeline';
import { RevenueChart, CropYieldChart, ResourceUsageChart, LivestockChart } from './charts';
import { QuickActionsPanel, AlertsPanel } from './quick-actions';

export function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#10B981]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="relative">
          <h1 className="text-[20px] font-bold text-white mb-1">
            Good Morning, John! 👋
          </h1>
          <p className="text-[13px] text-[rgba(255,255,255,0.6)]">
            Here's what's happening with your farm today. You have 8 tasks pending and 3 alerts requiring attention.
          </p>
        </div>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Revenue"
          value="$124,500"
          change={{ value: 12.5, type: 'up', label: 'vs last month' }}
          icon={DollarSign}
          iconBg="gradient-emerald"
        />
        <StatCard
          title="Active Crops"
          value="24"
          change={{ value: 3, type: 'up', label: 'new plantings' }}
          icon={Sprout}
          iconBg="gradient-blue"
          iconColor="text-white"
        />
        <StatCard
          title="Livestock Count"
          value="1,085"
          change={{ value: 2.3, type: 'up', label: 'growth rate' }}
          icon={Beef}
          iconBg="gradient-amber"
          iconColor="text-white"
        />
        <StatCard
          title="Pending Tasks"
          value="8"
          change={{ value: 15, type: 'down', label: 'completed today' }}
          icon={CheckSquare}
          iconBg="gradient-purple"
          iconColor="text-white"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          <RevenueChart />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CropYieldChart />
            <ResourceUsageChart />
          </div>
        </div>

        {/* Right Column - Weather & Activity */}
        <div className="space-y-6">
          <WeatherWidget />
          <ActivityTimeline />
        </div>
      </div>

      {/* Secondary Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Livestock Chart */}
        <div className="lg:col-span-2">
          <LivestockChart />
        </div>

        {/* Quick Actions & Alerts */}
        <div className="space-y-6">
          <QuickActionsPanel />
          <AlertsPanel />
        </div>
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <MiniStat icon={TrendingUp} label="Growth Rate" value="+8.2%" color="#10B981" />
        <MiniStat icon={Package} label="Inventory Items" value="156" color="#3B82F6" />
        <MiniStat icon={Users} label="Active Workers" value="24" color="#8B5CF6" />
        <MiniStat icon={MapPin} label="Total Fields" value="12" color="#F59E0B" />
      </motion.div>
    </div>
  );
}

function MiniStat({ 
  icon: Icon, 
  label, 
  value, 
  color 
}: { 
  icon: React.ElementType; 
  label: string; 
  value: string; 
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card p-4 flex items-center gap-3"
    >
      <div 
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <div>
        <p className="text-[11px] text-[rgba(255,255,255,0.5)]">{label}</p>
        <p className="text-[15px] font-bold text-white">{value}</p>
      </div>
    </motion.div>
  );
}
