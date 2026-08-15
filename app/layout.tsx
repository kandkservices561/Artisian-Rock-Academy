import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Artisian Rock Academy", description: "Two-day hands-on faux rock wall training by K & K Services and Cait Rose Gallery." };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
