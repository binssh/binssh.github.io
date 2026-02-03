import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const docSections = [
  {
    id: 'intro',
    title: 'Introduction',
    content: `binsh is a modern SSH client and server management platform designed for DevOps engineers, system administrators, and developers who manage multiple remote servers.

Unlike traditional terminal-based SSH clients, binsh offers a visual dashboard approach while maintaining the power professionals require.

**Key Benefits:**
• Centralized server management in one place
• Visual interface with quick actions
• Secure credential storage
• Works completely offline`
  },
  {
    id: 'install',
    title: 'Installation',
    content: `**System Requirements:**
• Ubuntu 20.04+, Debian 11+, Fedora 35+
• 64-bit x86 processor
• 512 MB RAM minimum

**Snap Store (Recommended):**
sudo snap install binsh --beta
sudo snap connect binsh:ssh-keys

**Debian/Ubuntu (.deb):**
sudo dpkg -i binsh_*.deb
sudo apt install -f

**AppImage (Universal):**
chmod +x binsh-*.AppImage
./binsh-*.AppImage`
  },
  {
    id: 'features',
    title: 'Features',
    content: `**Host Management**
Visual dashboard for all servers with status indicators, quick actions, and group organization. Add hosts with labels, addresses, ports, and authentication methods.

**Secure Vault**
AES-256 encrypted storage for passwords and SSH keys. Protected by a master password with auto-lock after inactivity.

**Integrated Terminal**
Full-featured terminal emulator with ANSI color support, vim compatibility, multiple tabs, and customizable fonts.

**Group Organization**
Create color-coded groups to organize servers by project, environment, or client. Filter and navigate efficiently.

**Known Hosts Manager**
Visual interface for SSH known_hosts file. Scan, view key types, and convert entries to managed hosts.`
  },
  {
    id: 'usage',
    title: 'User Guide',
    content: `**Getting Started:**
1. Launch binsh from your application menu
2. Create your local account (username and password)
3. Configure the secure vault with a master password

**Adding a Host:**
1. Click "Hosts" in the sidebar
2. Click "Add Host" button
3. Enter label, address, port, username
4. Select authentication method
5. Click Save

**Connecting:**
Click "Connect" on any host card. A terminal tab opens with your SSH session.

**Organizing with Groups:**
Navigate to Groups → Add Group → Enter name, description, color → Assign hosts to groups when editing.

**Backup Configuration:**
cp -r ~/.config/binsh ~/binsh-backup`
  }
];

function DocSection({ section, isOpen, onToggle }: { 
  section: typeof docSections[0], 
  isOpen: boolean, 
  onToggle: () => void 
}) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <h3 className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
          {section.title}
        </h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-slate-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-500" />
        )}
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed whitespace-pre-line">
          {section.content.split('\n').map((line, i) => {
            if (line.startsWith('**') && line.endsWith('**')) {
              return <p key={i} className="font-semibold text-slate-900 dark:text-white mt-4 mb-2">{line.replace(/\*\*/g, '')}</p>
            }
            if (line.startsWith('•')) {
              return <p key={i} className="ml-4">{line}</p>;
            }
            if (line.match(/^\d\./)) {
              return <p key={i} className="ml-4">{line}</p>;
            }
            if (line.startsWith('sudo') || line.startsWith('chmod') || line.startsWith('cp') || line.startsWith('./')) {
              return <code key={i} className="block bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg font-mono text-xs text-sky-600 dark:text-sky-400 my-2">{line}</code>;
            }
            return <p key={i}>{line}</p>;
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default function Docs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openSections, setOpenSections] = useState<string[]>(['intro']);

  const toggleSection = (id: string) => {
    setOpenSections(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  return (
    <section id="docs" className="relative py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-sky-600 dark:text-sky-400 text-sm font-medium tracking-wider uppercase">Documentation</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            <span className="text-slate-900 dark:text-white">Everything you need to </span>
            <span className="text-gradient">get started</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Complete guides for installation, features, and daily workflows.
          </p>
        </motion.div>

        {/* Documentation Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white border border-slate-200 dark:bg-slate-900/80 dark:border-slate-800 rounded-2xl p-8 shadow-sm dark:shadow-none"
        >
          {docSections.map((section) => (
            <DocSection
              key={section.id}
              section={section}
              isOpen={openSections.includes(section.id)}
              onToggle={() => toggleSection(section.id)}
            />
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent mt-32" />
      </div>
    </section>
  );
}
