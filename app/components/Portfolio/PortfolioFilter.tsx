import React from 'react';

interface PortfolioFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function PortfolioFilter({ categories, activeCategory, onCategoryChange }: PortfolioFilterProps) {
  const allCategories = ['All', ...categories];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
              : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/10'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}