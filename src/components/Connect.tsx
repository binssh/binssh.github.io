import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, ArrowUpRight, Download } from 'lucide-react';

export default function Connect() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="connect" className="relative py-32">
      {/* Blob background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sky-600 dark:text-sky-400 text-sm font-medium tracking-wider uppercase">Connect</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            <span className="text-slate-900 dark:text-white">Let's </span>
            <span className="text-gradient">talk</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Questions, feedback, or just want to say hi? Reach out anytime.
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-20"
        >
          <a
            href="mailto:kader.devops@gmail.com"
            className="group bg-white border border-slate-200 dark:bg-slate-900/80 dark:border-slate-800 rounded-2xl p-6 hover:border-sky-300 dark:hover:border-slate-700 hover:shadow-lg transition-all flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-sky-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">Email</h3>
              <p className="text-sm text-slate-500 truncate">kader.devops@gmail.com</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-sky-400 transition-colors" />
          </a>

          <a
            href="https://linkedin.com/in/abir-k"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-slate-200 dark:bg-slate-900/80 dark:border-slate-800 rounded-2xl p-6 hover:border-sky-300 dark:hover:border-slate-700 hover:shadow-lg transition-all flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Linkedin className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">LinkedIn</h3>
              <p className="text-sm text-slate-500 truncate">linkedin.com/in/abir-k</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
          </a>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 via-purple-500/10 to-sky-400/20 rounded-3xl blur-2xl" />
          <div className="relative bg-white border border-slate-200 dark:bg-slate-900/90 dark:border-slate-800 rounded-3xl p-10 md:p-14 text-center shadow-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to try <span className="logo-text"><span className="logo-hash">#</span>binsh</span>?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto">
              Download for free and experience modern server management. Open source forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/onedord1/binsh/releases"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-sky-500 hover:bg-sky-400 px-8 py-4 rounded-full text-base text-white font-semibold flex items-center justify-center gap-3 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Free
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
                Star on GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
