"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FlaskRound, Table, BookOpen, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-cyan-300 text-2xl font-bold tracking-wide flex items-center gap-2 drop-shadow-md">
          🔬 شیمی‌یار
        </div>

        <div className="hidden md:flex gap-8 text-white text-lg font-medium">
          <Link
            href="/molar-mass"
            className="flex items-center gap-2 hover:text-cyan-300 transition-all duration-300"
          >
            <FlaskRound size={20} />
            جرم مولی
          </Link>

          <Link
            href="/periodic-table"
            className="flex items-center gap-2 hover:text-cyan-300 transition-all duration-300"
          >
            <Table size={20} />
            جدول تناوبی
          </Link>

          <Link
            href="/questions"
            className="flex items-center gap-2 hover:text-cyan-300 transition-all duration-300"
          >
            <BookOpen size={20} />
            نمونه سوالات
          </Link>
        </div>

        <button
          className="md:hidden text-white hover:text-cyan-300 transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20 text-white px-6 py-4 flex flex-col gap-4 shadow-2xl animate-fade-in-down">
          <Link
            href="/molar-mass"
            className="flex items-center gap-3 hover:text-cyan-300 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            <FlaskRound size={20} />
            جرم مولی
          </Link>

          <Link
            href="/periodic-table"
            className="flex items-center gap-3 hover:text-cyan-300 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            <Table size={20} />
            جدول تناوبی
          </Link>

          <Link
            href="/questions"
            className="flex items-center gap-3 hover:text-cyan-300 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            <BookOpen size={20} />
            نمونه سوالات
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
