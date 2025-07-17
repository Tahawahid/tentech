import React, { useState, useEffect } from 'react';
import {
  Users,
  Briefcase,
  MessageSquare,
  Star,
  TrendingUp,
  Calendar,
  DollarSign,
  Eye,
  Clock,
  Award,
  ArrowUp,
  ArrowDown,
  MoreVertical,
} from 'lucide-react';

interface DashboardStats {
  totalProjects: number;
  activeClients: number;
  totalRevenue: number;
  avgRating: number;
  pendingInquiries: number;
  activeChatSessions: number;
  completedProjects: number;
  teamMembers: number;
}

interface RecentActivity {
  id: number;
  type: 'project' | 'inquiry' | 'chat' | 'review';
  title: string;
  description: string;
  time: string;
  status?: string;
}

interface ProjectStats {
  name: string;
  completed: number;
  inProgress: number;
  total: number;
}

export function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalProjects: 0,
    activeClients: 0,
    totalRevenue: 0,
    avgRating: 0,
    pendingInquiries: 0,
    activeChatSessions: 0,
    completedProjects: 0,
    teamMembers: 0,
  });

  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [projectStats, setProjectStats] = useState<ProjectStats[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data loading
  useEffect(() => {
    const loadDashboardData = async () => {
      setIsLoading(true);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock stats data
      setStats({
        totalProjects: 1247,
        activeClients: 89,
        totalRevenue: 125400,
        avgRating: 4.9,
        pendingInquiries: 23,
        activeChatSessions: 7,
        completedProjects: 1198,
        teamMembers: 15,
      });

      // Mock recent activity
      setRecentActivity([
        {
          id: 1,
          type: 'project',
          title: 'Stream Overlay Completed',
          description: 'Gaming overlay for StreamerPro finished',
          time: '2 hours ago',
          status: 'completed',
        },
        {
          id: 2,
          type: 'inquiry',
          title: 'New Project Inquiry',
          description: 'Logo design request from TechStartup',
          time: '4 hours ago',
          status: 'pending',
        },
        {
          id: 3,
          type: 'chat',
          title: 'Chat Session Started',
          description: 'Client asking about emote packages',
          time: '6 hours ago',
          status: 'active',
        },
        {
          id: 4,
          type: 'review',
          title: 'New 5-Star Review',
          description: 'Amazing work on the brand identity!',
          time: '1 day ago',
          status: 'completed',
        },
      ]);

      // Mock project stats
      setProjectStats([
        { name: 'Stream Overlays', completed: 245, inProgress: 12, total: 257 },
        { name: 'Logo Design', completed: 189, inProgress: 8, total: 197 },
        { name: 'Video Intros', completed: 156, inProgress: 15, total: 171 },
        { name: 'Custom Emotes', completed: 298, inProgress: 22, total: 320 },
        { name: 'Brand Identity', completed: 87, inProgress: 5, total: 92 },
      ]);

      setIsLoading(false);
    };

    loadDashboardData();
  }, []);

  const StatCard = ({
    title,
    value,
    icon: Icon,
    change,
    changeType = 'positive',
  }: {
    title: string;
    value: string | number;
    icon: any;
    change?: string;
    changeType?: 'positive' | 'negative';
  }) => (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl">
          <Icon className="text-purple-400" size={24} />
        </div>
        {change && (
          <div
            className={`flex items-center gap-1 text-sm ${
              changeType === 'positive' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {changeType === 'positive' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
            {change}
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
      <p className="text-gray-400 text-sm">{title}</p>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-400/30 border-t-purple-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Dashboard{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Overview</span>
          </h1>
          <p className="text-gray-400">Welcome back! Here's what's happening with your business today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Projects"
            value={stats.totalProjects.toLocaleString()}
            icon={Briefcase}
            change="+12%"
            changeType="positive"
          />
          <StatCard
            title="Active Clients"
            value={stats.activeClients}
            icon={Users}
            change="+8%"
            changeType="positive"
          />
          <StatCard
            title="Total Revenue"
            value={`$${stats.totalRevenue.toLocaleString()}`}
            icon={DollarSign}
            change="+15%"
            changeType="positive"
          />
          <StatCard title="Average Rating" value={stats.avgRating} icon={Star} change="+0.2" changeType="positive" />
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Pending Inquiries"
            value={stats.pendingInquiries}
            icon={MessageSquare}
            change="+5"
            changeType="positive"
          />
          <StatCard
            title="Active Chats"
            value={stats.activeChatSessions}
            icon={MessageSquare}
            change="-2"
            changeType="negative"
          />
          <StatCard
            title="Completed Projects"
            value={stats.completedProjects.toLocaleString()}
            icon={Award}
            change="+23"
            changeType="positive"
          />
          <StatCard title="Team Members" value={stats.teamMembers} icon={Users} change="+2" changeType="positive" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Recent Activity</h2>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className="space-y-4">
                {recentActivity.map(activity => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        activity.type === 'project'
                          ? 'bg-blue-500/20 text-blue-400'
                          : activity.type === 'inquiry'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : activity.type === 'chat'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-purple-500/20 text-purple-400'
                      }`}
                    >
                      {activity.type === 'project' && <Briefcase size={16} />}
                      {activity.type === 'inquiry' && <MessageSquare size={16} />}
                      {activity.type === 'chat' && <MessageSquare size={16} />}
                      {activity.type === 'review' && <Star size={16} />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium mb-1">{activity.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{activity.description}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-500 text-xs flex items-center gap-1">
                          <Clock size={12} />
                          {activity.time}
                        </span>
                        {activity.status && (
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              activity.status === 'completed'
                                ? 'bg-green-500/20 text-green-400'
                                : activity.status === 'pending'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-blue-500/20 text-blue-400'
                            }`}
                          >
                            {activity.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                  View All Activity
                </button>
              </div>
            </div>
          </div>

          {/* Project Statistics */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105">
                  Add New Project
                </button>
                <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-colors">
                  View Inquiries
                </button>
                <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-colors">
                  Manage Team
                </button>
                <button className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-colors">
                  Chat Sessions
                </button>
              </div>
            </div>

            {/* Project Stats */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-white mb-4">Project Statistics</h2>
              <div className="space-y-4">
                {projectStats.map((project, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium">{project.name}</span>
                      <span className="text-gray-400 text-xs">
                        {project.completed}/{project.total}
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(project.completed / project.total) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-green-400">{project.completed} completed</span>
                      <span className="text-yellow-400">{project.inProgress} in progress</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="mt-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Revenue Overview</h2>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">7 Days</button>
                <button className="px-3 py-1 bg-white/10 text-gray-400 rounded-full text-sm hover:bg-white/20 transition-colors">
                  30 Days
                </button>
                <button className="px-3 py-1 bg-white/10 text-gray-400 rounded-full text-sm hover:bg-white/20 transition-colors">
                  90 Days
                </button>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="h-64 bg-white/5 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="text-purple-400 mx-auto mb-4" size={48} />
                <p className="text-gray-400">Revenue chart will be implemented here</p>
                <p className="text-gray-500 text-sm mt-2">Integration with Chart.js or similar library</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
