export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  description: string;
  longDescription: string;
  client: string;
  completionDate: string;
  duration: string;
  tags: string[];
  images: {
    thumbnail: string;
    gallery: string[];
  };
  services: string[];
  results?: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
    rating: number;
  };
  featured: boolean;
  liveUrl: string;
  technologies?: string[];
}

export const portfolioData: PortfolioProject[] = [
  {
    id: "neon-gaming-overlay",
    title: "Neon Gaming Overlay Suite",
    category: "Streaming Graphics",
    subcategory: "Gaming Overlays",
    description: "Complete animated overlay package for professional gaming streamer with 50K+ followers",
    longDescription: "A comprehensive overlay package designed for a professional gaming streamer specializing in FPS games. The design features cyberpunk-inspired neon aesthetics with animated elements that react to stream events. Includes multiple scene layouts, animated alerts, subscriber goals, and custom chat integration.",
    client: "StreamerPro Gaming",
    completionDate: "2024-01-15",
    duration: "2 weeks",
    tags: ["Twitch", "Gaming", "Animation", "Neon", "Cyberpunk"],
    images: {
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    },
    services: ["Stream Overlays", "Custom Graphics"],
    results: [
      "40% increase in viewer engagement",
      "25% growth in subscriber base",
      "Featured on Twitch homepage",
      "Professional streamer partnership secured"
    ],
    testimonial: {
      text: "The overlay completely transformed my stream! My viewers love the animations and the professional look has helped me secure brand partnerships.",
      author: "Alex Thompson",
      role: "Professional Twitch Streamer",
      rating: 5
    },
    featured: true,
    liveUrl: "https://twitch.tv/streamerpro",
    technologies: ["After Effects", "OBS Studio", "Streamlabs"]
  },
  {
    id: "youtube-tech-intro",
    title: "Tech Channel Intro Animation",
    category: "Content Creation",
    subcategory: "YouTube Intros",
    description: "Sleek 15-second intro animation for tech review YouTube channel with 200K subscribers",
    longDescription: "A modern, tech-focused intro animation featuring clean typography, smooth transitions, and technology-inspired visual elements. The design emphasizes the channel's focus on cutting-edge technology reviews and maintains viewer attention with dynamic motion graphics.",
    client: "TechReview Central",
    completionDate: "2024-01-20",
    duration: "1 week",
    tags: ["YouTube", "Technology", "Animation", "Modern", "Clean"],
    images: {
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    },
    services: ["Video Production", "Motion Graphics"],
    results: [
      "15% increase in watch time",
      "Improved brand recognition",
      "Higher click-through rates",
      "Professional credibility boost"
    ],
    testimonial: {
      text: "The intro perfectly captures our brand essence. It's professional, engaging, and our audience loves it!",
      author: "Sarah Chen",
      role: "YouTube Creator",
      rating: 5
    },
    featured: true,
    liveUrl: "https://youtube.com/techreviewcentral",
    technologies: ["After Effects", "Cinema 4D", "Adobe Audition"]
  },
  {
    id: "discord-emote-pack",
    title: "Custom Discord Emote Pack",
    category: "Streaming Graphics",
    subcategory: "Custom Emotes",
    description: "15-piece animated emote collection for gaming community Discord server",
    longDescription: "A comprehensive emote package designed for a large gaming community Discord server. Features both static and animated emotes covering popular reactions, gaming expressions, and community inside jokes. Each emote is optimized for Discord's specifications and maintains clarity at all sizes.",
    client: "GameHub Community",
    completionDate: "2024-01-10",
    duration: "5 days",
    tags: ["Discord", "Emotes", "Gaming", "Animation", "Community"],
    images: {
      thumbnail: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    },
    services: ["Custom Emotes", "Animation"],
    results: [
      "500% increase in emote usage",
      "Higher community engagement",
      "Discord server growth by 30%",
      "Community identity strengthened"
    ],
    featured: false,
    liveUrl: "https://discord.gg/gamehub",
    technologies: ["Photoshop", "After Effects", "Discord API"]
  },
  {
    id: "startup-brand-identity",
    title: "Tech Startup Brand Identity",
    category: "Brand Design",
    subcategory: "Brand Identity",
    description: "Complete brand identity system for AI-powered SaaS startup",
    longDescription: "A comprehensive brand identity project for an emerging AI technology startup. The design system includes logo development, color palette, typography selection, brand guidelines, and application across digital and print materials. The identity reflects innovation, trust, and technological advancement.",
    client: "AIFlow Solutions",
    completionDate: "2024-01-05",
    duration: "3 weeks",
    tags: ["Branding", "Startup", "AI", "Technology", "Identity"],
    images: {
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1515378791036-0648a814c963?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    },
    services: ["Brand Identity", "Logo Design", "Brand Guidelines"],
    results: [
      "Successfully launched brand identity",
      "Increased investor confidence",
      "Professional market presence",
      "Brand consistency across platforms"
    ],
    testimonial: {
      text: "Mascort created a brand identity that perfectly represents our innovative AI solutions. The professional design has been instrumental in our fundraising success.",
      author: "David Park",
      role: "CEO, AIFlow Solutions",
      rating: 5
    },
    featured: true,
    liveUrl: "https://aiflowsolutions.com",
    technologies: ["Adobe Illustrator", "Adobe InDesign", "Figma"]
  },
  {
    id: "restaurant-marketing-campaign",
    title: "Restaurant Marketing Campaign",
    category: "Brand Design",
    subcategory: "Marketing Materials",
    description: "Complete marketing campaign for upscale restaurant chain opening",
    longDescription: "A comprehensive marketing campaign for a new upscale restaurant chain launch. Includes menu design, promotional flyers, social media graphics, outdoor advertising, and digital marketing materials. The design emphasizes luxury dining experience while maintaining approachability.",
    client: "Bella Vista Restaurants",
    completionDate: "2023-12-20",
    duration: "2 weeks",
    tags: ["Restaurant", "Marketing", "Luxury", "Print", "Digital"],
    images: {
      thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    },
    services: ["Marketing Materials", "Graphic Design"],
    results: [
      "Successful restaurant launch",
      "30% higher reservation rate",
      "Strong local market presence",
      "Award for best new restaurant"
    ],
    featured: false,
    liveUrl: "https://bellavistarestaurants.com",
    technologies: ["Adobe Creative Suite", "Print Production"]
  },
  {
    id: "music-artist-visuals",
    title: "Music Artist Visual Identity",
    category: "Content Creation",
    subcategory: "Music Videos",
    description: "Album artwork and music video graphics for indie electronic artist",
    longDescription: "A complete visual identity project for an emerging electronic music artist. Includes album artwork, music video graphics, social media content, and promotional materials. The design captures the ethereal, electronic soundscape with abstract visual elements and vibrant color palettes.",
    client: "Luna Waves",
    completionDate: "2023-12-15",
    duration: "10 days",
    tags: ["Music", "Album Art", "Electronic", "Abstract", "Vibrant"],
    images: {
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    },
    services: ["Graphic Design", "Album Artwork"],
    results: [
      "Album reached #1 on indie charts",
      "Featured on Spotify playlists",
      "Visual identity praised by critics",
      "Artist brand recognition established"
    ],
    testimonial: {
      text: "The visual identity perfectly captures my sound. The artwork has been featured everywhere and really helped establish my brand as an artist.",
      author: "Luna Waves",
      role: "Electronic Music Artist",
      rating: 5
    },
    featured: false,
    liveUrl: "https://lunawaves.bandcamp.com",
    technologies: ["Adobe Photoshop", "Adobe After Effects", "Cinema 4D"]
  }
];

// Utility functions
export function getAllProjects(): PortfolioProject[] {
  return portfolioData;
}

export function getFeaturedProjects(): PortfolioProject[] {
  return portfolioData.filter(project => project.featured);
}

export function getProjectById(id: string): PortfolioProject | null {
  return portfolioData.find(project => project.id === id) || null;
}

export function getProjectsByCategory(category: string): PortfolioProject[] {
  return portfolioData.filter(project => project.category === category);
}

export function getProjectsBySubcategory(subcategory: string): PortfolioProject[] {
  return portfolioData.filter(project => project.subcategory === subcategory);
}

export function getCategories(): string[] {
  return [...new Set(portfolioData.map(project => project.category))];
}

export function getSubcategories(): string[] {
  return [...new Set(portfolioData.map(project => project.subcategory))];
}