import { useState, useRef } from 'react'
import { Camera, Search, Menu, X, ChevronDown, AlertTriangle, CheckCircle, Mic } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion, AnimatePresence } from 'framer-motion'
import VoiceDocumentation from '@/components/VoiceDocumentation'

// Common electrical problems - simplified
const COMMON_PROBLEMS = [
  { id: 1, title: "Circuit Breaker Tripping", severity: "high" },
  { id: 2, title: "GFCI Outlet Tripping", severity: "high" },
  { id: 3, title: "Dead Outlet - No Power", severity: "medium" },
  { id: 4, title: "Flickering Lights", severity: "medium" },
  { id: 5, title: "Hot Outlet or Switch", severity: "critical" },
  { id: 6, title: "Sparking Outlet", severity: "critical" },
]

const SimpleMobilePage = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [currentView, setCurrentView] = useState('home') // home, camera, problem, result, voice
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProblem, setSelectedProblem] = useState(null)
  const [analyzing, setAnalyzing] = useState(false)
  const fileInputRef = useRef(null)

  const getSeverityColor = (severity) => {
    if (severity === 'critical') return 'bg-red-100 text-red-700 border-red-300'
    if (severity === 'high') return 'bg-orange-100 text-orange-700 border-orange-300'
    return 'bg-yellow-100 text-yellow-700 border-yellow-300'
  }

  const handlePhotoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAnalyzing(true)
      // Simulate AI analysis
      setTimeout(() => {
        setAnalyzing(false)
        setCurrentView('result')
      }, 2000)
    }
  }

  const filteredProblems = searchQuery
    ? COMMON_PROBLEMS.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : COMMON_PROBLEMS

  return (
    <div className="h-screen flex flex-col bg-white max-w-md mx-auto">
      {/* Simple Header */}
      <div className="bg-blue-600 text-white px-4 py-4 flex items-center justify-between shadow-md">
        <h1 className="text-xl font-bold">⚡ NEC Assistant</h1>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
        >
          {showMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-blue-50 border-b border-blue-100 overflow-hidden"
          >
            <div className="p-4 space-y-2">
              <button
                onClick={() => {
                  setCurrentView('voice')
                  setShowMenu(false)
                }}
                className="w-full text-left px-4 py-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium flex items-center gap-2"
              >
                <Mic className="h-4 w-4" />
                Voice Documentation
              </button>
              <button className="w-full text-left px-4 py-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
                📚 NEC Code Reference
              </button>
              <button className="w-full text-left px-4 py-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
                ⭐ Saved Items
              </button>
              <button className="w-full text-left px-4 py-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
                ⚙️ Settings
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          {/* HOME VIEW - Main Actions */}
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 space-y-6"
            >
              {/* Primary Action - Camera */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center shadow-lg">
                <Camera className="h-16 w-16 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Take a Photo</h2>
                <p className="text-blue-100 mb-6">AI will identify the problem and suggest solutions</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 w-full text-lg font-semibold h-14"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Camera className="h-5 w-5 mr-2" />
                  Open Camera
                </Button>
              </div>

              {/* Secondary Action - Search Problems */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Or search common problems</h3>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>

                {/* Search Input */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search problems..."
                    className="pl-10 h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Problem List */}
                <div className="space-y-2">
                  {filteredProblems.map((problem) => (
                    <button
                      key={problem.id}
                      onClick={() => {
                        setSelectedProblem(problem)
                        setCurrentView('problem')
                      }}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${getSeverityColor(problem.severity)} hover:shadow-md active:scale-98`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{problem.title}</span>
                        <AlertTriangle className="h-5 w-5" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ANALYZING VIEW */}
          {analyzing && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex flex-col items-center justify-center p-8"
            >
              <div className="animate-spin rounded-full h-20 w-20 border-4 border-blue-500 border-t-transparent mb-6"></div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Analyzing Photo...</h2>
              <p className="text-gray-600 text-center">AI is identifying electrical issues and checking NEC codes</p>
            </motion.div>
          )}

          {/* PROBLEM DETAIL VIEW */}
          {currentView === 'problem' && selectedProblem && (
            <motion.div
              key="problem"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-4 space-y-4"
            >
              <Button
                variant="ghost"
                onClick={() => setCurrentView('home')}
                className="mb-2"
              >
                ← Back
              </Button>

              <div className={`p-6 rounded-2xl border-2 ${getSeverityColor(selectedProblem.severity)}`}>
                <h2 className="text-2xl font-bold mb-2">{selectedProblem.title}</h2>
                <p className="text-sm opacity-80">Common electrical problem</p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quick Solution</h3>
                  <p className="text-gray-700 leading-relaxed">
                    First, turn off the circuit breaker. Check for overloaded circuits,
                    faulty appliances, or loose connections. If problem persists,
                    consult a licensed electrician.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Safety Warning</h3>
                  <p className="text-red-700 text-sm leading-relaxed">
                    ⚠️ Always turn off power at the breaker before working on electrical systems.
                    If unsure, call a professional.
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full h-14 bg-blue-600 hover:bg-blue-700"
                onClick={() => fileInputRef.current?.click()}
              >
                <Camera className="h-5 w-5 mr-2" />
                Take Photo for AI Analysis
              </Button>
            </motion.div>
          )}

          {/* RESULT VIEW */}
          {currentView === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 space-y-4"
            >
              <Button
                variant="ghost"
                onClick={() => setCurrentView('home')}
                className="mb-2"
              >
                ← Back to Home
              </Button>

              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-green-900 mb-2">Analysis Complete</h2>
                <p className="text-green-700">AI identified 2 potential issues</p>
              </div>

              <div className="space-y-3">
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-red-900 mb-1">Missing GFCI Protection</h3>
                      <p className="text-sm text-red-700 mb-2">
                        Outlet in wet location requires GFCI per NEC 210.8(A)
                      </p>
                      <p className="text-xs text-red-600 font-medium">
                        ⚠️ Critical safety issue - immediate attention required
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-yellow-900 mb-1">Improper Box Fill</h3>
                      <p className="text-sm text-yellow-700 mb-2">
                        Too many conductors for box size - violates NEC 314.16
                      </p>
                      <p className="text-xs text-yellow-600 font-medium">
                        Requires correction - use larger box
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full h-14 bg-blue-600 hover:bg-blue-700"
                onClick={() => setCurrentView('home')}
              >
                Analyze Another Photo
              </Button>
            </motion.div>
          )}

          {/* VOICE DOCUMENTATION VIEW */}
          {currentView === 'voice' && (
            <motion.div
              key="voice"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full"
            >
              <VoiceDocumentation />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default SimpleMobilePage
