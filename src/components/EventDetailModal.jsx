import { X, Clock, MapPin, Phone, Mail, DollarSign, AlertCircle, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const EventDetailModal = ({ event, isOpen, onClose }) => {
  if (!event) return null

  const formatTime = (date) => {
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

  const handleCallClient = () => {
    if (event.client?.phone) {
      window.location.href = `tel:${event.client.phone}`
    }
  }

  const handleEmailClient = () => {
    if (event.client?.email) {
      window.location.href = `mailto:${event.client.email}`
    }
  }

  const handleGetDirections = () => {
    if (event.location) {
      const encodedAddress = encodeURIComponent(event.location)
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank')
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'in-progress':
        return 'bg-green-100 text-green-700 border-green-300'
      case 'completed':
        return 'bg-gray-100 text-gray-600 border-gray-300'
      default:
        return 'bg-blue-100 text-blue-700 border-blue-300'
    }
  }

  const getStatusLabel = (status) => {
    switch (status) {
      case 'in-progress':
        return 'In Progress'
      case 'completed':
        return 'Completed'
      default:
        return 'Upcoming'
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-2xl shadow-2xl z-50 max-h-[90vh] overflow-y-auto"
          >
            {/* Header with Color Bar */}
            <div
              className="h-2 rounded-t-2xl"
              style={{ backgroundColor: event.color }}
            />

            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>

              {/* Job Type Badge */}
              <div
                className="inline-block px-3 py-1 text-sm font-medium rounded-lg mb-4"
                style={{
                  backgroundColor: `${event.color}20`,
                  color: event.color
                }}
              >
                {event.jobTypeLabel}
              </div>

              {/* Client Name */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {event.client?.name || event.title}
              </h2>

              {/* Status Badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-lg border-2 ${getStatusColor(event.status)}`}>
                {event.status === 'in-progress' && (
                  <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
                )}
                {getStatusLabel(event.status)}
              </div>

              {/* Time Info */}
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {formatTime(event.startTime)} - {formatTime(event.endTime)}
                    </div>
                    <div className="text-sm text-gray-600">
                      Duration: {formatDuration(event.duration)}
                    </div>
                  </div>
                </div>

                {/* Location */}
                {event.location && (
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-gray-900">{event.location}</div>
                      <Button
                        onClick={handleGetDirections}
                        variant="link"
                        className="p-0 h-auto text-blue-600 hover:text-blue-700 text-sm"
                      >
                        <Navigation className="h-3 w-3 mr-1" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                )}

                {/* Contact Info */}
                {(event.client?.phone || event.client?.email) && (
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Contact Information</h3>

                    {event.client.phone && (
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-900">{event.client.phone}</span>
                        </div>
                        <Button
                          onClick={handleCallClient}
                          size="sm"
                          variant="outline"
                          className="h-8"
                        >
                          Call
                        </Button>
                      </div>
                    )}

                    {event.client.email && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-900 text-sm">{event.client.email}</span>
                        </div>
                        <Button
                          onClick={handleEmailClient}
                          size="sm"
                          variant="outline"
                          className="h-8"
                        >
                          Email
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {/* Description/Notes */}
                {event.notes && (
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Job Notes</h3>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                      {event.notes}
                    </p>
                  </div>
                )}

                {/* Warning for upcoming jobs */}
                {event.status === 'upcoming' && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-orange-900 mb-1">
                          Upcoming Appointment
                        </div>
                        <div className="text-sm text-orange-700">
                          Make sure to leave on time and prepare necessary materials.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex gap-3">
                {event.location && (
                  <Button
                    onClick={handleGetDirections}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Navigate
                  </Button>
                )}

                {event.client?.phone && (
                  <Button
                    onClick={handleCallClient}
                    variant="outline"
                    className="flex-1"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Client
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default EventDetailModal
