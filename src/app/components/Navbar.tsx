'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'


const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
]


export default function Navbar() {
const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 nav-blur">
            <div className="container flex h-16 items-center justify-between">
                <a href="#" className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src='/Images/Profile/myimage1.jpeg' alt="AG" className="h-8 w-8 rounded-xl" />
                    <span className="font-semibold">Abhijit Gadhave</span>
                </a>

                <nav className="hidden md:flex items-center gap-6">
                    {links.map(l => (
                    <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-white">
                        {l.label}
                    </a>
                    ))}
                    <a href="https://drive.google.com/file/d/10eNKH1oFbunhBwpM_E2hgs3R28eW7__J/view?usp=sharing" target="_blank" className="btn">Resume</a>
                </nav>


                <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Menu">
                    {open ? <X /> : <Menu />}
                </button>
            </div>


            {open && (
                <div className="md:hidden border-t border-white/10">
                    <div className="container flex flex-col gap-4 py-4">
                    {links.map(l => (
                    <a key={l.href} href={l.href} className="text-slate-300" onClick={() => setOpen(false)}>
                    {l.label}
                    </a>
                    ))}
                    <a href="https://drive.google.com/file/d/10eNKH1oFbunhBwpM_E2hgs3R28eW7__J/view?usp=sharing" target="_blank" className="btn w-fit">Resume</a>
                    </div>
                </div>
            )}
        </header>
    )
}