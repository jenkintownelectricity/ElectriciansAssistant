import { useState, useEffect, useRef } from 'react'
import { Search, X, Clock, TrendingUp } from 'lucide-react'
import { Input } from '@/components/ui/input.jsx'
import { Button } from '@/components/ui/button.jsx'
import { motion, AnimatePresence } from 'framer-motion'

const EnhancedSearchBar = ({ value, onChange, onSearch, placeholder }) => {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchHistory, setSearchHistory] = useState([])
  const searchRef = useRef(null)

  // Load search history from localStorage
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('searchHistory') || '[]')
    setSearchHistory(history.slice(0, 10)) // Keep last 10
  }, [])

  // Popular search suggestions
  const popularSearches = [
    'GFCI',
    'outlet spacing',
    'grounding',
    'box fill',
    'NM cable',
    'receptacle height',
    'circuit breaker',
    'lighting',
  ]

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim()) {
      // Save to history
      const newHistory = [
        searchTerm,
        ...searchHistory.filter(h => h !== searchTerm),
      ].slice(0, 10)

      setSearchHistory(newHistory)
      localStorage.setItem('searchHistory', JSON.stringify(newHistory))

      if (onSearch) {
        onSearch(searchTerm)
      }
    }
    setShowSuggestions(false)
  }

  const handleClear = () => {
    onChange({ target: { value: '' } })
    setShowSuggestions(false)
  }

  const clearHistory = () => {
    setSearchHistory([])
    localStorage.removeItem('searchHistory')
  }

  // Click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative w-full" ref={searchRef}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          placeholder={placeholder || 'Search for electrical problems...'}
          className="pl-12 pr-10 py-6 text-base border-2 border-gray-200 focus:border-blue-500
                     rounded-xl shadow-sm transition-all duration-200"
          value={value}
          onChange={onChange}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(value)
            }
          }}
        />
        {value && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0
                       text-gray-400 hover:text-gray-600"
            onClick={handleClear}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Suggestions Dropdown */}
      <AnimatePresence>
        {showSuggestions && (searchHistory.length > 0 || !value) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200
                       rounded-xl shadow-xl overflow-hidden z-50"
          >
            {/* Search History */}
            {searchHistory.length > 0 && (
              <div className="p-3 border-b border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <Clock className="h-4 w-4" />
                    <span>Recent Searches</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-gray-500 hover:text-gray-700"
                    onClick={clearHistory}
                  >
                    Clear
                  </Button>
                </div>
                <div className="space-y-1">
                  {searchHistory.map((term, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        onChange({ target: { value: term } })
                        handleSearch(term)
                      }}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700
                                 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches */}
            {!value && (
              <div className="p-3">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Popular Searches</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        onChange({ target: { value: term } })
                        handleSearch(term)
                      }}
                      className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-blue-100
                                 text-gray-700 hover:text-blue-700 rounded-full
                                 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EnhancedSearchBar
