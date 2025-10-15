import { useState } from 'react'
import QuickAccessBar from '../components/QuickAccessBar'
import EnhancedCodeCard from '../components/EnhancedCodeCard'
import EnhancedSearchBar from '../components/EnhancedSearchBar'
import SkeletonLoader from '../components/SkeletonLoader'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Sparkles, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Mock NEC codes data for demonstration
const mockCodes = [
  {
    code: "210.8(A)",
    article: "210",
    title: "GFCI Protection - Dwelling Units",
    category: "Ground-Fault Protection",
    description: "GFCI protection required for dwelling unit bathrooms, garages, outdoors, crawl spaces, unfinished basements, kitchens, sinks, laundry areas. All 125-volt, single-phase, 15- and 20-ampere receptacles installed in these locations shall have GFCI protection.",
    application: "All 125V 15A and 20A receptacles in bathrooms, kitchens, outdoors, garages, and other specified wet/damp locations need GFCI protection",
    safetyNotes: "Critical for preventing electrocution in wet and damp locations. GFCI devices must be tested monthly.",
    relatedCodes: ["210.8(B)", "210.8(D)", "406.4(D)", "210.52"],
    commonViolations: "Missing GFCI protection in bathroom, kitchen countertop receptacles within 6 feet of sink, outdoor receptacles, garage receptacles",
    photoTips: "Photo showing location of receptacle, distance from water source, GFCI test button visible"
  },
  {
    code: "210.52(A)",
    article: "210",
    title: "Dwelling Unit Receptacle Outlets - General",
    category: "Receptacle Placement",
    description: "Receptacles shall be installed so that no point measured horizontally along the floor line of any wall space is more than 6 feet from a receptacle outlet.",
    application: "In dwelling units, place receptacles so they're never more than 6 feet apart along walls",
    safetyNotes: "Ensures adequate access to power without using extension cords",
    relatedCodes: ["210.52(B)", "210.52(C)", "210.52(H)"],
    commonViolations: "Receptacles spaced more than 12 feet apart, missing receptacles in hallways longer than 10 feet",
    photoTips: "Photo showing wall layout and receptacle spacing with measurements"
  },
  {
    code: "250.4(A)(5)",
    article: "250",
    title: "Grounding and Bonding - Effective Ground-Fault Current Path",
    category: "Grounding",
    description: "Electrical equipment, wiring, and other electrically conductive material likely to become energized shall be installed in a manner that creates a low-impedance circuit facilitating the operation of the overcurrent device.",
    application: "All metal parts of electrical system must be properly grounded to create safe path for fault current",
    safetyNotes: "Proper grounding is essential for safety - prevents shock hazards and ensures breakers trip during faults",
    relatedCodes: ["250.4(B)", "250.50", "250.52", "250.53"],
    commonViolations: "Poor ground connections, missing equipment grounding conductor, inadequate bonding",
    photoTips: "Photo of grounding electrode system, bonding jumpers, and equipment ground connections"
  },
  {
    code: "314.16(A)",
    article: "314",
    title: "Box Fill Calculations - General",
    category: "Boxes and Fittings",
    description: "Boxes shall be of sufficient size to provide free space for all enclosed conductors. The volume of a wiring enclosure (box) shall be the total volume of the assembled sections.",
    application: "Calculate box fill by counting conductors, devices, clamps, and fittings - each has a volume allowance",
    relatedCodes: ["314.16(B)", "314.27", "314.28"],
    commonViolations: "Overfilled boxes, incorrect conductor count, not accounting for devices and clamps",
    photoTips: "Photo showing box size, number of conductors, devices, and any internal clamps"
  },
  {
    code: "334.15(B)",
    article: "334",
    title: "Nonmetallic-Sheathed Cable - Exposed Work",
    category: "NM Cable Installation",
    description: "In exposed work, cable shall be installed as specified in 334.15(B)(1) through (B)(4) and shall closely follow the surface of the building finish or running boards.",
    application: "When running NM cable exposed (not in walls), it must follow building surfaces and be protected",
    safetyNotes: "Exposed NM cable must be protected from physical damage",
    relatedCodes: ["334.10", "334.12", "334.15(A)", "334.30"],
    commonViolations: "NM cable not following surface, inadequate support, exposed to damage",
    photoTips: "Photo showing cable routing, support spacing, and protection methods"
  },
  {
    code: "406.4(D)(2)",
    article: "406",
    title: "Receptacle Configuration - GFCI and AFCI Protection",
    category: "Receptacle Protection",
    description: "GFCI and AFCI receptacles shall be installed in a readily accessible location.",
    application: "GFCI and AFCI receptacles with reset buttons must be accessible, not behind furniture or appliances",
    relatedCodes: ["210.8", "210.12", "406.4(D)(1)"],
    commonViolations: "GFCI receptacles installed where they cannot be accessed for testing or reset",
    photoTips: "Photo showing receptacle location and accessibility for testing"
  },
  {
    code: "408.4",
    article: "408",
    title: "Panelboard Overcurrent Protection",
    category: "Panelboards",
    description: "Panelboards shall be protected by an overcurrent protective device having a rating not greater than that of the panelboard.",
    application: "Main breaker or fuse must protect the entire panelboard and its busbar rating",
    safetyNotes: "Proper overcurrent protection prevents panelboard overheating and fire hazards",
    relatedCodes: ["408.30", "408.36", "408.54"],
    commonViolations: "Oversized main breaker, missing main breaker, improper busbar loading",
    photoTips: "Photo of panelboard showing main breaker, busbar rating label, and branch circuits"
  },
  {
    code: "410.16(A)(1)",
    article: "410",
    title: "Luminaire Location - Bathtub and Shower Areas",
    category: "Lighting Fixtures",
    description: "No part of cord-connected luminaires, chain-, cable-, or cord-suspended luminaires shall be located within a zone measured 3 feet horizontally and 8 feet vertically from the top of the bathtub rim or shower stall threshold.",
    application: "Keep hanging light fixtures at least 3 feet away from bathtubs and showers",
    safetyNotes: "Critical safety requirement to prevent electrocution in wet areas",
    relatedCodes: ["410.16(A)(2)", "410.16(A)(3)", "410.10"],
    commonViolations: "Chandelier or pendant light hanging over bathtub, fixture too close to shower",
    photoTips: "Photo showing fixture location relative to tub/shower with measurements"
  },
]

const DemoPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [bookmarkedCodes, setBookmarkedCodes] = useState([mockCodes[0], mockCodes[2]])
  const [recentCodes, setRecentCodes] = useState([mockCodes[1], mockCodes[3], mockCodes[4]])
  const [showLoading, setShowLoading] = useState(false)

  const handleBookmark = (code) => {
    setBookmarkedCodes(prev => {
      const exists = prev.find(c => c.code === code.code)
      if (exists) {
        return prev.filter(c => c.code !== code.code)
      }
      return [...prev, code]
    })
  }

  const handleCodeClick = (code) => {
    // Add to recent codes
    setRecentCodes(prev => {
      const filtered = prev.filter(c => c.code !== code.code)
      return [code, ...filtered].slice(0, 10)
    })
    alert(`Clicked: ${code.code} - ${code.title}`)
  }

  const toggleLoading = () => {
    setShowLoading(!showLoading)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to App
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-blue-500" />
                  Phase 1A UI Demo
                </h1>
                <p className="text-sm text-gray-600">Residential Wizard - Enhanced Components</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-sm">
                Preview Mode
              </Badge>
              <Badge className="bg-blue-500 text-white">
                Phase 1A
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-semibold">New UI Enhancements</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enhanced User Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the new buildingsystems.ai-inspired design with improved search,
            quick access bar, enhanced code cards, and beautiful loading states.
          </p>
        </motion.section>

        {/* Enhanced Search Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-2 border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  1
                </span>
                Enhanced Search Experience
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Search with history tracking, popular suggestions, and instant clear.
                Try typing to see suggestions, or click the search icon to see your recent searches.
              </p>
            </CardHeader>
            <CardContent>
              <div className="max-w-2xl mx-auto">
                <EnhancedSearchBar
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Try searching for 'GFCI' or 'outlet spacing'..."
                  onSearch={(term) => alert(`Searching for: ${term}`)}
                />
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">✨ Search History</h4>
                  <p className="text-blue-700">Automatically saves your last 10 searches</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">🔥 Popular Searches</h4>
                  <p className="text-green-700">Quick access to common code searches</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">⚡ Instant Clear</h4>
                  <p className="text-purple-700">One-click clear button when typing</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Quick Access Bar Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-2 border-green-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  2
                </span>
                Quick Access Bar
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Horizontal scrollable bar with recently viewed codes, bookmarked favorites,
                and most common residential codes. Switch between tabs to see different collections.
              </p>
            </CardHeader>
            <CardContent>
              <QuickAccessBar
                recentCodes={recentCodes}
                bookmarkedCodes={bookmarkedCodes}
                onCodeSelect={handleCodeClick}
              />
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">⏱️ Recently Viewed</h4>
                  <p className="text-gray-700">Last codes you accessed ({recentCodes.length})</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">⭐ Bookmarked</h4>
                  <p className="text-yellow-700">Your saved favorites ({bookmarkedCodes.length})</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">📊 Most Common</h4>
                  <p className="text-blue-700">Top 10 residential codes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Enhanced Code Cards Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-2 border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  3
                </span>
                Enhanced Code Cards
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Beautiful code cards with bookmark and share functionality. Hover to see the lift animation.
                Click the star to bookmark, or share button to copy/share.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {mockCodes.slice(0, 4).map((code, index) => (
                <motion.div
                  key={code.code}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <EnhancedCodeCard
                    code={code}
                    onClick={() => handleCodeClick(code)}
                    isBookmarked={bookmarkedCodes.some(c => c.code === code.code)}
                    onBookmark={handleBookmark}
                    showPhotoTips={true}
                  />
                </motion.div>
              ))}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <div className="text-2xl mb-1">⭐</div>
                  <p className="font-semibold text-blue-900">Bookmark</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="text-2xl mb-1">🔗</div>
                  <p className="font-semibold text-green-900">Share</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <div className="text-2xl mb-1">📸</div>
                  <p className="font-semibold text-purple-900">Photo Tips</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg text-center">
                  <div className="text-2xl mb-1">🎨</div>
                  <p className="font-semibold text-orange-900">Hover Effect</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Loading States Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-2 border-orange-200 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                      4
                    </span>
                    Loading States
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    Skeleton loaders provide visual feedback while content loads.
                    Toggle the loading state to see the animation.
                  </p>
                </div>
                <Button onClick={toggleLoading} variant={showLoading ? "destructive" : "default"}>
                  {showLoading ? 'Hide Loading' : 'Show Loading'}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {showLoading ? (
                <SkeletonLoader count={3} />
              ) : (
                <div className="space-y-6">
                  {mockCodes.slice(4, 7).map((code) => (
                    <EnhancedCodeCard
                      key={code.code}
                      code={code}
                      onClick={() => handleCodeClick(code)}
                      isBookmarked={bookmarkedCodes.some(c => c.code === code.code)}
                      onBookmark={handleBookmark}
                      showPhotoTips={true}
                    />
                  ))}
                </div>
              )}
              <div className="mt-6 bg-gray-50 p-4 rounded-lg text-sm text-gray-700">
                <p className="font-semibold mb-2">✨ Smooth Loading Experience</p>
                <p>
                  Skeleton loaders maintain layout and provide visual continuity during data fetching,
                  reducing perceived load time and improving user experience.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Summary Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Phase 1A Complete ✨</h2>
          <p className="text-center text-blue-100 mb-8 max-w-2xl mx-auto">
            All essential UI enhancements are ready for integration into the main application.
            These components follow buildingsystems.ai design principles and provide a premium user experience.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">4</div>
              <div className="text-sm text-blue-100">New Components</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">8</div>
              <div className="text-sm text-blue-100">Mock Codes</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-blue-100">Mobile Ready</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">⚡</div>
              <div className="text-sm text-blue-100">Fast & Smooth</div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            Phase 1A UI Enhancements - Electrician's Assistant Demo
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Built with React, Tailwind CSS, Framer Motion, and shadcn/ui
          </p>
        </div>
      </footer>
    </div>
  )
}

export default DemoPage
