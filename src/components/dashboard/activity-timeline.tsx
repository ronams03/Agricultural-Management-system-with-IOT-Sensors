'use client';

import { motion } from 'framer-motion';
import { 
  Sprout, 
  Beef, 
  Package, 
  DollarSign, 
  AlertTriangle,
  CheckCircle2,
  Clock,
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ActivityTimelineProps {
  className?: string;
}

const activities = [
  {
    id: 1,
    type: 'crop',
    title: 'Wheat field irrigation completed',
    description: 'Field A-12 irrigation cycle finished',
    time: '10 minutes ago',
    icon: Sprout,
    color: '#10B981',
  },
  {
    id: 2,
    type: 'livestock',
    title: 'Health check scheduled',
    description: 'Cattle batch #234 due for vaccination',
    time: '1 hour ago',
    icon: Beef,
    color: '#F59E0B',
  },
  {
    id: 3,
    type: 'inventory',
    title: 'Low stock alert',
    description: 'Fertilizer stock below threshold',
    time: '2 hours ago',
    icon: AlertTriangle,
    color: '#EF4444',
  },
  {
    id: 4,
    type: 'finance',
    title: 'Payment received',
    description: '$12,500 from grain sales',
    time: '3 hours ago',
    icon: DollarSign,
    color: '#22C55E',
  },
  {
    id: 5,
    type: 'task',
    title: 'Task completed',
    description: 'Equipment maintenance finished',
    time: '4 hours ago',
    icon: CheckCircle2,
    color: '#3B82F6',
  },
  {
    id: 6,
    type: 'user',
    title: 'New team member',
    description: 'Sarah joined as Field Operator',
    time: '5 hours ago',
    icon: User,
    color: '#8B5CF6',
  },
  {
    id: 7,
    type: 'crop',
    title: 'Harvest started',
    description: 'Corn field B-7 harvest initiated',
    time: '6 hours ago',
    icon: Sprout,
    color: '#10B981',
  },
];

export function ActivityTimeline({ className }: ActivityTimelineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'glass-card p-5 h-full',
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-semibold text-white">Recent Activity</h3>
        <button className="text-[12px] text-[#10B981] hover:underline">View All</button>
      </div>

      <ScrollArea className="h-[400px] pr-2">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.08)]" />

          <div className="space-y-4">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-3 pl-1"
              >
                {/* Icon */}
                <div
                  className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${activity.color}20` }}
                >
                  <activity.icon className="w-4 h-4" style={{ color: activity.color }} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pb-4 border-b border-[rgba(255,255,255,0.05)] last:border-0">
                  <p className="text-[13px] font-medium text-white">{activity.title}</p>
                  <p className="text-[12px] text-[rgba(255,255,255,0.5)] mt-0.5">{activity.description}</p>
                  <p className="text-[11px] text-[rgba(255,255,255,0.4)] mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {activity.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </motion.div>
  );
}
