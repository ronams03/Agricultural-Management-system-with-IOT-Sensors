'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppSidebar } from './app-sidebar';
import { AppHeader } from './app-header';
import { useSidebarStore } from '@/stores/sidebar-store';
import { cn } from '@/lib/utils';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { collapsed } = useSidebarStore();

  return (
    <div className="app-background min-h-screen flex">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content - uses CSS transition for sidebar offset */}
      <div 
        className={cn(
          'flex-1 min-w-0 flex flex-col min-h-screen',
          'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'
        )}
        style={{ marginLeft: collapsed ? '72px' : '280px' }}
      >
        {/* Header */}
        <AppHeader />

        {/* Page Content */}
        <div className="flex-1 p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <footer className="py-4 px-6 border-t border-[rgba(255,255,255,0.06)] bg-[rgba(15,23,42,0.5)] backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[rgba(255,255,255,0.4)]">
            <span>© 2024 Agricultural Wonders Management System</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-[rgba(255,255,255,0.7)] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[rgba(255,255,255,0.7)] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[rgba(255,255,255,0.7)] transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
