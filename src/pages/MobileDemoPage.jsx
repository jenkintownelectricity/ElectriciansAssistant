import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home, Search, Camera, Menu, Star, Share2, X,
  Zap, ChevronRight, Clock, TrendingUp, Bookmark,
  ArrowLeft, Settings, Bell, User
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// Mock NEC codes for mobile demo
const mockCodes = [
  {
    code: "210.8(A)",
    title: "GFCI Protection - Dwelling Units",
    category: "Ground-Fault",
    description: "GFCI protection required for bathrooms, garages, outdoors, kitchens, and other wet locations.",
    safetyLevel: "critical"
  },
  {
    code: "210.52(A)",
    title: "Receptacle Outlet Spacing",
    category: "Receptacles",
    description: "No point along wall should be more than 6 feet from an outlet.",
    safetyLevel: "standard"
  },
  {
    code: "250.4(A)",
    title: "Grounding Requirements",
    category: "Grounding",
    description: "Proper grounding creates safe path for fault current.",
    safetyLevel: "critical"
  },
  {
    code: "314.16(A)",
    title: "Box Fill Calculations",
    category: "Boxes",
    description: "Boxes must be sized correctly for all conductors and devices.",
    safetyLevel: "standard"
  },
  {
    code: "334.15(B)",
    title: "NM Cable - Exposed Work",
    category: "NM Cable",
    description: "Exposed NM cable must follow surfaces and be protected.",
    safetyLevel: "standard"
  },
]

const MobileDemoPage = () => {
  const [activeTab, setActiveTab] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCode, setSelectedCode] = useState(null)
  const [bookmarkedCodes, setBookmarkedCodes] = useState([mockCodes[0].code])
  const [showSearchHistory, setShowSearchHistory] = useState(false)

  const searchHistory = ['GFCI', 'outlet spacing', 'grounding']

  const toggleBookmark = (code) => {
    setBookmarkedCodes(prev =>
      prev.includes(code)
        ? prev.filter(c => c !== code)
        : [...prev, code]
    )
  }

  const handleCodeClick = (code) => {
    setSelectedCode(code)
    setActiveTab('detail')
  }

  const handleBack = () => {
    setSelectedCode(null)
    setActiveTab('home')
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50 max-w-md mx-auto relative overflow-hidden">
      {/* Status Bar Simulation */}
      <div className="bg-gray-900 text-white px-4 py-2 flex items-center justify-between text-xs">
        <span>9:41 AM</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-3 border border-white rounded-sm"></div>
          <div className="w-3 h-3 border border-white rounded-full"></div>
          <div className="flex gap-0.5">
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full opacity-70"></div>
            <div className="w-1 h-3 bg-white rounded-full opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Top Header Bar */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 shadow-lg"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
      >
        <div className="flex items-center justify-between">
          {activeTab === 'detail' ? (
            <>
              <button onClick={handleBack} className="p-1">
                <ArrowLeft className="h-6 w-6" />
              </button>
              <h1 className="text-lg font-bold flex-1 text-center">Code Details</h1>
              <button className="p-1">
                <Share2 className="h-5 w-5" />
              </button>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6" />
                <h1 className="text-lg font-bold">NEC Assistant</h1>
              </div>
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5" />
                <Menu className="h-5 w-5" />
              </div>
            </>
          )}
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-20">
        <AnimatePresence mode="wait">
          {/* HOME TAB */}
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="p-4 space-y-4"
            >
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search NEC codes..."
                  className="pl-10 pr-10 py-6 text-base border-2 border-gray-200 rounded-xl"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSearchHistory(true)}
                />
                {searchQuery && (
                  <button
                    className="absolute right-3 top-3 p-1"
                    onClick={() => setSearchQuery('')}
                  >
                    <X className="h-5 w-5 text-gray-400" />
                  </button>
                )}
              </div>

              {/* Search History Dropdown */}
              {showSearchHistory && searchQuery === '' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl shadow-lg p-3 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Recent Searches
                    </span>
                    <button
                      className="text-xs text-blue-600"
                      onClick={() => setShowSearchHistory(false)}
                    >
                      Close
                    </button>
                  </div>
                  {searchHistory.map((term, i) => (
                    <button
                      key={i}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg"
                      onClick={() => {
                        setSearchQuery(term)
                        setShowSearchHistory(false)
                      }}
                    >
                      {term}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-blue-50 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-blue-600">{mockCodes.length}</div>
                  <div className="text-xs text-blue-700">Codes</div>
                </div>
                <div className="bg-yellow-50 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-yellow-600">{bookmarkedCodes.length}</div>
                  <div className="text-xs text-yellow-700">Saved</div>
                </div>
                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-green-600">11</div>
                  <div className="text-xs text-green-700">Articles</div>
                </div>
              </div>

              {/* Quick Access */}
              <div>
                <h2 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Most Common Codes
                </h2>
                <div className="space-y-3">
                  {mockCodes.map((code, index) => (
                    <motion.div
                      key={code.code}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card
                        className="border-l-4 border-l-blue-500 active:scale-95 transition-transform"
                        onClick={() => handleCodeClick(code)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge className="font-mono text-xs bg-blue-100 text-blue-700">
                                  {code.code}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {code.category}
                                </Badge>
                              </div>
                              <h3 className="font-semibold text-sm mb-1 line-clamp-1">
                                {code.title}
                              </h3>
                              <p className="text-xs text-gray-600 line-clamp-2">
                                {code.description}
                              </p>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0 ml-2" />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* SEARCH TAB */}
          {activeTab === 'search' && (
            <motion.div
              key="search"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4"
            >
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Search NEC Codes
                </h3>
                <p className="text-sm text-gray-500">
                  Find any electrical code quickly
                </p>
              </div>
            </motion.div>
          )}

          {/* CAMERA TAB */}
          {activeTab === 'camera' && (
            <motion.div
              key="camera"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4"
            >
              <div className="text-center py-12">
                <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  AI Photo Analysis
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  Take a photo to analyze electrical installations
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Camera className="h-5 w-5 mr-2" />
                  Take Photo
                </Button>
              </div>
            </motion.div>
          )}

          {/* BOOKMARKS TAB */}
          {activeTab === 'bookmarks' && (
            <motion.div
              key="bookmarks"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 space-y-3"
            >
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Your Bookmarks
              </h2>
              {bookmarkedCodes.length === 0 ? (
                <div className="text-center py-12">
                  <Star className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    No Bookmarks Yet
                  </h3>
                  <p className="text-sm text-gray-500">
                    Star codes to save them here
                  </p>
                </div>
              ) : (
                mockCodes
                  .filter(code => bookmarkedCodes.includes(code.code))
                  .map((code) => (
                    <Card
                      key={code.code}
                      className="border-l-4 border-l-yellow-500"
                      onClick={() => handleCodeClick(code)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <Badge className="font-mono text-xs mb-2">
                              {code.code}
                            </Badge>
                            <h3 className="font-semibold text-sm mb-1">
                              {code.title}
                            </h3>
                            <p className="text-xs text-gray-600 line-clamp-2">
                              {code.description}
                            </p>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400 ml-2" />
                        </div>
                      </CardContent>
                    </Card>
                  ))
              )}
            </motion.div>
          )}

          {/* CODE DETAIL VIEW */}
          {activeTab === 'detail' && selectedCode && (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-4 space-y-4"
            >
              {/* Code Header */}
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="font-mono text-base bg-blue-100 text-blue-700">
                      {selectedCode.code}
                    </Badge>
                    <button
                      onClick={() => toggleBookmark(selectedCode.code)}
                      className={`p-2 rounded-full ${
                        bookmarkedCodes.includes(selectedCode.code)
                          ? 'bg-yellow-100 text-yellow-600'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      <Star
                        className={`h-5 w-5 ${
                          bookmarkedCodes.includes(selectedCode.code) ? 'fill-current' : ''
                        }`}
                      />
                    </button>
                  </div>
                  <h1 className="text-lg font-bold mb-2">{selectedCode.title}</h1>
                  <Badge variant="outline">{selectedCode.category}</Badge>
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardContent className="p-4">
                  <h2 className="font-semibold mb-2">Description</h2>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {selectedCode.description}
                  </p>
                </CardContent>
              </Card>

              {/* Safety Level */}
              <Card className={
                selectedCode.safetyLevel === 'critical'
                  ? 'bg-red-50 border-l-4 border-l-red-500'
                  : 'bg-blue-50 border-l-4 border-l-blue-500'
              }>
                <CardContent className="p-4">
                  <h2 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Safety Level
                  </h2>
                  <p className="text-sm font-medium">
                    {selectedCode.safetyLevel === 'critical' ? 'Critical' : 'Standard'}
                  </p>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  <Camera className="h-4 w-4 mr-2" />
                  Take Photo
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl max-w-md mx-auto"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
      >
        <div className="grid grid-cols-4 gap-1 px-2 py-2">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-colors ${
              activeTab === 'home'
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-500 active:bg-gray-50'
            }`}
          >
            <Home className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button
            onClick={() => setActiveTab('search')}
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-colors ${
              activeTab === 'search'
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-500 active:bg-gray-50'
            }`}
          >
            <Search className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Search</span>
          </button>
          <button
            onClick={() => setActiveTab('camera')}
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-colors ${
              activeTab === 'camera'
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-500 active:bg-gray-50'
            }`}
          >
            <Camera className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Camera</span>
          </button>
          <button
            onClick={() => setActiveTab('bookmarks')}
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-colors relative ${
              activeTab === 'bookmarks'
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-500 active:bg-gray-50'
            }`}
          >
            <Star className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Saved</span>
            {bookmarkedCodes.length > 0 && (
              <span className="absolute top-1 right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {bookmarkedCodes.length}
              </span>
            )}
          </button>
        </div>
      </motion.div>

      {/* Home Indicator (iPhone-style) */}
      <div className="fixed bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-900 rounded-full max-w-md"></div>
    </div>
  )
}

export default MobileDemoPage
