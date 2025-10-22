import { useState, useRef } from 'react'
import { Search, AlertTriangle, ChevronRight, Camera, Book, Zap, ArrowLeft, Upload, Loader2, CheckCircle, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.jsx'
import { ELECTRICAL_PROBLEMS, PROBLEM_CATEGORIES, SEVERITY_LEVELS } from '@/data/electricalProblems.js'
import { NEC_CODES } from '@/data/necCodes.js'
import './App.css'
import ImprovedHome from '@/components/ImprovedHome.jsx'

function App() {
  const [currentView, setCurrentView] = useState('home') // home, top3, next10, index, problem-detail, photo-analysis
  const [selectedProblem, setSelectedProblem] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedImages, setSelectedImages] = useState([])
  const [analyzing, setAnalyzing] = useState(false)
  const [analysisResults, setAnalysisResults] = useState([])
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)
  const cameraInputRef = useRef(null)

  // Get problems by commonality
  const topProblems = ELECTRICAL_PROBLEMS.filter(p => p.commonality === 'most-common')
  const commonProblems = ELECTRICAL_PROBLEMS.filter(p => p.commonality === 'common')

  const handleProblemSelect = (problem) => {
    setSelectedProblem(problem)
    setCurrentView('problem-detail')
    setSelectedImages([])
    setAnalysisResults([])
    setError(null)
  }

  const handleSearchProblems = () => {
    setCurrentView('index')
  }

  const getSeverityColor = (severity) => {
    const colors = {
      critical: 'bg-red-500 text-white',
      high: 'bg-orange-500 text-white',
      medium: 'bg-yellow-500 text-black',
      low: 'bg-blue-500 text-white'
    }
    return colors[severity] || 'bg-gray-500 text-white'
  }

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files)
    const imageFiles = files.filter(file => file.type.startsWith('image/'))

    const newImages = imageFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name
    }))

    setSelectedImages(prev => [...prev, ...newImages])
    setError(null)
  }

  const removeImage = (index) => {
    setSelectedImages(prev => {
      const newImages = [...prev]
      URL.revokeObjectURL(newImages[index].preview)
      newImages.splice(index, 1)
      return newImages
    })
  }

  const analyzeImages = async () => {
    if (selectedImages.length === 0) return

    setAnalyzing(true)
    setError(null)
    const results = []

    try {
      for (const image of selectedImages) {
        const reader = new FileReader()
        const imageData = await new Promise((resolve, reject) => {
          reader.onloadend = () => resolve(reader.result)
          reader.onerror = reject
          reader.readAsDataURL(image.file)
        })

        const response = await fetch('https://electrician-assist-backend-production.up.railway.app/api/analyze', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            image: imageData,
            problem: selectedProblem?.title,
            context: selectedProblem?.description
          })
        })

        if (!response.ok) {
          throw new Error('Analysis failed for ' + image.name)
        }

        const result = await response.json()
        results.push({
          imageName: image.name,
          ...result
        })
      }

      setAnalysisResults(results)
    } catch (err) {
      console.error('Analysis error:', err)
      setError(err.message || 'Failed to analyze images. Please ensure the backend server is running.')
    } finally {
      setAnalyzing(false)
    }
  }

  const startPhotoAnalysis = () => {
    setCurrentView('photo-analysis')
    setSelectedImages([])
    setAnalysisResults([])
    setError(null)
  }

  // Filtered problems for search
  const filteredProblems = searchQuery
    ? ELECTRICAL_PROBLEMS.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.causes.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : ELECTRICAL_PROBLEMS

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-lg shadow-md">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Electrician's Assistant</h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">NEC 2023 Code Reference & Troubleshooting</p>
              </div>
            </div>
            {currentView !== 'home' && (
              <Button variant="outline" onClick={() => {
  setCurrentView('home');
  setSelectedProblem(null);
  setSelectedImages([]);
  setAnalysisResults([]);
}}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* HOME VIEW - Start Here */}
        {/* HOME VIEW - Start Here */}
        {currentView === 'home' && (
          <ImprovedHome
            topProblems={topProblems}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setCurrentView={setCurrentView}
            handleProblemSelect={handleProblemSelect}
            getSeverityColor={getSeverityColor}
            startPhotoAnalysis={() => setCurrentView('photo-analysis')}
          />
        )}

        {/* NEXT 10 VIEW */}
        {currentView === 'next10' && (
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Next 10 Common Problems</CardTitle>
                <CardDescription>Still can't find it? Try the full index or search function</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid gap-4">
              {commonProblems.map((problem) => (
                <Card
                  key={problem.id}
                  className="shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleProblemSelect(problem)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{problem.title}</h3>
                          <Badge className={getSeverityColor(problem.severity)}>
                            {problem.severity.toUpperCase()}
                          </Badge>
                          <Badge variant="outline">{problem.category}</Badge>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400">{problem.description}</p>
                      </div>
                      <ChevronRight className="h-6 w-6 text-slate-400 flex-shrink-0 ml-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" variant="default" className="w-full" onClick={handleSearchProblems}>
              <Book className="mr-2 h-5 w-5" />
              View Full Index of All Problems
            </Button>
          </div>
        )}

        {/* FULL INDEX VIEW */}
        {currentView === 'index' && (
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Full Electrical Problems Index</CardTitle>
                <CardDescription>Search or browse all problems by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search problems, symptoms, or codes..."
                    className="pl-10 text-lg py-6"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {filteredProblems.map((problem) => (
                <Card
                  key={problem.id}
                  className="shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleProblemSelect(problem)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="text-lg font-semibold">{problem.title}</h3>
                          <Badge className={getSeverityColor(problem.severity)}>
                            {problem.severity.toUpperCase()}
                          </Badge>
                          <Badge variant="outline">{problem.category}</Badge>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-2">{problem.description}</p>
                        <div className="text-sm text-slate-500">
                          Common causes: {problem.causes.slice(0, 2).join(', ')}...
                        </div>
                      </div>
                      <ChevronRight className="h-6 w-6 text-slate-400 flex-shrink-0 ml-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProblems.length === 0 && (
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>No problems found</AlertTitle>
                <AlertDescription>
                  Try a different search term or browse all problems above.
                </AlertDescription>
              </Alert>
            )}
          </div>
        )}
        {/* NEC CODES VIEW */}
        {currentView === 'nec-database' && (
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl">NEC 2023 Code Database</CardTitle>
                <CardDescription>Browse {NEC_CODES.length} essential electrical codes organized by article</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search NEC codes by number, title, or keyword..."
                    className="pl-10 text-lg py-6"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* NEC Codes Grid */}
            <div className="grid gap-4">
              {(searchQuery
                ? NEC_CODES.filter(code =>
                    code.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    code.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    code.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    code.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()))
                  )
                : NEC_CODES
              ).map((code) => (
                <Card
                  key={code.code}
                  className="shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-sm font-mono bg-blue-50 text-blue-700 border-blue-200">
                          {code.code}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Article {code.article}
                        </Badge>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{code.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">{code.description}</p>
                    {code.keywords && code.keywords.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {code.keywords.slice(0, 5).map((keyword, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* PROBLEM DETAIL VIEW */}
        {currentView === 'problem-detail' && selectedProblem && (
          <div className="space-y-6">
            {/* Problem Header */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">{selectedProblem.title}</CardTitle>
                    <div className="flex gap-2 mb-3">
                      <Badge className={getSeverityColor(selectedProblem.severity)}>
                        {SEVERITY_LEVELS[selectedProblem.severity].label}
                      </Badge>
                      <Badge variant="outline">{selectedProblem.category}</Badge>
                    </div>
                    <CardDescription className="text-base">{selectedProblem.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Common Causes */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Common Causes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {selectedProblem.causes.map((cause, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-slate-700 dark:text-slate-300">{cause}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Troubleshooting Steps */}
            {selectedProblem.troubleshootingSteps && (
              <Card className="shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-green-900 dark:text-green-100">Troubleshooting Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    {selectedProblem.troubleshootingSteps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3 text-green-800 dark:text-green-200">
                        <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            )}

            {/* NEC Code References */}
            <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-blue-900 dark:text-blue-100">NEC 2023 Code References</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedProblem.necReferences.map((ref, index) => (
                  <div key={index} className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                    <div className="font-bold text-blue-900 dark:text-blue-100 mb-1">{ref.code}: {ref.title}</div>
                    <div className="text-sm text-blue-800 dark:text-blue-200">{ref.description}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Photo Instructions */}
            {selectedProblem.photoInstructions && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Photos to Take for AI Analysis
                  </CardTitle>
                  <CardDescription>Take these specific photos for detailed diagnosis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {selectedProblem.photoInstructions.map((instruction, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Camera className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300">{instruction}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                    onClick={startPhotoAnalysis}
                  >
                    <Camera className="mr-2 h-5 w-5" />
                    Start Photo Analysis
                  </Button>
                </CardContent>
              </Card>
            )}

            {selectedProblem.severity === 'critical' && (
              <Alert className="border-red-500 bg-red-50 dark:bg-red-950/30">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertTitle className="text-red-600">Safety Warning</AlertTitle>
                <AlertDescription className="text-red-600">
                  This is a critical safety issue. Turn off power at the main breaker and contact a licensed electrician immediately. Do not attempt repairs without proper training.
                </AlertDescription>
              </Alert>
            )}
          </div>
        )}

        {/* PHOTO ANALYSIS VIEW */}
        {currentView === 'photo-analysis' && selectedProblem && (
          <div className="space-y-6">
            {/* Problem Context */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Camera className="h-6 w-6" />
                  AI Photo Analysis: {selectedProblem.title}
                </CardTitle>
                <CardDescription>Upload the photos as instructed below for detailed AI analysis</CardDescription>
              </CardHeader>
            </Card>

            {/* Photo Instructions Reminder */}
            <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-blue-900 dark:text-blue-100">Required Photos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {selectedProblem.photoInstructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Camera className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-800 dark:text-blue-200">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Upload Area */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Upload Photos</CardTitle>
                <CardDescription>Take or upload photos following the instructions above</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Button
                    onClick={() => cameraInputRef.current?.click()}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600"
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
                    Upload Images
                  </Button>
                </div>

                <input
                  ref={cameraInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleFileSelect}
                  className="hidden"
                  multiple
                />
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  multiple
                />

                {/* Selected Images Preview */}
                {selectedImages.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold">Selected Images ({selectedImages.length})</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedImages.map((image, index) => (
                        <div key={index} className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden">
                          <img
                            src={image.preview}
                            alt={image.name}
                            className="w-full h-32 object-cover"
                          />
                          <Button
                            variant="destructive"
                            size="sm"
                            className="absolute top-2 right-2"
                            onClick={() => removeImage(index)}
                          >
                            ×
                          </Button>
                          <div className="p-2 bg-white dark:bg-slate-800 text-xs truncate">
                            {image.name}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button
                      onClick={analyzeImages}
                      disabled={analyzing}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                      size="lg"
                    >
                      {analyzing ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Analyzing with AI...
                        </>
                      ) : (
                        <>
                          <Zap className="mr-2 h-5 w-5" />
                          Analyze {selectedImages.length} Image{selectedImages.length > 1 ? 's' : ''}
                        </>
                      )}
                    </Button>
                  </div>
                )}

                {error && (
                  <Alert className="border-red-500 bg-red-50 dark:bg-red-950/30">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <AlertTitle className="text-red-600">Error</AlertTitle>
                    <AlertDescription className="text-red-600">{error}</AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            {/* Analysis Results */}
            {analysisResults.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">AI Analysis Results</h2>
                {analysisResults.map((result, index) => (
                  <Card key={index} className="shadow-lg">
                    <CardHeader>
                      <CardTitle>Image {index + 1}: {result.imageName}</CardTitle>
                      <div className="flex gap-2 mt-2">
                        {result.safety_rating && (
                          <Badge className={
                            result.safety_rating?.includes('High') || result.safety_rating?.includes('Critical')
                              ? 'bg-red-500 text-white'
                              : result.safety_rating?.includes('Moderate')
                              ? 'bg-yellow-500 text-black'
                              : 'bg-green-500 text-white'
                          }>
                            {result.safety_rating}
                          </Badge>
                        )}
                        {result.compliance_status && (
                          <Badge variant="outline">{result.compliance_status}</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Issues */}
                      {result.issues && result.issues.length > 0 && (
                        <div>
                          <h3 className="font-semibold mb-2">Issues Found:</h3>
                          <div className="space-y-3">
                            {result.issues.map((issue, issueIndex) => (
                              <Alert key={issueIndex} className="border-l-4" style={{
                                borderLeftColor: issue.type === 'critical' ? '#ef4444' :
                                                 issue.type === 'warning' ? '#eab308' : '#3b82f6'
                              }}>
                                <div className="flex flex-col gap-3 w-full">
                                  <div className="flex items-start gap-2 flex-wrap">
                                    <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                    <AlertTitle className="mb-0 flex-1 min-w-0">{issue.title}</AlertTitle>
                                    <Badge className={getSeverityColor(issue.type) + " flex-shrink-0"}>
                                      {issue.type?.toUpperCase()}
                                    </Badge>
                                  </div>
                                  <AlertDescription className="w-full">
                                    <p className="mb-3 whitespace-pre-wrap break-words leading-relaxed">{issue.description}</p>
                                    <div className="space-y-3 text-sm bg-slate-50 dark:bg-slate-800 p-4 rounded">
                                      {issue.location && (
                                        <div className="flex flex-col gap-1">
                                          <strong className="font-semibold text-slate-700 dark:text-slate-300">Location:</strong>
                                          <span className="text-slate-600 dark:text-slate-400 whitespace-pre-wrap break-words leading-relaxed">{issue.location}</span>
                                        </div>
                                      )}
                                      {issue.nec_reference && (
                                        <div className="flex flex-col gap-1">
                                          <strong className="font-semibold text-slate-700 dark:text-slate-300">NEC Reference:</strong>
                                          <span className="text-slate-600 dark:text-slate-400 whitespace-pre-wrap break-words leading-relaxed">{issue.nec_reference}</span>
                                        </div>
                                      )}
                                    </div>
                                  </AlertDescription>
                                </div>
                              </Alert>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Recommendations */}
                      {result.recommendations && result.recommendations.length > 0 && (
                        <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                          <h3 className="font-semibold mb-2 text-green-900 dark:text-green-100">Recommendations:</h3>
                          <ul className="space-y-1">
                            {result.recommendations.map((rec, recIndex) => (
                              <li key={recIndex} className="flex items-start gap-2 text-green-800 dark:text-green-200">
                                <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{rec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() => setCurrentView('problem-detail')}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Problem Details
                </Button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 py-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>⚠️ This tool provides guidance for educational purposes. Always consult a licensed electrician for professional electrical work.</p>
          <p className="mt-2">NEC 2023 Edition Code References Included</p>
        </div>
      </footer>
    </div>
  )
}

export default App
