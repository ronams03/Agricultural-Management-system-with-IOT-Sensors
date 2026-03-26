'use client';

import { motion } from 'framer-motion';
import { 
  Plus, 
  Filter, 
  Download,
  Sprout,
  Droplets,
  Thermometer,
  Calendar,
  MapPin,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  MoreHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const cropStats = [
  { label: 'Total Fields', value: '24', icon: MapPin, color: '#10B981' },
  { label: 'Active Crops', value: '18', icon: Sprout, color: '#3B82F6' },
  { label: 'Avg Health', value: '92%', icon: CheckCircle, color: '#22C55E' },
  { label: 'Alerts', value: '3', icon: AlertTriangle, color: '#F59E0B' },
];

const crops = [
  { id: 1, name: 'Wheat', field: 'A-12', area: '45 acres', planted: '2024-03-15', stage: 'Flowering', health: 95, irrigation: 'Active', yield: 'Expected: 2.4 tons/acre' },
  { id: 2, name: 'Corn', field: 'B-7', area: '60 acres', planted: '2024-04-01', stage: 'Vegetative', health: 88, irrigation: 'Scheduled', yield: 'Expected: 3.1 tons/acre' },
  { id: 3, name: 'Rice', field: 'C-3', area: '30 acres', planted: '2024-03-20', stage: 'Tillering', health: 92, irrigation: 'Active', yield: 'Expected: 2.8 tons/acre' },
  { id: 4, name: 'Soybean', field: 'D-1', area: '25 acres', planted: '2024-04-10', stage: 'Germination', health: 78, irrigation: 'Pending', yield: 'Expected: 1.9 tons/acre' },
  { id: 5, name: 'Barley', field: 'A-8', area: '35 acres', planted: '2024-02-28', stage: 'Maturation', health: 96, irrigation: 'Complete', yield: 'Expected: 2.2 tons/acre' },
  { id: 6, name: 'Potato', field: 'E-2', area: '20 acres', planted: '2024-04-05', stage: 'Tuber Formation', health: 85, irrigation: 'Active', yield: 'Expected: 18 tons/acre' },
];

const growthStages = [
  { stage: 'Germination', crops: 4, color: '#22C55E' },
  { stage: 'Vegetative', crops: 6, color: '#3B82F6' },
  { stage: 'Flowering', crops: 3, color: '#F59E0B' },
  { stage: 'Maturation', crops: 5, color: '#8B5CF6' },
];

export function CropsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-[18px] font-bold text-white">Crop Management</h1>
          <p className="text-[13px] text-[rgba(255,255,255,0.5)] mt-1">Monitor and manage all your crop activities</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="btn-secondary h-9 text-[13px]">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="btn-primary h-9 text-[13px]">
            <Plus className="w-4 h-4 mr-2" />
            Add Crop
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cropStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-4 flex items-center gap-3"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${stat.color}20` }}
            >
              <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
            </div>
            <div>
              <p className="text-[11px] text-[rgba(255,255,255,0.5)]">{stat.label}</p>
              <p className="text-[18px] font-bold text-white">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Growth Stage Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-5"
      >
        <h3 className="text-[14px] font-semibold text-white mb-4">Growth Stage Distribution</h3>
        <div className="flex items-center gap-4">
          {growthStages.map((stage) => (
            <div key={stage.stage} className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[12px] text-[rgba(255,255,255,0.6)]">{stage.stage}</span>
                <span className="text-[12px] font-medium text-white">{stage.crops}</span>
              </div>
              <div className="h-2 rounded-full bg-[rgba(255,255,255,0.1)] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(stage.crops / 18) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: stage.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Input placeholder="Search crops..." className="input-glass h-9 text-[13px] pl-9" />
        </div>
        <Button variant="secondary" className="btn-secondary h-9 text-[13px]">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Crops Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {crops.map((crop, index) => (
          <motion.div
            key={crop.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-card p-5 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-emerald flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-white">{crop.name}</h4>
                  <p className="text-[12px] text-[rgba(255,255,255,0.5)]">Field {crop.field} • {crop.area}</p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-[rgba(255,255,255,0.08)]">
                    <MoreHorizontal className="w-4 h-4 text-[rgba(255,255,255,0.5)]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="dropdown-glass">
                  <DropdownMenuItem className="dropdown-item">View Details</DropdownMenuItem>
                  <DropdownMenuItem className="dropdown-item">Edit Crop</DropdownMenuItem>
                  <DropdownMenuItem className="dropdown-item">Irrigation Schedule</DropdownMenuItem>
                  <DropdownMenuItem className="dropdown-item text-[#EF4444]">Remove</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="space-y-3">
              {/* Health */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[12px] text-[rgba(255,255,255,0.5)]">Health Status</span>
                  <span className="text-[12px] font-medium text-white">{crop.health}%</span>
                </div>
                <Progress value={crop.health} className="h-1.5 bg-[rgba(255,255,255,0.1)]" />
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[rgba(255,255,255,0.03)]">
                  <Clock className="w-3.5 h-3.5 text-[rgba(255,255,255,0.4)]" />
                  <div>
                    <p className="text-[10px] text-[rgba(255,255,255,0.4)]">Stage</p>
                    <p className="text-[11px] font-medium text-white">{crop.stage}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[rgba(255,255,255,0.03)]">
                  <Droplets className="w-3.5 h-3.5 text-[rgba(255,255,255,0.4)]" />
                  <div>
                    <p className="text-[10px] text-[rgba(255,255,255,0.4)]">Irrigation</p>
                    <p className="text-[11px] font-medium text-white">{crop.irrigation}</p>
                  </div>
                </div>
              </div>

              {/* Yield */}
              <div className="pt-2 border-t border-[rgba(255,255,255,0.06)]">
                <p className="text-[11px] text-[rgba(255,255,255,0.5)]">{crop.yield}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
