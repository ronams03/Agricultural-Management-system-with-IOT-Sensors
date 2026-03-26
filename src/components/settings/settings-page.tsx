'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Bell, 
  Shield, 
  Palette,
  Globe,
  Database,
  Key,
  Save,
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

const settingsSections = [
  { id: 'general', label: 'General', icon: Settings },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'integrations', label: 'Integrations', icon: Globe },
  { id: 'data', label: 'Data & Backup', icon: Database },
];

export function SettingsPage() {
  const [activeSection, setActiveSection] = useState('general');

  const renderContent = () => {
    switch (activeSection) {
      case 'general':
        return <GeneralSettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'appearance':
        return <AppearanceSettings />;
      case 'integrations':
        return <IntegrationsSettings />;
      case 'data':
        return <DataSettings />;
      default:
        return <GeneralSettings />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-[18px] font-bold text-white">Settings</h1>
          <p className="text-[13px] text-[rgba(255,255,255,0.5)] mt-1">Manage your application preferences</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="btn-secondary h-9 text-[13px]">
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset to Defaults
          </Button>
          <Button className="btn-primary h-9 text-[13px]">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Settings Layout */}
      <div className="flex gap-4">
        {/* Sidebar Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block w-48 flex-shrink-0"
        >
          <div className="glass-card p-3 space-y-1">
            {settingsSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  'w-full flex items-center gap-2 justify-start px-3 py-2 rounded-lg text-[13px] transition-colors',
                  activeSection === section.id
                    ? 'bg-[rgba(16,185,129,0.2)] text-[#10B981]'
                    : 'text-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.05)]'
                )}
              >
                <section.icon className="w-4 h-4" />
                {section.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="flex-1">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function GeneralSettings() {
  return (
    <div className="glass-card p-6 space-y-6">
      <div>
        <h3 className="text-[14px] font-semibold text-white mb-4">Farm Profile</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-[12px] text-[rgba(255,255,255,0.6)]">Farm Name</Label>
            <Input defaultValue="Green Valley Farm" className="input-glass h-9 text-[13px]" />
          </div>
          <div className="space-y-2">
            <Label className="text-[12px] text-[rgba(255,255,255,0.6)]">Location</Label>
            <Input defaultValue="California, USA" className="input-glass h-9 text-[13px]" />
          </div>
          <div className="space-y-2">
            <Label className="text-[12px] text-[rgba(255,255,255,0.6)]">Total Area</Label>
            <Input defaultValue="500 acres" className="input-glass h-9 text-[13px]" />
          </div>
          <div className="space-y-2">
            <Label className="text-[12px] text-[rgba(255,255,255,0.6)]">Timezone</Label>
            <Select defaultValue="pst">
              <SelectTrigger className="input-glass h-9 text-[13px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="dropdown-glass">
                <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                <SelectItem value="est">Eastern Time (EST)</SelectItem>
                <SelectItem value="utc">UTC</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.06)] pt-6">
        <h3 className="text-[14px] font-semibold text-white mb-4">Units & Measurements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-[12px] text-[rgba(255,255,255,0.6)]">Temperature Unit</Label>
            <Select defaultValue="celsius">
              <SelectTrigger className="input-glass h-9 text-[13px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="dropdown-glass">
                <SelectItem value="celsius">Celsius (°C)</SelectItem>
                <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-[12px] text-[rgba(255,255,255,0.6)]">Area Unit</Label>
            <Select defaultValue="acres">
              <SelectTrigger className="input-glass h-9 text-[13px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="dropdown-glass">
                <SelectItem value="acres">Acres</SelectItem>
                <SelectItem value="hectares">Hectares</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationSettings() {
  return (
    <div className="glass-card p-6 space-y-6">
      <div>
        <h3 className="text-[14px] font-semibold text-white mb-4">Email Notifications</h3>
        <div className="space-y-4">
          <NotificationSetting title="Weather Alerts" description="Get notified about severe weather conditions" defaultChecked />
          <NotificationSetting title="Task Reminders" description="Daily reminders for pending tasks" defaultChecked />
          <NotificationSetting title="Inventory Alerts" description="Low stock and out of stock notifications" defaultChecked />
          <NotificationSetting title="Financial Reports" description="Weekly financial summary emails" />
          <NotificationSetting title="System Updates" description="New features and maintenance notifications" defaultChecked />
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.06)] pt-6">
        <h3 className="text-[14px] font-semibold text-white mb-4">Push Notifications</h3>
        <div className="space-y-4">
          <NotificationSetting title="Critical Alerts" description="Immediate push for critical issues" defaultChecked />
          <NotificationSetting title="Daily Summary" description="Push notification with daily overview" />
        </div>
      </div>
    </div>
  );
}

function SecuritySettings() {
  return (
    <div className="glass-card p-6 space-y-6">
      <div>
        <h3 className="text-[14px] font-semibold text-white mb-4">Password Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-[12px] text-[rgba(255,255,255,0.6)]">Current Password</Label>
            <Input type="password" className="input-glass h-9 text-[13px]" />
          </div>
          <div></div>
          <div className="space-y-2">
            <Label className="text-[12px] text-[rgba(255,255,255,0.6)]">New Password</Label>
            <Input type="password" className="input-glass h-9 text-[13px]" />
          </div>
          <div className="space-y-2">
            <Label className="text-[12px] text-[rgba(255,255,255,0.6)]">Confirm Password</Label>
            <Input type="password" className="input-glass h-9 text-[13px]" />
          </div>
        </div>
        <Button className="btn-primary h-9 text-[13px] mt-4">
          Update Password
        </Button>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.06)] pt-6">
        <h3 className="text-[14px] font-semibold text-white mb-4">Two-Factor Authentication</h3>
        <div className="flex items-center justify-between p-4 rounded-xl bg-[rgba(255,255,255,0.03)]">
          <div>
            <p className="text-[13px] font-medium text-white">Enable 2FA</p>
            <p className="text-[12px] text-[rgba(255,255,255,0.5)]">Add an extra layer of security</p>
          </div>
          <Switch />
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.06)] pt-6">
        <h3 className="text-[14px] font-semibold text-white mb-4">Active Sessions</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 rounded-xl bg-[rgba(255,255,255,0.03)]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[rgba(16,185,129,0.2)] flex items-center justify-center">
                <Key className="w-4 h-4 text-[#10B981]" />
              </div>
              <div>
                <p className="text-[13px] font-medium text-white">Chrome on Windows</p>
                <p className="text-[11px] text-[rgba(255,255,255,0.4)]">Current session • California, USA</p>
              </div>
            </div>
            <Badge className="badge-success">Active</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppearanceSettings() {
  return (
    <div className="glass-card p-6 space-y-6">
      <div>
        <h3 className="text-[14px] font-semibold text-white mb-4">Theme Settings</h3>
        <div className="grid grid-cols-3 gap-4">
          <ThemeOption name="Dark" selected />
          <ThemeOption name="Light" />
          <ThemeOption name="System" />
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.06)] pt-6">
        <h3 className="text-[14px] font-semibold text-white mb-4">Accent Color</h3>
        <div className="flex gap-3">
          {['#10B981', '#3B82F6', '#F59E0B', '#8B5CF6', '#EC4899'].map((color) => (
            <button
              key={color}
              className={`w-10 h-10 rounded-xl transition-transform hover:scale-110 ${color === '#10B981' ? 'ring-2 ring-white ring-offset-2 ring-offset-[rgba(15,23,42,1)]' : ''}`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.06)] pt-6">
        <h3 className="text-[14px] font-semibold text-white mb-4">Sidebar</h3>
        <div className="flex items-center justify-between p-4 rounded-xl bg-[rgba(255,255,255,0.03)]">
          <div>
            <p className="text-[13px] font-medium text-white">Collapsed by Default</p>
            <p className="text-[12px] text-[rgba(255,255,255,0.5)]">Start with sidebar minimized</p>
          </div>
          <Switch />
        </div>
      </div>
    </div>
  );
}

function IntegrationsSettings() {
  return (
    <div className="glass-card p-6">
      <h3 className="text-[14px] font-semibold text-white mb-4">Connected Services</h3>
      <div className="space-y-4">
        <IntegrationCard name="Weather API" status="connected" description="OpenWeather API for forecasts" />
        <IntegrationCard name="Payment Gateway" status="connected" description="Stripe for payment processing" />
        <IntegrationCard name="Map Service" status="pending" description="Google Maps for field mapping" />
        <IntegrationCard name="SMS Service" status="disconnected" description="Twilio for notifications" />
      </div>
    </div>
  );
}

function DataSettings() {
  return (
    <div className="glass-card p-6 space-y-6">
      <div>
        <h3 className="text-[14px] font-semibold text-white mb-4">Backup Settings</h3>
        <div className="flex items-center justify-between p-4 rounded-xl bg-[rgba(255,255,255,0.03)]">
          <div>
            <p className="text-[13px] font-medium text-white">Automatic Backup</p>
            <p className="text-[12px] text-[rgba(255,255,255,0.5)]">Daily backup at 2:00 AM</p>
          </div>
          <Switch defaultChecked />
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.06)] pt-6">
        <h3 className="text-[14px] font-semibold text-white mb-4">Data Management</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="secondary" className="btn-secondary h-9 text-[13px]">
            <Database className="w-4 h-4 mr-2" />
            Export Data
          </Button>
          <Button variant="secondary" className="btn-secondary h-9 text-[13px]">
            <RefreshCw className="w-4 h-4 mr-2" />
            Import Data
          </Button>
          <Button variant="secondary" className="btn-secondary h-9 text-[13px]">
            Create Backup
          </Button>
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.06)] pt-6">
        <h3 className="text-[14px] font-semibold text-white mb-4">Storage Usage</h3>
        <div className="p-4 rounded-xl bg-[rgba(255,255,255,0.03)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[13px] text-[rgba(255,255,255,0.6)]">Used Space</span>
            <span className="text-[13px] font-medium text-white">2.4 GB / 10 GB</span>
          </div>
          <div className="h-2 rounded-full bg-[rgba(255,255,255,0.1)]">
            <div className="h-full w-1/4 rounded-full bg-[#10B981]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationSetting({ title, description, defaultChecked }: { title: string; description: string; defaultChecked?: boolean }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-[rgba(255,255,255,0.03)]">
      <div>
        <p className="text-[13px] font-medium text-white">{title}</p>
        <p className="text-[12px] text-[rgba(255,255,255,0.5)]">{description}</p>
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}

function ThemeOption({ name, selected }: { name: string; selected?: boolean }) {
  return (
    <button
      className={`p-4 rounded-xl text-center transition-all ${
        selected
          ? 'bg-[rgba(16,185,129,0.2)] border-2 border-[#10B981]'
          : 'bg-[rgba(255,255,255,0.03)] border-2 border-transparent hover:border-[rgba(255,255,255,0.1)]'
      }`}
    >
      <div className={`w-full h-16 rounded-lg mb-2 ${
        name === 'Dark' ? 'bg-[#0f172a]' :
        name === 'Light' ? 'bg-white' :
        'bg-gradient-to-b from-white to-[#0f172a]'
      }`} />
      <span className={`text-[12px] font-medium ${selected ? 'text-[#10B981]' : 'text-[rgba(255,255,255,0.7)]'}`}>
        {name}
      </span>
    </button>
  );
}

function IntegrationCard({ name, status, description }: { name: string; status: 'connected' | 'pending' | 'disconnected'; description: string }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-[rgba(255,255,255,0.03)]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl gradient-emerald flex items-center justify-center">
          <Globe className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-[13px] font-medium text-white">{name}</p>
          <p className="text-[12px] text-[rgba(255,255,255,0.5)]">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Badge className={
          status === 'connected' ? 'badge-success' :
          status === 'pending' ? 'badge-warning' :
          'badge-neutral'
        }>
          {status}
        </Badge>
        <Button variant="ghost" size="sm" className="h-8 text-[12px] text-[#10B981] hover:bg-[rgba(16,185,129,0.1)]">
          {status === 'connected' ? 'Configure' : 'Connect'}
        </Button>
      </div>
    </div>
  );
}
