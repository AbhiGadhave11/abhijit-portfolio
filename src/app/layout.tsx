import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "next-themes"
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import logo from '@/app/public/Logo/logo.png'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
    title: 'Abhijit Gadhave — Portfolio',
    description: 'Software Engineer • Web • DSA',
    icons: { icon: logo.src },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
