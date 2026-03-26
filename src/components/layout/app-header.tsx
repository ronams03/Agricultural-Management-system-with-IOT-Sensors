'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Bell, 
  Settings, 
  ChevronRight,
  User,
  LogOut,
  HelpCircle,
  Moon,
  Sun,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
  Wallet,
  Shield,
  CreditCard
} from 'lucide-react';
import { useNavigationStore } from '@/stores/navigation-store';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const moduleLabels: Record<string, string> = {
  dashboard: 'Dashboard',
  crops: 'Crop Management',
  livestock: 'Livestock',
  inventory: 'Inventory & Equipment',
  weather: 'Weather Center',
  financial: 'Financial Hub',
  reports: 'Reports & Analytics',
  marketplace: 'Marketplace',
  iot: 'IoT & Sensors',
  users: 'User Management',
  settings: 'Settings',
};

const notifications = [
  { id: 1, title: 'New pest alert detected', description: 'Aphid infestation detected in Field A-12', time: '5 min ago', type: 'warning', read: false },
  { id: 2, title: 'Irrigation schedule updated', description: 'Zone B-7 irrigation moved to 4:00 PM', time: '1 hour ago', type: 'info', read: false },
  { id: 3, title: 'Harvest report ready', description: 'Monthly harvest report is available for download', time: '2 hours ago', type: 'success', read: false },
  { id: 4, title: 'Low inventory alert', description: 'Fertilizer stock below threshold level', time: '3 hours ago', type: 'warning', read: true },
  { id: 5, title: 'Weather update', description: 'Heavy rain expected tomorrow afternoon', time: '5 hours ago', type: 'info', read: true },
];

export function AppHeader() {
  const { currentModule } = useNavigationStore();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header 
      className={cn(
        'sticky top-0 z-40 h-16',
        'bg-[rgba(15,23,42,0.8)] backdrop-blur-xl',
        'border-b border-[rgba(255,255,255,0.06)]',
        'flex items-center justify-between px-6'
      )}
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2">
        <nav className="flex items-center text-[13px]">
          <span className="text-[rgba(255,255,255,0.5)]">Home</span>
          <ChevronRight className="w-4 h-4 text-[rgba(255,255,255,0.3)] mx-1" />
          <span className="text-white font-medium">{moduleLabels[currentModule]}</span>
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* Global Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[rgba(255,255,255,0.4)]" />
          <Input
            placeholder="Search anything..."
            className="input-glass pl-9 w-64 h-9 text-[13px]"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.05)] px-1.5 py-0.5 rounded">
            ⌘K
          </kbd>
        </div>

        {/* Notifications */}
        <div className="relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative w-9 h-9 rounded-xl bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)]"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="w-4 h-4 text-[rgba(255,255,255,0.7)]" />
            {unreadCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#EF4444] text-[10px] font-bold text-white flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </Button>

          {/* Notifications Modal */}
          <AnimatePresence>
            {showNotifications && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowNotifications(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-96 z-50"
                >
                  <div className="modal-content p-0 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-[rgba(255,255,255,0.06)]">
                      <div>
                        <h3 className="text-[14px] font-semibold text-white">Notifications</h3>
                        <p className="text-[12px] text-[rgba(255,255,255,0.5)]">{unreadCount} unread</p>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 text-[12px] text-[#10B981]">
                        Mark all read
                      </Button>
                    </div>

                    {/* Notifications List */}
                    <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                      {notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className={cn(
                            'p-4 border-b border-[rgba(255,255,255,0.04)] cursor-pointer hover:bg-[rgba(255,255,255,0.02)] transition-colors',
                            !notif.read && 'bg-[rgba(16,185,129,0.03)]'
                          )}
                        >
                          <div className="flex gap-3">
                            <div className={cn(
                              'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0',
                              notif.type === 'warning' && 'bg-[rgba(245,158,11,0.15)]',
                              notif.type === 'error' && 'bg-[rgba(239,68,68,0.15)]',
                              notif.type === 'success' && 'bg-[rgba(34,197,94,0.15)]',
                              notif.type === 'info' && 'bg-[rgba(59,130,246,0.15)]'
                            )}>
                              {notif.type === 'warning' && <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />}
                              {notif.type === 'error' && <AlertTriangle className="w-4 h-4 text-[#EF4444]" />}
                              {notif.type === 'success' && <CheckCircle className="w-4 h-4 text-[#22C55E]" />}
                              {notif.type === 'info' && <Info className="w-4 h-4 text-[#3B82F6]" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <p className="text-[13px] font-medium text-white">{notif.title}</p>
                                {!notif.read && (
                                  <div className="w-2 h-2 rounded-full bg-[#10B981] flex-shrink-0 mt-1.5" />
                                )}
                              </div>
                              <p className="text-[12px] text-[rgba(255,255,255,0.5)] mt-0.5 line-clamp-2">{notif.description}</p>
                              <p className="text-[11px] text-[rgba(255,255,255,0.4)] mt-1">{notif.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="p-3 border-t border-[rgba(255,255,255,0.06)]">
                      <Button variant="ghost" className="w-full h-9 text-[13px] text-[#10B981] hover:bg-[rgba(16,185,129,0.1)]">
                        View All Notifications
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Settings Quick Access */}
        <Button variant="ghost" size="icon" className="w-9 h-9 rounded-xl bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)]">
          <Settings className="w-4 h-4 text-[rgba(255,255,255,0.7)]" />
        </Button>

        {/* User Menu */}
        <div className="relative">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 h-9 px-2 rounded-xl bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)]"
            onClick={() => setShowProfile(!showProfile)}
          >
            <Avatar className="w-7 h-7 border border-[rgba(255,255,255,0.1)]">
              <AvatarFallback className="gradient-emerald text-white text-[11px] font-semibold">JD</AvatarFallback>
            </Avatar>
            <div className="hidden lg:flex flex-col items-start">
              <span className="text-[12px] font-medium text-white leading-tight">John Doe</span>
              <span className="text-[10px] text-[rgba(255,255,255,0.5)] leading-tight">Admin</span>
            </div>
          </Button>

          {/* Profile Modal */}
          <AnimatePresence>
            {showProfile && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowProfile(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-80 z-50"
                >
                  <div className="modal-content p-0 overflow-hidden">
                    {/* Profile Header */}
                    <div className="p-5 border-b border-[rgba(255,255,255,0.06)]">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-14 h-14 border-2 border-[rgba(255,255,255,0.1)]">
                          <AvatarFallback className="gradient-emerald text-white text-[16px] font-semibold">JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-[15px] font-semibold text-white">John Doe</h3>
                          <p className="text-[12px] text-[rgba(255,255,255,0.5)]">john@greenvalleyfarm.com</p>
                          <Badge className="mt-1.5 badge-success text-[10px]">Farm Administrator</Badge>
                        </div>
                      </div>
                    </div>

                    {/* Profile Stats */}
                    <div className="grid grid-cols-3 gap-3 p-4 border-b border-[rgba(255,255,255,0.06)]">
                      <div className="text-center p-2 rounded-xl bg-[rgba(255,255,255,0.03)]">
                        <p className="text-[16px] font-bold text-white">24</p>
                        <p className="text-[10px] text-[rgba(255,255,255,0.5)]">Tasks</p>
                      </div>
                      <div className="text-center p-2 rounded-xl bg-[rgba(255,255,255,0.03)]">
                        <p className="text-[16px] font-bold text-white">12</p>
                        <p className="text-[10px] text-[rgba(255,255,255,0.5)]">Projects</p>
                      </div>
                      <div className="text-center p-2 rounded-xl bg-[rgba(255,255,255,0.03)]">
                        <p className="text-[16px] font-bold text-white">98%</p>
                        <p className="text-[10px] text-[rgba(255,255,255,0.5)]">Score</p>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="p-2">
                      <ProfileMenuItem icon={User} label="My Profile" />
                      <ProfileMenuItem icon={Wallet} label="Billing & Plans" />
                      <ProfileMenuItem icon={Shield} label="Security" />
                      <ProfileMenuItem icon={HelpCircle} label="Help Center" />
                      <div className="border-t border-[rgba(255,255,255,0.06)] my-1" />
                      <ProfileMenuItem icon={LogOut} label="Sign Out" danger />
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

function ProfileMenuItem({ icon: Icon, label, danger }: { icon: React.ElementType; label: string; danger?: boolean }) {
  return (
    <button className={cn(
      'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] transition-colors',
      danger 
        ? 'text-[#EF4444] hover:bg-[rgba(239,68,68,0.1)]' 
        : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.05)] hover:text-white'
    )}>
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
}
