// components/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../utils/NavImages/logo2.png";
import { useRouter } from "next/navigation"

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Cortinas", href: "/cortinas-e-persianas#cortinas" },
  { label: "Persianas", href: "/cortinas-e-persianas#persianas" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
]

export function Navbar() {
  const [open, setOpen] = useState(false);

  const router = useRouter()
  
  const smoothScrollTo = (targetY: number, duration: number = 1200) => {
  const startY = window.scrollY
  const diff = targetY - startY
  let startTime: number | null = null

  const easeInOut = (t: number) => {
    return t < 0.5
      ? 2 * t * t
      : 1 - Math.pow(-2 * t + 2, 2) / 2
  }

  const step = (currentTime: number) => {
    if (!startTime) startTime = currentTime
    const time = currentTime - startTime
    const progress = Math.min(time / duration, 1)
    const eased = easeInOut(progress)

    window.scrollTo(0, startY + diff * eased)

    if (time < duration) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

const handleNavigation = (href: string) => {
  if (href.includes("#")) {
    const [path, id] = href.split("#")

    // se estiver em outra página, navega primeiro
    if (window.location.pathname !== path) {
      router.push(href)
      return
    }

    const el = document.getElementById(id)

    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      smoothScrollTo(y, 1400)
    }

    return
  }

  router.push(href)
}

  return (
    <header className="bg-white h-30 relative z-50">
      {/* mantém suas medidas (px-20 etc). só adiciona position relative */}
      <div className="flex items-center justify-between px-5 relative lg:px-10">
        <div>
          <Image alt="Persisol" src={Logo} className="h-35 w-auto" />
        </div>

        {/* Desktop nav (inalterado) */}
        <nav className="hidden md:flex gap-7">
          {navItems.map((item) => (
            <button key={item.label} className="text-[#C7A62B] text-[18px] py-3 hover:text-[#977e22] last:bg-[#C7A62B] last:hover:bg-[#977e22] last:hover:text-white transition last:px-10 last:text-white cursor-pointer" onClick={() => handleNavigation(item.href)}>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="text-[#C7A62B]" /> : <HamburgerIcon className="text-[#C7A62B]" />}
        </button>

        {/* Mobile dropdown (AGORA em absolute, não empurra o conteúdo) */}
        <div
          id="mobile-menu"
          className={`md:hidden ${open ? "block" : "hidden"} absolute left-0 top-full w-full bg-white shadow-lg border-t border-zinc-200`}
        >
          <nav className="flex flex-col gap-1 px-20">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="text-[#C7A62B] pt-5 pb-5"
                onClick={() => {
                  handleNavigation(item.href) // ✅ navega corretamente
                  setOpen(false) // ✅ fecha o menu
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}