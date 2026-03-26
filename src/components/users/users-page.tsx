'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Plus, 
  Search, 
  Filter,
  MoreHorizontal,
  Shield,
  Mail,
  Phone,
  Calendar,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const userStats = [
  { label: 'Total Users', value: '24', icon: Users, color: '#10B981' },
  { label: 'Active Today', value: '18', icon: CheckCircle, color: '#22C55E' },
  { label: 'Pending Invites', value: '3', icon: Mail, color: '#F59E0B' },
  { label: 'Roles', value: '6', icon: Shield, color: '#3B82F6' },
];

const roles = [
  { id: 1, name: 'Super Admin', users: 1, permissions: 'Full access', color: '#EF4444' },
  { id: 2, name: 'Farm Owner', users: 2, permissions: 'Full farm access', color: '#F59E0B' },
  { id: 3, name: 'Farm Manager', users: 4, permissions: 'Operations management', color: '#10B981' },
  { id: 4, name: 'Agronomist', users: 3, permissions: 'Crop-focused access', color: '#3B82F6' },
  { id: 5, name: 'Field Worker', users: 10, permissions: 'Task execution', color: '#8B5CF6' },
  { id: 6, name: 'Viewer', users: 4, permissions: 'Read-only access', color: '#6B7280' },
];

const users = [
  { id: 1, name: 'John Doe', email: 'john@farm.com', role: 'Super Admin', status: 'active', lastActive: '2 min ago', avatar: 'JD' },
  { id: 2, name: 'Sarah Smith', email: 'sarah@farm.com', role: 'Farm Owner', status: 'active', lastActive: '1 hour ago', avatar: 'SS' },
  { id: 3, name: 'Mike Johnson', email: 'mike@farm.com', role: 'Farm Manager', status: 'active', lastActive: '3 hours ago', avatar: 'MJ' },
  { id: 4, name: 'Emily Brown', email: 'emily@farm.com', role: 'Agronomist', status: 'active', lastActive: '5 min ago', avatar: 'EB' },
  { id: 5, name: 'Tom Wilson', email: 'tom@farm.com', role: 'Field Worker', status: 'inactive', lastActive: '2 days ago', avatar: 'TW' },
  { id: 6, name: 'Lisa Anderson', email: 'lisa@farm.com', role: 'Financial Analyst', status: 'active', lastActive: '30 min ago', avatar: 'LA' },
  { id: 7, name: 'David Lee', email: 'david@farm.com', role: 'Livestock Manager', status: 'pending', lastActive: '-', avatar: 'DL' },
  { id: 8, name: 'Anna White', email: 'anna@farm.com', role: 'Inventory Manager', status: 'active', lastActive: '1 hour ago', avatar: 'AW' },
];

const activityLog = [
  { id: 1, user: 'John Doe', action: 'Updated system settings', time: '10 min ago', type: 'settings' },
  { id: 2, user: 'Sarah Smith', action: 'Added new crop record', time: '1 hour ago', type: 'create' },
  { id: 3, user: 'Mike Johnson', action: 'Assigned task to field workers', time: '2 hours ago', type: 'task' },
  { id: 4, user: 'Emily Brown', action: 'Generated pest report', time: '3 hours ago', type: 'report' },
  { id: 5, user: 'Lisa Anderson', action: 'Processed invoice #1234', time: '4 hours ago', type: 'finance' },
];

export function UsersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-[18px] font-bold text-white">User Management</h1>
          <p className="text-[13px] text-[rgba(255,255,255,0.5)] mt-1">Manage users, roles, and permissions</p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="btn-primary h-9 text-[13px]">
            <Plus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {userStats.map((stat, index) => (
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

      {/* Tabs */}
      <Tabs defaultValue="users" className="space-y-4">
        <TabsList className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-xl p-1">
          <TabsTrigger value="users" className="data-[state=active]:bg-[rgba(16,185,129,0.2)] data-[state=active]:text-[#10B981] rounded-lg text-[12px]">Users</TabsTrigger>
          <TabsTrigger value="roles" className="data-[state=active]:bg-[rgba(16,185,129,0.2)] data-[state=active]:text-[#10B981] rounded-lg text-[12px]">Roles</TabsTrigger>
          <TabsTrigger value="activity" className="data-[state=active]:bg-[rgba(16,185,129,0.2)] data-[state=active]:text-[#10B981] rounded-lg text-[12px]">Activity Log</TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[rgba(255,255,255,0.4)]" />
              <Input placeholder="Search users..." className="input-glass h-9 text-[13px] pl-9" />
            </div>
            <Button variant="secondary" className="btn-secondary h-9 text-[13px]">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Users Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-5"
          >
            <div className="table-glass rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">User</th>
                    <th className="text-left">Role</th>
                    <th className="text-left">Status</th>
                    <th className="text-left">Last Active</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-9 h-9">
                            <AvatarFallback className="gradient-emerald text-white text-[12px]">
                              {user.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-white">{user.name}</p>
                            <p className="text-[11px] text-[rgba(255,255,255,0.4)]">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-[rgba(255,255,255,0.7)]">{user.role}</td>
                      <td>
                        <Badge className={
                          user.status === 'active' ? 'badge-success' :
                          user.status === 'pending' ? 'badge-warning' :
                          'badge-neutral'
                        }>
                          {user.status}
                        </Badge>
                      </td>
                      <td className="text-[rgba(255,255,255,0.5)]">{user.lastActive}</td>
                      <td className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                              <MoreHorizontal className="w-4 h-4 text-[rgba(255,255,255,0.5)]" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="dropdown-glass">
                            <DropdownMenuItem className="dropdown-item">Edit User</DropdownMenuItem>
                            <DropdownMenuItem className="dropdown-item">Change Role</DropdownMenuItem>
                            <DropdownMenuItem className="dropdown-item">Reset Password</DropdownMenuItem>
                            <DropdownMenuItem className="dropdown-item text-[#EF4444]">Deactivate</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="roles">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-5 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${role.color}20` }}
                  >
                    <Shield className="w-5 h-5" style={{ color: role.color }} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-white">{role.name}</h4>
                    <p className="text-[11px] text-[rgba(255,255,255,0.5)]">{role.users} users</p>
                  </div>
                </div>
                <p className="text-[12px] text-[rgba(255,255,255,0.6)]">{role.permissions}</p>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activity">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-5"
          >
            <div className="space-y-3">
              {activityLog.map((log, index) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-[rgba(255,255,255,0.02)]"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="gradient-emerald text-white text-[10px]">
                        {log.user.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-[13px] text-white">
                        <span className="font-medium">{log.user}</span>
                        <span className="text-[rgba(255,255,255,0.5)]"> {log.action}</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] text-[rgba(255,255,255,0.4)]">{log.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
