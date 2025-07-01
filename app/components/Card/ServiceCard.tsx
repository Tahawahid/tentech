import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export function ServiceCard({ title, description, icon: Icon, features }: ServiceCardProps) {
  return (
    <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
          <Icon size={32} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-300">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}