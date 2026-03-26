'use client';

import { motion } from 'framer-motion';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  CreditCard,
  FileText,
  Download,
  Plus,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const financialStats = [
  { label: 'Total Revenue', value: '$124,500', change: '+12.5%', trend: 'up', icon: DollarSign, color: '#10B981' },
  { label: 'Total Expenses', value: '$78,200', change: '+8.2%', trend: 'up', icon: CreditCard, color: '#EF4444' },
  { label: 'Net Profit', value: '$46,300', change: '+24.1%', trend: 'up', icon: TrendingUp, color: '#3B82F6' },
  { label: 'Pending Invoices', value: '$12,800', change: '5 invoices', trend: 'neutral', icon: FileText, color: '#F59E0B' },
];

const revenueData = [
  { month: 'Jan', revenue: 45000, expenses: 32000, profit: 13000 },
  { month: 'Feb', revenue: 52000, expenses: 35000, profit: 17000 },
  { month: 'Mar', revenue: 48000, expenses: 30000, profit: 18000 },
  { month: 'Apr', revenue: 61000, expenses: 38000, profit: 23000 },
  { month: 'May', revenue: 55000, expenses: 33000, profit: 22000 },
  { month: 'Jun', revenue: 67000, expenses: 40000, profit: 27000 },
];

const expenseCategories = [
  { name: 'Labor', value: 35, color: '#10B981' },
  { name: 'Equipment', value: 25, color: '#3B82F6' },
  { name: 'Seeds & Supplies', value: 20, color: '#F59E0B' },
  { name: 'Utilities', value: 12, color: '#8B5CF6' },
  { name: 'Other', value: 8, color: '#EC4899' },
];

const recentTransactions = [
  { id: 1, type: 'income', description: 'Wheat sale - Batch #A12', amount: '+$15,400', date: 'Today', category: 'Sales' },
  { id: 2, type: 'expense', description: 'Fertilizer purchase', amount: '-$2,800', date: 'Yesterday', category: 'Supplies' },
  { id: 3, type: 'income', description: 'Livestock sale', amount: '+$8,200', date: '2 days ago', category: 'Sales' },
  { id: 4, type: 'expense', description: 'Equipment maintenance', amount: '-$1,500', date: '3 days ago', category: 'Equipment' },
  { id: 5, type: 'income', description: 'Corn harvest - Field B7', amount: '+$22,100', date: '4 days ago', category: 'Sales' },
];

const pendingInvoices = [
  { id: 'INV-001', client: 'AgriCorp Ltd.', amount: '$8,500', dueDate: 'Jul 20', status: 'pending' },
  { id: 'INV-002', client: 'Fresh Foods Co.', amount: '$12,200', dueDate: 'Jul 25', status: 'overdue' },
  { id: 'INV-003', client: 'Market Direct', amount: '$5,400', dueDate: 'Aug 01', status: 'pending' },
];

export function FinancialPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-[18px] font-bold text-white">Financial Hub</h1>
          <p className="text-[13px] text-[rgba(255,255,255,0.5)] mt-1">Track revenue, expenses, and financial performance</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="btn-secondary h-9 text-[13px]">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="btn-primary h-9 text-[13px]">
            <Plus className="w-4 h-4 mr-2" />
            Add Transaction
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {financialStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-5"
          >
            <div className="flex items-start justify-between">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
              </div>
              <div className={`flex items-center gap-1 text-[12px] ${
                stat.trend === 'up' ? 'text-[#22C55E]' : 
                stat.trend === 'down' ? 'text-[#EF4444]' : 
                'text-[rgba(255,255,255,0.5)]'
              }`}>
                {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : 
                 stat.trend === 'down' ? <ArrowDownRight className="w-3 h-3" /> : null}
                {stat.change}
              </div>
            </div>
            <div className="mt-3">
              <p className="text-[11px] text-[rgba(255,255,255,0.5)]">{stat.label}</p>
              <p className="text-[20px] font-bold text-white mt-1">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 glass-card p-5"
        >
          <h3 className="text-[14px] font-semibold text-white mb-4">Revenue vs Expenses</h3>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.4)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="rgba(255,255,255,0.4)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v/1000}k`} />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(30, 41, 59, 0.95)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    fontSize: '12px',
                  }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                />
                <Area type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={2} fill="url(#colorRev)" name="Revenue" />
                <Area type="monotone" dataKey="expenses" stroke="#EF4444" strokeWidth={2} fill="url(#colorExp)" name="Expenses" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Expense Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-5"
        >
          <h3 className="text-[14px] font-semibold text-white mb-4">Expense Breakdown</h3>
          <div className="h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseCategories}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {expenseCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-2">
            {expenseCategories.map((cat) => (
              <div key={cat.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="text-[12px] text-[rgba(255,255,255,0.6)]">{cat.name}</span>
                </div>
                <span className="text-[12px] font-medium text-white">{cat.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-xl p-1">
          <TabsTrigger value="transactions" className="data-[state=active]:bg-[rgba(16,185,129,0.2)] data-[state=active]:text-[#10B981] rounded-lg text-[12px]">Recent Transactions</TabsTrigger>
          <TabsTrigger value="invoices" className="data-[state=active]:bg-[rgba(16,185,129,0.2)] data-[state=active]:text-[#10B981] rounded-lg text-[12px]">Pending Invoices</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-5"
          >
            <div className="space-y-3">
              {recentTransactions.map((tx, index) => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      tx.type === 'income' ? 'bg-[rgba(34,197,94,0.15)]' : 'bg-[rgba(239,68,68,0.15)]'
                    }`}>
                      {tx.type === 'income' ? (
                        <ArrowUpRight className="w-5 h-5 text-[#22C55E]" />
                      ) : (
                        <ArrowDownRight className="w-5 h-5 text-[#EF4444]" />
                      )}
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-white">{tx.description}</p>
                      <p className="text-[11px] text-[rgba(255,255,255,0.4)]">{tx.category} • {tx.date}</p>
                    </div>
                  </div>
                  <span className={`text-[14px] font-semibold ${
                    tx.type === 'income' ? 'text-[#22C55E]' : 'text-[#EF4444]'
                  }`}>
                    {tx.amount}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="invoices">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-5"
          >
            <div className="table-glass rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Invoice ID</th>
                    <th className="text-left">Client</th>
                    <th className="text-left">Amount</th>
                    <th className="text-left">Due Date</th>
                    <th className="text-left">Status</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingInvoices.map((invoice) => (
                    <tr key={invoice.id}>
                      <td className="font-medium text-white">{invoice.id}</td>
                      <td className="text-[rgba(255,255,255,0.7)]">{invoice.client}</td>
                      <td className="text-white font-medium">{invoice.amount}</td>
                      <td className="text-[rgba(255,255,255,0.5)]">{invoice.dueDate}</td>
                      <td>
                        <Badge className={invoice.status === 'overdue' ? 'badge-error' : 'badge-warning'}>
                          {invoice.status}
                        </Badge>
                      </td>
                      <td className="text-right">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                          <MoreHorizontal className="w-4 h-4 text-[rgba(255,255,255,0.5)]" />
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
