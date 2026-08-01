export interface MetricItem {
  label: string;
  value: string;
  change?: string;
  description?: string;
}

export interface TechStackItem {
  name: string;
  role: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'design' | 'infrastructure';
}

export interface SolutionFeature {
  title: string;
  description: string;
  tag?: string;
}

export interface GalleryItem {
  url: string;
  caption: string;
  alt: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: 'ux' | 'dev' | 'branding';
  categoryLabel: string;
  client: string;
  timeline: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  heroImage: string;
  heroImageAlt: string;
  summary: string;
  metrics: MetricItem[];
  challenge: {
    headline: string;
    description: string;
    keyPoints: string[];
  };
  architecture: {
    headline: string;
    description: string;
    techStack: TechStackItem[];
  };
  solution: {
    headline: string;
    description: string;
    features: SolutionFeature[];
    gallery: GalleryItem[];
  };
  impact: {
    headline: string;
    description: string;
    testimonial?: {
      quote: string;
      author: string;
      role: string;
      company: string;
      avatar?: string;
    };
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "vanguard-concierge",
    title: "Vanguard Concierge Platform",
    subtitle: "LUXURY UX & DIGITAL ARCHITECTURE",
    category: "ux",
    categoryLabel: "UX & Product Strategy",
    client: "Vanguard Heritage Group (Zurich)",
    timeline: "2025 - Present (8 Months)",
    role: "Lead UX Architect & Front-End Developer",
    liveUrl: "https://vanguard-concierge.example.com",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1FwT4eKUE-CBBvOtHz_lQhLBrd4svcWuv3jNHFB_C0p8pSaDS4kjpYzuJjlw7sOAvFoOLbgRRNcAzH-LwUxaWc7JJnCsQMQJ9dQvv_T3wqNoXkb_peqlqxwYjZmGDGySv0eswqk5cnWhl4Bk1xGDNRzWe904TegOURRvyAqT2fQLvkyynTwNPwLBs-CCUSeBmtpI_de_LLfijFf47-0G09VJ7LoIsC4AN-ZRNzkg91ndu7bsB-VL9mk26r5QxYDJX9z9mHkdi0UY",
    heroImageAlt: "Vanguard luxury concierge platform dashboard with dark slate finish and gold accents",
    summary: "Architected an end-to-end luxury concierge digital platform servicing high-net-worth individuals across Europe with real-time request tracking, private dispatch workflows, and custom dynamic styling.",
    metrics: [
      { label: "Client CSAT", value: "99.4%", change: "+14.2%", description: "Post-launch client satisfaction score across European HNW accounts" },
      { label: "Request SLA Latency", value: "< 2.4 min", change: "-58%", description: "Average response turnaround time from request submission to agent assignment" },
      { label: "User Retention", value: "94.8%", change: "+22%", description: "Monthly active engagement rate over 6 consecutive quarters" },
      { label: "Platform Throughput", value: "12.4K/mo", change: "2.8x", description: "Bespoke transaction and concierge requests handled seamlessly" }
    ],
    challenge: {
      headline: "Simplifying Ultra-Luxury Concierge Workflows for High-Net-Worth Clients",
      description: "Vanguard needed to transition from legacy email and phone dispatch channels to an immediate, highly polished digital concierge interface without losing the human touch or confidentiality expected by ultra-high-net-worth clients.",
      keyPoints: [
        "Eliminating fragmented communication across WhatsApp, phone calls, and email threads.",
        "Ensuring end-to-end encryption and compliance with Swiss bank-grade security protocols.",
        "Delivering micro-interactions and smooth 60fps animations that feel like a high-end physical hospitality service.",
        "Optimizing for offline availability during cross-Atlantic flights and low-connectivity mobile environments."
      ]
    },
    architecture: {
      headline: "Modular Micro-Frontend Architecture with Real-Time WebSockets",
      description: "We established a decoupled design system paired with an Event-Driven backend to ensure instantaneous status updates and sub-100ms response times globally.",
      techStack: [
        { name: "React 19 & TypeScript", role: "Declarative UI layer with strict structural dynamic typings", category: "frontend" },
        { name: "Astro SSR / Hybrid", role: "Blazing fast client shell & content routing", category: "frontend" },
        { name: "Tailwind CSS v4", role: "Design token mapping with dark mode glassmorphism", category: "design" },
        { name: "GraphQL & WebSockets", role: "Real-time dispatch telemetry and chat synchronicity", category: "backend" },
        { name: "Redis & Node.js Microservices", role: "Sub-millisecond session state and event streaming", category: "backend" },
        { name: "Cloudflare Workers", role: "Edge-based authentication and geo-routed low latency API delivery", category: "infrastructure" }
      ]
    },
    solution: {
      headline: "Human-Centric Digital Luxury Experience",
      description: "The resulting platform combines intuitive visual hierarchy, one-touch luxury service requests, and live VIP concierge telemetry into a single unified workspace.",
      features: [
        { title: "Bespoke Request Dispatch", description: "Intuitive request wizard allowing clients to charter jets, reserve private dining, or coordinate security details in under 30 seconds.", tag: "Core Workflow" },
        { title: "Live Agent Telemetry", description: "Real-time status radar showcasing assigned relationship managers and live SLA countdown timer.", tag: "Real-Time UI" },
        { title: "Biometric Identity Guard", description: "Seamless multi-factor authentication with localized hardware secure enclave integration.", tag: "Security" },
        { title: "Personalized Preference Engine", description: "AI-assisted memory bank storing dietary, flight, and accommodation nuances for instant pre-fills.", tag: "Intelligence" }
      ],
      gallery: [
        {
          url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1FwT4eKUE-CBBvOtHz_lQhLBrd4svcWuv3jNHFB_C0p8pSaDS4kjpYzuJjlw7sOAvFoOLbgRRNcAzH-LwUxaWc7JJnCsQMQJ9dQvv_T3wqNoXkb_peqlqxwYjZmGDGySv0eswqk5cnWhl4Bk1xGDNRzWe904TegOURRvyAqT2fQLvkyynTwNPwLBs-CCUSeBmtpI_de_LLfijFf47-0G09VJ7LoIsC4AN-ZRNzkg91ndu7bsB-VL9mk26r5QxYDJX9z9mHkdi0UY",
          caption: "Main Concierge Overview Dashboard — Dark luxury aesthetic with high contrast metrics",
          alt: "Concierge overview dashboard interface"
        },
        {
          url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfHAzzF3zV2QAeRmpbioouuCRII9JYALKIAy7ACkZwD8rVbdH89ioxMg2XnZNm_lDRaXKkyWHVhxwGLOnpYOmzp7r7D_hXilftX1k1LPSSa3OlmvhVxcIulH-2hTIn-1qKSMrU-918wR9MdeTsQe7UdzRia9c2NInn2H3ImSvsz2hHXKHYwvxxB_S8lfwaaFDWe8RWfRrf-_OIRYmyey5F7ChduN2t7mE7PyUIVQHUnSqacIOtOJXOEIWU1yMEPeKfND_5gHIuXsU",
          caption: "Real-Time Telemetry & Request Tracking Panel",
          alt: "Request tracking panel screenshot"
        }
      ]
    },
    impact: {
      headline: "Setting a New Benchmark in Digital Private Wealth Hospitality",
      description: "Post-deployment analytics demonstrated unprecedented adoption among high-net-worth clients, reducing operational overhead by 40% while raising overall client satisfaction to an all-time high.",
      testimonial: {
        quote: "Mohammed transformed our digital vision into an exquisite reality. The platform feels like a digital extension of our finest private butler service.",
        author: "Henrik von Berg",
        role: "Chief Operating Officer",
        company: "Vanguard Heritage Group"
      }
    }
  },

  {
    slug: "nexus-analytical-engine",
    title: "Nexus Analytical Engine",
    subtitle: "FULL-STACK DATA INFRASTRUCTURE",
    category: "dev",
    categoryLabel: "Engineering & Data Systems",
    client: "Nexus Analytics Global",
    timeline: "2024 (6 Months)",
    role: "Principal Systems Architect",
    liveUrl: "https://nexus-analytics.example.com",
    githubUrl: "https://github.com/example/nexus-engine",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfHAzzF3zV2QAeRmpbioouuCRII9JYALKIAy7ACkZwD8rVbdH89ioxMg2XnZNm_lDRaXKkyWHVhxwGLOnpYOmzp7r7D_hXilftX1k1LPSSa3OlmvhVxcIulH-2hTIn-1qKSMrU-918wR9MdeTsQe7UdzRia9c2NInn2H3ImSvsz2hHXKHYwvxxB_S8lfwaaFDWe8RWfRrf-_OIRYmyey5F7ChduN2t7mE7PyUIVQHUnSqacIOtOJXOEIWU1yMEPeKfND_5gHIuXsU",
    heroImageAlt: "Nexus analytical dashboard showing high-frequency charts and low-latency telemetry",
    summary: "High-performance enterprise data visualization engine built for sub-second chart rendering, multi-source stream aggregation, and automated insight generation.",
    metrics: [
      { label: "Latency Reduction", value: "65%", change: "-120ms", description: "Average query execution drop across 50M row datasets" },
      { label: "Chart Frame Rate", value: "60 FPS", change: "Constant", description: "Smooth Canvas & WebGL data stream rendering under heavy load" },
      { label: "Data Pipeline Uptime", value: "99.99%", change: "+0.4%", description: "Zero unhandled cluster crash events over 12 months" },
      { label: "Cost Optimization", value: "38%", change: "-$45k/mo", description: "Cloud infrastructure savings achieved via WASM stream processing" }
    ],
    challenge: {
      headline: "Conquering High-Frequency Data Bottlenecks in Enterprise Dashboards",
      description: "Existing enterprise analytics tools suffered from rendering lag and slow DOM manipulation when handling over 100,000 real-time data points per second.",
      keyPoints: [
        "Eliminating browser UI thread freeze during high-frequency telemetry updates.",
        "Creating custom WebGL visualization shaders for multi-layer geo-temporal heatmaps.",
        "Implementing client-side data filtering with WebAssembly to offload server compute.",
        "Providing seamless export capabilities for multi-terabyte datasets into executive PDF/CSV formats."
      ]
    },
    architecture: {
      headline: "WebAssembly-Powered Client Processing Engine",
      description: "By leveraging Rust compiled to WebAssembly alongside HTML5 Canvas dynamic buffers, we moved dataset calculations directly to client GPU/CPU workers.",
      techStack: [
        { name: "Astro & TypeScript", role: "Zero-JS baseline content delivery with dynamic island hydration", category: "frontend" },
        { name: "Rust / WebAssembly", role: "Ultra-fast client-side binary data filtering and sorting", category: "backend" },
        { name: "Canvas & WebGL", role: "60fps hardware-accelerated chart rendering engine", category: "frontend" },
        { name: "Apache Kafka", role: "Real-time message queuing and event streaming server", category: "infrastructure" }
      ]
    },
    solution: {
      headline: "Low-Latency Enterprise Analytics Suite",
      description: "A resilient dashboard interface allowing financial analysts to process, filter, and model complex datasets in real time without lag.",
      features: [
        { title: "WASM Stream Filter", description: "Filter 500,000 data rows in under 12 milliseconds directly in the browser runtime.", tag: "Engine" },
        { title: "Custom Chart Shader", description: "Hardware-accelerated candlestick and surface heatmaps with zero frame drop.", tag: "Graphics" },
        { title: "Dynamic Query Builder", description: "Drag-and-drop SQL builder with instantaneous visual execution feedback.", tag: "UX Tool" }
      ],
      gallery: [
        {
          url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfHAzzF3zV2QAeRmpbioouuCRII9JYALKIAy7ACkZwD8rVbdH89ioxMg2XnZNm_lDRaXKkyWHVhxwGLOnpYOmzp7r7D_hXilftX1k1LPSSa3OlmvhVxcIulH-2hTIn-1qKSMrU-918wR9MdeTsQe7UdzRia9c2NInn2H3ImSvsz2hHXKHYwvxxB_S8lfwaaFDWe8RWfRrf-_OIRYmyey5F7ChduN2t7mE7PyUIVQHUnSqacIOtOJXOEIWU1yMEPeKfND_5gHIuXsU",
          caption: "Nexus Analytics Dashboard — Real-time performance chart suite",
          alt: "Nexus data visualization dashboard"
        }
      ]
    },
    impact: {
      headline: "Unlocking Rapid Enterprise Decision-Making",
      description: "The engine empowered over 3,000 corporate data analysts to extract instant insights, reducing weekly report assembly time from hours to seconds.",
      testimonial: {
        quote: "The speed of the Nexus engine is staggering. Operations that used to stall our browsers now compute instantly.",
        author: "Sarah Lin",
        role: "Head of Data Engineering",
        company: "Nexus Analytics Global"
      }
    }
  },

  {
    slug: "meridian-wealth-identity",
    title: "Meridian Wealth Identity",
    subtitle: "BRAND SYSTEM & DIRECTORY",
    category: "branding",
    categoryLabel: "Brand Identity & Strategy",
    client: "Meridian Capital Partners",
    timeline: "2024 (4 Months)",
    role: "Creative Director & Lead UI Specialist",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbX5WrSAzJ02toIzizIrIcNiwaYEWbm0IRC7pRHeD4Qhj9yjlKCnhBosgw0kdAjzELnGdv0iV-o1Lb87uFI1ndVyefTNJ0gACa5MRJHAUopYAM5J_V9dvb1r9gXkmGOTyCUju_muvaPvGVTonUeL0yHxnnG_ZeYYrDalEksk9x2ACdlay9wqwwKymMpf5jbXomHEkXFW-WI9Thy4kEU8SNLI0IHrr5g1doQ9ZZPR82UsNvaMd9Bn-C2wOFVQyNV9QL72yOebwDJgo",
    heroImageAlt: "Meridian Wealth management editorial brand collateral and typography guidelines",
    summary: "Complete visual redesign and digital brand identity system created for a boutique wealth management firm, elevating brand equity across digital and physical touchpoints.",
    metrics: [
      { label: "Brand Equity Index", value: "+42%", change: "+18pts", description: "Post-rebrand customer perception survey rating" },
      { label: "Conversion Rate", value: "3.8%", change: "+85%", description: "High-value investor inquiry form submission rate" },
      { label: "Design Token Adoption", value: "100%", change: "Full", description: "Design system consistency across 14 digital properties" }
    ],
    challenge: {
      headline: "Modernizing Heritage Trust for Next-Gen Investors",
      description: "Meridian Capital needed to shed an outdated corporate image while maintaining the air of stability and exclusivity required by institutional wealth partners.",
      keyPoints: [
        "Developing a timeless visual identity rooted in Swiss grid typography.",
        "Establishing unified color tokens, typography scales, and iconography across digital and print collateral.",
        "Designing an interactive digital brand portal for internal team alignment."
      ]
    },
    architecture: {
      headline: "Systematic Design Token Architecture",
      description: "Built using CSS custom properties and Figma variables, ensuring seamless brand synchronization across web apps, iOS/Android apps, and executive reports.",
      techStack: [
        { name: "Figma Variables & Tokens", role: "Single source of truth for design tokens", category: "design" },
        { name: "CSS Custom Properties", role: "Cascading theme variable distribution", category: "frontend" },
        { name: "Astro & MDX", role: "Internal design system documentation portal", category: "frontend" }
      ]
    },
    solution: {
      headline: "An Editorial Brand System Rooted in Precision",
      description: "A cohesive brand identity featuring custom serif typography, refined dark obsidian tones, and crisp geometric grid layouts.",
      features: [
        { title: "Custom Editorial Grid", description: "Precision 12-column layout grid inspired by swiss print publications.", tag: "Typography" },
        { title: "Dynamic Brand Portal", description: "Online repository of downloadable assets, guidelines, and interactive code snippets.", tag: "Documentation" }
      ],
      gallery: [
        {
          url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbX5WrSAzJ02toIzizIrIcNiwaYEWbm0IRC7pRHeD4Qhj9yjlKCnhBosgw0kdAjzELnGdv0iV-o1Lb87uFI1ndVyefTNJ0gACa5MRJHAUopYAM5J_V9dvb1r9gXkmGOTyCUju_muvaPvGVTonUeL0yHxnnG_ZeYYrDalEksk9x2ACdlay9wqwwKymMpf5jbXomHEkXFW-WI9Thy4kEU8SNLI0IHrr5g1doQ9ZZPR82UsNvaMd9Bn-C2wOFVQyNV9QL72yOebwDJgo",
          caption: "Meridian Wealth Identity — Editorial print and digital showcase",
          alt: "Meridian visual brand identity mockup"
        }
      ]
    },
    impact: {
      headline: "Elevating Market Positioning & Trust",
      description: "The brand overhaul directly supported Meridian's successful acquisition of $400M+ in new Assets Under Management (AUM) within the first two quarters post-launch.",
      testimonial: {
        quote: "The new identity perfectly encapsulates who we are: precise, sophisticated, and forward-looking.",
        author: "Julian Sterling",
        role: "Managing Partner",
        company: "Meridian Capital"
      }
    }
  },

  {
    slug: "civic-pulse-dashboard",
    title: "Civic Pulse Smart City Dashboard",
    subtitle: "UX & URBAN DATA INTERACTION",
    category: "ux",
    categoryLabel: "UX & Civic Infrastructure",
    client: "Metropolitan Transport & Smart City Board",
    timeline: "2023 - 2024 (9 Months)",
    role: "Lead Product Designer & Front-End Engineer",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPYFzjYdnbNgFan-IipMIJamgh75JdZI2GvcZ0UkEe95Ejn4sVctDhaRoLmoVkHULh2ExBJgKwAVGV4qdbvuPNfCx4ALDvIbgK3tVWBNRvO_K2C3yJCqH2GAKEoG45amFe7Va7BOet6GaMyFnVhO7cycHYfjlBbNe9HTEg92QmuzryIdFJMWrdUw2O-SooLEbt1rY1KvZCR0OIb5HKZwHtfFPi44VLXSs-FZGZcdfS4Dg90X6RCyfVqBi8V-lcePGyJXpu83_BgHs",
    heroImageAlt: "Civic Pulse Smart City real-time telemetry dashboard interface",
    summary: "Public municipality portal streamlining urban transport telemetry, energy usage monitoring, and real-time civic announcements for over 250,000 daily citizens.",
    metrics: [
      { label: "Active Citizens", value: "250K+", change: "+120%", description: "Daily active users accessing public transit telemetry" },
      { label: "Accessibility Score", value: "100%", change: "WCAG AAA", description: "Full compliance with screen reader and high-contrast standards" },
      { label: "Emergency Alert Speed", value: "< 1.5s", change: "-80%", description: "Instant notification broadcast time to citizen devices" }
    ],
    challenge: {
      headline: "Designing Accessible Civic Tech for Diverse Urban Demographics",
      description: "City leaders required a central digital hub to display live traffic, public transit delays, energy consumption, and emergency alerts accessible to citizens of all ages and abilities.",
      keyPoints: [
        "Ensuring strict WCAG 2.1 AAA accessibility compliance for visual and motor impairments.",
        "Handling massive concurrent traffic spikes during severe weather alerts.",
        "Integrating dynamic multi-language localization (EN, FR, DE, ES)."
      ]
    },
    architecture: {
      headline: "High-Availability Edge Architecture",
      description: "Constructed with server-rendered static shells hydrated on-demand with WebSocket telemetry feeds.",
      techStack: [
        { name: "Astro Static Generation", role: "Fast load times and offline accessibility cache", category: "frontend" },
        { name: "Tailwind CSS", role: "High-contrast theme utilities & fluid typography", category: "design" },
        { name: "Node.js & MQTT", role: "Low-overhead IoT sensor data stream ingestion", category: "backend" }
      ]
    },
    solution: {
      headline: "Inclusive Urban Telemetry Portal",
      description: "Clean, high-visibility UI with large touch targets, simplified transit maps, and instant emergency broadcasts.",
      features: [
        { title: "Real-Time Bus & Tram Radar", description: "Interactive map rendering vehicle positions with sub-second accuracy.", tag: "Transport" },
        { title: "Universal Contrast Mode", description: "One-click high-contrast and enlarged text modes for elderly citizens.", tag: "Accessibility" }
      ],
      gallery: [
        {
          url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPYFzjYdnbNgFan-IipMIJamgh75JdZI2GvcZ0UkEe95Ejn4sVctDhaRoLmoVkHULh2ExBJgKwAVGV4qdbvuPNfCx4ALDvIbgK3tVWBNRvO_K2C3yJCqH2GAKEoG45amFe7Va7BOet6GaMyFnVhO7cycHYfjlBbNe9HTEg92QmuzryIdFJMWrdUw2O-SooLEbt1rY1KvZCR0OIb5HKZwHtfFPi44VLXSs-FZGZcdfS4Dg90X6RCyfVqBi8V-lcePGyJXpu83_BgHs",
          caption: "Civic Pulse — Smart City urban data telemetry platform",
          alt: "Smart city dashboard overview screenshot"
        }
      ]
    },
    impact: {
      headline: "Empowering Urban Mobility & Civic Awareness",
      description: "Civic Pulse reduced transit helpdesk calls by 35% and received national recognition for digital accessibility standards.",
      testimonial: {
        quote: "This portal transformed how our citizens interact with city infrastructure. It is intuitive, reliable, and genuinely accessible to everyone.",
        author: "Elena Rostova",
        role: "Director of Digital Infrastructure",
        company: "Metropolitan Transit Authority"
      }
    }
  },

  {
    slug: "core-horizon-api",
    title: "Core Horizon API Framework",
    subtitle: "MICROSERVICES ARCHITECTURE",
    category: "dev",
    categoryLabel: "Backend Infrastructure",
    client: "Core Horizon Cloud Solutions",
    timeline: "2023 (5 Months)",
    role: "Backend Architect",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnU6PT_C7BltAiq3nWwWCFasqGIVolNg-kaUzqEjyz9JChevdRT-Wn7Pnxf745W2js_f7soxaTnLmFGGYp6v_KNXwXim0CRwfLk-qC2NW_NuQOFPMfGv0XxOsW0xY3x6zdpbtmWZpmMmWUvOE3bTBnGhot6jcPD3hTAZ13g7pr3XR33J7rlLcJ-K5IbRxrkfdQmn1eVhYqbT6Jehn6Tzli8SyWwC2MMzGXQByudrcrjJAFPufESNAEUrY-rrngFBVeknu2b-BRdkI",
    heroImageAlt: "Core Horizon cloud API backend infrastructure diagram abstraction",
    summary: "Fault-tolerant microservices platform processing over 10 million transactions daily with zero-downtime rolling deployments and automated rate limiting.",
    metrics: [
      { label: "Uptime Guaranteed", value: "99.99%", change: "Zero Downtime", description: "Uninterrupted availability during peak transaction traffic" },
      { label: "Daily Throughput", value: "10M+", change: "+3.2x", description: "Daily GraphQL and REST API queries served globally" },
      { label: "P99 Response Time", value: "18ms", change: "-42ms", description: "99th percentile end-to-end API response latency" }
    ],
    challenge: {
      headline: "Scaling Microservices Under Explosive Transaction Loads",
      description: "Core Horizon faced database lockups and API latency spikes during flash events due to monolithic server bottlenecks.",
      keyPoints: [
        "Decomposing legacy monolith into distributed Go microservices.",
        "Implementing token bucket rate limiting and automatic circuit breaking.",
        "Establishing distributed tracing with OpenTelemetry across 20+ service nodes."
      ]
    },
    architecture: {
      headline: "Event-Driven Distributed Microservices Stack",
      description: "Built on Go, gRPC, and Redis cluster caching to achieve ultra-low overhead per payload.",
      techStack: [
        { name: "Go (Golang)", role: "High-concurrency microservice handlers", category: "backend" },
        { name: "gRPC & Protobuf", role: "Sub-millisecond inter-service communication", category: "backend" },
        { name: "GraphQL Federation", role: "Unified query gateway for client applications", category: "backend" },
        { name: "Kubernetes & Docker", role: "Automated scaling and self-healing container pods", category: "infrastructure" }
      ]
    },
    solution: {
      headline: "High-Throughput Microservice Framework",
      description: "An elastic backend engine capable of scaling horizontally from 100 to 10,000 instances in seconds.",
      features: [
        { title: "Federated GraphQL Mesh", description: "Single entry point aggregating response schemas across 15 microservices.", tag: "API Gateway" },
        { title: "Zero-Allocation Serializer", description: "Custom JSON & binary encoding reducing memory overhead by 60%.", tag: "Performance" }
      ],
      gallery: [
        {
          url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnU6PT_C7BltAiq3nWwWCFasqGIVolNg-kaUzqEjyz9JChevdRT-Wn7Pnxf745W2js_f7soxaTnLmFGGYp6v_KNXwXim0CRwfLk-qC2NW_NuQOFPMfGv0XxOsW0xY3x6zdpbtmWZpmMmWUvOE3bTBnGhot6jcPD3hTAZ13g7pr3XR33J7rlLcJ-K5IbRxrkfdQmn1eVhYqbT6Jehn6Tzli8SyWwC2MMzGXQByudrcrjJAFPufESNAEUrY-rrngFBVeknu2b-BRdkI",
          caption: "Core Horizon API Architecture — Multi-region distribution infrastructure",
          alt: "Cloud API network visualization"
        }
      ]
    },
    impact: {
      headline: "Flawless Infrastructure Resilience",
      description: "Handled Cyber Monday traffic spikes smoothly with 0 failed requests and zero manual operator interventions required.",
      testimonial: {
        quote: "Mohammed's architectural decisions gave us complete peace of mind. Our servers haven't dropped a single packet since launch.",
        author: "David Vance",
        role: "CTO",
        company: "Core Horizon Cloud"
      }
    }
  },

  {
    slug: "global-asset-management",
    title: "Global Asset Management Portal",
    subtitle: "FINTECH & STRATEGY",
    category: "ux",
    categoryLabel: "Fintech & Strategy",
    client: "Aethelgard Wealth Europe",
    timeline: "2024 (7 Months)",
    role: "Lead Fintech Product Designer & Architect",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ1SA4-73E6GdgQQ4HPov5isXl7PvxN4zniQXQqaPJhtD-tCPTq3flpW2U1Dv4xT5buBNKCJWwRYtLDrrFLHD2z_CVy-ILgcUbnA90wq4bZjwE4bNrnsCfcMUX2TFTjimfCZ3gzqENmzzC6FiY4V4eFcv-WGlYDXLKpc3zuf5F3TD_y2Urc5NEx89anijtW5mgvDkNOywdlwRthNTryiSdsAeU14DI64QEfBfYJGZLCyAVCxsyOo9FrOp5D6KzeJMN-cYJ0SmYj8c",
    heroImageAlt: "Global Asset Management portal on mobile and desktop screens in minimalist dark mode",
    summary: "Redesigning the wealth management experience for high-net-worth individuals across 12 European markets, focusing on multi-currency reporting, security, and rapid insight delivery.",
    metrics: [
      { label: "Assets Tracked", value: "€4.2B", change: "+45%", description: "Total wealth portfolio volume active on platform" },
      { label: "Session Duration", value: "14.5 min", change: "+60%", description: "Deep investor engagement with analytical portfolio views" },
      { label: "Report Generation", value: "< 1.2s", change: "-90%", description: "Instant tax & dividend statement compilation" }
    ],
    challenge: {
      headline: "Unifying Fragmented Multi-Jurisdiction Wealth Portfolios",
      description: "Wealth managers and clients were struggling with disconnected banking spreadsheets, delayed currency conversions, and complex tax compliance documents.",
      keyPoints: [
        "Aggregating live asset valuations across 12 European banking jurisdictions.",
        "Simplifying complex tax & yield calculations into clear executive cards.",
        "Implementing multi-layer role permissions for family offices and tax advisors."
      ]
    },
    architecture: {
      headline: "Secure Multi-Tenant Fintech Architecture",
      description: "Strict isolation of sensitive customer wealth data using client-side payload encryption.",
      techStack: [
        { name: "React & TypeScript", role: "Strictly typed portfolio UI components", category: "frontend" },
        { name: "Astro Engine", role: "Fast static documentation & portal shell", category: "frontend" },
        { name: "PostgreSQL & Prisma", role: "Encrypted multi-currency ledger database", category: "backend" }
      ]
    },
    solution: {
      headline: "Comprehensive Wealth Command Center",
      description: "An elegant portal providing instantaneous visibility into cash flow, equity allocation, real estate holdings, and private debt.",
      features: [
        { title: "Real-Time FX Matrix", description: "Automatic multi-currency evaluation updated continuously via bank APIs.", tag: "Fintech" },
        { title: "One-Click Executive Dossier", description: "Generate audited PDF financial summaries instantly for family office meetings.", tag: "Reporting" }
      ],
      gallery: [
        {
          url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ1SA4-73E6GdgQQ4HPov5isXl7PvxN4zniQXQqaPJhtD-tCPTq3flpW2U1Dv4xT5buBNKCJWwRYtLDrrFLHD2z_CVy-ILgcUbnA90wq4bZjwE4bNrnsCfcMUX2TFTjimfCZ3gzqENmzzC6FiY4V4eFcv-WGlYDXLKpc3zuf5F3TD_y2Urc5NEx89anijtW5mgvDkNOywdlwRthNTryiSdsAeU14DI64QEfBfYJGZLCyAVCxsyOo9FrOp5D6KzeJMN-cYJ0SmYj8c",
          caption: "Global Asset Management Portal — Executive portfolio summary",
          alt: "Asset management dashboard screenshot"
        }
      ]
    },
    impact: {
      headline: "Redefining High-Net-Worth Portfolio Visibility",
      description: "Adopted by top European family offices, reducing portfolio reporting turnaround from 5 days to 2 seconds.",
      testimonial: {
        quote: "Our clients love the clarity and immediate response. It has become our primary client retention tool.",
        author: "Marcus Vance",
        role: "Managing Director",
        company: "Aethelgard Wealth"
      }
    }
  },

  {
    slug: "luxury-retail-ecosystem",
    title: "Luxury Retail Ecosystem",
    subtitle: "E-COMMERCE & UX",
    category: "ux",
    categoryLabel: "E-Commerce & UX",
    client: "Maison de Luxe Paris",
    timeline: "2024 (5 Months)",
    role: "Lead E-Commerce Experience Architect",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXg9pzJ-TRVgtrJ96zTGgktcDzA_KgAzGNfVd140oPHO3YMeybUawaAqtJTAcP6njWD-zxFq3a6AapVD8Mtv6cB59goFsKnBGMOTSsx6VBRYrS8LVHS4SHOko5llmQr_eKezyi11L1fjfF8KQpQmQWE6wQx_nbyG8TCrtsc_jWBNm6MfdBl0DS8ls8tlvl8Fy86pjc0DKyDE6_LJpbIqA287K2xpficAvfvQSfOhVruyGaK165Cur24AXymdzfYJZ1M4mjkS04sbo",
    heroImageAlt: "Luxury Retail Ecosystem storefront visual showcasing bold typography and dark aesthetic",
    summary: "Developing an omni-channel e-commerce experience for a heritage luxury fashion brand, seamlessly integrating digital boutique styling with physical flagship store interactions.",
    metrics: [
      { label: "Online Sales Growth", value: "+114%", change: "2.1x", description: "YoY increase in online luxury boutique revenue" },
      { label: "Average Order Value", value: "€2,850", change: "+34%", description: "Expanded basket size driven by high-touch recommendation UI" },
      { label: "Page Load Speed", value: "0.8s", change: "-65%", description: "LCP performance across desktop and mobile devices" }
    ],
    challenge: {
      headline: "Translating In-Boutique Luxury Service into Digital E-Commerce",
      description: "Heritage fashion clients felt standard e-commerce stores felt cheap and transactional rather than curated and personal.",
      keyPoints: [
        "Creating editorial lookbooks with smooth zoom inspection and video playback.",
        "Integrating private boutique appointment booking directly into item detail pages.",
        "Maintaining high-resolution 4K asset delivery without slowing down page loads."
      ]
    },
    architecture: {
      headline: "Headless E-Commerce & Edge Content Delivery",
      description: "Built on Shopify Storefront GraphQL APIs paired with Astro static generation for sub-second global loads.",
      techStack: [
        { name: "Astro & React", role: "Headless storefront presentation framework", category: "frontend" },
        { name: "Shopify Storefront API", role: "GraphQL checkout and inventory management engine", category: "backend" },
        { name: "Cloudflare Images", role: "Automated WebP/AVIF compression at the edge", category: "infrastructure" }
      ]
    },
    solution: {
      headline: "Digital Haute Couture Storefront",
      description: "Full-bleed photography layout, fluid page transitions, and VIP private styling reservations.",
      features: [
        { title: "Interactive Runway Lookbook", description: "Shop directly from runway videos with synchronized product overlays.", tag: "E-Commerce" },
        { title: "Boutique Concierge Connect", description: "Schedule in-person fitting sessions at flagship locations worldwide.", tag: "Omni-Channel" }
      ],
      gallery: [
        {
          url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXg9pzJ-TRVgtrJ96zTGgktcDzA_KgAzGNfVd140oPHO3YMeybUawaAqtJTAcP6njWD-zxFq3a6AapVD8Mtv6cB59goFsKnBGMOTSsx6VBRYrS8LVHS4SHOko5llmQr_eKezyi11L1fjfF8KQpQmQWE6wQx_nbyG8TCrtsc_jWBNm6MfdBl0DS8ls8tlvl8Fy86pjc0DKyDE6_LJpbIqA287K2xpficAvfvQSfOhVruyGaK165Cur24AXymdzfYJZ1M4mjkS04sbo",
          caption: "Luxury Retail Storefront — Editorial homepage layout",
          alt: "Luxury retail e-commerce website UI"
        }
      ]
    },
    impact: {
      headline: "Expanding Global Reach While Preserving Exclusivity",
      description: "Attracted a new demographic of younger digital-native luxury consumers while boosting repeat orders among established collectors.",
      testimonial: {
        quote: "Our online flagship now mirrors the exact elegance of our Rue Saint-Honoré boutique.",
        author: "Claire Delacroix",
        role: "Chief Commercial Officer",
        company: "Maison de Luxe"
      }
    }
  },

  {
    slug: "saas-analytics",
    title: "Next-Gen SaaS Analytics",
    subtitle: "ENTERPRISE & ARCHITECTURE",
    category: "dev",
    categoryLabel: "Enterprise & Architecture",
    client: "Apex SaaS Technologies",
    timeline: "2023 - 2024 (6 Months)",
    role: "Lead Full-Stack Architect",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdOneOMgBaJxd91LW6PbFv2oswMugTcPs4T3DX0r-JQsFTOtr2edIJhFkj_cke_JN_IM-vAO6E7Ykkj1k7RdXfid1nLvxjUvNeMiGXvmSIHSvA4x0F5kR0T6dJFfuMq27fBG5F4w5C0d341T_TCvS6iy00rnGZUCe47aqo6c0BpBXYt98hvjG5yV6erhwH9gpYsNAzUGwZpLMHT-GF9AZFsyzQakVBmK2xDZsG_k1fJAPqnA_oDbYd7ana_No9uFgqZiMRS6l2OZc",
    heroImageAlt: "Next-Gen SaaS Analytics corporate intranet dashboard with data visualization charts",
    summary: "Modernizing the data visualization layer for a leading enterprise analytics platform. Simplifying complex raw data sets into actionable executive insights.",
    metrics: [
      { label: "Dashboard Load Time", value: "0.6s", change: "-72%", description: "Initial time to interactive dashboard load" },
      { label: "User Adoption Rate", value: "91%", change: "+35%", description: "Weekly active manager log-ins across client orgs" },
      { label: "Data Accuracy", value: "100%", change: "Verified", description: "Zero delta reconciliation between raw logs and rendered charts" }
    ],
    challenge: {
      headline: "Transforming Complex Big Data into Intuitive Visual Cards",
      description: "Enterprise users were overwhelmed by multi-tab analytics screens with conflicting data definitions and sluggish chart filtering.",
      keyPoints: [
        "Unifying 30+ disparate reporting screens into a cohesive modular dashboard system.",
        "Supporting custom drag-and-drop widget layouts per user role.",
        "Ensuring instant chart recalculation without page refreshes."
      ]
    },
    architecture: {
      headline: "Modular Micro-Frontend Component System",
      description: "Designed using React components with Zustand store management and Tailwind CSS styling tokens.",
      techStack: [
        { name: "React & Zustand", role: "Predictable state management & widget tree", category: "frontend" },
        { name: "Tailwind CSS", role: "Scalable design system color & typography tokens", category: "design" },
        { name: "Node.js REST API", role: "Optimized aggregation server for fast chart responses", category: "backend" }
      ]
    },
    solution: {
      headline: "Executive Insights Engine",
      description: "Clean visual reporting with customizable KPI widgets, automated anomaly detection callouts, and schedule-based executive emails.",
      features: [
        { title: "Drag & Drop Canvas", description: "Personalize analytics dashboards in seconds with snap-to-grid layout.", tag: "Customization" },
        { title: "Anomaly Radar", description: "AI notifications alerting teams to sudden traffic or conversion deviations.", tag: "Intelligence" }
      ],
      gallery: [
        {
          url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdOneOMgBaJxd91LW6PbFv2oswMugTcPs4T3DX0r-JQsFTOtr2edIJhFkj_cke_JN_IM-vAO6E7Ykkj1k7RdXfid1nLvxjUvNeMiGXvmSIHSvA4x0F5kR0T6dJFfuMq27fBG5F4w5C0d341T_TCvS6iy00rnGZUCe47aqo6c0BpBXYt98hvjG5yV6erhwH9gpYsNAzUGwZpLMHT-GF9AZFsyzQakVBmK2xDZsG_k1fJAPqnA_oDbYd7ana_No9uFgqZiMRS6l2OZc",
          caption: "Next-Gen SaaS Analytics — Main executive dashboard",
          alt: "SaaS analytics executive dashboard interface"
        }
      ]
    },
    impact: {
      headline: "Streamlining Executive Decision Workflows",
      description: "Reduced average weekly reporting prep time by 4 hours per team lead, accelerating executive decision-making cycles across 500+ enterprises.",
      testimonial: {
        quote: "This dashboard turned our data chaos into crystal-clear executive action points. Indispensable tool.",
        author: "Robert Chen",
        role: "VP of Product",
        company: "Apex SaaS Technologies"
      }
    }
  }
];

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAdjacentCaseStudies(slug: string): { prev?: CaseStudy; next?: CaseStudy } {
  const index = caseStudies.findIndex((cs) => cs.slug === slug);
  if (index === -1) return {};

  const prev = index > 0 ? caseStudies[index - 1] : caseStudies[caseStudies.length - 1];
  const next = index < caseStudies.length - 1 ? caseStudies[index + 1] : caseStudies[0];

  return { prev, next };
}
