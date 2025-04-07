"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const menuItems = [
    { title: "INÍCIO", path: "/" },
    { title: "QUEM SOMOS", path: "/#quem-somos" },
    {
      title: "SERVIÇOS",
      submenu: [
        { title: "ESTRUTURAS METÁLICAS", path: "/estruturas-metalicas" },
        { title: "LINHAS DE VIDA", path: "/linhas-de-vida" },
        {
          title: "PROJETOS INDUSTRIAIS MECÂNICOS",
          path: "/projetos-industriais-mecanicos",
        },
        { title: "LAUDOS", path: "/laudos" },
      ],
      path: "#", // no mobile não redireciona diretamente
    },
    { title: "DOWNLOADS", path: "/downloads" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#FBFAFB] border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src={"/logo.png"} width={200} height={200} alt="rany_logo" />
        </Link>

        {/* Botão mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          {menuItems.map((menu, index) => (
            <div key={index} className="relative group">
              <Link
                className="cursor-pointer flex items-center"
                href={menu.path}
              >
                {menu.title} {menu.submenu ? <ChevronDown size={16} /> : ""}
              </Link>
              {menu.submenu && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {menu.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.path}
                      className="block px-4 py-2 hover:bg-blue-100"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 text-sm font-medium shadow-md">
          {menuItems.map((menu, index) => (
            <div key={index} className="py-2">
              {menu.submenu ? (
                <>
                  <button
                    onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                    className="flex items-center justify-between w-full py-1"
                  >
                    {menu.title}
                    <ChevronDown
                      className={`transform transition duration-200 ${
                        isSubMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isSubMenuOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {menu.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.path}
                          className="block text-gray-700"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          • {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={menu.path}
                  className="block py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {menu.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
