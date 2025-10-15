import { useState, useRef } from 'react'
import { Camera, Upload, AlertCircle, CheckCircle, Zap, FileText, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import './App.css'

function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState(null)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)
  const cameraInputRef = useRef(null)

  const handleFileSelect = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
      setAnalysisResult(null)
      setError(null)
    }
  }

  const analyzeImage = async () => {
    if (!selectedImage) return

    setAnalyzing(true)
    setError(null)
    
    try {
      // Send image to backend API
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: imagePreview
        })
      })

      if (!response.ok) {
        throw new Error('Analysis failed. Please try again.')
      }

      const result = await response.json()
      setAnalysisResult(result)
    } catch (err) {
      console.error('Analysis error:', err)
      setError(err.message || 'Failed to analyze image. Please ensure the backend server is running.')
    } finally {
      setAnalyzing(false)
    }
  }

  const getIssueIcon = (type) => {
    switch (type) {
      case 'critical':
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      case 'info':
        return <FileText className="h-5 w-5 text-blue-500" />
      default:
        return <CheckCircle className="h-5 w-5 text-green-500" />
    }
  }

  const getIssueBadgeColor = (type) => {
    switch (type) {
      case 'critical':
        return 'bg-red-500 hover:bg-red-600'
      case 'warning':
        return 'bg-yellow-500 hover:bg-yellow-600'
      case 'info':
        return 'bg-blue-500 hover:bg-blue-600'
      default:
        return 'bg-green-500 hover:bg-green-600'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-lg shadow-md">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Electrician's AI Assistant</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">Powered by Computer Vision & NEC Standards</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Image Upload & Preview */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Upload Electrical Component Photo</CardTitle>
                <CardDescription>
                  Take a clear photo of electrical panels, wiring, outlets, or any component you need to inspect.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Button
                    onClick={() => cameraInputRef.current?.click()}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                  >
                    <Camera className="mr-2 h-4 w-4" />
                    Take Photo
                  </Button>
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    variant="outline"
                    className="flex-1"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Image
                  </Button>
                </div>

                <input
                  ref={cameraInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />

                {imagePreview && (
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-800">
                      <img
                        src={imagePreview}
                        alt="Selected electrical component"
                        className="w-full h-auto object-contain max-h-96"
                      />
                    </div>
                    <Button
                      onClick={analyzeImage}
                      disabled={analyzing}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                    >
                      {analyzing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing with AI...
                        </>
                      ) : (
                        <>
                          <Zap className="mr-2 h-4 w-4" />
                          Analyze Image
                        </>
                      )}
                    </Button>
                  </div>
                )}

                {error && (
                  <Alert className="border-red-500 bg-red-50 dark:bg-red-950/30">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertTitle className="text-red-600">Error</AlertTitle>
                    <AlertDescription className="text-red-600">{error}</AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            {/* Instructions Card */}
            <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-blue-900 dark:text-blue-100">How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-blue-800 dark:text-blue-200">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                  <p>Take a clear, well-lit photo of the electrical component or panel you want to inspect.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                  <p>Our AI will analyze the image for potential issues like burnt components, loose connections, or code violations.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                  <p>Review the detailed analysis, including safety recommendations and NEC code references.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Analysis Results */}
          <div className="space-y-6">
            {analysisResult ? (
              <>
                {/* Status Overview */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Analysis Results</CardTitle>
                    <CardDescription>AI-powered inspection findings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Safety Rating</p>
                        <p className={`text-lg font-bold ${
                          analysisResult.safety_rating?.includes('High') || analysisResult.safety_rating?.includes('Critical')
                            ? 'text-red-600 dark:text-red-400' 
                            : analysisResult.safety_rating?.includes('Moderate')
                            ? 'text-yellow-600 dark:text-yellow-400'
                            : 'text-green-600 dark:text-green-400'
                        }`}>
                          {analysisResult.safety_rating || 'Unknown'}
                        </p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Code Compliance</p>
                        <p className={`text-lg font-bold ${
                          analysisResult.compliance_status === 'Non-Compliant' 
                            ? 'text-red-600 dark:text-red-400' 
                            : analysisResult.compliance_status === 'Compliant'
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-yellow-600 dark:text-yellow-400'
                        }`}>
                          {analysisResult.compliance_status || 'Unknown'}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Issues Detected */}
                {analysisResult.issues && analysisResult.issues.length > 0 && (
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>Issues Detected</CardTitle>
                      <CardDescription>{analysisResult.issues.length} issue(s) found</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {analysisResult.issues.map((issue, index) => (
                        <Alert key={index} className="border-l-4" style={{
                          borderLeftColor: issue.type === 'critical' ? '#ef4444' : 
                                           issue.type === 'warning' ? '#eab308' : '#3b82f6'
                        }}>
                          <div className="flex items-start gap-3">
                            {getIssueIcon(issue.type)}
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center gap-2">
                                <AlertTitle className="mb-0">{issue.title}</AlertTitle>
                                <Badge className={getIssueBadgeColor(issue.type)}>
                                  {issue.type.toUpperCase()}
                                </Badge>
                              </div>
                              <AlertDescription className="text-sm">
                                {issue.description}
                              </AlertDescription>
                              <div className="text-xs space-y-1 pt-2 border-t border-slate-200 dark:border-slate-700">
                                {issue.location && (
                                  <p className="font-semibold text-slate-700 dark:text-slate-300">
                                    Location: <span className="font-normal">{issue.location}</span>
                                  </p>
                                )}
                                {issue.nec_reference && (
                                  <p className="font-semibold text-slate-700 dark:text-slate-300">
                                    NEC Reference: <span className="font-normal">{issue.nec_reference}</span>
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </Alert>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Recommendations */}
                {analysisResult.recommendations && analysisResult.recommendations.length > 0 && (
                  <Card className="shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
                    <CardHeader>
                      <CardTitle className="text-green-900 dark:text-green-100">Recommended Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {analysisResult.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm text-green-800 dark:text-green-200">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </>
            ) : (
              <Card className="shadow-lg">
                <CardContent className="py-16">
                  <div className="text-center text-slate-500 dark:text-slate-400 space-y-4">
                    <div className="flex justify-center">
                      <div className="bg-slate-200 dark:bg-slate-800 p-6 rounded-full">
                        <Zap className="h-12 w-12 text-slate-400 dark:text-slate-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">No Analysis Yet</p>
                      <p className="text-sm">Upload an image to get started</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>⚠️ This tool provides AI-assisted analysis for educational purposes. Always consult a licensed electrician for professional electrical work.</p>
          <p className="mt-2">Compliant with NEC 2023 Edition Standards</p>
        </div>
      </footer>
    </div>
  )
}

export default App

