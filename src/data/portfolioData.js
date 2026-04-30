
export const projectItems = [
  {
    title: 'Ax Secondary',
    description:
      'Comprehensive internal CRM platform for real estate agents to manage listings, leads, client interactions, and daily operations efficiently.',
    details:
      'Built with real estate workflows in mind, Ax Secondary delivers listing management, buyer and seller tracking, contact follow-ups, and calendar-driven activities in one polished agent app.',
    stack: ['Kotlin', 'MVVM', 'Room DB', 'Firebase', 'Clean Architecture'],
    category: 'CRM',
    image: '/assets/ax-secondary/ax-secondary.jpeg',
    screenshots: [
      '/assets/ax-secondary/ax-secondary.jpeg',
    ],
    features: [
      'Property listing and lead management',
      'Contact handling with calendar-based event tracking',
      'Centralized dashboard for productivity and performance insights',
    ],
  },
  {
    title: 'Ax Telelog',
    description:
      'Enterprise-grade tracking system for agent activity monitoring, compliance, and communication analytics across channels.',
    stack: ['Kotlin', 'Accessibility Service', 'Room DB', 'Coroutines', 'Flow'],
    category: 'Automation',
    details:
      'Field-team compliance and activity automation for real estate operations, with strong support for background call tracking and agent coordination.',
    image: '/assets/call-recording/call-recording-app.png',
    screenshots: [
      '/assets/call-recording/call-recording-app.png',
    ],
    features: [
      'Automatic call recording and call log history',
      'Periodic location tracking for field teams',
      'WhatsApp, Telegram, and Botim communication tracking',
    ],
  },
  {
    title: 'Ax Chat',
    description:
      'Scalable real-time messaging app inspired by WhatsApp, focused on business communication and listing collaboration.',
    details:
      'Built as a secure communications hub for agents, supporting fast media sharing and property collaboration across teams.',
    stack: ['Kotlin', 'Firebase', 'Coroutines', 'Flow', 'Jetpack Compose'],
    category: 'Communication',
    image: '/assets/chap-app/chat-app.png',
    screenshots: [
      '/assets/chap-app/chat-app.png',
    ],
    features: [
      'Real-time messaging with media and file sharing',
      'Property listing sharing directly in chat',
      'Reliable communication architecture for high usage',
    ],
  },
  {
    title: 'Dileep Tailors (100K+ Downloads)',
    description:
      'Educational e-commerce app for tailors and learners combining premium tutorials with pattern purchasing in one platform.',
    stack: ['Kotlin', 'MVVM', 'Firebase', 'Retrofit', 'Room DB'],
    category: 'E-Learning',
    details:
      'A high-growth fashion learning platform designed for tailors and hobbyists, combining commerce with premium training content.',
    image: '/assets/dileep-tailors/dileep-tailors.png',
    screenshots: [
      '/assets/dileep-tailors/dileep-tailors.png',
    ],
    features: [
      'Premium blouse cutting tutorials and HD stitching videos',
      'Chart pattern purchases integrated inside the app',
      '100K+ downloads with strong user engagement',
    ],
  },
  {
    title: 'Mozzingo (Customer + Mechanic Apps)',
    description:
      'Dual-app roadside assistance ecosystem enabling instant booking, real-time mechanic discovery, and live tracking.',
    stack: ['Kotlin', 'Google Maps', 'Firebase', 'Coroutines', 'Hilt'],
    category: 'Mobility',
    image: '/assets/mozzingo/mozzingo-app.png',
    screenshots: [
      '/assets/mozzingo/mozzingo-app.png',
    ],
    features: [
      'Nearby mechanic discovery using live location',
      'Instant service booking and arrival tracking',
      'In-app communication, service management, and notifications',
    ],
  },
  {
    title: 'ParinaySamriddhi',
    description:
      'Google Play matrimonial app with intelligent partner discovery, modern profile experience, and built-in communication.',
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM', 'Clean Architecture'],
    category: 'Social',
    image: '/assets/parinay-samriddhi/parinay-samriddhi.png',
    screenshots: [
      '/assets/parinay-samriddhi/parinay-samriddhi.png',
    ],
    features: [
      'Advanced profile creation and preference setup',
      'Smart matchmaking and recommendation flow',
      'Real-time chat and engagement features',
    ],
  },
  {
    title: 'Diagnorays',
    description:
      'Healthcare diagnostics app for test booking, lab integrations, and real-time tracking of sample collection and delivery workflows.',
    stack: ['Kotlin', 'Retrofit', 'Firebase', 'Coroutines', 'Flow'],
    category: 'Healthcare',
    details:
      'A patient-first diagnostics experience delivering easy lab selection, appointment booking, and fast report access.',
    image: '/assets/diagnorays/diagnorays-app.png',
    screenshots: [
      '/assets/diagnorays/diagnorays-app.png',
    ],
    features: [
      'Diagnostic test booking through partnered clinical labs',
      'Real-time tracking of sample collection and delivery agents',
      'Simple report and scheduling experience for patients',
    ],
  },
]

export const experienceItems = [
  {
    role: 'Android Developer',
    period: 'Nov 2023 – Mar 2026',
    company: 'AX Capital (Dubai, UAE - Remote)',
    summary:
      'Independently architected and shipped 5 internal Android platforms used daily by 1,000+ real estate agents across the UAE — from a WhatsApp-style chat system to live GPS tracking and a full CRM suite.',
    points: [
      'Sole Android engineer responsible for 5 production apps used by 1,000+ agents daily — owned architecture, development, and Play Store deployment end-to-end.',
      'Built a WhatsApp-style real-time chat (WebSockets + FCM) with listing sharing, read receipts, and offline message queuing — zero data loss on poor network.',
      'Delivered live GPS field-agent tracking using FusedLocationProviderClient inside a Foreground Service with adaptive, battery-efficient update intervals.',
      'Engineered a call recording & monitoring system via Android Accessibility Services — one of the most technically constrained features under Android 9+ API restrictions.',
      'Built a full CRM suite: property listings, lead pipeline, contacts, and agent calendar — consolidated 4 separate workflows into one platform.',
      'Designed a real-time agent dashboard with live KPI feeds and activity monitoring using StateFlow + Kotlin Coroutines.',
      'Architecture: MVVM + Clean Architecture, Hilt DI, Room (offline-first), Retrofit, WorkManager, WebSockets, FCM, Google Maps SDK.',
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Clean Architecture', 'Hilt', 'Coroutines', 'Room', 'WebSockets', 'FCM', 'FusedLocation', 'Accessibility Services', 'WorkManager', 'Google Maps SDK'],
  },
  {
    role: 'Flutter Developer',
    period: 'Jan 2022 – Feb 2023',
    company: 'Siliconkraft Tech Pvt Ltd (Bangalore, India)',
    summary:
      'Built cross-platform e-commerce white-label apps in Flutter for multiple international clients — one modular codebase, deployed to both iOS and Android.',
    points: [
      'Designed a white-label Flutter architecture with reusable feature modules — allowed rapid per-client customisation without duplicating codebases.',
      'Delivered production apps for iOS and Android from a single Dart codebase — maintained full feature parity across both platforms.',
      'Maintained technical specifications and documentation across the full product lifecycle — reduced onboarding time for new developers.',
      'Worked cross-functionally with design, QA, and product teams — ensured on-time delivery with high quality standards.',
    ],
    techStack: ['Flutter', 'Dart', 'iOS', 'Android', 'White-label architecture', 'Modular design'],
  },
  {
    role: 'Android Developer',
    period: 'Jul 2021 – Jan 2022',
    company: 'Sachirva Technology Solution (Bangalore, India)',
    summary:
      'Contributed across the full Android development lifecycle — wrote clean Kotlin with MVVM, improved app stability, and collaborated closely with product and QA teams.',
    points: [
      'Wrote production-grade Kotlin code following MVVM architecture and clean code principles — maintained high code readability and testability.',
      'Improved app performance and stability through profiling and targeted optimisation — contributed to measurable crash rate reduction.',
      'Collaborated end-to-end with QA, product management, design, and support — delivered features on schedule with minimal defects.',
    ],
    techStack: ['Kotlin', 'MVVM', 'Android SDK', 'Performance optimisation'],
  },
  {
    role: 'Android Developer',
    period: 'Aug 2018 – Jul 2021',
    company: 'Fitnytech Technology (Bangalore, India)',
    summary:
      'Built and shipped fitness and education apps used by thousands of users — full lifecycle ownership across multiple client apps over 3 years.',
    points: [
      'Delivered multiple client-facing Android apps across fitness and education domains — owned development from spec to Play Store release.',
      'Reduced app crash rates and optimised memory usage — improved production stability through systematic profiling and code review.',
      'Migrated production codebase from Java to Kotlin — improved maintainability and developer velocity significantly.',
      'Maintained apps actively used by thousands of users — handled real-world performance and stability at scale.',
    ],
    techStack: ['Kotlin', 'Java', 'Android SDK', 'LeakCanary', 'Memory optimisation', 'Play Store'],
  },
  {
    role: 'Android Developer Intern',
    period: 'Jan 2018 – Jun 2018',
    company: 'Jain Software (Raipur, India)',
    summary:
      'First industry exposure — contributed to Android feature development and debugging under senior mentorship. Where the 7-year journey started.',
    points: [
      'Assisted in Android app development — implemented features and resolved bugs under senior developer guidance.',
      'Contributed to module implementation and testing cycles — built foundational understanding of the Android development lifecycle.',
    ],
    techStack: ['Android', 'Java', 'Debugging'],
  },
]

export const educationItems = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    period: '2014 – 2018',
    institute: 'CSVTU University',
    details: 'Focused on software engineering fundamentals and core computer science.',
  },
]

export const skillScores = [
  { name: 'Android', value: 90 },
  { name: 'Java', value: 80 },
  { name: 'Kotlin', value: 90 },
  { name: 'Flutter', value: 85 },
  { name: 'Scrum', value: 85 },
  { name: 'Git', value: 85 },
  { name: 'Agile', value: 80 },
  { name: 'CI/CD', value: 80 },
  { name: 'Clean Architecture', value: 90 },
]

export const blogItems = [
  {
    title: 'Building Scalable Real-Time Chat on Android',
    tag: 'ANDROID / CHAT / ARCHITECTURE',
  },
  {
    title: 'Compose Performance Checklist for Production Apps',
    tag: 'JETPACK COMPOSE / PERFORMANCE',
  },
  {
    title: 'Designing Reliable Offline-First Mobile Features',
    tag: 'MOBILE ARCHITECTURE / OFFLINE',
  },
]
