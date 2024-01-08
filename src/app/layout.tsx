import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/Navbar/NavBar'
import SideBar from '@/components/Sidebar/SideBar'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashborad Visualization',
  description: 'Created by Naveen Kumar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex w-full bg-slate-100 p-6'>
          <SideBar/>
          <div className='flex-1 w-full'>
          {children}
          </div>
        </div>
        </body>
    </html>
  )
}
