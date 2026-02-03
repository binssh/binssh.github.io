import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Github, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen overflow-hidden">
      {/* Background App Screenshot - Parallax */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ opacity: imageOpacity }}
      >
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ scale: imageScale, y: imageY }}
        >
          <img
            src="/images/app-ui.png"
            alt="binsh application"
            className="w-full h-full object-cover object-top opacity-30 dark:opacity-20"
          />
        </motion.div>
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/98 to-white dark:from-black/70 dark:via-black/80 dark:to-black" />
      </motion.div>

      {/* Subtle blob accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-sky-500/10 dark:bg-sky-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-sky-400/10 dark:bg-sky-400/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-32">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-medium border border-sky-500/20">
                Now on Linux
              </span>
              <span className="text-slate-500 text-sm">Open Source & Free</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
            >
              <span className="text-slate-900 dark:text-white">Server management</span>
              <br />
              <span className="text-gradient">reimagined.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              The modern SSH client for DevOps engineers and developers. 
              Secure, intuitive, and beautifully designed.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://github.com/onedord1/binsh/releases"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-sky-500 hover:bg-sky-400 px-8 py-4 rounded-full text-base text-white font-semibold flex items-center justify-center gap-3 group transition-colors"
              >
                <Download className="w-5 h-5" />
                Download for Linux
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="https://github.com/onedord1/binsh"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800/50 px-8 py-4 rounded-full text-base text-slate-700 dark:text-slate-300 flex items-center justify-center gap-3 transition-colors"
              >
                <Github className="w-5 h-5" />
                View Source
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-16 flex items-center gap-12 justify-center lg:justify-start"
            >
              {[
                { value: '100%', label: 'Free Forever' },
                { value: 'AES-256', label: 'Encrypted' },
                { value: 'Native', label: 'Linux App' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-xl font-semibold text-slate-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Feature highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="space-y-4">
              {[
                { icon: '🔐', title: 'Secure Vault', desc: 'AES-256 encrypted credentials' },
                { icon: '⚡', title: 'Quick Connect', desc: 'One-click SSH sessions' },
                { icon: '📊', title: '65+ Hosts', desc: 'Manage all servers in one place' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/90 dark:bg-slate-900/70 backdrop-blur-sm border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
