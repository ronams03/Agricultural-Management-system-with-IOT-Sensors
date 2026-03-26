'use client';

import { motion } from 'framer-motion';
import { 
  Plus, 
  FileText, 
  Calendar, 
  CloudRain, 
  TrendingUp,
  Package,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface QuickAction {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

const quickActions: QuickAction[] = [
  { id: 'add-crop', label: 'Add Crop', icon: Plus, color: '#10B981', bgColor: 'rgba(16,185,129,0.15)' },
  { id: 'add-task', label: 'New Task', icon: Calendar, color: '#3B82F6', bgColor: 'rgba(59,130,246,0.15)' },
  { id: 'schedule', label: 'Schedule', icon: Calendar, color: '#8B5CF6', bgColor: 'rgba(139,92,246,0.15)' },
  { id: 'report', label: 'Generate Report', icon: FileText, color: '#F59E0B', bgColor: 'rgba(245,158,11,0.15)' },
];

export function QuickActionsPanel({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn('glass-card p-5', className)}
    >
      <h3 className="text-[14px] font-semibold text-white mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {quickActions.map((action, index) => (
          <motion.button
            key={action.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 p-3 rounded-xl transition-all"
            style={{ backgroundColor: action.bgColor }}
          >
            <action.icon className="w-5 h-5" style={{ color: action.color }} />
            <span className="text-[12px] font-medium text-white">{action.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

const alerts = [
  { id: 1, type: 'warning', title: 'Low fertilizer stock', message: 'Reorder required within 3 days', time: '2h ago' },
  { id: 2, type: 'error', title: 'Equipment maintenance due', message: 'Tractor #3 service overdue', time: '5h ago' },
  { id: 3, type: 'success', title: 'Harvest completed', message: 'Field A-12 yield exceeded target', time: '1d ago' },
  { id: 4, type: 'warning', title: 'Weather alert', message: 'Heavy rain expected Thursday', time: '1d ago' },
];

export function AlertsPanel({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn('glass-card p-5', className)}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-semibold text-white">Alerts & Notifications</h3>
        <span className="text-[11px] text-[rgba(255,255,255,0.5)]">{alerts.length} active</span>
      </div>
      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3 p-3 rounded-xl bg-[rgba(255,255,255,0.03)]"
          >
            <div className={cn(
              'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0',
              alert.type === 'warning' && 'bg-[rgba(234,179,8,0.15)]',
              alert.type === 'error' && 'bg-[rgba(239,68,68,0.15)]',
              alert.type === 'success' && 'bg-[rgba(34,197,94,0.15)]',
            )}>
              {alert.type === 'warning' && <AlertTriangle className="w-4 h-4 text-[#EAB308]" />}
              {alert.type === 'error' && <AlertTriangle className="w-4 h-4 text-[#EF4444]" />}
              {alert.type === 'success' && <CheckCircle className="w-4 h-4 text-[#22C55E]" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-white">{alert.title}</p>
              <p className="text-[12px] text-[rgba(255,255,255,0.5)] mt-0.5">{alert.message}</p>
              <p className="text-[11px] text-[rgba(255,255,255,0.4)] mt-1">{alert.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <Button variant="ghost" className="w-full mt-4 text-[12px] text-[#10B981] hover:bg-[rgba(16,185,129,0.1)]">
        View All Alerts
      </Button>
    </motion.div>
  );
}
