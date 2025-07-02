"use client";

import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useEffect, useState } from "react";

// ⇢ INTERNAL paths – no more full external URLs
const navItems = [
  { name: "Home", link: "/" },
  { name: "Commands", link: "/shortcuts" },   // ← /shortcuts
  { name: "Docs", link: "https://quidedocs.vercel.app/" },
  { name: "Help", link: "/helpform" },        // ← /helpform
];

function NavbarDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full">
      <Navbar className={`transition-all duration-300 ease-in-out ${scrolled}`}>
        {/* ─────────── Desktop Nav ─────────── */}
        <NavBody>
          <NavbarLogo>
            <div className="flex items-center gap-2 text-white">
              <img src="/Quide.png" alt="QuIDE logo" className="h-6 w-6" />
              <span className="text-lg font-bold">QuIDE</span>
            </div>
          </NavbarLogo>

          {/* if <NavItems /> already expects plain hrefs, the internal
             paths above will “just work” */}
          <NavItems items={navItems} />

          <div className="flex items-center gap-4">
            {/* existing internal page */}
            <Link href="/sandbox" className="contents">
              <NavbarButton variant="secondary">How?</NavbarButton>
            </Link>
          </div>
        </NavBody>

        {/* ─────────── Mobile Nav ─────────── */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo>
              <div className="flex items-center gap-2 text-white">
                <img src="/Quide.png" alt="QuIDE logo" className="h-6 w-6" />
                <span className="text-lg font-bold">QuIDE</span>
              </div>
            </NavbarLogo>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClickAction={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => {
              const isHash = item.link.startsWith("#");

              // For hash links keep <a>; otherwise use <Link>
              return isHash ? (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-neutral-200 dark:text-white"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-neutral-200 dark:text-white"
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="flex w-full flex-col gap-4 pt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Get Started
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default NavbarDemo;
