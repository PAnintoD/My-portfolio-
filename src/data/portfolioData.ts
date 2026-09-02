import { PersonalInfo, Project, SkillCategory, ExperienceItem, NavItem } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: {
    th: "กิตติภัทร วงศ์สุวรรณ",
    en: "Kittiphat Wongsuwan"
  },
  nickname: {
    th: "กาย",
    en: "Kai"
  },
  role: {
    th: "Senior Creative Frontend Developer",
    en: "Senior Creative Frontend Developer"
  },
  secondaryRole: {
    th: "Award-Winning UI/UX Designer & Creative Technologist",
    en: "Award-Winning UI/UX Designer & Creative Technologist"
  },
  heroTagline: {
    th: "สร้างสรรค์ประสบการณ์ดิจิทัลที่หลอมรวมศิลปะสุนทรียภาพแห่งอนาคต โค้ดวิศวกรรมระดับโปรดักชัน และ 3D Interactive WebGL ที่น่าหลงใหล",
    en: "Crafting boundary-pushing digital experiences at the intersection of futuristic aesthetics, production-grade engineering, and immersive 3D WebGL."
  },
  aboutBio: [
    {
      th: "ผมเป็น Creative Developer และ UI/UX Designer ผู้หลงใหลใน Micro-interactions, 3D Web Graphics และ Motion Design ที่ลื่นไหล มีประสบการณ์กว่า 6 ปีในการร่วมงานกับ Tech Startups, Digital Agencies ชั้นนำ และแบรนด์ระดับนานาชาติในการเปลี่ยนไอเดียให้กลายเป็น Product จริงที่ทั้งสวยงามและทรงพลัง",
      en: "I am a Creative Developer and UI/UX Designer obsessed with micro-interactions, 3D web graphics, and buttery-smooth motion design. With 6+ years of experience collaborating with high-growth startups, top-tier design studios, and global enterprises, I bridge the gap between design vision and robust software engineering."
    },
    {
      th: "หลักการทำงานของผมคือ 'Futuristic Minimalism' — การผสมผสานความเรียบง่าย คลีน อ่านง่าย เข้ากับลูกเล่นเทคโนโลยีล้ำสมัย มุ่งเน้น Performance คะแนน Lighthouse สูง การเข้าถึง (Accessibility) และรองรับทุกขนาดหน้าจออย่างไร้รอยต่อ",
      en: "My design philosophy centers on 'Futuristic Minimalism' — merging ultra-clean legibility and generous negative space with avant-garde interactive technology. I prioritize 60fps performance, stellar Lighthouse scores, accessibility (WCAG), and responsive finesse."
    }
  ],
  location: {
    th: "กรุงเทพมหานคร, ประเทศไทย (พร้อมทำงาน Remote ทั่วโลก)",
    en: "Bangkok, Thailand (Available for Global Remote & Hybrid)"
  },
  status: {
    th: "พร้อมรับงานโปรเจกต์ใหม่ & Freelance",
    en: "Available for Q3/Q4 Projects & High-Impact Contracts"
  },
  email: "kittiphat.creative@gmail.com",
  github: "https://github.com/kittiphat-dev",
  linkedin: "https://linkedin.com/in/kittiphat-wongsuwan",
  stats: [
    {
      value: "6+",
      label: {
        th: "ปีแห่งประสบการณ์",
        en: "Years of Experience"
      },
      sublabel: {
        th: "Creative & Engineering",
        en: "Creative & Engineering"
      }
    },
    {
      value: "45+",
      label: {
        th: "โปรเจกต์ที่ส่งมอบ",
        en: "Shipped Projects"
      },
      sublabel: {
        th: "Production Ready",
        en: "Production Ready"
      }
    },
    {
      value: "8+",
      label: {
        th: "รางวัล & การยอมรับ",
        en: "Design & Dev Awards"
      },
      sublabel: {
        th: "Awwwards / FWA / CSSDA",
        en: "Awwwards / FWA Nominee"
      }
    },
    {
      value: "99.8%",
      label: {
        th: "ความพึงพอใจของลูกค้า",
        en: "Client Satisfaction"
      },
      sublabel: {
        th: "จาก 30+ องค์กรชั้นนำ",
        en: "From 30+ Global Clients"
      }
    }
  ],
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/kittiphat-dev",
      username: "@kittiphat-dev",
      iconName: "Github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/kittiphat-wongsuwan",
      username: "Kittiphat Wongsuwan",
      iconName: "Linkedin"
    },
    {
      platform: "X / Twitter",
      url: "https://twitter.com/kittiphat_dev",
      username: "@kittiphat_dev",
      iconName: "Twitter"
    },
    {
      platform: "Dribbble",
      url: "https://dribbble.com/kittiphat",
      username: "kittiphat",
      iconName: "Dribbble"
    }
  ]
};

export const navItems: NavItem[] = [
  {
    id: "home",
    label: { th: "หน้าแรก", en: "Home" },
    href: "#home"
  },
  {
    id: "about",
    label: { th: "เกี่ยวกับฉัน", en: "About" },
    href: "#about"
  },
  {
    id: "skills",
    label: { th: "ทักษะและความเชี่ยวชาญ", en: "Skills" },
    href: "#skills"
  },
  {
    id: "projects",
    label: { th: "ผลงานเด่น", en: "Projects" },
    href: "#projects"
  },
  {
    id: "experience",
    label: { th: "ประสบการณ์", en: "Experience" },
    href: "#experience"
  },
  {
    id: "contact",
    label: { th: "ติดต่อ", en: "Contact" },
    href: "#contact"
  }
];

export const projects: Project[] = [
  {
    id: "aetheria-audio",
    title: "Aetheria Spatial Audio",
    tagline: {
      th: "เว็บแอปพลิเคชัน 3D WebGL สร้างคลื่นเสียงแบบอินเทอร์แอคทีฟแบบเรียลไทม์",
      en: "Real-time 3D WebGL spatial sound visualizer and generative synthesizer"
    },
    category: {
      th: "Creative WebGL / 3D Audio",
      en: "Creative WebGL / 3D Audio"
    },
    description: {
      th: "ระบบจำลองและแสดงผลคลื่นเสียง 3 มิติในเบราว์เซอร์ ประมวลผล Web Audio API ร่วมกับ Three.js Custom GLSL Shaders ตอบสนองต่อคลื่นเสียงแบบ 60fps",
      en: "Browser-based 3D spatial audio visualizer combining Web Audio API with Three.js custom GLSL shaders, delivering fluid 60fps reactive acoustics."
    },
    fullOverview: {
      th: "Aetheria Audio ถูกออกแบบเพื่อทดลองขีดจำกัดของ Web Audio API และ Three.js Shaders โดยแปลงคลื่นความถี่เสียงเป็นรูปทรง Mesh พลวัตแบบอินเทอร์แอคทีฟ ผู้ใช้สามารถปรับแต่ง Reverb, Spatial Panning และความหนาแน่นของอนุภาคได้ตามใจชอบ พร้อมส่งออกการตั้งค่าเป็น Audio Preset",
      en: "Aetheria Audio pushes the boundaries of Web Audio API and procedural Three.js shaders, translating acoustic frequencies into dynamic geometry. Users can modulate reverb, spatial panning, and particle density in real time, saving customized auditory environments."
    },
    challenges: [
      {
        th: "การซิงค์ข้อมูล Fourier Transform จาก Web Audio API เข้าสู่ Custom Vertex Shader โดยไม่ทำให้เฟรมเรตตก",
        en: "Synchronizing FFT frequency buffers from Web Audio API into custom vertex shaders without inducing frame drops."
      },
      {
        th: "การรักษาประสิทธิภาพ 60fps บนอุปกรณ์พกพาที่มี GPU จำกัด",
        en: "Maintaining consistent 60fps on mobile devices with constrained GPU resources."
      }
    ],
    solutions: [
      {
        th: "ใช้ DataTexture ในการส่งค่า Frequency Bin เข้า GPU โดยตรง ลด Overhead บน JavaScript Main Thread",
        en: "Employed floating-point DataTextures to pipe frequency bins straight to the GPU, bypassing main-thread CPU bottlenecks."
      },
      {
        th: "สร้าง Level of Detail (LOD) อัจฉริยะ ปรับลดจำนวนจุด Mesh อัตโนมัติตาม Hardware Concurrency",
        en: "Implemented an adaptive Level of Detail (LOD) system that dynamically adjusts particle counts based on device capability."
      }
    ],
    techStack: ["Next.js", "Three.js", "GLSL Shaders", "Web Audio API", "TypeScript", "Tailwind CSS"],
    metrics: "+140% User Session Time • FWA Site of the Day Nominee",
    liveUrl: "https://aetheria-audio-demo.vercel.app",
    githubUrl: "https://github.com/kittiphat-dev/aetheria-audio",
    featured: true,
    accentColor: "#00F5D4",
    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
    year: "2025",
    role: {
      th: "Lead Creative Developer & UI Architect",
      en: "Lead Creative Developer & UI Architect"
    }
  },
  {
    id: "nexus-protocol",
    title: "Nexus Decentralized Exchange",
    tagline: {
      th: "แพลตฟอร์มเทรดดิ้งยุคอนาคตด้วยดีไซน์ Futuristic Glassmorphism และ Real-time WebSocket",
      en: "Futuristic institutional trading terminal with real-time WebSockets and sub-millisecond chart rendering"
    },
    category: {
      th: "FinTech / High-Frequency Dashboard",
      en: "FinTech / High-Frequency Dashboard"
    },
    description: {
      th: "แดชบอร์ดการเงินและการเทรดระดับสถาบัน โดดเด่นด้วย Dark Minimalist Layout, กราฟเชิงโต้ตอบความเร็วสูง และสถาปัตยกรรม WebSocket ที่อัปเดตข้อมูลราคาระดับมิลลิวินาที",
      en: "An institutional-grade trading interface boasting futuristic dark glassmorphism, hyper-fast canvas charting, and zero-latency WebSocket live updates."
    },
    fullOverview: {
      th: "Nexus Protocol สร้างขึ้นเพื่อลบภาพจำของแดชบอร์ดหุ้นที่ซับซ้อนและเชย ด้วยการนำเสนออินเทอร์เฟซแบบโมดูลาร์ ผู้ใช้สามารถปรับเปลี่ยนเลย์เอาต์ตามสไตล์การเทรด พร้อมระบบแจ้งเตือนอัจฉริยะ และการประมวลผลออเดอร์บุ๊ค 10,000+ รายการต่อวินาที",
      en: "Nexus Protocol reimagines financial terminals with an ultra-sleek, modular workspace. Traders customize widget layouts effortlessly while observing 10,000+ live order-book transactions per second via hardware-accelerated Canvas rendering."
    },
    challenges: [
      {
        th: "การเรนเดอร์กราฟแท่งเทียนและ Depth Chart แบบเรียลไทม์โดย React ไม่เกิด Re-render ที่ไม่จำเป็น",
        en: "Rendering high-frequency candlestick and depth charts without triggering cascading React re-renders."
      },
      {
        th: "การจัดการ State จัดเก็บข้อมูลขนาดใหญ่ในระดับ Global Memory",
        en: "Managing high-volume streaming state with strict memory leak prevention."
      }
    ],
    solutions: [
      {
        th: "สร้าง Custom Canvas Engine แยกออกจาก React Tree ควบคุมผ่าน Zustand Transient Subscriptions",
        en: "Engineered an isolated HTML5 Canvas charting renderer governed by Zustand transient state subscriptions."
      },
      {
        th: "ใช้ Virtualized List ร่วมกับ Web Workers ในการคำนวณและกรองข้อมูลธุรกรรม",
        en: "Utilized Web Workers to offload heavy aggregation arithmetic and virtualized lists for smooth scrolling."
      }
    ],
    techStack: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Zustand", "HTML5 Canvas", "WebSockets"],
    metrics: "45K+ Daily Active Users • 99.99% Uptime",
    liveUrl: "https://nexus-dex-preview.vercel.app",
    githubUrl: "https://github.com/kittiphat-dev/nexus-protocol",
    featured: true,
    accentColor: "#8B5CF6",
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    year: "2024",
    role: {
      th: "Senior Frontend Engineer & Design System Lead",
      en: "Senior Frontend Engineer & Design System Lead"
    }
  },
  {
    id: "cyberpulse-ai",
    title: "CyberPulse Studio AI",
    tagline: {
      th: "Generative AI Canvas สำหรับนักออกแบบและคอนเทนต์ครีเอเตอร์",
      en: "Infinite generative canvas & multi-modal AI co-pilot for high-velocity design teams"
    },
    category: {
      th: "AI Platform / Infinite Canvas",
      en: "AI Platform / Infinite Canvas"
    },
    description: {
      th: "ผืนผ้าใบอินฟินิทสำหรับสั่งการ AI ปรับแต่งภาพ เวกเตอร์ และเนื้อหาได้แบบอิสระ รองรับ Node-based Workflow และการร่วมมือกันแบบ Real-time",
      en: "An infinite collaborative canvas empowering designers to generate, edit, and orchestrate multi-modal AI workflows with intuitive node-based graphs."
    },
    fullOverview: {
      th: "CyberPulse เชื่อมโยงโมเดล Diffusion และ LLM เข้าสู่อินเทอร์เฟซแบบ Visual Node Canvas คล้ายกับโปรแกรมระดับโปร ช่วยให้ครีเอทีฟสามารถต่อยอดไอเดีย เชื่อมท่อการสร้างภาพและข้อความได้อย่างอิสระ มีระบบ History Scrubbing และ Versioning ที่แม่นยำ",
      en: "CyberPulse bridges generative diffusion and multi-modal models into a visual node canvas, giving creative teams unconstrained spatial control over prompt chaining, asset generation, and version histories."
    },
    challenges: [
      {
        th: "การทำ Infinite Pan & Zoom แคนวาสที่มีวัตถุหลายร้อยชิ้นให้คงความลื่นไหลระดับ 60fps",
        en: "Executing flawless infinite zoom and panning on a canvas hosting hundreds of dynamic media nodes."
      }
    ],
    solutions: [
      {
        th: "ใช้ Spatial Indexing (R-Tree) เพื่อคำนวณ Viewport Culling เรนเดอร์เฉพาะโหนดที่อยู่ในสายตาของผู้ใช้",
        en: "Implemented R-Tree spatial partitioning for viewport culling, rendering only elements visible in the camera frustum."
      }
    ],
    techStack: ["React 19", "Next.js", "Framer Motion", "Tailwind CSS", "Fabric.js", "Supabase"],
    metrics: "Featured on Product Hunt #2 Product of the Day",
    liveUrl: "https://cyberpulse-ai.vercel.app",
    githubUrl: "https://github.com/kittiphat-dev/cyberpulse-canvas",
    featured: true,
    accentColor: "#3B82F6",
    gradient: "from-blue-500/20 via-sky-500/10 to-transparent",
    year: "2024",
    role: {
      th: "Full-Stack Frontend & UX Specialist",
      en: "Full-Stack Frontend & UX Specialist"
    }
  },
  {
    id: "chronos-luxury",
    title: "Chronos Haute Horlogerie",
    tagline: {
      th: "เว็บอีคอมเมิร์ซนาฬิกาหรูสไตล์มินิมอล พร้อมเครื่องปรับแต่งนาฬิกา 3D แบบเรียลไทม์",
      en: "Ultra-luxury timepiece boutique featuring real-time 3D material customization and smooth page transitions"
    },
    category: {
      th: "Luxury E-Commerce / 3D Configurator",
      en: "Luxury E-Commerce / 3D Configurator"
    },
    description: {
      th: "ประสบการณ์เลือกซื้อนาฬิการะดับไฮเอนด์ด้วยการเรนเดอร์วัสดุทองคำ ไทเทเนียม และแซฟไฟร์เสมือนจริงแบบเรียลไทม์บนเบราว์เซอร์ พร้อมระบบสั่งตัดตามสั่ง",
      en: "An evocative digital boutique enabling discerning collectors to inspect, rotate, and customize horological complications with photorealistic PBR lighting."
    },
    fullOverview: {
      th: "Chronos นิยามนิยามใหม่ของร้านค้าดิจิทัลหรูหรา ด้วยการใช้ Micro-animations ที่ประณีต การโหลดโมเดล 3D แบบ Progressive และการจัดแสง Physically Based Rendering (PBR) ที่สะท้อนวัสดุขัดเงาอย่างสมจริงที่สุด",
      en: "Chronos elevates luxury online retail with progressive 3D model streaming, physically based materials mimicking brushed metals and anti-reflective sapphire crystal, paired with frictionless checkout ergonomics."
    },
    challenges: [
      {
        th: "ไฟล์โมเดล 3D คุณภาพสูงมีขนาดใหญ่ ทำให้เวลาโหลดหน้าแรกช้า",
        en: "High-resolution timepiece 3D models initially bloated download payloads."
      }
    ],
    solutions: [
      {
        th: "บีบอัดโมเดลด้วย Draco Compression และ KTX2 Basis Universal Textures ลดขนาดลงถึง 78%",
        en: "Applied Draco geometry compression and KTX2 Basis Universal texture encoding, slashing asset size by 78%."
      }
    ],
    techStack: ["Next.js", "React Three Fiber", "Drei", "Tailwind CSS", "Stripe API", "Framer Motion"],
    metrics: "+320% Online Inquiries • 1.2s First Contentful Paint",
    liveUrl: "https://chronos-luxury.vercel.app",
    githubUrl: "https://github.com/kittiphat-dev/chronos-luxury",
    featured: true,
    accentColor: "#EAB308",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    year: "2023",
    role: {
      th: "Creative Director & Lead Frontend",
      en: "Creative Director & Lead Frontend"
    }
  },
  {
    id: "kroma-design-system",
    title: "Kroma Enterprise UI System",
    tagline: {
      th: "ดีไซน์ซิสเต็มและคลังคอมโพเนนต์ระดับองค์กร รองรับการเข้าถึง WCAG 2.1 AAA",
      en: "Comprehensive enterprise design system & accessible component token engine"
    },
    category: {
      th: "Design System / Open Source",
      en: "Design System / Open Source"
    },
    description: {
      th: "ระบบการออกแบบที่สร้างขึ้นเพื่อทีมพัฒนาขนาดใหญ่ มีส่วนประกอบ UI กว่า 70+ ชิ้น ควบคุมด้วย Design Tokens, รองรับ Keyboard Navigation 100% และมี Dark/Light Mode สมบูรณ์แบบ",
      en: "A design system built for scale with 70+ accessible UI components, governed by design tokens, fully keyboard-navigable, and boasting 100% WCAG AAA contrast compliance."
    },
    fullOverview: {
      th: "Kroma ได้รับการยอมรับและนำไปใช้งานในโปรดักต์ระดับองค์กร 12 แห่ง ช่วยลดเวลาการพัฒนา UI ลงถึง 40% มีเอกสาร Storybook โต้ตอบได้ และระบบ automated visual regression testing",
      en: "Adopted across 12 enterprise products, Kroma reduced sprint UI velocity by 40%. It ships with interactive Storybook documentation, Figma synchronization tokens, and automated Playwright visual testing."
    },
    challenges: [
      {
        th: "การผสานดีไซน์โทเคนระหว่าง Figma Tokens Studio และ Tailwind CSS ให้อัปเดตอัตโนมัติ",
        en: "Automating bi-directional token synchronization between Figma and Tailwind configuration."
      }
    ],
    solutions: [
      {
        th: "สร้าง GitHub Action CI Pipeline ดึงข้อมูลโทเคน JSON แล้ว Generate เป็น CSS Variables และ Tailwind Plugin อัตโนมัติ",
        en: "Engineered a GitHub Actions pipeline parsing JSON design tokens into CSS variables and typed Tailwind utilities on push."
      }
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Radix UI", "Jest"],
    metrics: "2.5K+ GitHub Stars • Used in 12 Enterprise Products",
    liveUrl: "https://kroma-ui.vercel.app",
    githubUrl: "https://github.com/kittiphat-dev/kroma-design-system",
    featured: false,
    accentColor: "#10B981",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    year: "2023",
    role: {
      th: "Design System Architect",
      en: "Design System Architect"
    }
  },
  {
    id: "siamcraft-ar",
    title: "SiamCraft WebXR Cultural Heritage",
    tagline: {
      th: "ประสบการณ์ Augmented Reality บนเว็บเพื่ออนุรักษ์มรดกสถาปัตยกรรมไทย",
      en: "WebXR augmented reality experience preserving traditional Thai architectural heritage"
    },
    category: {
      th: "WebXR / Cultural Tech",
      en: "WebXR / Cultural Tech"
    },
    description: {
      th: "การท่องเที่ยวเชิงวัฒนธรรมรูปแบบใหม่บนเบราว์เซอร์ ผู้ใช้สามารถวางโมเดลพระอุโบสถและลายไทยโบราณลงในพื้นที่จริงผ่านกล้องสมาร์ตโฟนโดยไม่ต้องลงแอปพลิเคชัน",
      en: "App-free augmented reality on mobile web, allowing users to project and explore traditional Thai architectural temples and intricate patterns in their physical living space."
    },
    fullOverview: {
      th: "โครงการ SiamCraft ผสานเทคโนโลยี WebXR เข้ากับคุณค่าทางประวัติศาสตร์ โดยร่วมมือกับนักโบราณคดีในการสแกน 3D Photogrammetry และปรับแต่งให้รันบนเว็บได้รวดเร็วทันใจ พร้อมเสียงบรรยายสองภาษา",
      en: "SiamCraft synthesizes WebXR with historical preservation. Collaborating with cultural archivists, photogrammetric scans were optimized for instant web streaming with bilingual spatial narration."
    },
    challenges: [
      {
        th: "การรองรับเทคโนโลยี WebXR Device API ข้ามเบราว์เซอร์ทั้ง iOS QuickLook และ Android SceneViewer",
        en: "Achieving seamless cross-platform WebXR compatibility spanning iOS USDZ QuickLook and Android SceneViewer."
      }
    ],
    solutions: [
      {
        th: "สร้าง Fallback Polyfill อัตโนมัติ ตรวจจับเบราว์เซอร์และเสิร์ฟไฟล์ GLTF หรือ USDZ พร้อมสลับเป็น 3D Orbit Controls หากไม่มีเซ็นเซอร์ AR",
        en: "Devised an adaptive loader polyfill dynamically dispatching GLTF/USDZ or falling back to high-fidelity 3D orbit viewer."
      }
    ],
    techStack: ["WebXR API", "Three.js", "Next.js", "TypeScript", "Tailwind CSS"],
    metrics: "120K+ AR Views • National Creative Economy Award",
    liveUrl: "https://siamcraft-ar.vercel.app",
    githubUrl: "https://github.com/kittiphat-dev/siamcraft-ar",
    featured: false,
    accentColor: "#F43F5E",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    year: "2023",
    role: {
      th: "Creative Technologist & 3D Artist",
      en: "Creative Technologist & 3D Artist"
    }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: {
      th: "Frontend Engineering",
      en: "Frontend Engineering"
    },
    description: {
      th: "สถาปัตยกรรมฟรอนต์เอนด์ยุคใหม่ เน้น Performance และโครงสร้างโค้ดที่ยั่งยืน",
      en: "Modern frontend architecture focused on extreme performance, resilience, and clean code."
    },
    skills: [
      {
        name: "Next.js (App Router / RSC)",
        level: "Expert",
        description: { th: "Server Components, Server Actions, Caching, Parallel Routes", en: "Server Components, Server Actions, Caching, Parallel Routes" },
        iconName: "Globe"
      },
      {
        name: "React 19 & TypeScript",
        level: "Expert",
        description: { th: "Strict Type Safety, Hooks Architecture, Concurrent Mode", en: "Strict Type Safety, Hooks Architecture, Concurrent Mode" },
        iconName: "Code2"
      },
      {
        name: "Tailwind CSS (v3 / v4)",
        level: "Expert",
        description: { th: "Modern Utility-First, Custom Design Tokens, Fluid Typography", en: "Modern Utility-First, Custom Design Tokens, Fluid Typography" },
        iconName: "Palette"
      },
      {
        name: "State Management",
        level: "Advanced",
        description: { th: "Zustand, React Query (TanStack), Context API", en: "Zustand, React Query (TanStack), Context API" },
        iconName: "Cpu"
      }
    ]
  },
  {
    id: "creative-3d",
    title: {
      th: "Creative & 3D Web",
      en: "Creative & 3D Web"
    },
    description: {
      th: "การผสมผสานกราฟิก 3 มิติ และ Motion Design เพื่อสร้างความประทับใจระดับรางวัล",
      en: "Harmonizing 3D graphics and butter-smooth motion for award-caliber experiences."
    },
    skills: [
      {
        name: "Three.js & React Three Fiber",
        level: "Advanced",
        description: { th: "WebGL Shaders, PBR Materials, Post-processing, Math Animations", en: "WebGL Shaders, PBR Materials, Post-processing, Math Animations" },
        iconName: "Layers"
      },
      {
        name: "Framer Motion & GSAP",
        level: "Expert",
        description: { th: "ScrollTrigger, Micro-interactions, Physics Springs, Staggers", en: "ScrollTrigger, Micro-interactions, Physics Springs, Staggers" },
        iconName: "Sparkles"
      },
      {
        name: "Custom GLSL Shaders",
        level: "Proficient",
        description: { th: "Procedural Noise, Vertex Displacements, Liquid Ripple Effects", en: "Procedural Noise, Vertex Displacements, Liquid Ripple Effects" },
        iconName: "Activity"
      },
      {
        name: "Audio Visualization",
        level: "Advanced",
        description: { th: "Web Audio API, Real-time Frequency FFT Analysis, Spatial Sound", en: "Web Audio API, Real-time Frequency FFT Analysis, Spatial Sound" },
        iconName: "Volume2"
      }
    ]
  },
  {
    id: "design-ux",
    title: {
      th: "UI/UX & Design Systems",
      en: "UI/UX & Design Systems"
    },
    description: {
      th: "การออกแบบประสบการณ์ผู้ใช้ที่เรียบหรู ใช้งานง่าย และได้มาตรฐานสากล",
      en: "Curating sleek, intuitive ergonomics grounded in human-computer interaction standards."
    },
    skills: [
      {
        name: "Figma & Design Tokens",
        level: "Expert",
        description: { th: "Auto Layout, Component Variants, Multi-brand Token Engines", en: "Auto Layout, Component Variants, Multi-brand Token Engines" },
        iconName: "Figma"
      },
      {
        name: "Accessibility (WCAG 2.1)",
        level: "Expert",
        description: { th: "Keyboard Navigation, Screen Reader Semantic ARIA, High Contrast", en: "Keyboard Navigation, Screen Reader Semantic ARIA, High Contrast" },
        iconName: "Eye"
      },
      {
        name: "Rapid 3D Prototyping",
        level: "Advanced",
        description: { th: "Spline 3D, Blender Modeling, Interactive UI Simulations", en: "Spline 3D, Blender Modeling, Interactive UI Simulations" },
        iconName: "Box"
      },
      {
        name: "UX Research & Testing",
        level: "Advanced",
        description: { th: "User Journey Mapping, Heatmap Analysis, Usability Testing", en: "User Journey Mapping, Heatmap Analysis, Usability Testing" },
        iconName: "Users"
      }
    ]
  },
  {
    id: "backend-tools",
    title: {
      th: "Backend, Cloud & Tools",
      en: "Backend, Cloud & Tools"
    },
    description: {
      th: "เครื่องมือและโครงสร้างพื้นฐานเพื่อสนับสนุนการทำงานแบบ Full-stack อย่างมั่นใจ",
      en: "DevOps, APIs, and cloud infrastructure powering resilient full-stack workflows."
    },
    skills: [
      {
        name: "Node.js & Server Actions",
        level: "Advanced",
        description: { th: "RESTful Endpoints, Webhook Handlers, Edge Functions", en: "RESTful Endpoints, Webhook Handlers, Edge Functions" },
        iconName: "Server"
      },
      {
        name: "Databases & Auth",
        level: "Advanced",
        description: { th: "PostgreSQL, Supabase, Prisma ORM, NextAuth / Clerk", en: "PostgreSQL, Supabase, Prisma ORM, NextAuth / Clerk" },
        iconName: "Database"
      },
      {
        name: "Vercel & CI/CD",
        level: "Expert",
        description: { th: "Automated Deployments, Edge Middleware, Analytics & Speed Insights", en: "Automated Deployments, Edge Middleware, Analytics & Speed Insights" },
        iconName: "CloudLightning"
      },
      {
        name: "Testing & Quality",
        level: "Advanced",
        description: { th: "Playwright, Vitest, Lighthouse CI (95+ score target)", en: "Playwright, Vitest, Lighthouse CI (95+ score target)" },
        iconName: "CheckCircle2"
      }
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2024 — Present",
    role: {
      th: "Lead Creative Technologist & Frontend Architect",
      en: "Lead Creative Technologist & Frontend Architect"
    },
    company: "Studio Horizon Digital (Bangkok & Remote)",
    location: {
      th: "กรุงเทพฯ / Remote",
      en: "Bangkok / Remote"
    },
    description: {
      th: "ดูแลทิศทางด้าน Creative Frontend Architecture และการพัฒนาเว็บแอปพลิเคชันเชิงโต้ตอบระดับสากล นำทีมพัฒนาสร้างผลงาน 3D WebGL และ Design Systems ให้ลูกค้าระดับ Fortune 500",
      en: "Spearheading creative frontend architecture and high-touch interactive web platforms for international clients. Mentoring engineers in 3D WebGL, modern Next.js paradigms, and scalable motion libraries."
    },
    achievements: [
      {
        th: "เพิ่มความเร็วการโหลดหน้าเว็บไซต์ในโปรเจกต์หลักลง 42% ด้วย Next.js App Router และ Edge Caching",
        en: "Decreased average time-to-interactive by 42% using Next.js App Router streaming and edge caching."
      },
      {
        th: "คว้ารางวัล Special Mention จากเวทีออกแบบระดับสากล 2 รายการ",
        en: "Earned 2 international design accolades for innovative WebGL user experiences."
      }
    ],
    technologies: ["Next.js", "React 19", "Three.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    type: "work"
  },
  {
    id: "exp-2",
    period: "2022 — 2024",
    role: {
      th: "Senior Interactive Frontend & Motion Developer",
      en: "Senior Interactive Frontend & Motion Developer"
    },
    company: "NextWave Interactive Labs",
    location: {
      th: "กรุงเทพมหานคร",
      en: "Bangkok, Thailand"
    },
    description: {
      th: "พัฒนาเว็บแคมเปญแบบ Immersive เว็บไซต์แบรนด์หรู และฟินเทคแดชบอร์ดที่เน้น Animation ระดับพรีเมียม ร่วมมืออย่างใกล้ชิดกับ Art Directors และ 3D Artists",
      en: "Engineered immersive brand campaigns, luxury e-commerce experiences, and high-frequency FinTech dashboards with bespoke motion design. Collaborated side-by-side with Art Directors."
    },
    achievements: [
      {
        th: "สร้าง Custom Animation Framework ที่ลดขนาด Bundle สำหรับ WebGL ลง 35%",
        en: "Architected a reusable canvas transition framework reducing WebGL bundle weight by 35%."
      },
      {
        th: "ร่วมพัฒนาแอปพลิเคชันเทรดดิ้งที่มีผู้ใช้งานจริงมากกว่า 50,000 คนต่อวัน",
        en: "Co-built a mission-critical trading terminal serving over 50,000 active daily traders."
      }
    ],
    technologies: ["React", "WebGL", "GSAP", "Tailwind CSS", "Zustand", "WebSocket"],
    type: "work"
  },
  {
    id: "exp-3",
    period: "2020 — 2022",
    role: {
      th: "UI/UX Engineer & Frontend Developer",
      en: "UI/UX Engineer & Frontend Developer"
    },
    company: "Quantum Media Group",
    location: {
      th: "กรุงเทพมหานคร",
      en: "Bangkok, Thailand"
    },
    description: {
      th: "ออกแบบและสร้าง Enterprise Design System สำหรับใช้งานใน 8 ผลิตภัณฑ์ขององค์กร ควบคุมคุณภาพ UX และการเข้าถึงตามเกณฑ์ WCAG 2.1 AAA",
      en: "Designed and engineered the unified enterprise UI component library powering 8 corporate digital products, standardizing design tokens and accessibility compliance."
    },
    achievements: [
      {
        th: "ส่งมอบ Design System ที่มีคอมโพเนนต์กว่า 60+ รายการ พร้อมเอกสาร Storybook สมบูรณ์แบบ",
        en: "Shipped 60+ component design system with comprehensive Storybook interactive playground."
      },
      {
        th: "ลดระยะเวลาการขึ้นฟีเจอร์ใหม่ของทีมวิศวกรลง 30%",
        en: "Reduced cross-team feature implementation cycle times by 30%."
      }
    ],
    technologies: ["React", "TypeScript", "Storybook", "Styled Components", "Jest"],
    type: "work"
  },
  {
    id: "exp-4",
    period: "2016 — 2020",
    role: {
      th: "ปริญญาตรี วิศวกรรมคอมพิวเตอร์ (เกียรตินิยม)",
      en: "B.Eng. Computer Engineering (First Class Honours)"
    },
    company: "Chulalongkorn University",
    location: {
      th: "กรุงเทพมหานคร",
      en: "Bangkok, Thailand"
    },
    description: {
      th: "ศึกษาด้าน Computer Graphics, Human-Computer Interaction (HCI), Algorithms และ Software Engineering ได้รับรางวัลโครงงานยอดเยี่ยมสาขา Interactive Systems",
      en: "Specialized in Computer Graphics, Human-Computer Interaction (HCI), Distributed Systems, and Software Engineering. Awarded Best Senior Capstone for Interactive Real-Time Systems."
    },
    achievements: [
      {
        th: "เกรดเฉลี่ยสะสม 3.85 (เกียรตินิยมอันดับหนึ่ง)",
        en: "GPA 3.85 (First Class Honours)"
      },
      {
        th: "ชนะเลิศการแข่งขัน Hackathon ด้าน Creative Tech ระดับประเทศ",
        en: "1st Place National Creative Technology Hackathon Winner"
      }
    ],
    technologies: ["Computer Graphics", "HCI", "OpenGL", "C++", "JavaScript", "Algorithms"],
    type: "education"
  }
];

export const uiContent = {
  loading: {
    systemInit: { th: "กำลังเริ่มต้นระบบ...", en: "INITIALIZING QUANTUM RUNTIME..." },
    ready: { th: "ระบบพร้อมทำงาน 100%", en: "CORE MATRIX LOADED 100%" }
  },
  hero: {
    badge: { th: "พร้อมรับงานโปรเจกต์ใหม่ • 2025/2026", en: "AVAILABLE FOR SELECT PROJECTS • 2025/2026" },
    greeting: { th: "สวัสดีครับ, ผมชื่อ", en: "HELLO, WORLD. I AM" },
    viewWork: { th: "ดูผลงานทั้งหมด", en: "View Selected Work" },
    contactMe: { th: "คุยโปรเจกต์กัน", en: "Let's Connect" },
    scrollDown: { th: "เลื่อนลงเพื่อสำรวจ", en: "SCROLL TO EXPLORE" }
  },
  about: {
    sectionTag: { th: "01 // เกี่ยวกับฉัน", en: "01 // ABOUT ME" },
    heading: { th: "หลอมรวมสุนทรียภาพ ดีไซน์ และเทคโนโลยี", en: "Bridging Creative Aesthetics & Production Code" },
    curiousMind: { th: "ความหลงใหลในรายละเอียด", en: "The Pursuit of Micro-Finesse" },
    skillsSummary: { th: "สถิติที่สำคัญ", en: "Key Milestones" }
  },
  skills: {
    sectionTag: { th: "02 // ความเชี่ยวชาญ", en: "02 // CAPABILITIES" },
    heading: { th: "ทักษะและเทคโนโลยีที่เชี่ยวชาญ", en: "Technical Arsenal & Creative Toolkit" },
    subheading: { th: "เครื่องมือและเฟรมเวิร์กที่ผมใช้สร้างสรรค์ผลงานระดับโปรดักชัน", en: "Battle-tested tools and frameworks I wield to architect high-performance experiences." }
  },
  projects: {
    sectionTag: { th: "03 // ผลงานเด่น", en: "03 // FEATURED WORK" },
    heading: { th: "ผลงานที่คัดสรรมาเป็นพิเศษ", en: "Selected Showcase Projects" },
    subheading: { th: "คลิกที่การ์ดเพื่อดูรายละเอียด สถาปัตยกรรมโค้ด และผลลัพธ์", en: "Click any card to inspect technical breakdown, challenges, and live demos." },
    allProjects: { th: "ทั้งหมด", en: "All" },
    viewLive: { th: "เข้าชมเว็บไซต์จริง", en: "Live Demo" },
    viewGithub: { th: "ดูโค้ดบน GitHub", en: "Source Code" },
    caseStudy: { th: "อ่าน Case Study", en: "Inspect Project" },
    back: { th: "ปิดหน้าต่าง", en: "Close Preview" }
  },
  experience: {
    sectionTag: { th: "04 // เส้นทางอาชีพ", en: "04 // JOURNEY" },
    heading: { th: "ประสบการณ์และเส้นทางการเติบโต", en: "Career Odyssey & Education" },
    subheading: { th: "ลำดับการทำงาน การศึกษา และรางวัลที่ได้รับ", en: "Chronological milestones shaping my technical and design worldview." }
  },
  contact: {
    sectionTag: { th: "05 // ช่องทางติดต่อ", en: "05 // INITIATE CONTACT" },
    heading: { th: "มาร่วมสร้างสรรค์สิ่งที่น่าทึ่งด้วยกัน", en: "Let's Engineer Something Exceptional" },
    subheading: { th: "มีโปรเจกต์ใหม่ ต้องการที่ปรึกษา หรืออยากชวนร่วมทีม? ทักทายมาได้เลยครับ", en: "Have a visionary project in mind or looking for a creative developer? My inbox is always open." },
    formName: { th: "ชื่อของคุณ", en: "Your Name" },
    formNamePlaceholder: { th: "สมชาย ใจดี", en: "Alex Thorne" },
    formEmail: { th: "อีเมลของคุณ", en: "Your Email Address" },
    formEmailPlaceholder: { th: "alex@example.com", en: "alex@company.com" },
    formMessage: { th: "ข้อความหรือรายละเอียดโปรเจกต์", en: "Project Details or Message" },
    formMessagePlaceholder: { th: "สวัสดีครับ อยากปรึกษาเรื่องโปรเจกต์ Next.js & 3D Web...", en: "Hello! We'd love to collaborate on an interactive WebGL redesign..." },
    submitButton: { th: "ส่งข้อความทันที", en: "Send Message" },
    submitting: { th: "กำลังส่งสัญญาณ...", en: "Transmitting..." },
    successTitle: { th: "ส่งข้อความสำเร็จแล้ว!", en: "Transmission Received!" },
    successDesc: { th: "ขอบคุณสำหรับการติดต่อ ผมจะรีบตอบกลับคุณภายใน 24 ชั่วโมงครับ", en: "Thank you for reaching out. I'll get back to you within 24 hours." },
    sendAnother: { th: "ส่งข้อความอื่น", en: "Send another message" },
    copyEmail: { th: "คัดลอกอีเมล", en: "Copy Email" },
    copied: { th: "คัดลอกแล้ว!", en: "Copied to Clipboard!" }
  },
  footer: {
    craftedWith: { th: "ออกแบบและพัฒนาด้วยความหลงใหล โดย กิตติภัทร วงศ์สุวรรณ", en: "Engineered with passion by Kittiphat Wongsuwan" },
    builtUsing: { th: "ขับเคลื่อนด้วย Next.js 16, Three.js & Tailwind CSS", en: "Powered by Next.js 16, Three.js & Tailwind CSS" },
    backToTop: { th: "กลับสู่ด้านบน", en: "Back to Top" },
    quote: { th: "\"Code is poetry written for machines, designed for humans.\"", en: "\"Code is poetry written for machines, designed for humans.\"" }
  }
};
