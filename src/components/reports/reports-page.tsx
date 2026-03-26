'use client';

import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Calendar,
  FileText,
  PieChart,
  LineChart,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

const kpiMetrics = [
  { label: 'Yield Efficiency', value: '94.2%', change: '+5.3%', trend: 'up' },
  { label: 'Cost per Acre', value: '$285', change: '-12.4%', trend: 'up' },
  { label: 'ROI', value: '18.7%', change: '+3.2%', trend: 'up' },
  { label: 'Resource Utilization', value: '87.5%', change: '+2.1%', trend: 'up' },
];

const yieldTrendData = [
  { year: '2020', actual: 42, target: 40 },
  { year: '2021', actual: 45, target: 42 },
  { year: '2022', actual: 48, target: 45 },
  { year: '2023', actual: 52, target: 48 },
  { year: '2024', actual: 56, target: 52 },
];

const cropPerformanceData = [
  { crop: 'Wheat', yield: 95, quality: 88, profit: 92 },
  { crop: 'Corn', yield: 88, quality: 92, profit: 85 },
  { crop: 'Rice', yield: 92, quality: 85, profit: 88 },
  { crop: 'Soybean', yield: 85, quality: 90, profit: 82 },
  { crop: 'Barley', yield: 90, quality: 87, profit: 86 },
];

const monthlyComparisonData = [
  { month: 'Jan', revenue: 45000, expenses: 32000 },
  { month: 'Feb', revenue: 52000, expenses: 35000 },
  { month: 'Mar', revenue: 48000, expenses: 30000 },
  { month: 'Apr', revenue: 61000, expenses: 38000 },
  { month: 'May', revenue: 55000, expenses: 33000 },
  { month: 'Jun', revenue: 67000, expenses: 40000 },
];

const reportTemplates = [
  { id: 1, name: 'Monthly Summary', description: 'Overview of monthly operations and KPIs', icon: BarChart3 },
  { id: 2, name: 'Crop Performance', description: 'Detailed crop yield and quality analysis', icon: TrendingUp },
  { id: 3, name: 'Financial Report', description: 'Revenue, expenses, and profitability', icon: FileText },
  { id: 4, name: 'Resource Usage', description: 'Water, fertilizer, and labor utilization', icon: PieChart },
];

const scheduledReports = [
  { id: 1, name: 'Weekly Operations', frequency: 'Weekly', lastRun: 'Jul 14, 2024', nextRun: 'Jul 21, 2024' },
  { id: 2, name: 'Monthly Financial', frequency: 'Monthly', lastRun: 'Jun 30, 2024', nextRun: 'Jul 31, 2024' },
  { id: 3, name: 'Quarterly Review', frequency: 'Quarterly', lastRun: 'Apr 1, 2024', nextRun: 'Jul 1, 2024' },
];

export function ReportsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-[18px] font-bold text-white">Reports & Analytics</h1>
          <p className="text-[13px] text-[rgba(255,255,255,0.5)] mt-1">Analyze performance and generate reports</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="btn-secondary h-9 text-[13px]">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
          <Button className="btn-primary h-9 text-[13px]">
            <Plus className="w-4 h-4 mr-2" />
            Create Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiMetrics.map((kpi, index) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-5"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] text-[rgba(255,255,255,0.5)]">{kpi.label}</span>
              <span className={`flex items-center gap-0.5 text-[12px] ${
                kpi.trend === 'up' ? 'text-[#22C55E]' : 'text-[#EF4444]'
              }`}>
                {kpi.trend === 'up' ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {kpi.change}
              </span>
            </div>
            <p className="text-[24px] font-bold text-white">{kpi.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Yield Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-5"
        >
          <h3 className="text-[14px] font-semibold text-white mb-4">Yield Trend (tons/acre)</h3>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={yieldTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="year" stroke="rgba(255,255,255,0.4)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="rgba(255,255,255,0.4)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(30, 41, 59, 0.95)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    fontSize: '12px',
                  }}
                />
                <Bar dataKey="actual" fill="#10B981" radius={[4, 4, 0, 0]} name="Actual" />
                <Bar dataKey="target" fill="rgba(255,255,255,0.1)" radius={[4, 4, 0, 0]} name="Target" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Crop Performance Radar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-5"
        >
          <h3 className="text-[14px] font-semibold text-white mb-4">Crop Performance Analysis</h3>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={cropPerformanceData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="crop" stroke="rgba(255,255,255,0.4)" fontSize={11} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="rgba(255,255,255,0.2)" />
                <Radar name="Yield" dataKey="yield" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                <Radar name="Quality" dataKey="quality" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                <Radar name="Profit" dataKey="profit" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.3} />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(30, 41, 59, 0.95)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    fontSize: '12px',
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              <span className="text-[11px] text-[rgba(255,255,255,0.6)]">Yield</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
              <span className="text-[11px] text-[rgba(255,255,255,0.6)]">Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              <span className="text-[11px] text-[rgba(255,255,255,0.6)]">Profit</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="templates" className="space-y-4">
        <TabsList className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-xl p-1">
          <TabsTrigger value="templates" className="data-[state=active]:bg-[rgba(16,185,129,0.2)] data-[state=active]:text-[#10B981] rounded-lg text-[12px]">Report Templates</TabsTrigger>
          <TabsTrigger value="scheduled" className="data-[state=active]:bg-[rgba(16,185,129,0.2)] data-[state=active]:text-[#10B981] rounded-lg text-[12px]">Scheduled Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="templates">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reportTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-5 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl gradient-emerald flex items-center justify-center mb-4">
                  <template.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-[14px] font-semibold text-white mb-1">{template.name}</h4>
                <p className="text-[12px] text-[rgba(255,255,255,0.5)]">{template.description}</p>
                <Button variant="ghost" className="w-full mt-4 text-[12px] text-[#10B981] hover:bg-[rgba(16,185,129,0.1)]">
                  Generate
                </Button>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="scheduled">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-5"
          >
            <div className="table-glass rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Report Name</th>
                    <th className="text-left">Frequency</th>
                    <th className="text-left">Last Run</th>
                    <th className="text-left">Next Run</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduledReports.map((report) => (
                    <tr key={report.id}>
                      <td className="font-medium text-white">{report.name}</td>
                      <td>
                        <Badge className="badge-neutral">{report.frequency}</Badge>
                      </td>
                      <td className="text-[rgba(255,255,255,0.5)]">{report.lastRun}</td>
                      <td className="text-[rgba(255,255,255,0.5)]">{report.nextRun}</td>
                      <td className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 text-[12px] text-[#10B981] hover:bg-[rgba(16,185,129,0.1)]">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
