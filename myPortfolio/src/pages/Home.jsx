import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { StarBackground } from '@/components/StarBackground'

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-hidden'>
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground/>
      
      {/* NavBar */}

      {/* Main Content */}

      {/* Footer Section */}
      
    </div>
  )
}
