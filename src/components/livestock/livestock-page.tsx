'use client';

import { motion } from 'framer-motion';
import { 
  Plus, 
  Filter, 
  Download,
  Beef,
  Heart,
  Scale,
  Calendar,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Clock,
  MoreHorizontal,
  Egg,
  Milk
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
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const livestockStats = [
  { label: 'Total Animals', value: '1,085', icon: Beef, color: '#F59E0B' },
  { label: 'Healthy', value: '1,024', icon: Heart, color: '#22C55E' },
  { label: 'Avg Weight', value: '485 kg', icon: Scale, color: '#3B82F6' },
  { label: 'Health Alerts', value: '8', icon: AlertTriangle, color: '#EF4444' },
];

const herds = [
  { id: 1, type: 'Cattle', count: 245, avgWeight: '520 kg', health: 96, location: 'Pasture A', production: '2,450L milk/day' },
  { id: 2, type: 'Sheep', count: 380, avgWeight: '65 kg', health: 94, location: 'Pasture B', production: 'Wool ready in 2 months' },
  { id: 3, type: 'Poultry', count: 420, avgWeight: '2.5 kg', health: 91, location: 'Coop 1-3', production: '380 eggs/day' },
  { id: 4, type: 'Goats', count: 40, avgWeight: '45 kg', health: 98, location: 'Pasture C', production: '65L milk/day' },
];

const recentAnimals = [
  { id: 1, tag: 'CAT-245', type: 'Cattle', name: 'Bessie', status: 'Healthy', lastCheckup: '2 days ago' },
  { id: 2, tag: 'SHP-380', type: 'Sheep', name: 'Woolly', status: 'Pregnant', lastCheckup: '5 days ago' },
  { id: 3, tag: 'CAT-244', type: 'Cattle', name: 'Duke', status: 'Treatment', lastCheckup: '1 day ago' },
  { id: 4, tag: 'GOT-040', type: 'Goat', name: 'Billy', status: 'Healthy', lastCheckup: '3 days ago' },
];

export function LivestockPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-[18px] font-bold text-white">Livestock Management</h1>
          <p className="text-[13px] text-[rgba(255,255,255,0.5)] mt-1">Track and manage your animal herds</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="btn-secondary h-9 text-[13px]">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="btn-primary h-9 text-[13px]">
            <Plus className="w-4 h-4 mr-2" />
            Add Animal
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {livestockStats.map((stat, index) => (
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

      {/* Herds Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {herds.map((herd, index) => (
          <motion.div
            key={herd.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-card p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-amber flex items-center justify-center">
                <Beef className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-white">{herd.type}</h4>
                <p className="text-[12px] text-[rgba(255,255,255,0.5)]">{herd.count} animals</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-[rgba(255,255,255,0.5)]">Health Rate</span>
                <span className="text-[12px] font-medium text-[#22C55E]">{herd.health}%</span>
              </div>
              <Progress value={herd.health} className="h-1.5 bg-[rgba(255,255,255,0.1)]" />

              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="p-2 rounded-lg bg-[rgba(255,255,255,0.03)]">
                  <p className="text-[10px] text-[rgba(255,255,255,0.4)]">Avg Weight</p>
                  <p className="text-[11px] font-medium text-white">{herd.avgWeight}</p>
                </div>
                <div className="p-2 rounded-lg bg-[rgba(255,255,255,0.03)]">
                  <p className="text-[10px] text-[rgba(255,255,255,0.4)]">Location</p>
                  <p className="text-[11px] font-medium text-white">{herd.location}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-[rgba(255,255,255,0.06)]">
                <p className="text-[11px] text-[rgba(255,255,255,0.5)]">{herd.production}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Animals Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-5"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[14px] font-semibold text-white">Recent Animals</h3>
          <Button variant="ghost" className="text-[12px] text-[#10B981] hover:bg-[rgba(16,185,129,0.1)]">
            View All
          </Button>
        </div>

        <div className="table-glass rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Animal</th>
                <th className="text-left">Tag</th>
                <th className="text-left">Type</th>
                <th className="text-left">Status</th>
                <th className="text-left">Last Checkup</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentAnimals.map((animal) => (
                <tr key={animal.id}>
                  <td>
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="gradient-amber text-white text-[11px]">
                          {animal.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-white">{animal.name}</span>
                    </div>
                  </td>
                  <td className="text-[rgba(255,255,255,0.7)]">{animal.tag}</td>
                  <td className="text-[rgba(255,255,255,0.7)]">{animal.type}</td>
                  <td>
                    <Badge className={
                      animal.status === 'Healthy' ? 'badge-success' :
                      animal.status === 'Pregnant' ? 'badge-info' :
                      'badge-warning'
                    }>
                      {animal.status}
                    </Badge>
                  </td>
                  <td className="text-[rgba(255,255,255,0.5)]">{animal.lastCheckup}</td>
                  <td className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                      <MoreHorizontal className="w-4 h-4 text-[rgba(255,255,255,0.5)]" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
