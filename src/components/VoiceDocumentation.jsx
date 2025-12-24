import { useState, useRef, useEffect } from 'react'
import { Mic, MicOff, Camera, Square, FileText, Download, Trash2, Clock, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const VoiceDocumentation = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [jobLogs, setJobLogs] = useState([])
  const [currentTranscript, setCurrentTranscript] = useState('')
  const [sessionStartTime, setSessionStartTime] = useState(null)
  const [elapsedTime, setElapsedTime] = useState(0)

  const recognitionRef = useRef(null)
  const fileInputRef = useRef(null)
  const timerRef = useRef(null)

  // Initialize Speech Recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = true
      recognitionRef.current.interimResults = true
      recognitionRef.current.lang = 'en-US'

      recognitionRef.current.onresult = (event) => {
        let interimTranscript = ''
        let finalTranscript = ''

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' '
          } else {
            interimTranscript += transcript
          }
        }

        if (finalTranscript) {
          addLogEntry('voice', finalTranscript.trim())
          setCurrentTranscript('')
        } else {
          setCurrentTranscript(interimTranscript)
        }
      }

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error)
        if (event.error === 'no-speech') {
          // Auto-restart if no speech detected
          if (isRecording && !isPaused) {
            recognitionRef.current.start()
          }
        }
      }

      recognitionRef.current.onend = () => {
        // Auto-restart if still recording
        if (isRecording && !isPaused) {
          try {
            recognitionRef.current.start()
          } catch (e) {
            console.error('Failed to restart recognition:', e)
          }
        }
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [isRecording, isPaused])

  // Timer for session duration
  useEffect(() => {
    if (isRecording && !isPaused) {
      timerRef.current = setInterval(() => {
        setElapsedTime(Date.now() - sessionStartTime)
      }, 1000)
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isRecording, isPaused, sessionStartTime])

  const startRecording = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start()
        setIsRecording(true)
        setIsPaused(false)
        setSessionStartTime(Date.now())
        addLogEntry('system', 'Job documentation started')
      } catch (e) {
        console.error('Failed to start recognition:', e)
      }
    } else {
      alert('Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.')
    }
  }

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
    setIsRecording(false)
    setIsPaused(false)
    setCurrentTranscript('')
    addLogEntry('system', 'Job documentation completed')
  }

  const togglePause = () => {
    if (isPaused) {
      recognitionRef.current.start()
      setIsPaused(false)
    } else {
      recognitionRef.current.stop()
      setIsPaused(true)
    }
  }

  const addLogEntry = (type, content, photo = null) => {
    const entry = {
      id: Date.now(),
      type, // 'voice', 'photo', 'system'
      content,
      photo,
      timestamp: new Date(),
    }
    setJobLogs(prev => [...prev, entry])
  }

  const handlePhotoCapture = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        addLogEntry('photo', currentTranscript || 'Photo captured', reader.result)
        setCurrentTranscript('')
      }
      reader.readAsDataURL(file)
    }
  }

  const deleteLogEntry = (id) => {
    setJobLogs(prev => prev.filter(log => log.id !== id))
  }

  const generateReport = () => {
    // Generate formatted report
    let report = '# Job Documentation Report\n\n'
    report += `**Date:** ${new Date().toLocaleDateString()}\n`
    report += `**Duration:** ${formatTime(elapsedTime)}\n`
    report += `**Total Entries:** ${jobLogs.length}\n\n`
    report += '---\n\n'

    jobLogs.forEach((log, index) => {
      const time = log.timestamp.toLocaleTimeString()

      if (log.type === 'voice') {
        report += `**${time}** - ${log.content}\n\n`
      } else if (log.type === 'photo') {
        report += `**${time}** - 📷 Photo: ${log.content}\n\n`
      } else if (log.type === 'system') {
        report += `_${time} - ${log.content}_\n\n`
      }
    })

    // Download as text file
    const blob = new Blob([report], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `job-report-${new Date().toISOString().split('T')[0]}.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`
    } else {
      return `${seconds}s`
    }
  }

  const clearAllLogs = () => {
    if (confirm('Clear all job logs? This cannot be undone.')) {
      setJobLogs([])
      setElapsedTime(0)
    }
  }

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header with Timer */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-gray-800">Voice Documentation</h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span className="font-mono">{formatTime(elapsedTime)}</span>
          </div>
        </div>

        {/* Current Transcript Display */}
        {currentTranscript && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900"
          >
            <span className="font-medium">Listening: </span>
            {currentTranscript}
          </motion.div>
        )}
      </div>

      {/* Recording Controls */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        {!isRecording ? (
          <Button
            onClick={startRecording}
            className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg"
          >
            <Mic className="h-5 w-5 mr-2" />
            Start Job Documentation
          </Button>
        ) : (
          <div className="space-y-3">
            <div className="flex gap-3">
              <Button
                onClick={togglePause}
                variant="outline"
                className="flex-1 h-12"
              >
                {isPaused ? (
                  <>
                    <Mic className="h-5 w-5 mr-2" />
                    Resume
                  </>
                ) : (
                  <>
                    <MicOff className="h-5 w-5 mr-2" />
                    Pause
                  </>
                )}
              </Button>

              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                className="flex-1 h-12"
              >
                <Camera className="h-5 w-5 mr-2" />
                Photo
              </Button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handlePhotoCapture}
                className="hidden"
              />
            </div>

            <Button
              onClick={stopRecording}
              variant="destructive"
              className="w-full h-12"
            >
              <Square className="h-4 w-4 mr-2" />
              Stop Documentation
            </Button>
          </div>
        )}

        {/* Recording Status Indicator */}
        {isRecording && !isPaused && (
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center justify-center gap-2 mt-3 text-red-600"
          >
            <div className="w-3 h-3 bg-red-600 rounded-full" />
            <span className="text-sm font-medium">Recording in progress...</span>
          </motion.div>
        )}
      </div>

      {/* Job Logs Timeline */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-700">Job Log ({jobLogs.length})</h3>
          {jobLogs.length > 0 && (
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={generateReport}
                className="h-8"
              >
                <Download className="h-4 w-4 mr-1" />
                Export
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={clearAllLogs}
                className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        {jobLogs.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <Mic className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p className="text-sm">No logs yet. Start recording to document your work.</p>
          </div>
        ) : (
          <div className="space-y-3">
            <AnimatePresence>
              {jobLogs.map((log) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className={`bg-white rounded-lg border-2 p-4 ${
                    log.type === 'photo'
                      ? 'border-purple-200'
                      : log.type === 'system'
                      ? 'border-gray-200'
                      : 'border-blue-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {log.type === 'photo' && (
                          <Camera className="h-4 w-4 text-purple-600" />
                        )}
                        {log.type === 'voice' && (
                          <Mic className="h-4 w-4 text-blue-600" />
                        )}
                        {log.type === 'system' && (
                          <CheckCircle className="h-4 w-4 text-gray-500" />
                        )}
                        <span className="text-xs text-gray-500">
                          {log.timestamp.toLocaleTimeString()}
                        </span>
                      </div>

                      {log.photo && (
                        <img
                          src={log.photo}
                          alt="Job photo"
                          className="w-full h-48 object-cover rounded-lg mb-2"
                        />
                      )}

                      <p className={`text-sm ${
                        log.type === 'system' ? 'text-gray-600 italic' : 'text-gray-800'
                      }`}>
                        {log.content}
                      </p>
                    </div>

                    {log.type !== 'system' && (
                      <button
                        onClick={() => deleteLogEntry(log.id)}
                        className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Bottom Action Bar (if logs exist) */}
      {jobLogs.length > 0 && (
        <div className="bg-white border-t border-gray-200 px-4 py-3">
          <Button
            onClick={generateReport}
            className="w-full bg-green-600 hover:bg-green-700 h-12"
          >
            <FileText className="h-5 w-5 mr-2" />
            Generate Job Report
          </Button>
        </div>
      )}
    </div>
  )
}

export default VoiceDocumentation
