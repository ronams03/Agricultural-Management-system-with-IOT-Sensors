'use client';

import { AppLayout } from '@/components/layout/app-layout';
import { DashboardPage } from '@/components/dashboard/dashboard-page';
import { CropsPage } from '@/components/crops/crops-page';
import { LivestockPage } from '@/components/livestock/livestock-page';
import { InventoryPage } from '@/components/inventory/inventory-page';
import { WeatherPage } from '@/components/weather/weather-page';
import { FinancialPage } from '@/components/financial/financial-page';
import { ReportsPage } from '@/components/reports/reports-page';
import { IoTPage } from '@/components/iot/iot-page';
import { UsersPage } from '@/components/users/users-page';
import { SettingsPage } from '@/components/settings/settings-page';
import { useNavigationStore } from '@/stores/navigation-store';

export default function Home() {
  const { currentModule } = useNavigationStore();

  const renderModule = () => {
    switch (currentModule) {
      case 'dashboard':
        return <DashboardPage />;
      case 'crops':
        return <CropsPage />;
      case 'livestock':
        return <LivestockPage />;
      case 'inventory':
        return <InventoryPage />;
      case 'weather':
        return <WeatherPage />;
      case 'financial':
        return <FinancialPage />;
      case 'reports':
        return <ReportsPage />;
      case 'marketplace':
        return <MarketplacePlaceholder />;
      case 'iot':
        return <IoTPage />;
      case 'users':
        return <UsersPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <AppLayout>
      {renderModule()}
    </AppLayout>
  );
}

function MarketplacePlaceholder() {
  return (
    <div className="space-y-6">
      <div className="glass-card p-12 text-center">
        <div className="w-20 h-20 rounded-3xl gradient-emerald mx-auto mb-4 flex items-center justify-center">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h2 className="text-[20px] font-bold text-white mb-2">Marketplace</h2>
        <p className="text-[14px] text-[rgba(255,255,255,0.5)] max-w-md mx-auto">
          Coming soon! Buy and sell agricultural products, connect with suppliers, and manage contracts all in one place.
        </p>
        <div className="flex justify-center gap-3 mt-6">
          <span className="px-3 py-1 rounded-full bg-[rgba(16,185,129,0.1)] text-[#10B981] text-[12px]">
            Product Listings
          </span>
          <span className="px-3 py-1 rounded-full bg-[rgba(59,130,246,0.1)] text-[#3B82F6] text-[12px]">
            Supplier Network
          </span>
          <span className="px-3 py-1 rounded-full bg-[rgba(245,158,11,0.1)] text-[#F59E0B] text-[12px]">
            Contract Management
          </span>
        </div>
      </div>
    </div>
  );
}
