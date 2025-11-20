'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, ArrowUp, ArrowDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface CarouselCard {
  id: string
  name: string
  image: string
  change: number
  type: 'buff' | 'nerf'
  rarity: string
}

const mockCards: CarouselCard[] = [
  {
    id: '1',
    name: 'Mega Knight',
    image: 'https://cdn.royaleapi.com/static/img/cards-2024/Mega%20Knight.png',
    change: 15,
    type: 'buff',
    rarity: 'Legendary'
  },
  {
    id: '2',
    name: 'Electro Wizard',
    image: 'https://cdn.royaleapi.com/static/img/cards-2024/Electro%20Wizard.png',
    change: -10,
    type: 'nerf',
    rarity: 'Legendary'
  },
  {
    id: '3',
    name: 'Royal Giant',
    image: 'https://cdn.royaleapi.com/static/img/cards-2024/Royal%20Giant.png',
    change: 8,
    type: 'buff',
    rarity: 'Common'
  },
  {
    id: '4',
    name: 'Princess',
    image: 'https://cdn.royaleapi.com/static/img/cards-2024/Princess.png',
    change: -5,
    type: 'nerf',
    rarity: 'Legendary'
  },
  {
    id: '5',
    name: 'Fireball',
    image: 'https://cdn.royaleapi.com/static/img/cards-2024/Fireball.png',
    change: 12,
    type: 'buff',
    rarity: 'Rare'
  },
  {
    id: '6',
    name: 'Goblin Barrel',
    image: 'https://cdn.royaleapi.com/static/img/cards-2024/Goblin%20Barrel.png',
    change: -8,
    type: 'nerf',
    rarity: 'Epic'
  }
]

export function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cards] = useState(mockCards)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 3 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 3 : prevIndex - 1
    )
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [cards.length])

  const visibleCards = cards.slice(currentIndex, currentIndex + 3)

  return (
    <section className="py-16 bg-clash-darker">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-clash-purple to-clash-gold bg-clip-text text-transparent">
            Recent Card Changes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out the cards that received the biggest buffs and nerfs this season
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-clash-purple text-clash-purple hover:bg-clash-purple hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-6 overflow-hidden">
              <AnimatePresence mode="wait">
                {visibleCards.map((card, index) => (
                  <motion.div
                    key={`${card.id}-${currentIndex}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex-shrink-0"
                  >
                    <Card className="clash-card w-64 group hover:scale-105 transition-transform duration-300">
                      <CardContent className="p-6">
                        <div className="text-center">
                          <div className="relative mb-4">
                            <img
                              src={card.image}
                              alt={card.name}
                              className="w-24 h-32 mx-auto object-contain"
                              onError={(e) => {
                                e.currentTarget.src = '/placeholder-card.png'
                              }}
                            />
                            <div className="absolute -top-2 -right-2">
                              <Badge
                                variant={card.type === 'buff' ? 'default' : 'destructive'}
                                className="flex items-center gap-1 text-xs"
                              >
                                {card.type === 'buff' ? (
                                  <ArrowUp className="h-3 w-3" />
                                ) : (
                                  <ArrowDown className="h-3 w-3" />
                                )}
                                {card.change > 0 ? '+' : ''}{card.change}%
                              </Badge>
                            </div>
                          </div>

                          <h3 className="font-semibold text-lg mb-2 group-hover:text-clash-purple transition-colors">
                            {card.name}
                          </h3>

                          <Badge
                            variant="secondary"
                            className={`text-xs ${
                              card.rarity === 'Legendary'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : card.rarity === 'Epic'
                                ? 'bg-purple-500/20 text-purple-400'
                                : card.rarity === 'Rare'
                                ? 'bg-blue-500/20 text-blue-400'
                                : 'bg-gray-500/20 text-gray-400'
                            }`}
                          >
                            {card.rarity}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-clash-purple text-clash-purple hover:bg-clash-purple hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: cards.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-clash-gold'
                    : 'bg-clash-purple/30 hover:bg-clash-purple/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}