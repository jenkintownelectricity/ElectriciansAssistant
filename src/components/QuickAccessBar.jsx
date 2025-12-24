import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Clock, Star, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { motion } from 'framer-motion'

const QuickAccessBar = ({ onCodeSelect, recentCodes = [], bookmarkedCodes = [] }) => {
  const [activeTab, setActiveTab] = useState('recent')
  const [scrollPosition, setScrollPosition] = useState(0)

  // Most common residential codes (based on typical usage)
  const mostCommonCodes = [
    { code: '210.8(A)', title: 'GFCI Requirements', category: 'Branch Circuits' },
    { code: '210.52', title: 'Dwelling Unit Receptacle Outlets', category: 'Branch Circuits' },
    { code: '250.4', title: 'General Grounding Requirements', category: 'Grounding' },
    { code: '314.16', title: 'Box Fill Requirements', category: 'Boxes' },
    { code: '334.15', title: 'NM Cable Uses Permitted', category: 'NM Cable' },
    { code: '406.4', title: 'Receptacle Configuration', category: 'Receptacles' },
    { code: '408.4', title: 'Panelboard Overcurrent Protection', category: 'Panelboards' },
    { code: '410.16', title: 'Luminaire Locations', category: 'Lighting' },
    { code: '240.4', title: 'Conductor Protection', category: 'Overcurrent' },
    { code: '110.14', title: 'Electrical Connections', category: 'General' },
  ]

  const tabs = [
    { id: 'recent', label: 'Recently Viewed', icon: Clock, data: recentCodes },
    { id: 'bookmarks', label: 'Bookmarked', icon: Star, data: bookmarkedCodes },
    { id: 'common', label: 'Most Common', icon: TrendingUp, data: mostCommonCodes },
  ]

  const activeData = tabs.find(tab => tab.id === activeTab)?.data || []

  const scroll = (direction) => {
    const container = document.getElementById('quick-access-scroll')
    if (container) {
      const scrollAmount = 300
      const newPosition = direction === 'left'
        ? Math.max(0, scrollPosition - scrollAmount)
        : scrollPosition + scrollAmount

      container.scrollTo({ left: newPosition, behavior: 'smooth' })
      setScrollPosition(newPosition)
    }
  }

  return (
    <div className="w-full bg-white border-b border-gray-200 py-4 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex items-center gap-2 mb-4 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm
                  transition-all duration-200 whitespace-nowrap
                  ${isActive
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
                {tab.data.length > 0 && (
                  <Badge variant={isActive ? "secondary" : "outline"} className="ml-1">
                    {tab.data.length}
                  </Badge>
                )}
              </button>
            )
          })}
        </div>

        {/* Scrollable Cards */}
        <div className="relative">
          {/* Left scroll button */}
          {scrollPosition > 0 && (
            <Button
              variant="outline"
              size="sm"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}

          {/* Cards container */}
          <div
            id="quick-access-scroll"
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-2"
            onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
          >
            {activeData.length === 0 ? (
              <div className="w-full text-center py-8 text-gray-500">
                <p className="text-sm">
                  {activeTab === 'recent' && 'No recently viewed codes yet. Start exploring!'}
                  {activeTab === 'bookmarks' && 'No bookmarked codes yet. Star your favorites!'}
                  {activeTab === 'common' && 'Loading most common codes...'}
                </p>
              </div>
            ) : (
              activeData.map((code, index) => (
                <motion.div
                  key={`${code.code}-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card
                    className="min-w-[280px] max-w-[280px] cursor-pointer hover:shadow-lg
                               transition-all duration-300 border-l-4 border-l-blue-500
                               hover:border-l-blue-600 hover:-translate-y-1"
                    onClick={() => onCodeSelect(code)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge className="font-mono bg-blue-100 text-blue-700 hover:bg-blue-200">
                          {code.code}
                        </Badge>
                        {code.category && (
                          <Badge variant="outline" className="text-xs">
                            {code.category}
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                        {code.title}
                      </h3>
                      {code.description && (
                        <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                          {code.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </div>

          {/* Right scroll button */}
          <Button
            variant="outline"
            size="sm"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default QuickAccessBar
