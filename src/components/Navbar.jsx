"use client";

import React from "react";
import { Github, Menu, X } from "lucide-react";
import Link from 'next/link'
const menuItems = [
  {
    name: "Home",
    href: "/",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='relative w-full bg-white'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8'>
     
        <div className=' grow items-start flex'>
          <ul className=' inline-flex '>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className='text-sm font-semibold text-gray-800 hover:text-gray-900'>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex '>
          <Link href="https://github.com/gyandeeparyan/admin-dashboard" target="_blank">
          <button
            type='button'
            className='rounded-md flex items-center justify-center gap-2 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>
            <span>
              <Github />
            </span>{" "}
            Github
          </button>
        </Link>
        </div>
       
       
      </div>
    </div>
  );
}
