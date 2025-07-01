import React from 'react';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import type { PortfolioProject } from '../../utils/portfolioData';

interface PortfolioCardProps {
  project: PortfolioProject;
  onProjectClick: (project: PortfolioProject) => void;
}

export function PortfolioCard({ project, onProjectClick }: PortfolioCardProps) {
  return (
    <div className="group relative cursor-pointer" onClick={() => onProjectClick(project)}>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
      
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group-hover:border-opacity-50 transition-all duration-300">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.images.thumbnail}
            alt={project.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </div>
          )}
          
          {/* Category badge */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
            {project.subcategory}
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mb-4 mx-auto w-fit">
                <ExternalLink className="text-white" size={24} />
              </div>
              <p className="text-white font-medium">View Project</p>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <Calendar size={14} />
            <span>{new Date(project.completionDate).toLocaleDateString()}</span>
            <span>•</span>
            <span>{project.duration}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {project.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full"
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-xs text-gray-400">+{project.tags.length - 3}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}