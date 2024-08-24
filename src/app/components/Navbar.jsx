"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";
import useTranslation from "next-translate/useTranslation";

/* 
const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
]; */



const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { t, lang } = useTranslation("common");

  const pathname = usePathname();

  const navLinks = [
    {
      title: `${t('common:navBar.about.title')}`,
      path: "#about",
    },
    {
      title: `${t('common:navBar.projects.title')}`,
      path: "#projects",
    },
    {
      title: `${t('common:navBar.notion.title')}`,
      path: "https://mathildemeno.gumroad.com/",
    },
    {
      title: `${t('common:navBar.contact.title')}`,
      path: "#contact",
    },
  ];

  const isProjectPage = pathname.includes("project");

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image src="/images/mathilde-logo.svg" alt="logo" width={70} height={70} />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {isProjectPage ?
              <li>
                <NavLink href={'/'} title={t('common:navBar.home.title')} />
              </li> :
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))
            }

            <LanguageSwitcher />
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
