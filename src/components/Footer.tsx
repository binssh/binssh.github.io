import { Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#home" className="logo-text text-xl">
            <span className="logo-hash">#</span>
            <span className="text-slate-900 dark:text-white">binsh</span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-slate-500">
            <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</a>
            <a href="#docs" className="hover:text-slate-900 dark:hover:text-white transition-colors">Docs</a>
            <a href="#connect" className="hover:text-slate-900 dark:hover:text-white transition-colors">Connect</a>
            <a 
              href="https://github.com/onedord1/binsh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-600">
            © {currentYear} Kader Khan
          </p>
        </div>
      </div>
    </footer>
  );
}
