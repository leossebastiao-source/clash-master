'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Crown, Play, Users, Trophy } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-clash-darker via-clash-dark to-clash-purple/20">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, #8B5CF6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F59E0B 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <Crown className="h-16 w-16 text-clash-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-clash-purple via-white to-clash-gold bg-clip-text text-transparent"
          >
            Master Clash Royale
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Build meta decks, climb arenas, and become a champion with our ultimate deck builder and academy
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button asChild size="lg" className="clash-button">
              <Link href="/deck-builder">
                <Play className="mr-2 h-5 w-5" />
                Start Building
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-clash-purple text-clash-purple hover:bg-clash-purple hover:text-white">
              <Link href="/decks">
                <Trophy className="mr-2 h-5 w-5" />
                View Meta Decks
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-clash-gold mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Meta Decks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-clash-gold mb-2">121</div>
              <div className="text-sm text-muted-foreground">Cards Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-clash-gold mb-2">25</div>
              <div className="text-sm text-muted-foreground">Arenas Covered</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}