import { Suspense } from 'react'
import { HeroSection } from '@/components/sections/hero-section'
import { BalanceChanges } from '@/components/sections/balance-changes'
import { TopDecks } from '@/components/sections/top-decks'
import { CardCarousel } from '@/components/sections/card-carousel'
import { LoadingSkeleton } from '@/components/ui/loading-skeleton'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <Suspense fallback={<LoadingSkeleton />}>
        <BalanceChanges />
      </Suspense>
      
      <Suspense fallback={<LoadingSkeleton />}>
        <TopDecks />
      </Suspense>
      
      <Suspense fallback={<LoadingSkeleton />}>
        <CardCarousel />
      </Suspense>
    </div>
  )
}