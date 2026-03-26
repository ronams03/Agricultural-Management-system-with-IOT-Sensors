'use client';

import { motion } from 'framer-motion';
import { 
  Plus, 
  Filter, 
  Download,
  Package,
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  Clock,
  MoreHorizontal,
  Warehouse,
  Truck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const inventoryStats = [
  { label: 'Total Items', value: '1,248', icon: Package, color: '#10B981', change: '+12' },
  { label: 'Low Stock', value: '23', icon: AlertTriangle, color: '#EF4444', change: '-5' },
  { label: 'Out of Stock', value: '8', icon: TrendingDown, color: '#F59E0B', change: '+2' },
  { label: 'Pending Orders', value: '15', icon: Truck, color: '#3B82F6', change: '3 arriving today' },
];

const inventoryCategories = [
  { category: 'Seeds', items: 156, value: '$45,200', lowStock: 8 },
  { category: 'Fertilizers', items: 45, value: '$12,800', lowStock: 5 },
  { category: 'Pesticides', items: 32, value: '$8,500', lowStock: 3 },
  { category: 'Equipment', items: 89, value: '$156,000', lowStock: 2 },
  { category: 'Fuel & Oil', items: 12, value: '$6,200', lowStock: 4 },
  { category: 'Tools', items: 234, value: '$18,400', lowStock: 1 },
];

const inventoryItems = [
  { id: 1, name: 'Wheat Seeds (Premium)', category: 'Seeds', stock: 450, unit: 'kg', reorderLevel: 200, status: 'In Stock', value: '$2,340' },
  { id: 2, name: 'NPK Fertilizer 20-20-20', category: 'Fertilizers', stock: 85, unit: 'bags', reorderLevel: 100, status: 'Low Stock', value: '$1,275' },
  { id: 3, name: 'Organic Compost', category: 'Fertilizers', stock: 0, unit: 'tons', reorderLevel: 5, status: 'Out of Stock', value: '$0' },
  { id: 4, name: 'Diesel Fuel', category: 'Fuel & Oil', stock: 2500, unit: 'liters', reorderLevel: 1000, status: 'In Stock', value: '$3,750' },
  { id: 5, name: 'Corn Seeds (Hybrid)', category: 'Seeds', stock: 320, unit: 'kg', reorderLevel: 150, status: 'In Stock', value: '$1,920' },
  { id: 6, name: 'Pesticide A', category: 'Pesticides', stock: 45, unit: 'liters', reorderLevel: 50, status: 'Low Stock', value: '$900' },
];

const pendingOrders = [
  { id: 'PO-001', supplier: 'AgriSupply Co.', items: 'Fertilizers, Seeds', value: '$8,500', status: 'In Transit', eta: '2 days' },
  { id: 'PO-002', supplier: 'FarmTech Inc.', items: 'Equipment parts', value: '$2,200', status: 'Processing', eta: '5 days' },
  { id: 'PO-003', supplier: 'GreenFields Ltd.', items: 'Organic compost', value: '$3,800', status: 'Shipped', eta: '1 day' },
];

export function InventoryPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-[18px] font-bold text-white">Inventory & Equipment</h1>
          <p className="text-[13px] text-[rgba(255,255,255,0.5)] mt-1">Manage stock, supplies, and equipment</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="btn-secondary h-9 text-[13px]">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="btn-primary h-9 text-[13px]">
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {inventoryStats.map((stat, index) => (
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

      {/* Main Content */}
      <Tabs defaultValue="inventory" className="space-y-4">
        <TabsList className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-xl p-1">
          <TabsTrigger value="inventory" className="data-[state=active]:bg-[rgba(16,185,129,0.2)] data-[state=active]:text-[#10B981] rounded-lg text-[12px]">Inventory</TabsTrigger>
          <TabsTrigger value="categories" className="data-[state=active]:bg-[rgba(16,185,129,0.2)] data-[state=active]:text-[#10B981] rounded-lg text-[12px]">Categories</TabsTrigger>
          <TabsTrigger value="orders" className="data-[state=active]:bg-[rgba(16,185,129,0.2)] data-[state=active]:text-[#10B981] rounded-lg text-[12px]">Pending Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="space-y-4">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Input placeholder="Search inventory..." className="input-glass h-9 text-[13px]" />
            </div>
            <Button variant="secondary" className="btn-secondary h-9 text-[13px]">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Inventory Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-5"
          >
            <div className="table-glass rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Item Name</th>
                    <th className="text-left">Category</th>
                    <th className="text-left">Stock</th>
                    <th className="text-left">Status</th>
                    <th className="text-left">Value</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryItems.map((item) => (
                    <tr key={item.id}>
                      <td className="font-medium text-white">{item.name}</td>
                      <td className="text-[rgba(255,255,255,0.7)]">{item.category}</td>
                      <td>
                        <div className="flex items-center gap-2">
                          <span className="text-white">{item.stock}</span>
                          <span className="text-[rgba(255,255,255,0.5)]">{item.unit}</span>
                        </div>
                        {item.stock < item.reorderLevel && (
                          <div className="w-20 mt-1">
                            <Progress value={(item.stock / item.reorderLevel) * 100} className="h-1 bg-[rgba(255,255,255,0.1)]" />
                          </div>
                        )}
                      </td>
                      <td>
                        <Badge className={
                          item.status === 'In Stock' ? 'badge-success' :
                          item.status === 'Low Stock' ? 'badge-warning' :
                          'badge-error'
                        }>
                          {item.status}
                        </Badge>
                      </td>
                      <td className="text-white">{item.value}</td>
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

        <TabsContent value="categories" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {inventoryCategories.map((cat, index) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-5 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-[14px] font-semibold text-white">{cat.category}</h4>
                  {cat.lowStock > 0 && (
                    <Badge className="badge-warning">{cat.lowStock} low</Badge>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[12px] text-[rgba(255,255,255,0.5)]">Items</span>
                    <span className="text-[12px] font-medium text-white">{cat.items}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[12px] text-[rgba(255,255,255,0.5)]">Total Value</span>
                    <span className="text-[12px] font-medium text-white">{cat.value}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          <div className="grid gap-4">
            {pendingOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[14px] font-semibold text-white">{order.id}</h4>
                      <Badge className={
                        order.status === 'In Transit' ? 'badge-info' :
                        order.status === 'Shipped' ? 'badge-success' :
                        'badge-warning'
                      }>
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-[12px] text-[rgba(255,255,255,0.5)] mt-1">{order.supplier}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[14px] font-semibold text-white">{order.value}</p>
                    <p className="text-[12px] text-[rgba(255,255,255,0.5)]">ETA: {order.eta}</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-[rgba(255,255,255,0.06)]">
                  <p className="text-[12px] text-[rgba(255,255,255,0.6)]">{order.items}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
