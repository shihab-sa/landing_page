"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        Logo
      </Link>
      <div className="flex items-center gap-6">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1"
          >
            Solutions ▼
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg">
              <Link href="/solutions/anycaas" className="block p-2">
                AnyCaaS
              </Link>
              <Link href="/solutions/anybaas" className="block p-2">
                AnyBaaS
              </Link>
              <Link href="/solutions/anypaas" className="block p-2">
                AnyPaaS
              </Link>
            </div>
          )}
        </div>
        <Link href="/services">Services</Link>
        <Link href="/about">About Us</Link>
        <button className="flex items-center gap-1">EN ▼</button>
        <Link href="/contact" className="flex items-center">
          Contact Us →
        </Link>
      </div>
    </nav>
  );
}
