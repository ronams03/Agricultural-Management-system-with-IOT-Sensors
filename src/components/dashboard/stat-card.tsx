'use client';

import { motion } from 'framer-motion';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: 'up' | 'down';
    label?: string;
  };
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  className?: string;
}

export function StatCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor = 'text-[#10B981]',
  iconBg = 'gradient-emerald',
  className,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'glass-card p-5 stat-card',
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-[12px] font-medium text-[rgba(255,255,255,0.5)] mb-1">{title}</p>
          <p className="text-[24px] font-bold text-white leading-tight">{value}</p>
          {change && (
            <div className={cn(
              'flex items-center gap-1 mt-2 text-[12px]',
              change.type === 'up' ? 'text-[#22C55E]' : 'text-[#EF4444]'
            )}>
              {change.type === 'up' ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              <span className="font-medium">{Math.abs(change.value)}%</span>
              {change.label && (
                <span className="text-[rgba(255,255,255,0.4)]">{change.label}</span>
              )}
            </div>
          )}
        </div>
        <div className={cn(
          'w-12 h-12 rounded-2xl flex items-center justify-center',
          iconBg
        )}>
          <Icon className={cn('w-6 h-6', iconColor)} />
        </div>
      </div>
    </motion.div>
  );
}
