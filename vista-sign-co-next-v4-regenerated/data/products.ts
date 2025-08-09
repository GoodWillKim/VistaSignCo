export type OptionType = 'flat' | 'perSqFt' | 'linear' | 'each';
export type ProductOption = { key: string; label: string; price: number; type: OptionType; };
export type Preset = { w: number; h: number };
export type Product = { slug: string; category: string; name: string; baseSqFtPrice: number; minW: number; minH: number; maxW: number; maxH: number; options: ProductOption[]; description: string; tags?: string[]; presets?: Preset[] };

export const catalog = {
  "categories": [
    {
      "slug": "banners",
      "name": "Vinyl & Fabric Banners"
    },
    {
      "slug": "stands",
      "name": "Banner Stands"
    },
    {
      "slug": "flags",
      "name": "Flags"
    },
    {
      "slug": "tables",
      "name": "Table Covers"
    },
    {
      "slug": "tents",
      "name": "Event Tents"
    },
    {
      "slug": "window",
      "name": "Window Graphics"
    },
    {
      "slug": "wall",
      "name": "Wall Graphics"
    },
    {
      "slug": "floor",
      "name": "Floor Graphics"
    },
    {
      "slug": "rigids",
      "name": "Rigid Signs"
    },
    {
      "slug": "posters",
      "name": "Posters"
    },
    {
      "slug": "decals",
      "name": "Decals & Lettering"
    },
    {
      "slug": "stickers",
      "name": "Stickers & Labels"
    },
    {
      "slug": "magnets",
      "name": "Magnets"
    },
    {
      "slug": "aframe",
      "name": "A-Frames & Sidewalk"
    },
    {
      "slug": "dimensional",
      "name": "Dimensional Letters"
    },
    {
      "slug": "electrical",
      "name": "Lighted Signs"
    }
  ],
  "products": [
    {
      "slug": "vinyl-banner",
      "category": "banners",
      "name": "Vinyl Banner",
      "baseSqFtPrice": 2.5,
      "minW": 12,
      "minH": 12,
      "maxW": 600,
      "maxH": 600,
      "options": [
        {
          "key": "grommets",
          "label": "Grommets",
          "price": 0.25,
          "type": "linear"
        },
        {
          "key": "hem",
          "label": "Hems",
          "price": 0.5,
          "type": "linear"
        },
        {
          "key": "pockets",
          "label": "Pole Pockets",
          "price": 6,
          "type": "flat"
        }
      ],
      "description": "Outdoor-ready 13oz vinyl with vibrant print.",
      "tags": [
        "outdoor",
        "hardware"
      ],
      "presets": [
        {
          "w": 72,
          "h": 36
        },
        {
          "w": 96,
          "h": 48
        }
      ]
    },
    {
      "slug": "mesh-banner",
      "category": "banners",
      "name": "Mesh Banner",
      "baseSqFtPrice": 3.2,
      "minW": 12,
      "minH": 12,
      "maxW": 600,
      "maxH": 600,
      "options": [
        {
          "key": "hem",
          "label": "Hems",
          "price": 0.6,
          "type": "linear"
        },
        {
          "key": "grommets",
          "label": "Grommets",
          "price": 0.25,
          "type": "linear"
        }
      ],
      "description": "Wind-permeable mesh for fences and windy installs.",
      "tags": [
        "outdoor"
      ],
      "presets": [
        {
          "w": 120,
          "h": 48
        }
      ]
    },
    {
      "slug": "fabric-banner",
      "category": "banners",
      "name": "Fabric Banner",
      "baseSqFtPrice": 4.8,
      "minW": 12,
      "minH": 12,
      "maxW": 300,
      "maxH": 300,
      "options": [
        {
          "key": "polepocket",
          "label": "Pole Pockets",
          "price": 6,
          "type": "flat"
        }
      ],
      "description": "Wrinkle-resistant polyester fabric.",
      "tags": [
        "indoor"
      ],
      "presets": [
        {
          "w": 96,
          "h": 36
        }
      ]
    },
    {
      "slug": "step-repeat",
      "category": "banners",
      "name": "Step & Repeat Backdrop",
      "baseSqFtPrice": 6.0,
      "minW": 72,
      "minH": 72,
      "maxW": 144,
      "maxH": 120,
      "options": [
        {
          "key": "stand",
          "label": "Include Stand",
          "price": 45,
          "type": "flat"
        }
      ],
      "description": "Backdrop for events and photo walls.",
      "tags": [
        "indoor",
        "hardware"
      ],
      "presets": [
        {
          "w": 120,
          "h": 96
        }
      ]
    },
    {
      "slug": "retractable-standard",
      "category": "stands",
      "name": "Retractable Banner Stand",
      "baseSqFtPrice": 8.0,
      "minW": 33,
      "minH": 79,
      "maxW": 33,
      "maxH": 81,
      "options": [
        {
          "key": "case",
          "label": "Hard Case",
          "price": 25,
          "type": "flat"
        }
      ],
      "description": "Portable roll-up stand with bag.",
      "tags": [
        "indoor",
        "hardware"
      ],
      "presets": [
        {
          "w": 33,
          "h": 79
        }
      ]
    },
    {
      "slug": "x-stand",
      "category": "stands",
      "name": "X-Stand Banner",
      "baseSqFtPrice": 6.5,
      "minW": 24,
      "minH": 63,
      "maxW": 32,
      "maxH": 71,
      "options": [],
      "description": "Budget-friendly collapsible display.",
      "tags": [
        "indoor",
        "hardware"
      ],
      "presets": [
        {
          "w": 24,
          "h": 63
        }
      ]
    },
    {
      "slug": "feather-flag",
      "category": "flags",
      "name": "Feather Flag",
      "baseSqFtPrice": 6.0,
      "minW": 24,
      "minH": 96,
      "maxW": 36,
      "maxH": 204,
      "options": [
        {
          "key": "cross",
          "label": "Cross Base",
          "price": 15,
          "type": "flat"
        },
        {
          "key": "spike",
          "label": "Ground Spike",
          "price": 10,
          "type": "flat"
        },
        {
          "key": "double",
          "label": "Double-Sided",
          "price": 2.0,
          "type": "perSqFt"
        }
      ],
      "description": "High-visibility flag.",
      "tags": [
        "outdoor",
        "double-sided",
        "hardware"
      ],
      "presets": [
        {
          "w": 30,
          "h": 144
        }
      ]
    },
    {
      "slug": "teardrop-flag",
      "category": "flags",
      "name": "Teardrop Flag",
      "baseSqFtPrice": 6.5,
      "minW": 24,
      "minH": 84,
      "maxW": 36,
      "maxH": 192,
      "options": [
        {
          "key": "cross",
          "label": "Cross Base",
          "price": 15,
          "type": "flat"
        },
        {
          "key": "spike",
          "label": "Ground Spike",
          "price": 10,
          "type": "flat"
        }
      ],
      "description": "Stylish teardrop shape.",
      "tags": [
        "outdoor",
        "hardware"
      ],
      "presets": [
        {
          "w": 30,
          "h": 132
        }
      ]
    },
    {
      "slug": "table-throw-standard",
      "category": "tables",
      "name": "Table Throw",
      "baseSqFtPrice": 5.0,
      "minW": 72,
      "minH": 30,
      "maxW": 144,
      "maxH": 30,
      "options": [
        {
          "key": "fitted",
          "label": "Fitted Style",
          "price": 10,
          "type": "flat"
        }
      ],
      "description": "Loose-drape cover for 6'\u20138'.",
      "tags": [
        "indoor"
      ],
      "presets": [
        {
          "w": 108,
          "h": 30
        }
      ]
    },
    {
      "slug": "pop-up-tent",
      "category": "tents",
      "name": "Pop-Up Tent",
      "baseSqFtPrice": 7.5,
      "minW": 120,
      "minH": 120,
      "maxW": 120,
      "maxH": 120,
      "options": [
        {
          "key": "walls",
          "label": "Add Back Wall",
          "price": 35,
          "type": "flat"
        },
        {
          "key": "sidewalls",
          "label": "Add Side Walls",
          "price": 25,
          "type": "flat"
        }
      ],
      "description": "10x10 canopy.",
      "tags": [
        "outdoor",
        "hardware"
      ],
      "presets": [
        {
          "w": 120,
          "h": 120
        }
      ]
    },
    {
      "slug": "window-perf",
      "category": "window",
      "name": "Window Perf",
      "baseSqFtPrice": 6.5,
      "minW": 12,
      "minH": 12,
      "maxW": 600,
      "maxH": 120,
      "options": [
        {
          "key": "lam",
          "label": "Lamination",
          "price": 1.0,
          "type": "perSqFt"
        }
      ],
      "description": "Perforated vinyl.",
      "tags": [
        "outdoor",
        "lamination"
      ],
      "presets": [
        {
          "w": 96,
          "h": 48
        }
      ]
    },
    {
      "slug": "window-clear",
      "category": "window",
      "name": "Clear Window Vinyl",
      "baseSqFtPrice": 6.0,
      "minW": 12,
      "minH": 12,
      "maxW": 120,
      "maxH": 120,
      "options": [
        {
          "key": "whiteink",
          "label": "White Ink Layer",
          "price": 1.5,
          "type": "perSqFt"
        }
      ],
      "description": "Optically clear with white.",
      "tags": [
        "indoor",
        "lamination"
      ],
      "presets": [
        {
          "w": 36,
          "h": 24
        }
      ]
    },
    {
      "slug": "wall-vinyl",
      "category": "wall",
      "name": "Adhesive Wall Vinyl",
      "baseSqFtPrice": 5.8,
      "minW": 12,
      "minH": 12,
      "maxW": 600,
      "maxH": 120,
      "options": [
        {
          "key": "lam",
          "label": "Lamination",
          "price": 1.0,
          "type": "perSqFt"
        }
      ],
      "description": "Smooth wall graphics.",
      "tags": [
        "indoor",
        "lamination"
      ],
      "presets": [
        {
          "w": 96,
          "h": 48
        }
      ]
    },
    {
      "slug": "floor-graphic",
      "category": "floor",
      "name": "Floor Graphics (Anti-Slip)",
      "baseSqFtPrice": 7.0,
      "minW": 12,
      "minH": 12,
      "maxW": 120,
      "maxH": 120,
      "options": [
        {
          "key": "lam",
          "label": "Slip-Resist Lam",
          "price": 1.25,
          "type": "perSqFt"
        }
      ],
      "description": "Durable floor decals.",
      "tags": [
        "indoor",
        "lamination"
      ],
      "presets": [
        {
          "w": 36,
          "h": 24
        }
      ]
    },
    {
      "slug": "coroplast",
      "category": "rigids",
      "name": "Coroplast Sign",
      "baseSqFtPrice": 3.25,
      "minW": 12,
      "minH": 12,
      "maxW": 48,
      "maxH": 96,
      "options": [
        {
          "key": "stakes",
          "label": "Add H-Stakes",
          "price": 1.25,
          "type": "each"
        },
        {
          "key": "double",
          "label": "Double-Sided",
          "price": 1.0,
          "type": "perSqFt"
        }
      ],
      "description": "Corrugated plastic signs.",
      "tags": [
        "indoor",
        "outdoor",
        "double-sided"
      ],
      "presets": [
        {
          "w": 24,
          "h": 18
        },
        {
          "w": 24,
          "h": 36
        }
      ]
    },
    {
      "slug": "pvc-sintra",
      "category": "rigids",
      "name": "PVC (Sintra) Sign",
      "baseSqFtPrice": 5.5,
      "minW": 8,
      "minH": 8,
      "maxW": 48,
      "maxH": 96,
      "options": [
        {
          "key": "lam",
          "label": "Lamination",
          "price": 1.0,
          "type": "perSqFt"
        }
      ],
      "description": "Rigid PVC sheets.",
      "tags": [
        "indoor",
        "outdoor",
        "lamination"
      ],
      "presets": [
        {
          "w": 24,
          "h": 18
        }
      ]
    },
    {
      "slug": "foamcore",
      "category": "rigids",
      "name": "Foam Board",
      "baseSqFtPrice": 4.0,
      "minW": 8,
      "minH": 8,
      "maxW": 48,
      "maxH": 96,
      "options": [],
      "description": "Lightweight foam board.",
      "tags": [
        "indoor"
      ],
      "presets": [
        {
          "w": 24,
          "h": 18
        }
      ]
    },
    {
      "slug": "acm-dibond",
      "category": "rigids",
      "name": "ACM (Dibond) Sign",
      "baseSqFtPrice": 9.0,
      "minW": 12,
      "minH": 12,
      "maxW": 60,
      "maxH": 120,
      "options": [
        {
          "key": "lam",
          "label": "Lamination",
          "price": 1.25,
          "type": "perSqFt"
        }
      ],
      "description": "Aluminum composite.",
      "tags": [
        "outdoor",
        "lamination"
      ],
      "presets": [
        {
          "w": 24,
          "h": 18
        }
      ]
    },
    {
      "slug": "acrylic-print",
      "category": "rigids",
      "name": "Acrylic Print",
      "baseSqFtPrice": 12.0,
      "minW": 8,
      "minH": 8,
      "maxW": 48,
      "maxH": 96,
      "options": [
        {
          "key": "standoffs",
          "label": "Standoff Hardware",
          "price": 12,
          "type": "flat"
        }
      ],
      "description": "Glossy acrylic.",
      "tags": [
        "indoor",
        "hardware"
      ],
      "presets": [
        {
          "w": 24,
          "h": 24
        }
      ]
    },
    {
      "slug": "poster-satin",
      "category": "posters",
      "name": "Poster (Satin)",
      "baseSqFtPrice": 2.2,
      "minW": 8,
      "minH": 10,
      "maxW": 60,
      "maxH": 96,
      "options": [],
      "description": "Photo-satin posters.",
      "tags": [
        "indoor"
      ],
      "presets": [
        {
          "w": 24,
          "h": 36
        },
        {
          "w": 18,
          "h": 24
        }
      ]
    },
    {
      "slug": "decal-lam",
      "category": "decals",
      "name": "Printed Decal w/ Lam",
      "baseSqFtPrice": 7.5,
      "minW": 4,
      "minH": 4,
      "maxW": 120,
      "maxH": 120,
      "options": [
        {
          "key": "matte",
          "label": "Matte Lamination",
          "price": 0.8,
          "type": "perSqFt"
        }
      ],
      "description": "Durable decals.",
      "tags": [
        "indoor",
        "outdoor",
        "lamination"
      ],
      "presets": [
        {
          "w": 24,
          "h": 18
        }
      ]
    },
    {
      "slug": "stickers-diecut",
      "category": "stickers",
      "name": "Die-Cut Stickers",
      "baseSqFtPrice": 10.0,
      "minW": 1,
      "minH": 1,
      "maxW": 48,
      "maxH": 48,
      "options": [
        {
          "key": "lam",
          "label": "Matte Lamination",
          "price": 0.8,
          "type": "perSqFt"
        }
      ],
      "description": "Custom shape sticker singles.",
      "tags": [
        "indoor"
      ],
      "presets": [
        {
          "w": 3,
          "h": 3
        },
        {
          "w": 4,
          "h": 4
        }
      ]
    },
    {
      "slug": "vehicle-magnet",
      "category": "magnets",
      "name": "Vehicle Magnet",
      "baseSqFtPrice": 7.0,
      "minW": 12,
      "minH": 12,
      "maxW": 48,
      "maxH": 24,
      "options": [
        {
          "key": "round",
          "label": "Rounded Corners",
          "price": 2,
          "type": "flat"
        }
      ],
      "description": "30mil vehicle magnets.",
      "tags": [
        "outdoor"
      ],
      "presets": [
        {
          "w": 24,
          "h": 12
        },
        {
          "w": 36,
          "h": 12
        }
      ]
    },
    {
      "slug": "aframe",
      "category": "aframe",
      "name": "A-Frame Sign",
      "baseSqFtPrice": 8.0,
      "minW": 24,
      "minH": 36,
      "maxW": 24,
      "maxH": 36,
      "options": [
        {
          "key": "reface",
          "label": "Extra Inserts",
          "price": 18,
          "type": "flat"
        }
      ],
      "description": "Sidewalk sign with inserts.",
      "tags": [
        "outdoor",
        "hardware"
      ],
      "presets": [
        {
          "w": 24,
          "h": 36
        }
      ]
    }
  ]
} as unknown as {"categories": any, "products": Product[]};

export const categories = catalog.categories;
export const productsIndex = catalog.products.map(p=>({ slug: p.slug, name: p.name, baseSqFtPrice: p.baseSqFtPrice, category: p.category, tags: p.tags }));

export function productBySlug(slug: string): Product | undefined { return catalog.products.find(p=>p.slug===slug); }
