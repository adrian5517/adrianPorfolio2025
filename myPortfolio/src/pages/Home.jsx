import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { StarBackground } from '@/components/StarBackground'
import { NavBar } from '@/components/NavBar'

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-hidden'>
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground/>
      {/* NavBar */}
      <NavBar/>

      {/* Main Content */}

      {/* Footer Section */}
      
    </div>
  )
}
