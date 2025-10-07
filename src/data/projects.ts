export type ProjectCategory = '3D Modeling' | 'Product Animation' | 'Artwork';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  cover: string;
  images: string[];
  tags: string[];
  year?: string;
  client?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Wireless Headphones',
    category: '3D Modeling',
    description: 'High-fidelity 3D product render showcasing premium wireless headphones with detailed materials and studio lighting.',
    cover: '/src/assets/project-1.jpg',
    images: ['/src/assets/project-1.jpg'],
    tags: ['Product Design', 'Consumer Tech', 'Rendering'],
    year: '2024',
    client: 'AudioTech Co.'
  },
  {
    id: 'project-2',
    title: 'Fluid Dreams',
    category: 'Artwork',
    description: 'Abstract digital artwork exploring fluid dynamics and vibrant color gradients in a contemporary style.',
    cover: '/src/assets/project-2.jpg',
    images: ['/src/assets/project-2.jpg'],
    tags: ['Digital Art', 'Abstract', 'Gradients'],
    year: '2024'
  },
  {
    id: 'project-3',
    title: 'Smartwatch Showcase',
    category: 'Product Animation',
    description: 'Elegant product animation revealing the sophisticated design and premium materials of a modern smartwatch.',
    cover: '/src/assets/project-3.jpg',
    images: ['/src/assets/project-3.jpg'],
    tags: ['Wearables', 'Animation', 'Luxury'],
    year: '2024',
    client: 'TechWear'
  },
  {
    id: 'project-4',
    title: 'Character Model - Leo',
    category: '3D Modeling',
    description: 'Stylized 3D character design with vibrant materials and expressive features for animation projects.',
    cover: '/src/assets/project-4.jpg',
    images: ['/src/assets/project-4.jpg'],
    tags: ['Character Design', 'Stylized', 'Animation Ready'],
    year: '2024'
  },
  {
    id: 'project-5',
    title: 'Luxury Cosmetics',
    category: 'Product Animation',
    description: 'Sophisticated product animation for premium cosmetic bottle with elegant glass materials and soft lighting.',
    cover: '/src/assets/project-5.jpg',
    images: ['/src/assets/project-5.jpg'],
    tags: ['Luxury', 'Beauty', 'Glass Materials'],
    year: '2023',
    client: 'Elegance Beauty'
  },
  {
    id: 'project-6',
    title: 'Floating Islands',
    category: 'Artwork',
    description: 'Surreal landscape illustration featuring floating islands and dreamy purple skies in a fantasy setting.',
    cover: '/src/assets/project-6.jpg',
    images: ['/src/assets/project-6.jpg'],
    tags: ['Concept Art', 'Fantasy', 'Landscape'],
    year: '2023'
  },
  {
    id: 'project-7',
    title: 'Modern Interior',
    category: '3D Modeling',
    description: 'Architectural visualization of a minimalist modern interior space with natural lighting and clean design.',
    cover: '/src/assets/project-7.jpg',
    images: ['/src/assets/project-7.jpg'],
    tags: ['Architecture', 'Interior Design', 'Visualization'],
    year: '2023',
    client: 'Urban Spaces'
  },
  {
    id: 'project-8',
    title: 'Wireless Earbuds',
    category: 'Product Animation',
    description: 'Dynamic product animation showcasing wireless earbuds with smooth opening sequence and premium materials.',
    cover: '/src/assets/project-8.jpg',
    images: ['/src/assets/project-8.jpg'],
    tags: ['Consumer Tech', 'Motion Graphics', 'Product'],
    year: '2023',
    client: 'SoundWave'
  },
  {
    id: 'project-9',
    title: 'Geometric Harmony',
    category: 'Artwork',
    description: 'Contemporary art piece featuring vibrant geometric patterns and gradient colors in a modern composition.',
    cover: '/src/assets/project-9.jpg',
    images: ['/src/assets/project-9.jpg'],
    tags: ['Geometric', 'Contemporary', 'Patterns'],
    year: '2023'
  },
  {
    id: 'project-10',
    title: 'Concept Vehicle',
    category: '3D Modeling',
    description: 'Futuristic vehicle concept design with aerodynamic form and metallic purple finish for automotive showcase.',
    cover: '/src/assets/project-10.jpg',
    images: ['/src/assets/project-10.jpg'],
    tags: ['Automotive', 'Concept Design', 'Futuristic'],
    year: '2023',
    client: 'AutoVision'
  },
  {
    id: 'project-11',
    title: 'Smartphone Exploded View',
    category: 'Product Animation',
    description: 'Technical product animation showing smartphone components in an exploded view with clean composition.',
    cover: '/src/assets/project-11.jpg',
    images: ['/src/assets/project-11.jpg'],
    tags: ['Technical', 'Mobile', 'Exploded View'],
    year: '2023',
    client: 'MobileTech'
  },
  {
    id: 'project-12',
    title: 'Fantasy Creature',
    category: 'Artwork',
    description: 'Detailed digital illustration of a vibrant fantasy creature with intricate design and vivid colors.',
    cover: '/src/assets/project-12.jpg',
    images: ['/src/assets/project-12.jpg'],
    tags: ['Fantasy', 'Character Art', 'Illustration'],
    year: '2023'
  }
];
