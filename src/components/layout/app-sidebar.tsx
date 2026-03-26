'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Sprout, 
  Beef, 
  Package, 
  Cloud, 
  DollarSign, 
  BarChart3, 
  Store, 
  Cpu,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  Search,
  LogOut,
  Wheat,
  HelpCircle
} from 'lucide-react';
import { useNavigationStore, NavigationModule } from '@/stores/navigation-store';
import { useSidebarStore } from '@/stores/sidebar-store';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface NavItem {
  id: NavigationModule;
  label: string;
  icon: React.ElementType;
  badge?: number;
}

const mainNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'crops', label: 'Crop Management', icon: Sprout, badge: 3 },
  { id: 'livestock', label: 'Livestock', icon: Beef },
  { id: 'inventory', label: 'Inventory', icon: Package, badge: 5 },
  { id: 'weather', label: 'Weather Center', icon: Cloud },
  { id: 'financial', label: 'Financial Hub', icon: DollarSign },
  { id: 'reports', label: 'Reports & Analytics', icon: BarChart3 },
  { id: 'marketplace', label: 'Marketplace', icon: Store },
  { id: 'iot', label: 'IoT & Sensors', icon: Cpu, badge: 2 },
];

const bottomNavItems: NavItem[] = [
  { id: 'users', label: 'User Management', icon: Users },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function AppSidebar() {
  const { currentModule, setModule } = useNavigationStore();
  const { collapsed, toggle } = useSidebarStore();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <aside 
      className={cn(
        'fixed left-0 top-0 h-screen z-50',
        'bg-[rgba(15,23,42,0.85)] backdrop-blur-xl',
        'border-r border-[rgba(255,255,255,0.08)]',
        'flex flex-col',
        'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
        collapsed ? 'w-[72px]' : 'w-[280px]'
      )}
    >
      {/* Logo Area */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-[rgba(255,255,255,0.06)]">
        <motion.div 
          className="flex items-center justify-center w-10 h-10 rounded-xl gradient-emerald flex-shrink-0"
          whileHover={{ scale: 1.05 }}
        >
          <Wheat className="w-5 h-5 text-white" />
        </motion.div>
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden whitespace-nowrap"
            >
              <h1 className="text-[15px] font-bold text-white leading-tight">Agricultural</h1>
              <p className="text-[11px] text-[rgba(255,255,255,0.5)] leading-tight">Wonders System</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-4 py-3"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[rgba(255,255,255,0.4)]" />
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-glass pl-9 h-10 text-[13px]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-2 overflow-y-auto custom-scrollbar overflow-x-hidden">
        <div className="space-y-1">
          {mainNavItems.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              collapsed={collapsed}
              isActive={currentModule === item.id}
              onClick={() => setModule(item.id)}
            />
          ))}
        </div>

        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.06)]"
            >
              <p className="text-[11px] font-medium text-[rgba(255,255,255,0.4)] uppercase tracking-wider px-3 mb-2">
                Quick Actions
              </p>
              <div className="grid grid-cols-2 gap-2 px-1">
                <QuickAction label="Add Crop" />
                <QuickAction label="New Task" />
                <QuickAction label="Weather" />
                <QuickAction label="Reports" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Bottom Section */}
      <div className="px-3 py-3 border-t border-[rgba(255,255,255,0.06)]">
        {bottomNavItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            collapsed={collapsed}
            isActive={currentModule === item.id}
            onClick={() => setModule(item.id)}
          />
        ))}
      </div>

      {/* User Profile Mini */}
      <AnimatePresence mode="wait">
        {!collapsed ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-3 py-3 border-t border-[rgba(255,255,255,0.06)]"
          >
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[rgba(255,255,255,0.04)]">
              <Avatar className="w-9 h-9 border border-[rgba(255,255,255,0.1)] flex-shrink-0">
                <AvatarFallback className="gradient-emerald text-white text-[12px] font-semibold">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0 overflow-hidden">
                <p className="text-[13px] font-medium text-white truncate">John Doe</p>
                <p className="text-[11px] text-[rgba(255,255,255,0.5)] truncate">Farm Administrator</p>
              </div>
              <button className="p-1.5 rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors flex-shrink-0">
                <LogOut className="w-4 h-4 text-[rgba(255,255,255,0.5)]" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-3 py-3 border-t border-[rgba(255,255,255,0.06)]"
          >
            <Avatar className="w-9 h-9 mx-auto border border-[rgba(255,255,255,0.1)]">
              <AvatarFallback className="gradient-emerald text-white text-[12px] font-semibold">JD</AvatarFallback>
            </Avatar>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapse Toggle */}
      <button
        onClick={toggle}
        className="absolute top-[68px] -right-3 w-6 h-6 rounded-full bg-[rgba(30,41,59,0.95)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shadow-lg hover:bg-[rgba(30,41,59,1)] transition-colors"
      >
        {collapsed ? (
          <ChevronRight className="w-3 h-3 text-[rgba(255,255,255,0.7)]" />
        ) : (
          <ChevronLeft className="w-3 h-3 text-[rgba(255,255,255,0.7)]" />
        )}
      </button>
    </aside>
  );
}

interface NavItemProps {
  item: NavItem;
  collapsed: boolean;
  isActive: boolean;
  onClick: () => void;
}

function NavItem({ item, collapsed, isActive, onClick }: NavItemProps) {
  const Icon = item.icon;

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200',
        isActive
          ? 'bg-gradient-to-r from-[rgba(16,185,129,0.2)] to-[rgba(16,185,129,0.1)] text-[#10B981]'
          : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.08)] hover:text-[rgba(255,255,255,0.95)]',
        collapsed ? 'justify-center' : ''
      )}
      whileHover={{ scale: collapsed ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon className={cn('w-5 h-5 flex-shrink-0', isActive && 'text-[#10B981]')} />
      
      <AnimatePresence>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            className="text-left truncate overflow-hidden whitespace-nowrap"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>

      {item.badge && !collapsed && (
        <Badge className="h-5 px-1.5 text-[10px] font-medium badge-error flex-shrink-0">
          {item.badge}
        </Badge>
      )}

      {item.badge && collapsed && (
        <div className="absolute right-2 top-2 w-2 h-2 rounded-full bg-[#EF4444]" />
      )}
    </motion.button>
  );
}

function QuickAction({ label }: { label: string }) {
  return (
    <button className="flex items-center justify-center px-3 py-2 rounded-xl bg-[rgba(255,255,255,0.04)] text-[11px] font-medium text-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.08)] hover:text-white transition-all">
      {label}
    </button>
  );
}
