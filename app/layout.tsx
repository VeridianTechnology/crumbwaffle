import type { Metadata } from 'next';
import { Manrope, DM_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/crumbwaffle/shared';
import { Motion } from '@/components/crumbwaffle/interactive';
const display = Manrope({variable:'--font-display',subsets:['latin']});
const body = DM_Sans({variable:'--font-body',subsets:['latin']});
const mono = IBM_Plex_Mono({variable:'--font-mono',subsets:['latin'],weight:['400','500']});
export const metadata: Metadata = { title:{default:'CrumbWaffle — Your own AI. In a box.',template:'%s | CrumbWaffle'},description:'Proposed private, upgradeable AI boxes for homes and small businesses. Your own AI, local storage, and room to grow.' };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="en"><body className={`${display.variable} ${body.variable} ${mono.variable}`}><Header/>{children}<Footer/><Motion/></body></html> }
