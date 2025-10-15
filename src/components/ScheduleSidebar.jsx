import { useState } from 'react'
import { Clock, DollarSign, MapPin, Phone, RefreshCw, X, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const ScheduleSidebar = ({
  events = [],
  isLoading = false,
  isSignedIn = false,
  onEventClick,
  onRefresh,
  onSignIn,
  stats = {}
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const formatTime = (date) => {
    if (!date) return ''
    return new Date(date).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    if (hours > 0) {
      return `${hours}h ${mins}m`
    }
    return `${mins}m`
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
            In Progress
          </span>
        )
      case 'completed':
        return (
          <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
            Completed
          </span>
        )
      default:
        return (
          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
            Upcoming
          </span>
        )
    }
  }

  const getCurrentTimePosition = () => {
    const now = new Date()
    const startOfDay = new Date(now)
    startOfDay.setHours(8, 0, 0, 0) // Assuming work day starts at 8 AM

    const endOfDay = new Date(now)
    endOfDay.setHours(18, 0, 0, 0) // Assuming work day ends at 6 PM

    const totalMinutes = (endOfDay - startOfDay) / 60000
    const currentMinutes = (now - startOfDay) / 60000

    return (currentMinutes / totalMinutes) * 100
  }

  if (!isSignedIn) {
    return (
      <div className="w-96 bg-white border-l border-gray-200 flex flex-col items-center justify-center p-8">
        <div className="text-center">
          <Clock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Connect Your Schedule</h2>
          <p className="text-gray-600 mb-6">
            Sign in with Google to view your appointments and job schedule
          </p>
          <Button onClick={onSignIn} className="w-full bg-blue-600 hover:bg-blue-700">
            Sign in with Google
          </Button>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      animate={{ width: isCollapsed ? 48 : 384 }}
      className="bg-white border-l border-gray-200 flex flex-col relative overflow-hidden"
    >
      {/* Collapse/Expand Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-4 -left-3 z-10 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 shadow-sm"
      >
        {isCollapsed ? (
          <ChevronLeft className="h-3 w-3 text-gray-600" />
        ) : (
          <ChevronRight className="h-3 w-3 text-gray-600" />
        )}
      </button>

      <AnimatePresence mode="wait">
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col h-full"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-800">Today's Schedule</h2>
                <button
                  onClick={onRefresh}
                  disabled={isLoading}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`h-4 w-4 text-gray-600 ${isLoading ? 'animate-spin' : ''}`} />
                </button>
              </div>

              {/* Stats Summary */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-900">{stats.total || 0}</div>
                  <div className="text-xs text-blue-600">Total Jobs</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-900">
                    ${(stats.revenue || 0).toLocaleString()}
                  </div>
                  <div className="text-xs text-green-600">Est. Revenue</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="flex-1 overflow-y-auto">
              {isLoading && events.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <RefreshCw className="h-8 w-8 text-gray-400 animate-spin mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Loading schedule...</p>
                  </div>
                </div>
              ) : events.length === 0 ? (
                <div className="flex items-center justify-center h-full p-8">
                  <div className="text-center">
                    <Clock className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-sm text-gray-600">No appointments today</p>
                  </div>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  {/* Current Time Indicator */}
                  <div className="text-xs text-gray-500 flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    {new Date().toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true
                    })}
                  </div>

                  {/* Event Cards */}
                  {events.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => onEventClick?.(event)}
                      className="cursor-pointer group"
                    >
                      <div
                        className="border-l-4 rounded-lg p-4 bg-white hover:shadow-md transition-all"
                        style={{ borderLeftColor: event.color }}
                      >
                        {/* Time and Status */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                            <Clock className="h-4 w-4" />
                            {formatTime(event.startTime)}
                          </div>
                          {getStatusBadge(event.status)}
                        </div>

                        {/* Job Type */}
                        <div
                          className="inline-block px-2 py-1 text-xs font-medium rounded mb-2"
                          style={{
                            backgroundColor: `${event.color}20`,
                            color: event.color
                          }}
                        >
                          {event.jobTypeLabel}
                        </div>

                        {/* Client Info */}
                        <div className="space-y-1">
                          <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {event.client.name}
                          </h3>

                          {event.client.phone && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Phone className="h-3 w-3" />
                              {event.client.phone}
                            </div>
                          )}

                          {event.location && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <MapPin className="h-3 w-3" />
                              <span className="line-clamp-1">{event.location}</span>
                            </div>
                          )}
                        </div>

                        {/* Duration */}
                        <div className="mt-2 text-xs text-gray-500">
                          Duration: {formatDuration(event.duration)}
                        </div>

                        {/* Status-specific warnings */}
                        {event.status === 'in-progress' && (
                          <div className="mt-2 flex items-center gap-2 text-xs text-green-700 bg-green-50 rounded p-2">
                            <AlertCircle className="h-3 w-3" />
                            Job in progress
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer - Quick Stats */}
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg font-bold text-gray-900">{stats.completed || 0}</div>
                  <div className="text-xs text-gray-600">Done</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-600">{stats.inProgress || 0}</div>
                  <div className="text-xs text-gray-600">Active</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-orange-600">{stats.upcoming || 0}</div>
                  <div className="text-xs text-gray-600">Pending</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Collapsed View */}
        {isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 py-4"
          >
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900 writing-mode-vertical">
                {stats.total || 0}
              </div>
              <Clock className="h-4 w-4 text-gray-600 mx-auto mt-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ScheduleSidebar
