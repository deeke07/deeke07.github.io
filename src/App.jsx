import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  ChartNoAxesCombined,
  CheckCircle2,
  Download,
  ExternalLink,
  Globe2,
  GraduationCap,
  Home,
  Mail,
  Menu,
  MessageCircleMore,
  Moon,
  Phone,
  Rocket,
  Sparkles,
  Sun,
  Workflow,
  X,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const projectItems = [
  {
    title: 'Ax Secondary',
    description:
      'Comprehensive internal CRM platform for real estate agents to manage listings, leads, client interactions, and daily operations efficiently.',
    stack: ['Kotlin', 'MVVM', 'Room DB', 'Firebase', 'Clean Architecture'],
    category: 'CRM',
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
    stack: ['Kotlin', 'Firebase', 'Coroutines', 'Flow', 'Jetpack Compose'],
    category: 'Communication',
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
    features: [
      'Diagnostic test booking through partnered clinical labs',
      'Real-time tracking of sample collection and delivery agents',
      'Simple report and scheduling experience for patients',
    ],
  },
]

const experienceItems = [
  {
    role: 'Android Developer',
    period: 'Nov 2023 – Mar 2026',
    company: 'AX Capital (Dubai, UAE - Remote)',
    summary:
      'Developed multiple internal production applications for real estate agents and business operations.',
    points: [
      'Built property listing, lead management, contacts, and calendar systems to improve agent productivity',
      'Implemented call tracking and recording with Accessibility Services for Android 9+ constraints',
      'Delivered live location tracking via FusedLocationProviderClient and Foreground Service',
      'Developed real-time WhatsApp-like chat with listing sharing and read receipts',
      'Architected apps with MVVM + Clean Architecture, Hilt, Room, and StateFlow',
    ],
  },
  {
    role: 'Flutter Developer',
    period: 'Jan 2022 – Feb 2023',
    company: 'Siliconkraft Tech Pvt Ltd (Bangalore, India)',
    summary:
      'Built cross-platform iOS and Android e-commerce white-label applications using Flutter and Dart.',
    points: [
      'Created reusable feature modules for multi-client business requirements',
      'Maintained technical specifications and documentation across lifecycle',
      'Collaborated with design, QA, and product teams for quality delivery',
    ],
  },
  {
    role: 'Android Developer',
    period: 'Jul 2021 – Jan 2022',
    company: 'Sachirva Technology Solution (Bangalore, India)',
    summary:
      'Contributed across planning, development, optimization, and collaboration for Android products.',
    points: [
      'Wrote efficient Kotlin code using MVVM best practices',
      'Worked with QA, product, design, and support teams across all phases',
      'Improved app performance, stability, and user experience',
    ],
  },
  {
    role: 'Android Developer',
    period: 'Aug 2018 – Jul 2021',
    company: 'Fitnytech Technology (Bangalore, India)',
    summary:
      'Built and maintained fitness and education apps used by thousands of users.',
    points: [
      'Delivered multiple client apps with full development lifecycle ownership',
      'Used Kotlin and Java for production Android applications',
      'Reduced crash rates and optimized memory usage',
    ],
  },
  {
    role: 'Android Developer Intern',
    period: 'Jan 2018 – Jun 2018',
    company: 'Jain Software (Raipur, India)',
    summary:
      'Assisted in Android feature implementation under senior developer mentorship.',
    points: [
      'Supported app development and debugging tasks',
      'Contributed to module implementation and testing',
    ],
  },
]

const educationItems = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    period: '2014 – 2018',
    institute: 'CSVTU University',
    details: 'Focused on software engineering fundamentals and core computer science.',
  },
]

const skillScores = [
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

const blogItems = [
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

function App() {
  const resumeUrl = '/Deekendra_Resume.pdf'
  const [theme, setTheme] = useState('light')
  const [activeFilter, setActiveFilter] = useState('All')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const categories = useMemo(
    () => ['All', ...new Set(projectItems.map((project) => project.category))],
    [],
  )

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectItems
    return projectItems.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    const revealNodes = document.querySelectorAll('.reveal')
    revealNodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#0a0a0a]">
      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-md">
        <div className="pointer-events-none absolute left-1/2 top-0 h-16 w-[56%] -translate-x-1/2 rounded-b-full bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.35),rgba(99,102,241,0.02)_65%,transparent_75%)] blur-md"></div>
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
          <div className="flex items-center overflow-hidden rounded-md border border-slate-800 bg-black/50">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center text-fuchsia-500 transition hover:bg-slate-900"
              aria-label="Open side menu"
            >
              <Menu size={18} />
            </button>
            <a
              href="#hero"
              className="inline-flex h-10 items-center border-l border-slate-800 px-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-100"
            >
              Deekendra
            </a>
          </div>

          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-xl border border-slate-700 p-2 text-slate-300 transition hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          aria-label="Close side menu overlay"
        ></button>
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-72 border-r border-slate-800 bg-slate-950 p-5 text-slate-200 shadow-2xl transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">Menu</p>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-800 hover:text-slate-200"
            aria-label="Close side menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-6 flex flex-col gap-2">
          {[
            { href: '#hero', label: 'Home' },
            { href: '#profile', label: 'Profile' },
            { href: '#experience', label: 'Experience' },
            { href: '#projects', label: 'Portfolio' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-slate-700 hover:bg-slate-900 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-6 rounded-lg border border-slate-800 bg-slate-900/60 p-3">
          <p className="text-xs text-slate-400">Android Developer</p>
          <p className="mt-1 text-sm font-semibold text-slate-100">Deekendra Kumar</p>
          <p className="mt-1 text-xs text-slate-400">Raipur, India</p>
        </div>
      </aside>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-24 pt-8 sm:px-6 sm:py-12">
        <section
          id="hero"
          className="section-card reveal relative overflow-hidden border-slate-900 bg-[#070b1b] text-slate-200 dark:border-slate-800 dark:bg-[#070b1b]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(129,140,248,0.26),transparent_54%)]"></div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(2,132,199,0.18),transparent_50%)]"></div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

          <div className="relative mx-auto flex max-w-5xl flex-col items-center py-10 text-center sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Open To Opportunities
            </p>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">
              Hi, I&apos;m Deekendra Kumar!
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] text-white sm:text-[5.2rem]">
              <span className="text-indigo-300">{'{'}</span>
              <span className="mx-2">Senior Mobile</span>
              <br />
              <span className="mx-2">Engineer</span>
              <span className="text-indigo-300">{'}'}</span>
            </h1>
            <p className="mt-7 max-w-3xl text-sm uppercase tracking-[0.12em] text-slate-300 sm:text-[15px] sm:leading-8">
              Leading-edge mobile application development with a focus on scalable architecture,
              performance optimization, and high-impact user experiences.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#profile"
                className="inline-flex min-w-40 items-center justify-center gap-2 rounded-full bg-indigo-200 px-8 py-3 text-sm font-semibold tracking-wide text-slate-900 transition hover:-translate-y-0.5 hover:bg-indigo-100"
              >
                About Me <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex min-w-40 items-center justify-center gap-2 rounded-full border border-slate-500 px-8 py-3 text-sm font-semibold tracking-wide text-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Let&apos;s Talk <MessageCircleMore size={16} />
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-40 items-center justify-center gap-2 rounded-full bg-indigo-200 px-8 py-3 text-sm font-semibold tracking-wide text-slate-900 transition hover:-translate-y-0.5 hover:bg-indigo-100"
              >
                Download CV <Download size={16} />
              </a>
            </div>

            <div className="mt-9 flex items-center gap-4">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 transition hover:border-indigo-400 hover:text-indigo-300"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 transition hover:border-indigo-400 hover:text-indigo-300"
                aria-label="GitHub profile"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="mailto:deekendra0796@gmail.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 transition hover:border-indigo-400 hover:text-indigo-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="tel:+919098284997"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 transition hover:border-indigo-400 hover:text-indigo-300"
                aria-label="Phone"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="section-card reveal border-slate-900 bg-[#070b1b] text-slate-100">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            Global Expertise
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold leading-tight text-white sm:text-5xl">
            Let me introduce <span className="text-indigo-300">{'{the Engineer}'}</span>
          </h2>

          <div className="mx-auto mt-7 w-full max-w-4xl rounded-3xl border border-slate-800 bg-[#171d2b] p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)] sm:p-10">
            <div className="grid items-center gap-6 md:grid-cols-[210px_1fr]">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-indigo-300/80 shadow-[0_0_40px_rgba(129,140,248,0.35)]">
                <img
                  src="/profile-photo.png"
                  alt="Deekendra Kumar"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-left text-lg leading-relaxed text-slate-300">
                Expert Android Developer with 6+ years of professional experience. Specializing in
                high-performance mobile architectures, I build and scale production applications
                while maintaining strong reliability, performance, and long-term maintainability.
              </p>
            </div>
          </div>
        </section>

        <section className="reveal grid gap-4 sm:grid-cols-3">
          <article className="section-card text-center">
            <p className="text-3xl font-bold text-slate-900 dark:text-white">6+</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Years of experience</p>
          </article>
          <article className="section-card text-center">
            <p className="text-3xl font-bold text-slate-900 dark:text-white">20+</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Completed projects</p>
          </article>
          <article className="section-card text-center">
            <p className="text-3xl font-bold text-slate-900 dark:text-white">99%+</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Production stability</p>
          </article>
        </section>

        <section id="profile" className="section-card reveal border-slate-900 bg-[#070b1b] text-slate-100">
          <div className="grid gap-7 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-extrabold uppercase tracking-[0.15em] text-white">Profile</h3>
              <div className="mt-5 rounded-2xl border border-slate-800 bg-[#171d2b] p-5">
                <ul className="divide-y divide-slate-800 text-[15px] text-slate-300">
                  <li className="py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-100">Fullname:</p>
                    <p className="mt-1">Deekendra Kumar</p>
                  </li>
                  <li className="py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-100">
                      Current Position:
                    </p>
                    <p className="mt-1">Android Developer</p>
                  </li>
                  <li className="py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-100">Location:</p>
                    <p className="mt-1">Raipur, India</p>
                  </li>
                  <li className="py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-100">Email:</p>
                    <p className="mt-1">deekendra0796@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold uppercase tracking-[0.15em] text-white">Skills</h3>
              <div className="mt-5 space-y-4">
                {skillScores.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.13em] text-slate-200">
                      <span>{skill.name}</span>
                      <span className="rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-[10px] tracking-[0.06em] text-slate-300">
                        {skill.value}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-indigo-300"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex min-w-44 items-center justify-center gap-2 rounded-full bg-indigo-200 px-8 py-3 text-sm font-semibold tracking-[0.15em] uppercase text-slate-900 transition hover:-translate-y-0.5 hover:bg-indigo-100"
            >
              Hire Me
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-44 items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold tracking-[0.15em] uppercase text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-200"
            >
              Download CV
            </a>
          </div>
        </section>

        <section id="experience" className="section-card reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Experience
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
            Lead Mobile App Developer Credentials
          </h2>
          <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">Work Experience</h3>
          <div className="mt-4 space-y-4">
            {experienceItems.map((item) => (
              <article key={item.company} className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.role}</h4>
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    <CalendarDays size={14} />
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">{item.company}</p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{item.summary}</p>
                <ul className="mt-3 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle2 size={15} className="mt-0.5 text-indigo-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <h3 className="mt-8 text-xl font-semibold text-slate-900 dark:text-white">Education</h3>
          <div className="mt-4 space-y-3">
            {educationItems.map((item) => (
              <article key={item.degree} className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.degree}</h4>
                <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">{item.institute}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.details}</p>
                <p className="mt-2 inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <GraduationCap size={14} />
                  {item.period}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-card reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
            Check Out Some Of My Works
          </h2>
          <p className="mt-3 max-w-4xl text-sm text-slate-600 dark:text-slate-400">
            Explore high-impact Android products and production systems across real estate,
            communication, education, healthcare, and mobility.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Featured Projects</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                    activeFilter === category
                      ? 'border-indigo-500 bg-indigo-500 text-white'
                      : 'border-slate-300 text-slate-600 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-slate-200 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-card dark:border-slate-800"
              >
                <div className="relative h-36 overflow-hidden rounded-xl border border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
                  <div className="absolute inset-0 grid place-items-center text-slate-400 dark:text-slate-500">
                    <ChartNoAxesCombined size={24} />
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Global Solutions
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Idea To Product</h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            I help founders and businesses transform concepts into market-ready digital products
            with strong engineering foundations and predictable delivery.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
              <Rocket className="text-indigo-500" size={20} />
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">Rapid MVP</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Fast, high-quality MVP development for mobile products ready for early users.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
              <Workflow className="text-indigo-500" size={20} />
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                Scalable Architecture
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Clean architecture, robust APIs, and maintainable modules built for growth.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
              <Sparkles className="text-indigo-500" size={20} />
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                Future-Proof Tech
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Right stack selection with Kotlin, Compose, and modern engineering practices.
              </p>
            </article>
          </div>
        </section>

        <section className="section-card reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Blog
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
            Latest Thoughts
          </h2>
          <div className="mt-6 space-y-3">
            {blogItems.map((post) => (
              <article
                key={post.title}
                className="rounded-xl border border-slate-200 p-4 transition hover:-translate-y-0.5 dark:border-slate-800"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-indigo-500">{post.tag}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {post.title}
                </h3>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-card reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Get In Touch</h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            For collaboration, consulting, or product development discussions, reach out directly.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:deekendra0796@gmail.com"
              className="rounded-xl border border-slate-300 p-4 text-sm transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <span className="inline-flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
                <Mail size={16} /> deekendra0796@gmail.com
              </span>
            </a>
            <a
              href="tel:+919098284997"
              className="rounded-xl border border-slate-300 p-4 text-sm transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <span className="inline-flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
                <Phone size={16} /> +91-9098284997
              </span>
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-300 px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-950/40"
            >
              <Download size={16} /> Download Resume <ExternalLink size={14} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <FaGithub size={16} /> GitHub <ExternalLink size={14} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <FaLinkedin size={16} /> LinkedIn <ExternalLink size={14} />
            </a>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <Home size={16} /> Back To Top
            </a>
          </div>
        </section>

        <section className="section-card reveal">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
            <p className="inline-flex items-center gap-2">
              <BriefcaseBusiness size={15} /> Crafted with React + Tailwind
            </p>
            <p className="inline-flex items-center gap-2">
              <Globe2 size={15} /> Deekendra Kumar Portfolio
            </p>
            <p className="inline-flex items-center gap-2">
              <CalendarDays size={15} /> Updated 2026
            </p>
          </div>
        </section>
      </main>

      <nav className="fixed bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-card backdrop-blur md:hidden dark:border-slate-800 dark:bg-slate-900/95">
        <a
          href="#hero"
          className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <Home size={14} />
          Home
        </a>
        <a
          href="#experience"
          className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <BriefcaseBusiness size={14} />
          Work
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <ChartNoAxesCombined size={14} />
          Works
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <Mail size={14} />
          Contact
        </a>
      </nav>
    </div>
  )
}

export default App
