import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = ['Linux/RHEL', 'Docker', 'Kubernetes', 'AWS', 'Python', 'Terraform', 'Ansible', 'CI/CD'];

export default function Developer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dev" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="grid lg:grid-cols-12 gap-16 items-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/20 to-purple-500/10 rounded-3xl blur-2xl" />
              <div className="relative aspect-square max-w-md mx-auto">
                <img
                  src="/images/profile.png"
                  alt="Kader Khan"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white">Kader Khan</h3>
                  <p className="text-sky-400">DevOps Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <span className="text-sky-600 dark:text-sky-400 text-sm font-medium tracking-wider uppercase">About the Developer</span>
            
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
              <span className="text-slate-900 dark:text-white">Built by someone who </span>
              <span className="text-gradient">gets it.</span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I'm a DevOps Engineer who manages dozens of servers daily. I built binsh 
              because I was tired of juggling terminal windows, scattered configs, and 
              forgotten credentials. This is the tool I always wanted.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-xl">
                  💼
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">DevOps Engineer</h4>
                  <p className="text-sm text-slate-500">Cloud infrastructure & automation specialist</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-xl">
                  🎓
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">B.Sc. Computer Science</h4>
                  <p className="text-sm text-slate-500">AIUB, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-xl">
                  📜
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Certified Professional</h4>
                  <p className="text-sm text-slate-500">AWS Cloud Practitioner, RHCSA</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent mt-32" />
      </div>
    </section>
  );
}
