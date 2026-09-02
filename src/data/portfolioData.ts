import { PersonalInfo, Project, SkillCategory, ExperienceItem, NavItem } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: {
    th: "ธนภูมิ สีแดง",
    en: "Thanapoom Sidaeng"
  },
  nickname: {
    th: "PAnintoD",
    en: "PAnintoD"
  },
  role: {
    th: "Software, Automation & AI Vision Developer",
    en: "Software, Automation & AI Vision Developer"
  },
  secondaryRole: {
    th: "นักพัฒนาซอฟต์แวร์, ระบบอัตโนมัติ (Automation) และ AI/Computer Vision",
    en: "Software Engineer • IoT & Hardware Interfacing • AI Computer Vision"
  },
  heroTagline: {
    th: "นักพัฒนาที่เน้นการลงมือสร้างจริง ถนัดการเชื่อมต่อซอฟต์แวร์เข้ากับฮาร์ดแวร์ IoT, การประมวลผลภาพด้วย AI (Computer Vision) และการพัฒนาระบบหลังบ้านแบบครบวงจร",
    en: "Pragmatic developer dedicated to building real-world solutions. Specialized in hardware IoT bridging, real-time AI computer vision, and robust backend automation systems."
  },
  aboutBio: [
    {
      th: "ผมคือ ธนภูมิ สีแดง (Thanapoom Sidaeng) นักพัฒนาที่มุ่งเน้น 'การลงมือสร้างจริงและแก้ปัญหาที่เกิดขึ้นจริง' มีความเชี่ยวชาญในการเชื่อมต่อโลกของซอฟต์แวร์เข้ากับฮาร์ดแวร์จริง ตั้งแต่การเขียนโปรแกรมควบคุมไมโครคอนโทรลเลอร์ Arduino ผ่าน Serial Port ไปจนถึงการพัฒนาระบบตรวจจับภาพด้วย AI และการสร้าง Web Application ที่ตอบโจทย์การใช้งาน",
      en: "I am Thanapoom Sidaeng (PAnintoD), a pragmatic developer driven by hands-on engineering and real-world problem solving. My expertise bridges software logic with physical hardware — ranging from serial-driven Arduino microcontroller control and AI computer vision pipelines to responsive web applications and automated workflows."
    },
    {
      th: "สไตล์การทำงานของผมคือ 'Modern Tech, Clean & High Performance' เน้นโค้ดที่มีเสถียรภาพ ทำงานได้รวดเร็ว ไม่ซับซ้อนเกินจำเป็น สามารถทำงานอัตโนมัติตลอด 24/7 และพร้อมต่อยอดเข้ากับระบบอุตสาหกรรมหรือธุรกิจได้จริง",
      en: "My development philosophy focuses on 'Modern Tech, Clean & High Performance' — writing stable, fast, unbloated code engineered for continuous 24/7 reliability across edge devices, desktops, and cloud environments."
    }
  ],
  location: {
    th: "ประเทศไทย (พร้อมทำงาน Remote & On-site)",
    en: "Thailand (Available for Remote & On-site Contracts)"
  },
  status: {
    th: "พร้อมรับงานพัฒนาซอฟต์แวร์, ระบบ IoT & AI Vision",
    en: "Available for Software, IoT & AI Vision Projects"
  },
  email: "sidaengthnphumi082@gmail.com",
  github: "https://github.com/PAnintoD",
  linkedin: "https://github.com/PAnintoD",
  stats: [
    {
      value: "4+",
      label: {
        th: "Core Tech Domains",
        en: "Core Tech Domains"
      },
      sublabel: {
        th: "AI, IoT, Web & Automation",
        en: "AI, IoT, Web & Automation"
      }
    },
    {
      value: "99%+",
      label: {
        th: "AI Detection Accuracy",
        en: "AI Detection Accuracy"
      },
      sublabel: {
        th: "YOLOv8 + EasyOCR Pipeline",
        en: "YOLOv8 + EasyOCR Pipeline"
      }
    },
    {
      value: "100%",
      label: {
        th: "Hands-on Hardware Sync",
        en: "Hands-on Hardware Sync"
      },
      sublabel: {
        th: "Arduino, Relays & Sensors",
        en: "Arduino, Relays & Sensors"
      }
    },
    {
      value: "24/7",
      label: {
        th: "Automation Workflows",
        en: "Automation Workflows"
      },
      sublabel: {
        th: "n8n & Real-time Daemon Jobs",
        en: "n8n & Real-time Daemon Jobs"
      }
    }
  ],
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/PAnintoD",
      username: "@PAnintoD",
      iconName: "Github"
    },
    {
      platform: "Email",
      url: "mailto:sidaengthnphumi082@gmail.com",
      username: "sidaengthnphumi082@gmail.com",
      iconName: "Mail"
    },
    {
      platform: "Repository",
      url: "https://github.com/PAnintoD/My-portfolio-",
      username: "My-portfolio-",
      iconName: "Github"
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
    label: { th: "ทักษะความเชี่ยวชาญ", en: "Skills" },
    href: "#skills"
  },
  {
    id: "projects",
    label: { th: "ผลงานเด่น", en: "Projects" },
    href: "#projects"
  },
  {
    id: "experience",
    label: { th: "เส้นทางประสบการณ์", en: "Experience" },
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
    id: "ai-license-plate",
    title: "AI License Plate Recognition",
    tagline: {
      th: "ระบบตรวจจับและอ่านค่าป้ายทะเบียนรถอัตโนมัติแบบเรียลไทม์ด้วย YOLOv8 ร่วมกับ EasyOCR",
      en: "Real-time automated license plate detection and character recognition pipeline using YOLOv8 & EasyOCR"
    },
    category: {
      th: "AI & Computer Vision",
      en: "AI & Computer Vision"
    },
    description: {
      th: "ใช้โมเดล Deep Learning YOLOv8 สำหรับตรวจหาตำแหน่งกรอบป้ายทะเบียนรถจากสตรีมกล้อง จากนั้นประมวลผลภาพ (Image Preprocessing) และส่งต่อให้ EasyOCR อ่านตัวอักษรและตัวเลขภาษาไทยได้อย่างรวดเร็วและแม่นยำ",
      en: "A computer vision solution deploying YOLOv8 object detection to locate license plates, coupled with OpenCV preprocessing and EasyOCR to reliably extract Thai alphanumeric characters from live video feeds."
    },
    fullOverview: {
      th: "ระบบ AI License Plate Recognition ถูกสร้างขึ้นเพื่อตอบโจทย์งานควบคุมการเข้า-ออกยานพาหนะอัจฉริยะ (Smart Parking / Security Gate) โดยระบบจะดึงภาพจากกล้อง เข้าสู่โมเดล YOLOv8 เพื่อตีกรอบป้ายทะเบียนรถยนต์ จากนั้นทำ Image Preprocessing ด้วย OpenCV (แปลงเป็นขาวดำ Grayscale, ลดสัญญาณรบกวน Bilateral Filter, และปรับความคมชัด Adaptive Threshold) เพื่อให้ EasyOCR อ่านค่าได้อย่างแม่นยำที่สุด แม้ในสภาพแสงน้อยหรือมุมกล้องที่เอียง",
      en: "Developed for intelligent vehicle access monitoring and security logging. The pipeline captures live camera frames, applies a tuned YOLOv8 model for bounding-box plate localization, executes adaptive thresholding and grayscale normalization via OpenCV, and feeds cropped targets into EasyOCR for instantaneous alphanumeric parsing."
    },
    challenges: [
      {
        th: "การตรวจจับป้ายทะเบียนในสภาพแสงน้อย แสงสะท้อนจากไฟหน้ารถ หรือป้ายทะเบียนที่มีฝุ่นละอองและรอยขีดข่วน",
        en: "Detecting license plates under low-light conditions, headlight glare, or partial physical occlusion."
      },
      {
        th: "การรักษาความเร็วการประมวลผล (FPS) ให้รองรับสตรีมภาพต่อเนื่องโดยไม่ทำให้เครื่องค้าง",
        en: "Optimizing multi-stage neural inference to sustain real-time video framerates without CPU/GPU choking."
      }
    ],
    solutions: [
      {
        th: "สร้าง Custom Preprocessing Pipeline ปรับ Contrast และ Perspective Correction อัตโนมัติก่อนส่งเข้า OCR",
        en: "Engineered an automated OpenCV preprocessing pipeline featuring contrast adjustment and perspective unwarping prior to OCR."
      },
      {
        th: "แยกการประมวลผลเป็น Multi-threading และใช้ Motion Trigger Detection เพื่อรันโมเดลเฉพาะเมื่อมีรถเคลื่อนไหว",
        en: "Segregated frame acquisition and inference into decoupled worker threads, activating full OCR only upon motion triggers."
      }
    ],
    techStack: ["Python", "YOLOv8", "EasyOCR", "OpenCV", "PyTorch", "NumPy"],
    metrics: "Sub-second OCR • High Recognition Accuracy",
    liveUrl: "https://github.com/PAnintoD",
    githubUrl: "https://github.com/PAnintoD",
    featured: true,
    accentColor: "#6E8FC7",
    gradient: "from-[#171D29] via-[#141A26] to-[#0E131C]",
    year: "2024",
    role: {
      th: "AI & Computer Vision Developer",
      en: "AI & Computer Vision Developer"
    }
  },
  {
    id: "smart-gate-iot",
    title: "ระบบประตูอัจฉริยะ Smart Gate",
    tagline: {
      th: "โปรแกรมควบคุมฮาร์ดแวร์เปิด-ปิดประตูและอุปกรณ์ Arduino ผ่านคอมพิวเตอร์ พัฒนาด้วย C# WinForms",
      en: "Hardware-interfaced gate automation & sensor control software communicating with Arduino via C# WinForms"
    },
    category: {
      th: "Software & Hardware IoT",
      en: "Software & Hardware IoT"
    },
    description: {
      th: "ซอฟต์แวร์บริหารจัดการและควบคุมระบบประตูอัตโนมัติ สื่อสารผ่าน Serial COM Port เชื่อมต่อกับบอร์ด Arduino ควบคุมรีเลย์ เซนเซอร์ตรวจจับสิ่งกีดขวาง และมอเตอร์ขับเคลื่อน",
      en: "A desktop control hub orchestrating motorized gates and safety sensors by transmitting structured serial commands to Arduino microcontrollers with fail-safe telemetry."
    },
    fullOverview: {
      th: "โปรเจกต์นี้พัฒนาขึ้นด้วยภาษา C# บนแพลตฟอร์ม Windows Forms เพื่อเป็นหน้าจอคอนโซลควบคุมสำหรับเจ้าหน้าที่รักษาความปลอดภัย สามารถสั่งเปิด-ปิดประตูแบบ Manual, โหมดเปิดค้าง, โหมดล็อคฉุกเฉิน และตรวจจับสัญญาณความปลอดภัยจากเซนเซอร์ Infrared/Inductive Loop เชื่อมต่อกับ Arduino ผ่านสาย Serial Port พร้อมระบบแจ้งเตือนสถานะการเชื่อมต่อ และเก็บบันทึก Log ประวัติการเปิด-ปิดประตู",
      en: "Engineered in C# .NET Windows Forms to deliver a resilient desktop interface for facility operators. Connects directly to Arduino boards over USB/Serial communication, driving multi-channel relays for motor rotation, reading sensor states, handling emergency overrides, and writing persistent operation audit logs."
    },
    challenges: [
      {
        th: "สัญญาณรบกวนในสายสัญญาณ Serial Communication และเหตุการณ์สายหลุดระหว่างการทำงาน",
        en: "Preventing serial communication drops and buffer corruptions from environmental electromagnetic noise."
      },
      {
        th: "การป้องกันคำสั่งทำงานซ้ำซ้อนหรือติดขัดในกรณีที่ฮาร์ดแวร์ยังหมุนไม่เสร็จสิ้น",
        en: "Preventing command re-entrancy and state desynchronization while motor actuation is in progress."
      }
    ],
    solutions: [
      {
        th: "ออกแบบ Custom Packet Protocol พร้อมระบบ Auto-reconnect อัตโนมัติเมื่อสายเชื่อมต่อกลับมา",
        en: "Devised a packet-framed serial protocol with heartbeat validation and self-healing auto-reconnect routines."
      },
      {
        th: "นำ State Machine และ Event Handlers มาควบคุมลำดับการทำงานและ Interlock ด้านความปลอดภัย",
        en: "Implemented a finite state machine in C# to strictly enforce mechanical interlocks and prevent race conditions."
      }
    ],
    techStack: ["C#", ".NET WinForms", "Arduino", "Serial Port (UART)", "IoT", "Relay Control"],
    metrics: "Zero Packet Loss • Real-time Hardware Telemetry",
    liveUrl: "https://github.com/PAnintoD",
    githubUrl: "https://github.com/PAnintoD",
    featured: true,
    accentColor: "#6E8FC7",
    gradient: "from-[#171D29] via-[#141A26] to-[#0E131C]",
    year: "2024",
    role: {
      th: "Software & Embedded Systems Developer",
      en: "Software & Embedded Systems Developer"
    }
  },
  {
    id: "badminton-pos-web",
    title: "เว็บจองคอร์ดแบดมินตัน & ระบบ POS",
    tagline: {
      th: "Web Application สำหรับบริหารคิวสนามแบดมินตัน พร้อมระบบขายหน้าร้าน (POS) เชื่อมต่อ Firebase Realtime",
      en: "Real-time badminton court reservation web app integrated with full point-of-sale inventory on React & Firebase"
    },
    category: {
      th: "Full-Stack Web & POS",
      en: "Full-Stack Web & POS"
    },
    description: {
      th: "ระบบบริหารจัดการสนามแบดมินตันแบบครบวงจร รองรับการจองสนามออนไลน์แบบเรียลไทม์ ป้องกันการจองชนกัน และมีระบบขายหน้าร้าน (POS) สำหรับคิดเงินค่าเครื่องดื่ม อุปกรณ์กีฬา และสรุปยอดขายประจำวัน",
      en: "A comprehensive digital arena management platform featuring live court availability, automated conflict-free slot scheduling, and integrated point-of-sale cash register with Firebase synchronization."
    },
    fullOverview: {
      th: "เว็บแอปพลิเคชันที่พัฒนาด้วย React และ Tailwind CSS ช่วยอำนวยความสะดวกทั้งฝั่งลูกค้าและเจ้าของสนาม ลูกค้าสามารถตรวจเช็คตารางเวลาว่างของแต่ละคอร์ด เลือกช่วงเวลาที่ต้องการ และส่งคำขอจองได้ทันที ฝั่งผู้ดูแลมีหน้าแดชบอร์ด POS สำหรับคิดเงินค่าบริการ ค่าน้ำดื่ม ลูกแบดมินตัน เช่าไม้แบด พร้อมคำนวณเวลาเปิด-ปิดไฟคอร์ด และสรุปสถิติรายรับแต่ละวันได้อย่างแม่นยำผ่าน Firebase Firestore",
      en: "Built with React and Tailwind CSS to streamline court allocation and counter sales. Customers view live visual court calendars, while managers utilize an intuitive POS checkout register for beverages and gear rentals. Firebase real-time listeners ensure live updates across all connected tablets and desktop counters."
    },
    challenges: [
      {
        th: "การป้องกันการจองคอร์ดซ้ำ (Double Booking) เมื่อมีผู้ใช้คลิกจองเวลาเดียวกันพร้อมกัน",
        en: "Preventing concurrent booking collisions when multiple customers target the same court hour simultaneously."
      }
    ],
    solutions: [
      {
        th: "ใช้ Firestore Transactions ร่วมกับ Atomic State Locks เพื่อรับประกันความถูกต้องของข้อมูลตามลำดับเวลา",
        en: "Employed Firestore atomic transactions and optimistic locking to guarantee strict first-come-first-served slot acquisition."
      }
    ],
    techStack: ["React", "JavaScript", "Firebase", "Firestore", "Tailwind CSS", "POS System"],
    metrics: "100% Conflict-free Booking • Real-time DB Sync",
    liveUrl: "https://github.com/PAnintoD",
    githubUrl: "https://github.com/PAnintoD",
    featured: true,
    accentColor: "#6E8FC7",
    gradient: "from-[#171D29] via-[#141A26] to-[#0E131C]",
    year: "2023",
    role: {
      th: "Full-Stack Web Developer",
      en: "Full-Stack Web Developer"
    }
  },
  {
    id: "automation-ocr-tools",
    title: "Automation & Utility Tools",
    tagline: {
      th: "เครื่องมือ OCR สแกนหน้าจอแบบเรียลไทม์ และระบบจัดการข้อมูลอัตโนมัติด้วย n8n",
      en: "Automated real-time screen capture OCR extractor and multi-platform data workflow engine powered by n8n"
    },
    category: {
      th: "Automation & Utility Systems",
      en: "Automation & Utility Systems"
    },
    description: {
      th: "ชุดเครื่องมือช่วยลดภาระงานซ้ำซ้อน: โปรแกรม Utility สแกนข้อความจากพื้นที่บนหน้าจอคอมพิวเตอร์แบบเรียลไทม์ และไปป์ไลน์ n8n เชื่อมโยงข้อมูลระหว่าง Webhooks, ฐานข้อมูล และการแจ้งเตือนอัตโนมัติตลอด 24/7",
      en: "A suite of productivity tools: floating real-time screen OCR reading text on-the-fly, combined with robust n8n orchestration pipelines linking webhooks, database stores, and automated notification bots."
    },
    fullOverview: {
      th: "โปรเจกต์นี้รวมสองเครื่องมือเด่น: ส่วนแรกคือ Desktop Utility ด้วย Python ที่สามารถดึงภาพจากพิกัดบนหน้าจอแบบเรียลไทม์ นำมาประมวลผล OCR แปลงเป็นข้อความและคัดลอกลงคลิปบอร์ดหรือบันทึกได้ทันที ส่วนที่สองคือระบบ Workflow Automation ด้วย n8n บนเซิร์ฟเวอร์ Linux (Ubuntu) ที่คอยดักฟัง Webhook, ดึงข้อมูลแปลงฟอร์แมต (ETL), บันทึกลงฐานข้อมูล และส่งแจ้งเตือนเข้าแอปพลิเคชันอย่างเป็นระเบียบ",
      en: "A dual-utility automation framework: A lightweight Python screen-grabbing daemon that executes real-time OCR on designated desktop regions, paired with a self-hosted n8n engine running on Linux (Ubuntu). The n8n pipelines handle incoming webhooks, data transformation, and automated cross-service dispatches around the clock."
    },
    challenges: [
      {
        th: "การตรวจจับข้อความจากหน้าจอที่มีความละเอียดและขนาดฟอนต์แตกต่างกันให้แม่นยำและไม่กินแรม",
        en: "Extracting text reliably across varied display scaling factors while keeping memory consumption minimal."
      }
    ],
    solutions: [
      {
        th: "ใช้ Dynamic Binarization และจัดการหน่วยความจำของ OCR Model ให้รันเฉพาะเมื่อมีการกดคีย์ลัด",
        en: "Utilized dynamic image thresholding and kept model weights cached with hotkey-driven execution."
      }
    ],
    techStack: ["Python", "EasyOCR", "n8n", "Linux (Ubuntu)", "Webhooks", "Automation Workflows"],
    metrics: "24/7 Unattended Uptime • 80% Time Saved",
    liveUrl: "https://github.com/PAnintoD",
    githubUrl: "https://github.com/PAnintoD",
    featured: true,
    accentColor: "#6E8FC7",
    gradient: "from-[#171D29] via-[#141A26] to-[#0E131C]",
    year: "2023",
    role: {
      th: "Automation & Backend Engineer",
      en: "Automation & Backend Engineer"
    }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming-languages",
    title: {
      th: "ภาษาโปรแกรม (Programming Languages)",
      en: "Programming Languages"
    },
    description: {
      th: "ภาษาโปรแกรมหลักที่ใช้ในการพัฒนาซอฟต์แวร์ สคริปต์อัตโนมัติ และระบบฝังตัว",
      en: "Core programming languages utilized for software development, automation scripts, and embedded logic."
    },
    skills: [
      {
        name: "Python",
        level: "Expert",
        description: { th: "AI Vision, OCR, Automation Scripts, Data Pipelines, PyTorch", en: "AI Vision, OCR, Automation Scripts, Data Pipelines, PyTorch" },
        iconName: "Code2"
      },
      {
        name: "C# (.NET)",
        level: "Advanced",
        description: { th: "WinForms Desktop GUI, Serial Communication, Multi-threading", en: "WinForms Desktop GUI, Serial Communication, Multi-threading" },
        iconName: "Cpu"
      },
      {
        name: "JavaScript",
        level: "Advanced",
        description: { th: "Modern ES6+, Web Application Development, Full-Stack Scripting", en: "Modern ES6+, Web Application Development, Full-Stack Scripting" },
        iconName: "Globe"
      },
      {
        name: "Lua",
        level: "Proficient",
        description: { th: "Embedded Game Scripting, Lightweight Logic, Rapid Prototyping", en: "Embedded Game Scripting, Lightweight Logic, Rapid Prototyping" },
        iconName: "Layers"
      }
    ]
  },
  {
    id: "ai-computer-vision",
    title: {
      th: "AI & Computer Vision",
      en: "AI & Computer Vision"
    },
    description: {
      th: "การประมวลผลภาพ การตรวจจับวัตถุ และการรู้จำตัวอักษรด้วยปัญญาประดิษฐ์",
      en: "Deep learning object detection, optical character recognition, and image filtering pipelines."
    },
    skills: [
      {
        name: "YOLOv8 (Object Detection)",
        level: "Advanced",
        description: { th: "Real-time Vehicle & Object Detection, Bounding Box Extraction, Model Tuning", en: "Real-time Vehicle & Object Detection, Bounding Box Extraction, Model Tuning" },
        iconName: "Activity"
      },
      {
        name: "EasyOCR & Tesseract",
        level: "Advanced",
        description: { th: "Text Extraction, Thai/English Plate Reading, Multi-scale Scanning", en: "Text Extraction, Thai/English Plate Reading, Multi-scale Scanning" },
        iconName: "Eye"
      },
      {
        name: "OpenCV & Image Processing",
        level: "Advanced",
        description: { th: "Grayscale, Thresholding, Contours, Morphological Filters, Perspective Transform", en: "Grayscale, Thresholding, Contours, Morphological Filters, Perspective Transform" },
        iconName: "Sparkles"
      },
      {
        name: "PyTorch & ML Tooling",
        level: "Proficient",
        description: { th: "Inference Optimization, NumPy Operations, Model Export & Deployment", en: "Inference Optimization, NumPy Operations, Model Export & Deployment" },
        iconName: "Box"
      }
    ]
  },
  {
    id: "software-hardware",
    title: {
      th: "ซอฟต์แวร์และฮาร์ดแวร์ (Software & Hardware)",
      en: "Software & Hardware"
    },
    description: {
      th: "การพัฒนาเว็บแอปพลิเคชัน การควบคุมไมโครคอนโทรลเลอร์ และการเชื่อมต่ออุปกรณ์ IoT",
      en: "Web development, desktop interfaces, microcontroller programming, and IoT hardware syncing."
    },
    skills: [
      {
        name: "React & Tailwind CSS",
        level: "Advanced",
        description: { th: "Interactive Web Interfaces, Component Architecture, Responsive Design", en: "Interactive Web Interfaces, Component Architecture, Responsive Design" },
        iconName: "Globe"
      },
      {
        name: "C# WinForms & Desktop",
        level: "Advanced",
        description: { th: "Operator Dashboards, Event-Driven Controls, Native Windows Interfacing", en: "Operator Dashboards, Event-Driven Controls, Native Windows Interfacing" },
        iconName: "Cpu"
      },
      {
        name: "Arduino & Microcontrollers",
        level: "Advanced",
        description: { th: "Serial UART Communication, Relay Controls, Sensor Telemetry & Actuation", en: "Serial UART Communication, Relay Controls, Sensor Telemetry & Actuation" },
        iconName: "Layers"
      },
      {
        name: "Firebase (Firestore & Realtime)",
        level: "Advanced",
        description: { th: "Realtime Database, Authentication, Live State Synchronization", en: "Realtime Database, Authentication, Live State Synchronization" },
        iconName: "Database"
      }
    ]
  },
  {
    id: "devops-automation",
    title: {
      th: "ระบบอัตโนมัติและระบบปฏิบัติการ (Automation & DevOps)",
      en: "Automation & DevOps"
    },
    description: {
      th: "การจัดการระบบอัตโนมัติ การดูแลเซิร์ฟเวอร์ และกระบวนการ CI/CD",
      en: "Workflow automation engines, Linux server environments, and reliable deployment processes."
    },
    skills: [
      {
        name: "n8n Workflow Automation",
        level: "Expert",
        description: { th: "Self-hosted Workflows, Webhook Routing, Automated Data Sync, Notifications", en: "Self-hosted Workflows, Webhook Routing, Automated Data Sync, Notifications" },
        iconName: "CloudLightning"
      },
      {
        name: "Linux (Ubuntu Server)",
        level: "Advanced",
        description: { th: "Terminal Administration, Daemon Services, Cron Jobs, SSH & Environment Setup", en: "Terminal Administration, Daemon Services, Cron Jobs, SSH & Environment Setup" },
        iconName: "Server"
      },
      {
        name: "Real-time Screen OCR Utility",
        level: "Advanced",
        description: { th: "Custom Desktop Screen Bounding, Hotkey Binding, Automated Data Capture", en: "Custom Desktop Screen Bounding, Hotkey Binding, Automated Data Capture" },
        iconName: "Eye"
      },
      {
        name: "Git & GitHub Version Control",
        level: "Advanced",
        description: { th: "Branching, Collaboration, Repository Management, Deployment Pipelines", en: "Branching, Collaboration, Repository Management, Deployment Pipelines" },
        iconName: "CheckCircle2"
      }
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2023 — ปัจจุบัน",
    role: {
      th: "นักพัฒนาซอฟต์แวร์, ระบบอัตโนมัติ และ AI Vision",
      en: "Software, Automation & AI Vision Developer"
    },
    company: "Independent Projects & Technology Solutions",
    location: {
      th: "ประเทศไทย",
      en: "Thailand"
    },
    description: {
      th: "วิจัย พัฒนา และส่งมอบโปรเจกต์ซอฟต์แวร์จริงที่ผสานระหว่าง AI Computer Vision, การควบคุมฮาร์ดแวร์ IoT, และการสร้างระบบ Workflow อัตโนมัติ",
      en: "Architecting and deploying production projects synthesizing AI vision models, hardware microcontroller IoT controls, and unattended automation workflows."
    },
    achievements: [
      {
        th: "พัฒนาระบบตรวจจับป้ายทะเบียนด้วย AI (YOLOv8 + EasyOCR) ประมวลผลภาพจากกล้องแบบเรียลไทม์",
        en: "Built real-time AI license plate recognition pipeline combining YOLOv8 with EasyOCR."
      },
      {
        th: "สร้างระบบควบคุมประตูอัจฉริยะ Smart Gate สื่อสารผ่าน Serial Port กับ Arduino ควบคุมรีเลย์และเซนเซอร์",
        en: "Engineered smart gate hardware controller linking C# WinForms to Arduino over serial UART."
      },
      {
        th: "วางโครงสร้างระบบ Automation ด้วย n8n และ OCR เครื่องมือสแกนหน้าจอช่วยลดเวลาทำงานซ้ำซ้อน",
        en: "Orchestrated 24/7 n8n automated pipelines and real-time screen OCR utilities."
      }
    ],
    technologies: ["Python", "YOLOv8", "EasyOCR", "C#", "WinForms", "Arduino", "n8n", "Linux (Ubuntu)"],
    type: "work"
  },
  {
    id: "exp-2",
    period: "2022 — 2024",
    role: {
      th: "ผู้พัฒนาระบบ Web Application & ระบบขายหน้าร้าน (POS)",
      en: "Web Application & POS Systems Developer"
    },
    company: "Commercial & Sports Management Projects",
    location: {
      th: "ประเทศไทย",
      en: "Thailand"
    },
    description: {
      th: "พัฒนาเว็บแอปพลิเคชันระบบจองสนามและจุดขายสินค้าหน้าร้าน (POS) เชื่อมต่อฐานข้อมูลเรียลไทม์",
      en: "Developed real-time sports court reservation systems and point-of-sale retail web software."
    },
    achievements: [
      {
        th: "พัฒนาเว็บไซต์จองคอร์ดแบดมินตันและระบบ POS ด้วย React และ Firebase รองรับการจองแบบไม่มีข้อผิดพลาด",
        en: "Delivered conflict-free badminton court booking and POS terminal powered by React & Firebase."
      },
      {
        th: "ออกแบบ UI/UX ให้ใช้งานง่าย สะดวกรวดเร็วทั้งบนแท็บเล็ตและคอมพิวเตอร์หน้าร้าน",
        en: "Crafted intuitive, responsive ergonomics tailored for fast counter transactions on touchscreens."
      }
    ],
    technologies: ["React", "JavaScript", "Firebase", "Firestore", "Tailwind CSS", "POS System"],
    type: "work"
  },
  {
    id: "exp-3",
    period: "การศึกษา & การพัฒนาทักษะเฉพาะทาง",
    role: {
      th: "ด้านวิศวกรรมซอฟต์แวร์, ระบบ IoT และเทคโนโลยี AI",
      en: "Software Engineering, IoT & Applied AI Specialization"
    },
    company: "Continuous Technical Mastery & Practical Building",
    location: {
      th: "ประเทศไทย",
      en: "Thailand"
    },
    description: {
      th: "ศึกษาและพัฒนาทักษะเชิงลึกด้านการประมวลผลภาพ (Computer Vision), การเขียนโปรแกรมเชื่อมต่อฮาร์ดแวร์ (Hardware-Software Co-design) และระบบอัตโนมัติ",
      en: "Dedicated focus on practical computer vision algorithms, low-level serial communication protocols, and cloud/edge automation."
    },
    achievements: [
      {
        th: "เชี่ยวชาญภาษา Python, C#, JavaScript, Lua สำหรับงานหลากหลายมิติ",
        en: "Proficient across Python, C#, JavaScript, and Lua for versatile domain engineering."
      },
      {
        th: "สร้างเครื่องมือ Utility และระบบอัตโนมัติที่ใช้งานได้จริงในชีวิตประจำวัน",
        en: "Built pragmatic utilities and automation pipelines delivering everyday operational value."
      }
    ],
    technologies: ["Python", "C#", "JavaScript", "Lua", "Arduino", "OpenCV", "n8n", "Ubuntu"],
    type: "education"
  }
];

export const uiContent = {
  loading: {
    systemInit: { th: "กำลังโหลดระบบ ธนภูมิ สีแดง...", en: "INITIALIZING THANAPOOM SYSTEM..." },
    ready: { th: "ระบบพร้อมทำงาน 100%", en: "CORE MATRIX READY 100%" }
  },
  hero: {
    badge: { th: "พร้อมรับงานพัฒนาโปรเจกต์ • IoT, AI & Software", en: "AVAILABLE FOR SELECT PROJECTS • IoT, AI & SOFTWARE" },
    greeting: { th: "สวัสดีครับ, ผมคือ", en: "HELLO, WORLD. I AM" },
    viewWork: { th: "ดูผลงานเด่น", en: "View Selected Work" },
    viewGithub: { th: "ดู GitHub ของฉัน", en: "Visit My GitHub" },
    contactMe: { th: "ติดต่อพูดคุย", en: "Let's Connect" },
    scrollDown: { th: "เลื่อนลงเพื่อสำรวจ", en: "SCROLL TO EXPLORE" }
  },
  about: {
    sectionTag: { th: "01 // แนะนำตัว", en: "01 // ABOUT ME" },
    heading: { th: "เน้นการลงมือสร้างจริง เชื่อมต่อซอฟต์แวร์ ฮาร์ดแวร์ และ AI", en: "Hands-on Builder Bridging Software, Hardware & AI" },
    curiousMind: { th: "ปรัชญาการทำงาน", en: "Engineering Mindset" },
    skillsSummary: { th: "จุดเด่นสำคัญ", en: "Core Strengths" }
  },
  skills: {
    sectionTag: { th: "02 // ทักษะความเชี่ยวชาญ", en: "02 // CAPABILITIES" },
    heading: { th: "ทักษะและเทคโนโลยีที่ใช้งานจริง", en: "Technical Arsenal & Engineering Skills" },
    subheading: { th: "ครอบคลุมทั้งภาษาโปรแกรม, AI/Vision, ซอฟต์แวร์และฮาร์ดแวร์ IoT ตลอดจนระบบอัตโนมัติ", en: "Battle-tested tools across programming languages, AI/Vision, hardware IoT, and automation workflows." }
  },
  projects: {
    sectionTag: { th: "03 // ผลงานเด่น", en: "03 // FEATURED PROJECTS" },
    heading: { th: "ผลงานที่คัดสรรมาเป็นพิเศษ", en: "Featured Showcase Projects" },
    subheading: { th: "คลิกที่การ์ดเพื่อดูรายละเอียด สถาปัตยกรรมโค้ด ความท้าทาย และลิงก์ Source Code", en: "Click any project card to inspect technical architecture, challenges, and code repositories." },
    allProjects: { th: "ทั้งหมด", en: "All" },
    viewLive: { th: "ดูโค้ดบน GitHub", en: "View on GitHub" },
    viewGithub: { th: "ดูโค้ดบน GitHub", en: "Source Code" },
    caseStudy: { th: "อ่านรายละเอียดเชิงลึก", en: "Inspect Project" },
    back: { th: "ปิดหน้าต่าง", en: "Close Details" }
  },
  experience: {
    sectionTag: { th: "04 // เส้นทางประสบการณ์", en: "04 // JOURNEY" },
    heading: { th: "ประสบการณ์และผลงานที่ผ่านมา", en: "Experience Odyssey & Milestones" },
    subheading: { th: "ลำดับการทำงานจริงในการพัฒนาซอฟต์แวร์ ระบบ IoT และเทคโนโลยี AI", en: "Chronological milestones demonstrating hands-on technical execution." }
  },
  contact: {
    sectionTag: { th: "05 // ช่องทางติดต่อ", en: "05 // INITIATE CONTACT" },
    heading: { th: "มาร่วมสร้างสรรค์โปรเจกต์ด้วยกัน", en: "Let's Build Something Exceptional" },
    subheading: { th: "มีโปรเจกต์ใหม่ ต้องการพัฒนาระบบ AI Vision, IoT, เว็บแอป หรือระบบอัตโนมัติ ทักมาได้เลยครับ", en: "Have a software, AI Vision, IoT, or automation project in mind? My inbox is always open." },
    formName: { th: "ชื่อของคุณ", en: "Your Name" },
    formNamePlaceholder: { th: "สมชาย ใจดี", en: "Your Name or Company" },
    formEmail: { th: "อีเมลของคุณ", en: "Your Email Address" },
    formEmailPlaceholder: { th: "contact@example.com", en: "contact@company.com" },
    formMessage: { th: "ข้อความหรือรายละเอียดโปรเจกต์", en: "Project Details or Message" },
    formMessagePlaceholder: { th: "สวัสดีครับ อยากปรึกษาเรื่องโปรเจกต์ตรวจจับป้ายทะเบียนด้วย AI / ระบบ IoT...", en: "Hello Thanapoom! We'd love to discuss an AI Vision or IoT project..." },
    submitButton: { th: "ส่งข้อความหา ธนภูมิ", en: "Send Message to Thanapoom" },
    submitting: { th: "กำลังส่งข้อความ...", en: "Transmitting..." },
    successTitle: { th: "ส่งข้อความสำเร็จแล้ว!", en: "Transmission Received!" },
    successDesc: { th: "ขอบคุณสำหรับการติดต่อ ธนภูมิ สีแดง จะรีบตอบกลับคุณโดยเร็วที่สุดครับ", en: "Thank you for reaching out. Thanapoom Sidaeng will reply promptly." },
    sendAnother: { th: "ส่งข้อความอื่น", en: "Send another message" },
    copyEmail: { th: "คัดลอกอีเมล", en: "Copy Email" },
    copied: { th: "คัดลอกแล้ว!", en: "Copied to Clipboard!" }
  },
  footer: {
    craftedWith: { th: "ออกแบบและพัฒนาด้วยความใส่ใจ โดย ธนภูมิ สีแดง (Thanapoom Sidaeng)", en: "Engineered with precision by Thanapoom Sidaeng (PAnintoD)" },
    builtUsing: { th: "ขับเคลื่อนด้วย Next.js 16, Three.js & Tailwind CSS", en: "Powered by Next.js 16, Three.js & Tailwind CSS" },
    backToTop: { th: "กลับสู่ด้านบน", en: "Back to Top" },
    quote: { th: "\"สร้างจริง ใช้งานได้จริง ผสานโลกซอฟต์แวร์ ฮาร์ดแวร์ และ AI ให้เป็นหนึ่งเดียว\"", en: "\"Pragmatic engineering: bridging software, hardware IoT, and AI into unified reality.\"" }
  }
};
