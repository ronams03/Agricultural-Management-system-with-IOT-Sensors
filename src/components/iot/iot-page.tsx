'use client';

import { motion } from 'framer-motion';
import { 
  Cpu, 
  Wifi, 
  Battery, 
  Thermometer,
  Droplets,
  MapPin,
  Plus,
  RefreshCw,
  Settings,
  AlertTriangle,
  CheckCircle,
  Signal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const sensorStats = [
  { label: 'Active Sensors', value: '48', icon: Cpu, color: '#10B981' },
  { label: 'Online', value: '46', icon: Wifi, color: '#22C55E' },
  { label: 'Low Battery', value: '3', icon: Battery, color: '#F59E0B' },
  { label: 'Alerts', value: '2', icon: AlertTriangle, color: '#EF4444' },
];

const sensorTypes = [
  { type: 'Soil Moisture', count: 12, icon: Droplets, color: '#3B82F6' },
  { type: 'Temperature', count: 8, icon: Thermometer, color: '#EF4444' },
  { type: 'Humidity', count: 6, icon: Droplets, color: '#10B981' },
  { type: 'GPS Trackers', count: 15, icon: MapPin, color: '#8B5CF6' },
  { type: 'Weather Stations', count: 4, icon: Signal, color: '#F59E0B' },
  { type: 'pH Sensors', count: 3, icon: Cpu, color: '#EC4899' },
];

const liveReadings = [
  { id: 1, sensor: 'SM-001', type: 'Soil Moisture', location: 'Field A-12', value: '45%', status: 'normal', battery: 85 },
  { id: 2, sensor: 'TMP-003', type: 'Temperature', location: 'Greenhouse 1', value: '24°C', status: 'normal', battery: 92 },
  { id: 3, sensor: 'SM-008', type: 'Soil Moisture', location: 'Field B-7', value: '28%', status: 'warning', battery: 45 },
  { id: 4, sensor: 'GPS-012', type: 'GPS Tracker', location: 'Pasture A', value: 'Moving', status: 'normal', battery: 78 },
  { id: 5, sensor: 'WS-001', type: 'Weather Station', location: 'Main Office', value: '24°C / 65% RH', status: 'normal', battery: 100 },
  { id: 6, sensor: 'pH-002', type: 'pH Sensor', location: 'Field C-3', value: '6.8', status: 'normal', battery: 67 },
];

const irrigationZones = [
  { zone: 'Zone A-1', status: 'Active', moisture: 42, nextSchedule: '14:00', duration: '30 min' },
  { zone: 'Zone A-2', status: 'Idle', moisture: 55, nextSchedule: '16:00', duration: '25 min' },
  { zone: 'Zone B-1', status: 'Scheduled', moisture: 38, nextSchedule: '12:30', duration: '35 min' },
  { zone: 'Zone B-2', status: 'Maintenance', moisture: 48, nextSchedule: 'TBD', duration: '-' },
];

const activeAlerts = [
  { id: 1, sensor: 'SM-008', message: 'Soil moisture critically low', severity: 'high', time: '10 min ago' },
  { id: 2, sensor: 'TMP-005', message: 'Temperature above threshold', severity: 'medium', time: '1 hour ago' },
];

export function IoTPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-[18px] font-bold text-white">IoT & Sensors</h1>
          <p className="text-[13px] text-[rgba(255,255,255,0.5)] mt-1">Monitor and manage connected devices</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="btn-secondary h-9 text-[13px]">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button className="btn-primary h-9 text-[13px]">
            <Plus className="w-4 h-4 mr-2" />
            Add Device
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {sensorStats.map((stat, index) => (
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

      {/* Sensor Types */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-5"
      >
        <h3 className="text-[14px] font-semibold text-white mb-4">Sensor Types</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sensorTypes.map((sensor, index) => (
            <motion.div
              key={sensor.type}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="text-center p-4 rounded-xl bg-[rgba(255,255,255,0.03)] cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2"
                style={{ backgroundColor: `${sensor.color}20` }}
              >
                <sensor.icon className="w-6 h-6" style={{ color: sensor.color }} />
              </div>
              <p className="text-[12px] font-medium text-white">{sensor.count}</p>
              <p className="text-[11px] text-[rgba(255,255,255,0.5)]">{sensor.type}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tabs */}
      <Tabs defaultValue="readings" className="space-y-4">
        <TabsList className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-xl p-1">
          <TabsTrigger value="readings" className="data-[state=active]:bg-[rgba(16,185,129,0.2)] data-[state=active]:text-[#10B981] rounded-lg text-[12px]">Live Readings</TabsTrigger>
          <TabsTrigger value="irrigation" className="data-[state=active]:bg-[rgba(16,185,129,0.2)] data-[state=active]:text-[#10B981] rounded-lg text-[12px]">Irrigation Control</TabsTrigger>
          <TabsTrigger value="alerts" className="data-[state=active]:bg-[rgba(16,185,129,0.2)] data-[state=active]:text-[#10B981] rounded-lg text-[12px]">Active Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="readings">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-5"
          >
            <div className="table-glass rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Sensor ID</th>
                    <th className="text-left">Type</th>
                    <th className="text-left">Location</th>
                    <th className="text-left">Reading</th>
                    <th className="text-left">Status</th>
                    <th className="text-left">Battery</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {liveReadings.map((reading) => (
                    <tr key={reading.id}>
                      <td className="font-medium text-white">{reading.sensor}</td>
                      <td className="text-[rgba(255,255,255,0.7)]">{reading.type}</td>
                      <td className="text-[rgba(255,255,255,0.5)]">{reading.location}</td>
                      <td className="text-white font-medium">{reading.value}</td>
                      <td>
                        <Badge className={reading.status === 'normal' ? 'badge-success' : 'badge-warning'}>
                          {reading.status}
                        </Badge>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <Progress value={reading.battery} className="w-16 h-1.5 bg-[rgba(255,255,255,0.1)]" />
                          <span className="text-[12px] text-[rgba(255,255,255,0.5)]">{reading.battery}%</span>
                        </div>
                      </td>
                      <td className="text-right">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                          <Settings className="w-4 h-4 text-[rgba(255,255,255,0.5)]" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="irrigation">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {irrigationZones.map((zone, index) => (
              <motion.div
                key={zone.zone}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-5"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-[14px] font-semibold text-white">{zone.zone}</h4>
                  <Badge className={
                    zone.status === 'Active' ? 'badge-success' :
                    zone.status === 'Scheduled' ? 'badge-info' :
                    zone.status === 'Maintenance' ? 'badge-warning' :
                    'badge-neutral'
                  }>
                    {zone.status}
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-[rgba(255,255,255,0.5)]">Moisture</span>
                    <span className="text-[12px] font-medium text-white">{zone.moisture}%</span>
                  </div>
                  <Progress value={zone.moisture} className="h-1.5 bg-[rgba(255,255,255,0.1)]" />
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="p-2 rounded-lg bg-[rgba(255,255,255,0.03)]">
                      <p className="text-[10px] text-[rgba(255,255,255,0.4)]">Next Schedule</p>
                      <p className="text-[11px] font-medium text-white">{zone.nextSchedule}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-[rgba(255,255,255,0.03)]">
                      <p className="text-[10px] text-[rgba(255,255,255,0.4)]">Duration</p>
                      <p className="text-[11px] font-medium text-white">{zone.duration}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="alerts">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {activeAlerts.map((alert, index) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-5 border-l-4 ${
                  alert.severity === 'high' ? 'border-l-[#EF4444]' : 'border-l-[#F59E0B]'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[13px] font-semibold text-white">{alert.sensor}</span>
                      <Badge className={alert.severity === 'high' ? 'badge-error' : 'badge-warning'}>
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="text-[13px] text-[rgba(255,255,255,0.7)]">{alert.message}</p>
                    <p className="text-[11px] text-[rgba(255,255,255,0.4)] mt-1">{alert.time}</p>
                  </div>
                  <Button variant="outline" size="sm" className="h-8 text-[12px] btn-secondary">
                    Acknowledge
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
