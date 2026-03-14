"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '/', label: '추천 테스트' },
    { href: '/ai-tools-guide', label: 'AI 도구 추천' },
    { href: '/free-ai-tools', label: '무료 AI' },
    { href: '/ai-ranking', label: 'AI 순위' },
    { href: '/creative-ai', label: '크리에이티브 AI' },
    { href: '/board', label: 'AI 팁' },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 px-4">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-bold text-indigo-500 text-lg flex items-center gap-2">
          🤖 AI 추천
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                pathname === link.href ? 'text-indigo-600 font-bold' : 'text-slate-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 text-slate-500 hover:text-indigo-600 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white absolute left-0 right-0 shadow-lg">
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? 'bg-indigo-50 text-indigo-600 font-bold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
