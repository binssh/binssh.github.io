import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: 'Host Management',
    description: 'Visual dashboard for all your servers with status indicators and quick actions.',
    icon: '🖥️'
  },
  {
    title: 'Secure Vault',
    description: 'AES-256 encrypted storage for credentials with master password protection.',
    icon: '🔐'
  },
  {
    title: 'Integrated Terminal',
    description: 'Full-featured terminal with ANSI colors, vim support, and multiple tabs.',
    icon: '⌨️'
  },
  {
    title: 'Group Organization',
    description: 'Color-coded groups for projects, environments, or clients.',
    icon: '📁'
  },
  {
    title: 'Quick Connect',
    description: 'One-click connections with automatic credential retrieval.',
    icon: '⚡'
  },
  {
    title: 'Known Hosts',
    description: 'Visual SSH known hosts manager with key type indicators.',
    icon: '🔑'
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-32">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-black dark:via-slate-900/30 dark:to-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-sky-600 dark:text-sky-400 text-sm font-medium tracking-wider uppercase">Features</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            <span className="text-slate-900 dark:text-white">Built for </span>
            <span className="text-gradient">professionals</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Everything you need to manage servers efficiently. Secure, fast, and intuitive.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="bg-white border border-slate-200 dark:bg-slate-900/50 dark:border-slate-800 rounded-2xl p-8 h-full hover:border-sky-300 dark:hover:border-slate-700 hover:shadow-xl dark:hover:bg-slate-900/80 transition-all duration-300">
                <span className="text-3xl mb-6 block">{feature.icon}</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent mt-32" />
      </div>
    </section>
  );
}
