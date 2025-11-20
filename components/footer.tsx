import Link from 'next/link'
import { Crown, Github, Twitter, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-clash-purple/20 bg-clash-darker py-8">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Crown className="h-6 w-6 text-clash-gold" />
              <span className="text-lg font-bold bg-gradient-to-r from-clash-purple to-clash-gold bg-clip-text text-transparent">
                Clash Master
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              The ultimate Clash Royale deck builder and academy to help you climb the arenas and become a champion.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/deck-builder" className="hover:text-clash-purple transition-colors">Deck Builder</Link></li>
              <li><Link href="/decks" className="hover:text-clash-purple transition-colors">Meta Decks</Link></li>
              <li><Link href="/arenas" className="hover:text-clash-purple transition-colors">Arena Guide</Link></li>
              <li><Link href="/cards" className="hover:text-clash-purple transition-colors">Card Database</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/balance-changes" className="hover:text-clash-purple transition-colors">Balance Changes</Link></li>
              <li><Link href="/guide" className="hover:text-clash-purple transition-colors">Beginner Guide</Link></li>
              <li><Link href="/profile" className="hover:text-clash-purple transition-colors">Profile</Link></li>
              <li><Link href="/auth" className="hover:text-clash-purple transition-colors">Sign In</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-clash-purple transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-clash-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-clash-purple transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              © 2024 Clash Master. Not affiliated with Supercell.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}