import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowUp, ArrowDown, Minus } from 'lucide-react'

interface BalanceChange {
  name: string
  change: number
  type: 'buff' | 'nerf' | 'unchanged'
}

async function getBalanceChanges(): Promise<BalanceChange[]> {
  try {
    // Using RoyaleAPI for balance changes
    const response = await fetch('https://royaleapi.github.io/cr-api-data/json/cards.json', {
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error('Failed to fetch cards data')
    }

    const cards = await response.json()

    // For demo purposes, we'll simulate balance changes
    // In a real app, you'd compare current stats with previous versions
    const changes: BalanceChange[] = [
      { name: 'Mega Knight', change: 15, type: 'buff' },
      { name: 'Electro Wizard', change: -10, type: 'nerf' },
      { name: 'Royal Giant', change: 8, type: 'buff' },
      { name: 'Princess', change: -5, type: 'nerf' },
      { name: 'Goblin Barrel', change: 0, type: 'unchanged' },
      { name: 'Fireball', change: 12, type: 'buff' },
    ]

    return changes
  } catch (error) {
    console.error('Error fetching balance changes:', error)
    return []
  }
}

export async function BalanceChanges() {
  const changes = await getBalanceChanges()

  return (
    <section className="py-16 bg-clash-darker">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-clash-purple to-clash-gold bg-clip-text text-transparent">
            Recent Balance Changes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest buffs and nerfs affecting the meta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {changes.map((change, index) => (
            <Card key={change.name} className="clash-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg">{change.name}</span>
                  <Badge
                    variant={change.type === 'buff' ? 'default' : change.type === 'nerf' ? 'destructive' : 'secondary'}
                    className="flex items-center gap-1"
                  >
                    {change.type === 'buff' && <ArrowUp className="h-3 w-3" />}
                    {change.type === 'nerf' && <ArrowDown className="h-3 w-3" />}
                    {change.type === 'unchanged' && <Minus className="h-3 w-3" />}
                    {change.change !== 0 ? `${change.change > 0 ? '+' : ''}${change.change}%` : 'No Change'}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Last updated</span>
                  <span className="text-sm text-clash-gold">2 days ago</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/balance-changes"
            className="text-clash-purple hover:text-clash-gold transition-colors font-medium"
          >
            View all balance changes →
          </a>
        </div>
      </div>
    </section>
  )
}