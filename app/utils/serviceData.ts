export interface ServiceData {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  metaDescription: string;
  keywords: string[];
  heroImage: string;
  price: {
    basic: number;
    standard: number;
    premium: number;
  };
  deliveryTime: {
    basic: string;
    standard: string;
    premium: string;
  };
  features: {
    basic: string[];
    standard: string[];
    premium: string[];
  };
  benefits: string[];
  workflow: {
    step: number;
    title: string;
    description: string;
    duration: string;
  }[];
  portfolio: {
    title: string;
    category: string;
    image: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: "stream-overlays",
    title: "Stream Overlays",
    category: "Streaming Graphics",
    shortDescription: "Custom overlays that make your stream stand out with professional animations and your unique branding.",
    longDescription: "Transform your streaming experience with our professionally designed overlays that captivate your audience and reflect your unique brand. Our custom overlays include animated elements, chat integration, and responsive designs that work across all streaming platforms.",
    metaDescription: "Professional Twitch overlays and stream graphics designed to make your content stand out. Custom animated overlays, alerts, and branding for streamers.",
    keywords: ["twitch overlays", "stream graphics", "streaming overlays", "custom overlays", "animated overlays", "streamer branding"],
    heroImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: {
      basic: 75,
      standard: 150,
      premium: 300
    },
    deliveryTime: {
      basic: "3-5 days",
      standard: "5-7 days", 
      premium: "7-10 days"
    },
    features: {
      basic: [
        "Static overlay design",
        "Basic webcam frame",
        "Simple chat box",
        "2 revisions included",
        "Source files provided"
      ],
      standard: [
        "Animated overlay package",
        "Custom webcam frame",
        "Animated chat box",
        "Alert animations (3 types)",
        "Starting/BRB screens",
        "5 revisions included",
        "Source files + templates"
      ],
      premium: [
        "Complete animated overlay suite",
        "Custom animated elements",
        "Interactive chat integration",
        "Full alert package (10+ types)",
        "Multiple scene layouts",
        "Custom transitions",
        "Unlimited revisions",
        "24/7 priority support",
        "Installation assistance"
      ]
    },
    benefits: [
      "Professional streaming appearance",
      "Increased viewer engagement",
      "Brand consistency across platforms",
      "Higher production value",
      "Better audience retention"
    ],
    workflow: [
      {
        step: 1,
        title: "Consultation & Brief",
        description: "We discuss your brand, style preferences, and specific requirements for your overlay design.",
        duration: "1 day"
      },
      {
        step: 2,
        title: "Design Concepts",
        description: "Our team creates initial design concepts based on your brief and brand guidelines.",
        duration: "2-3 days"
      },
      {
        step: 3,
        title: "Revisions & Refinement",
        description: "We refine the design based on your feedback until it perfectly matches your vision.",
        duration: "1-2 days"
      },
      {
        step: 4,
        title: "Animation & Integration",
        description: "We add animations and prepare the overlay for seamless integration with your streaming software.",
        duration: "1-2 days"
      },
      {
        step: 5,
        title: "Delivery & Setup",
        description: "Final files are delivered with installation instructions and setup support.",
        duration: "Same day"
      }
    ],
    portfolio: [
      {
        title: "Gaming Overlay - Neon Style",
        category: "Gaming",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Animated neon overlay for gaming streamer"
      },
      {
        title: "Music Stream Overlay",
        category: "Music",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", 
        description: "Minimalist overlay for music streaming"
      },
      {
        title: "Chat Integration Overlay",
        category: "Interactive",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Dynamic overlay with chat integration"
      }
    ],
    faqs: [
      {
        question: "What streaming software do your overlays work with?",
        answer: "Our overlays are compatible with all major streaming software including OBS Studio, Streamlabs, XSplit, and more. We provide setup instructions for each platform."
      },
      {
        question: "Can I customize the colors and branding?",
        answer: "Absolutely! All our overlays are fully customizable to match your brand colors, fonts, and overall aesthetic. We work closely with you to ensure perfect brand alignment."
      },
      {
        question: "Do you provide animated elements?",
        answer: "Yes, our Standard and Premium packages include animated elements like transitions, alerts, and interactive components to make your stream more engaging."
      },
      {
        question: "What file formats do you provide?",
        answer: "We provide overlays in multiple formats including PNG sequences, MOV files with alpha channels, and source files for popular streaming software."
      },
      {
        question: "Do you offer installation support?",
        answer: "Our Premium package includes full installation support. For other packages, we provide detailed setup guides and email support to help you get everything working perfectly."
      }
    ],
    relatedServices: ["video-production", "custom-emotes", "brand-identity"]
  },
  {
    id: "video-production",
    title: "Video Production",
    category: "Content Creation",
    shortDescription: "Engaging intros, outros, and promotional videos that captivate your audience from the first second.",
    longDescription: "Create compelling video content that stands out in today's competitive landscape. Our video production services include animated intros, engaging outros, promotional videos, and complete video editing solutions tailored for content creators.",
    metaDescription: "Professional video production services for YouTube creators. Custom intros, outros, promotional videos, and video editing services.",
    keywords: ["youtube intros", "video production", "animated intros", "video editing", "promotional videos", "outro videos"],
    heroImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=2062&q=80",
    price: {
      basic: 50,
      standard: 125,
      premium: 250
    },
    deliveryTime: {
      basic: "3-4 days",
      standard: "5-7 days",
      premium: "7-12 days"
    },
    features: {
      basic: [
        "15-second intro video",
        "Basic animation effects",
        "Custom text/logo integration",
        "HD 1080p resolution",
        "2 revisions included"
      ],
      standard: [
        "30-second intro + 15-second outro",
        "Advanced animation effects",
        "Custom music integration",
        "4K resolution available",
        "Social media versions",
        "5 revisions included"
      ],
      premium: [
        "Complete video package (intro, outro, transitions)",
        "Cinema-quality animations",
        "Custom music composition",
        "Multiple aspect ratios",
        "Animated lower thirds",
        "Social media templates",
        "Unlimited revisions",
        "Rush delivery available"
      ]
    },
    benefits: [
      "Professional video quality",
      "Improved audience retention", 
      "Consistent brand identity",
      "Higher engagement rates",
      "Platform optimization"
    ],
    workflow: [
      {
        step: 1,
        title: "Project Brief",
        description: "We gather your requirements, brand guidelines, and video specifications.",
        duration: "1 day"
      },
      {
        step: 2,
        title: "Storyboard Creation",
        description: "Our team creates a detailed storyboard outlining the video structure and key scenes.",
        duration: "1-2 days"
      },
      {
        step: 3,
        title: "Animation Production",
        description: "We bring your video to life with professional animation and motion graphics.",
        duration: "3-5 days"
      },
      {
        step: 4,
        title: "Sound Design",
        description: "We add music, sound effects, and audio optimization to enhance the viewing experience.",
        duration: "1-2 days"
      },
      {
        step: 5,
        title: "Final Delivery",
        description: "Complete video package delivered in all required formats and resolutions.",
        duration: "Same day"
      }
    ],
    portfolio: [
      {
        title: "Gaming Channel Intro",
        category: "Gaming",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "High-energy intro for gaming YouTube channel"
      },
      {
        title: "Tech Review Outro",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80",
        description: "Clean, professional outro for tech reviewer"
      },
      {
        title: "Promotional Video",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2039&q=80",
        description: "Product launch promotional video"
      }
    ],
    faqs: [
      {
        question: "What video formats do you deliver?",
        answer: "We deliver videos in MP4, MOV, and AVI formats, with resolutions up to 4K. We can also provide specific formats for different platforms like YouTube, Instagram, or TikTok."
      },
      {
        question: "Can you work with my existing brand guidelines?",
        answer: "Absolutely! We can work with your existing brand colors, fonts, logos, and style guidelines to ensure consistency across all your video content."
      },
      {
        question: "Do you provide background music?",
        answer: "Yes, we include royalty-free background music in our Standard and Premium packages. For Premium clients, we can also create custom music compositions."
      },
      {
        question: "What's the difference between HD and 4K resolution?",
        answer: "HD (1080p) is perfect for most YouTube content, while 4K offers superior quality for high-end productions. We recommend 4K for channels focused on visual content or professional presentations."
      },
      {
        question: "Can you create videos in different aspect ratios?",
        answer: "Yes! We can create videos in various aspect ratios including 16:9 for YouTube, 1:1 for Instagram posts, 9:16 for Stories and TikTok, and custom ratios as needed."
      }
    ],
    relatedServices: ["stream-overlays", "graphics-design", "marketing-materials"]
  },
  {
    id: "custom-emotes",
    title: "Custom Emotes",
    category: "Streaming Graphics",
    shortDescription: "Expressive emotes that build community and engagement across Twitch, Discord, and YouTube.",
    longDescription: "Build a stronger community with custom emotes that represent your brand and personality. Our emote designs are optimized for Twitch, Discord, and YouTube, helping you create memorable moments and inside jokes that bring your audience together.",
    metaDescription: "Custom Twitch emotes and Discord stickers. Professional emote design services for streamers and content creators to build community engagement.",
    keywords: ["twitch emotes", "discord emotes", "custom emotes", "streamer emotes", "emote design", "animated emotes"],
    heroImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    price: {
      basic: 25,
      standard: 60,
      premium: 120
    },
    deliveryTime: {
      basic: "2-3 days",
      standard: "3-5 days",
      premium: "5-7 days"
    },
    features: {
      basic: [
        "3 custom static emotes",
        "28x28, 56x56, 112x112 sizes",
        "Twitch-ready format",
        "2 revisions per emote",
        "Commercial usage rights"
      ],
      standard: [
        "8 custom static emotes",
        "All required sizes included",
        "Discord & YouTube formats",
        "Subscriber badge designs",
        "Emote pack branding",
        "5 revisions per emote",
        "Rush delivery option"
      ],
      premium: [
        "15 custom emotes (static + animated)",
        "Animated GIF versions",
        "Complete emote suite",
        "Subscriber badges & bits",
        "Social media versions",
        "Emote style guide",
        "Unlimited revisions",
        "Priority support"
      ]
    },
    benefits: [
      "Enhanced community engagement",
      "Memorable brand elements",
      "Revenue generation through subscriptions",
      "Cross-platform compatibility",
      "Unique community identity"
    ],
    workflow: [
      {
        step: 1,
        title: "Concept Development",
        description: "We brainstorm emote concepts based on your personality, catchphrases, and community culture.",
        duration: "1 day"
      },
      {
                step: 2,
        title: "Sketch & Design",
        description: "Our artists create initial sketches and digital designs for each emote concept.",
        duration: "1-2 days"
      },
      {
        step: 3,
        title: "Refinement",
        description: "We refine the designs based on your feedback and platform requirements.",
        duration: "1 day"
      },
      {
        step: 4,
        title: "Final Production",
        description: "We create the final emotes in all required sizes and formats for your platforms.",
        duration: "1 day"
      },
      {
        step: 5,
        title: "Delivery & Upload",
        description: "Complete emote package delivered with uploading instructions and guidelines.",
        duration: "Same day"
      }
    ],
    portfolio: [
      {
        title: "Gaming Emote Pack",
        category: "Gaming",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Complete gaming emote set with reactions"
      },
      {
        title: "Animated Subscriber Emotes",
        category: "Animated",
        image: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        description: "Premium animated emotes for subscribers"
      },
      {
        title: "Community Reaction Pack",
        category: "Community",
        image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Popular reaction emotes for chat engagement"
      }
    ],
    faqs: [
      {
        question: "What platforms are your emotes compatible with?",
        answer: "Our emotes are designed to work perfectly with Twitch, Discord, YouTube, and other major platforms. We provide the correct sizes and formats for each platform."
      },
      {
        question: "Can you create animated emotes?",
        answer: "Yes! Our Premium package includes animated emotes. These are perfect for Twitch subscribers and Discord servers that support animated emojis."
      },
      {
        question: "How many revisions are included?",
        answer: "Basic package includes 2 revisions per emote, Standard includes 5 revisions per emote, and Premium includes unlimited revisions until you're completely satisfied."
      },
      {
        question: "Do you help with uploading emotes to platforms?",
        answer: "We provide detailed instructions for uploading emotes to all major platforms. Premium package clients also receive direct assistance with the upload process."
      },
      {
        question: "Can I use the emotes commercially?",
        answer: "Yes, all our emotes come with full commercial usage rights. You can use them across all your platforms and merchandise without any additional fees."
      }
    ],
    relatedServices: ["stream-overlays", "graphics-design", "brand-identity"]
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    category: "Brand Design",
    shortDescription: "Professional graphics for all your branding needs, from business cards to social media posts.",
    longDescription: "Comprehensive graphic design solutions that elevate your brand across all touchpoints. From logo design to complete brand identity systems, we create cohesive visual experiences that resonate with your audience and drive engagement.",
    metaDescription: "Professional graphic design services including logos, business cards, social media graphics, and complete brand identity solutions.",
    keywords: ["graphic design", "logo design", "brand identity", "business cards", "social media graphics", "marketing design"],
    heroImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2039&q=80",
    price: {
      basic: 40,
      standard: 100,
      premium: 200
    },
    deliveryTime: {
      basic: "2-4 days",
      standard: "4-6 days",
      premium: "6-10 days"
    },
    features: {
      basic: [
        "Logo design (3 concepts)",
        "Business card design",
        "Basic brand colors",
        "Standard file formats",
        "3 revisions included"
      ],
      standard: [
        "Complete logo package",
        "Business stationery set",
        "Social media templates",
        "Brand guideline basics",
        "Multiple file formats",
        "5 revisions included"
      ],
      premium: [
        "Complete brand identity system",
        "Logo variations & applications",
        "Complete stationery suite",
        "Social media template library",
        "Comprehensive brand guidelines",
        "Marketing materials templates",
        "Unlimited revisions",
        "Brand consultation included"
      ]
    },
    benefits: [
      "Professional brand image",
      "Consistent visual identity",
      "Increased brand recognition",
      "Higher perceived value",
      "Competitive advantage"
    ],
    workflow: [
      {
        step: 1,
        title: "Brand Discovery",
        description: "We explore your brand values, target audience, and visual preferences through detailed consultation.",
        duration: "1-2 days"
      },
      {
        step: 2,
        title: "Concept Development",
        description: "Our designers create multiple design concepts based on your brand discovery session.",
        duration: "2-3 days"
      },
      {
        step: 3,
        title: "Design Refinement",
        description: "We refine your chosen concept based on feedback and brand requirements.",
        duration: "1-2 days"
      },
      {
        step: 4,
        title: "Brand Applications",
        description: "We apply your finalized design across various brand touchpoints and materials.",
        duration: "2-3 days"
      },
      {
        step: 5,
        title: "Final Delivery",
        description: "Complete brand package delivered with guidelines and all necessary file formats.",
        duration: "1 day"
      }
    ],
    portfolio: [
      {
        title: "Tech Startup Branding",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80",
        description: "Complete brand identity for tech startup"
      },
      {
        title: "Restaurant Logo Design",
        category: "Food & Beverage",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Logo and branding for restaurant chain"
      },
      {
        title: "Social Media Graphics",
        category: "Social Media",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        description: "Social media template library"
      }
    ],
    faqs: [
      {
        question: "What file formats do you provide?",
        answer: "We provide logos and graphics in multiple formats including AI, EPS, PDF, PNG, JPG, and SVG to ensure compatibility across all applications and platforms."
      },
      {
        question: "Do you provide brand guidelines?",
        answer: "Yes! Our Standard package includes basic brand guidelines, while our Premium package includes comprehensive brand guidelines with usage rules, color codes, and application examples."
      },
      {
        question: "Can you design for both print and digital use?",
        answer: "Absolutely! All our designs are created to work perfectly in both print and digital applications, with appropriate color profiles and resolutions for each use case."
      },
      {
        question: "Do you offer trademark research?",
        answer: "While we don't provide legal trademark services, we can advise on design uniqueness and recommend consulting with a trademark attorney for official searches and registration."
      },
      {
        question: "What if I need changes after the project is complete?",
        answer: "We offer post-project support for minor adjustments. For major changes or new applications, we can provide additional services at discounted rates for existing clients."
      }
    ],
    relatedServices: ["brand-identity", "marketing-materials", "video-production"]
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    category: "Brand Design",
    shortDescription: "Complete branding solutions that establish your unique presence across all platforms.",
    longDescription: "Develop a powerful brand identity that sets you apart from the competition. Our comprehensive brand identity services include strategy development, visual identity creation, and brand guideline documentation to ensure consistent application across all touchpoints.",
    metaDescription: "Complete brand identity development services. Professional branding solutions including strategy, visual identity, and brand guidelines for businesses.",
    keywords: ["brand identity", "brand strategy", "visual identity", "brand guidelines", "corporate branding", "brand development"],
    heroImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    price: {
      basic: 150,
      standard: 350,
      premium: 650
    },
    deliveryTime: {
      basic: "5-7 days",
      standard: "7-10 days",
      premium: "10-14 days"
    },
    features: {
      basic: [
        "Brand strategy consultation",
        "Logo design & variations",
        "Color palette selection",
        "Typography selection",
        "Basic brand guidelines",
        "3 revisions included"
      ],
      standard: [
        "Comprehensive brand strategy",
        "Complete logo system",
        "Extended color palette",
        "Typography hierarchy",
        "Brand pattern/texture library",
        "Detailed brand guidelines",
        "Business card & letterhead",
        "5 revisions included"
      ],
      premium: [
        "Full brand identity system",
        "Brand positioning & messaging",
        "Complete visual identity",
        "Brand voice & tone guidelines",
        "Marketing materials templates",
        "Digital brand assets",
        "Brand implementation support",
        "Unlimited revisions",
        "6-month brand consultation"
      ]
    },
    benefits: [
      "Strong brand recognition",
      "Professional credibility",
      "Consistent brand experience",
      "Increased customer loyalty",
      "Competitive differentiation"
    ],
    workflow: [
      {
        step: 1,
        title: "Brand Strategy Session",
        description: "Deep dive into your business goals, target audience, and competitive landscape.",
        duration: "2-3 days"
      },
      {
        step: 2,
        title: "Visual Identity Creation",
        description: "Development of logo, color palette, typography, and visual style elements.",
        duration: "3-4 days"
      },
      {
        step: 3,
        title: "Brand Applications",
        description: "Design of business materials and marketing collateral using the new identity.",
        duration: "2-3 days"
      },
      {
        step: 4,
        title: "Guidelines Documentation",
        description: "Creation of comprehensive brand guidelines for consistent implementation.",
        duration: "2-3 days"
      },
      {
        step: 5,
        title: "Brand Launch Support",
        description: "Assistance with brand implementation and launch across all platforms.",
        duration: "1-2 days"
      }
    ],
    portfolio: [
      {
        title: "E-commerce Brand Identity",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2040&q=80",
        description: "Complete brand identity for online retailer"
      },
      {
        title: "Consulting Firm Rebrand",
        category: "Professional Services",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Brand refresh for consulting company"
      },
      {
        title: "Creative Agency Identity",
        category: "Creative",
        image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Bold brand identity for creative agency"
      }
    ],
    faqs: [
      {
        question: "What's included in brand strategy consultation?",
        answer: "Our brand strategy consultation includes market research, competitor analysis, target audience definition, brand positioning, messaging framework, and strategic recommendations for brand development."
      },
      {
        question: "How detailed are your brand guidelines?",
        answer: "Our brand guidelines are comprehensive documents that include logo usage rules, color specifications, typography guidelines, imagery style, voice and tone guidelines, and application examples across various media."
      },
      {
        question: "Do you help with brand implementation?",
        answer: "Yes! Our Premium package includes brand implementation support to help you roll out your new identity across all touchpoints, from digital platforms to physical materials."
      },
      {
        question: "Can you work with existing brand elements?",
        answer: "Absolutely! We can incorporate existing brand elements that are working well while refreshing and strengthening other aspects of your brand identity."
      },
      {
        question: "What's the difference between logo design and brand identity?",
        answer: "Logo design is just one component of brand identity. Brand identity encompasses your entire visual system including colors, typography, imagery style, brand voice, and how all elements work together to create a cohesive brand experience."
      }
    ],
    relatedServices: ["graphics-design", "marketing-materials", "video-production"]
  },
  {
    id: "marketing-materials",
    title: "Marketing Materials",
    category: "Brand Design",
    shortDescription: "Eye-catching flyers, banners, and promotional materials to grow your audience.",
    longDescription: "Create compelling marketing materials that drive results and grow your audience. From digital ads to print materials, our designs are optimized for conversion and brand consistency across all marketing channels.",
    metaDescription: "Professional marketing materials design including flyers, banners, social media ads, and promotional graphics to boost your marketing campaigns.",
    keywords: ["marketing materials", "flyer design", "banner design", "promotional graphics", "advertising design", "marketing design"],
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
    price: {
      basic: 35,
      standard: 85,
      premium: 175
    },
    deliveryTime: {
      basic: "2-3 days",
      standard: "3-5 days",
      premium: "5-8 days"
    },
    features: {
      basic: [
        "Single marketing piece design",
        "Digital format only",
        "2 design concepts",
        "Standard resolution",
        "3 revisions included"
      ],
      standard: [
        "5 marketing pieces design",
        "Print & digital formats",
        "Multiple size variations",
        "Brand consistency check",
        "Social media adaptations",
        "5 revisions included"
      ],
      premium: [
        "Complete marketing campaign package",
        "10+ marketing pieces",
        "Multi-channel optimization",
        "A/B testing variations",
        "Print-ready files",
        "Marketing strategy consultation",
        "Performance optimization",
        "Unlimited revisions"
      ]
    },
    benefits: [
      "Increased brand visibility",
      "Higher conversion rates",
      "Professional marketing presence",
      "Multi-channel consistency",
      "Cost-effective promotion"
    ],
    workflow: [
      {
        step: 1,
        title: "Campaign Brief",
        description: "We understand your marketing goals, target audience, and campaign objectives.",
        duration: "1 day"
      },
      {
        step: 2,
        title: "Creative Strategy",
        description: "Development of creative concepts and messaging strategy for maximum impact.",
        duration: "1-2 days"
      },
      {
        step: 3,
        title: "Design Creation",
        description: "Professional design of all marketing materials according to your brand guidelines.",
        duration: "2-4 days"
      },
      {
        step: 4,
        title: "Optimization",
        description: "Fine-tuning designs for different platforms and marketing channels.",
        duration: "1-2 days"
      },
      {
        step: 5,
        title: "Final Delivery",
        description: "Complete marketing package delivered in all required formats and specifications.",
        duration: "1 day"
      }
    ],
    portfolio: [
      {
        title: "Event Promotion Campaign",
        category: "Events",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=2112&q=80",
        description: "Complete promotional campaign for music festival"
      },
      {
        title: "Product Launch Materials",
        category: "Product Marketing",
        image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Marketing materials for product launch"
      },
      {
        title: "Social Media Ad Campaign",
        category: "Digital Marketing",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        description: "Multi-platform social media advertising campaign"
      }
    ],
    faqs: [
      {
        question: "What types of marketing materials do you design?",
        answer: "We design a wide range of marketing materials including flyers, brochures, banners, social media ads, email headers, trade show displays, business cards, and promotional graphics for both print and digital use."
      },
      {
        question: "Do you provide print-ready files?",
        answer: "Yes! Our Standard and Premium packages include print-ready files with proper bleeds, color profiles, and specifications for professional printing."
      },
      {
        question: "Can you create materials for different social media platforms?",
        answer: "Absolutely! We create optimized versions for all major social media platforms including Facebook, Instagram, Twitter, LinkedIn, and TikTok, each with proper dimensions and specifications."
      },
      {
        question: "Do you help with marketing strategy?",
        answer: "Our Premium package includes marketing strategy consultation to help you develop effective campaigns and choose the right materials for your target audience and goals."
      },
      {
        question: "What if I need rush delivery?",
        answer: "We offer rush delivery options for urgent projects. Contact us to discuss your timeline and we'll do our best to accommodate your needs with possible rush fees."
      }
    ],
    relatedServices: ["graphics-design", "brand-identity", "video-production"]
  }
];

// Utility functions
export function getAllServices(): ServiceData[] {
  return servicesData;
}

export function getServiceById(id: string): ServiceData | null {
  return servicesData.find(service => service.id === id) || null;
}

export function getServicesByCategory(category: string): ServiceData[] {
  return servicesData.filter(service => service.category === category);
}

export function getRelatedServices(currentServiceId: string, limit: number = 3): ServiceData[] {
  const currentService = getServiceById(currentServiceId);
  if (!currentService) return [];
  
  const relatedServices = servicesData.filter(service => 
    currentService.relatedServices.includes(service.id)
  );
  
  // If we don't have enough related services, fill with services from the same category
  if (relatedServices.length < limit) {
    const categoryServices = servicesData.filter(service => 
      service.category === currentService.category && 
      service.id !== currentServiceId &&
      !relatedServices.some(related => related.id === service.id)
    );
    
    relatedServices.push(...categoryServices.slice(0, limit - relatedServices.length));
  }
  
  return relatedServices.slice(0, limit);
}

export function getServiceCategories(): string[] {
  return [...new Set(servicesData.map(service => service.category))];
}
