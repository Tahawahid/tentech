import React, { useState } from 'react';
import { 
  LayoutDashboard,
  Briefcase,
  Users,
  MessageSquare,
  Star,
  Settings,
  FileText,
  BarChart3,
  Palette,
  Mail,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useLocation, Link } from 'react-router';

interface MenuItem {
  id: string;
  label: string;
  icon: any;
  path?: string;
  children?: MenuItem[];
  badge?: number;
}

export function AdminSidebar() {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(['projects']);

  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/admin/dashboard'
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: Briefcase,
      children: [
        { id: 'all-projects', label: 'All Projects', icon: Briefcase, path: '/admin/projects' },
        { id: 'add-project', label: 'Add Project', icon: Briefcase, path: '/admin/projects/add' },
        { id: 'project-categories', label: 'Categories', icon: Briefcase, path: '/admin/projects/categories' }
      ]
    },
    {
      id: 'services',
      label: 'Services',
      icon: Palette,
      children: [
        { id: 'all-services', label: 'All Services', icon: Palette, path: '/admin/services' },
        { id: 'add-service', label: 'Add Service', icon: Palette, path: '/admin/services/add' },
        { id: 'service-categories', label: 'Categories', icon: Palette, path: '/admin/services/categories' }
      ]
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      icon: FileText,
      path: '/admin/portfolio'
    },
    {
      id: 'clients',
      label: 'Clients',
      icon: Users,
      path: '/admin/clients'
    },
    {
      id: 'inquiries',
      label: 'Inquiries',
      icon: Mail,
      path: '/admin/inquiries',
      badge: 5
    },
    {
      id: 'chat',
      label: 'Chat Sessions',
      icon: MessageSquare,
      path: '/admin/chat',
      badge: 3
    },
    {
      id: 'testimonials',
      label: 'Testimonials',
      icon: Star,
      path: '/admin/testimonials'
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart3,
      path: '/admin/analytics'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      path: '/admin/settings'
    }
  ];

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isActive = (path?: string) => {
    if (!path) return false;
    return location.pathname === path;
  };

  const isParentActive = (children?: MenuItem[]) => {
    if (!children) return false;
    return children.some(child => isActive(child.path));
  };

  const renderMenuItem = (item: MenuItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    const itemIsActive = isActive(item.path) || isParentActive(item.children);

    return (
      <div key={item.id}>
        {hasChildren ? (
          <button
            onClick={() => toggleExpanded(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 transition-colors ${
              itemIsActive ? 'bg-purple-600/20 text-purple-300 border-r-2 border-purple-400' : 'text-gray-300'
            } ${level > 0 ? 'pl-8' : ''}`}
          >
            <item.icon size={20} />
            <span className="flex-1">{item.label}</span>
            {item.badge && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {item.badge}
              </span>
            )}
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
        ) : (
          <Link
            to={item.path || '#'}
            className={`flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors ${
              itemIsActive ? 'bg-purple-600/20 text-purple-300 border-r-2 border-purple-400' : 'text-gray-300'
            } ${level > 0 ? 'pl-8' : ''}`}
          >
            <item.icon size={20} />
            <span className="flex-1">{item.label}</span>
            {item.badge && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {item.badge}
              </span>
            )}
          </Link>
        )}

        {hasChildren && isExpanded && (
          <div className="bg-white/5">
            {item.children!.map(child => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-64 bg-black/30 backdrop-blur-sm border-r border-white/10 min-h-screen">
      <div className="p-4">
        <nav className="space-y-1">
          {menuItems.map(item => renderMenuItem(item))}
        </nav>
      </div>
    </aside>
  );
}