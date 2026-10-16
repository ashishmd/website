'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

// Root-relative so the same links work from case-study pages.
const navItems = [
  { name: 'Case Studies', href: '/#case-studies' },
  { name: 'How I Lead', href: '/#how-i-lead' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Writing', href: '/#publications' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

const sectionId = (href: string) => href.split('#')[1];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = navItems.map((item) => sectionId(item.href));
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4">
          <a
            href="/"
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            Ashish Muralidharan
          </a>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === sectionId(item.href);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400 bg-gray-100 dark:bg-gray-800'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleTheme}
              className="mr-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === sectionId(item.href);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive
                        ? 'text-primary-600 dark:text-primary-400 bg-gray-100 dark:bg-gray-800'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
