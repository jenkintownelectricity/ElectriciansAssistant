import { Shield, Camera, Code, Search, AlertTriangle, ChevronRight, Book, Lightbulb } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'

export default function ImprovedHome({ 
  topProblems, 
  searchQuery, 
  setSearchQuery, 
  setCurrentView, 
  handleProblemSelect,
  getSeverityColor,
  startPhotoAnalysis 
}) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
          Professional Electrical Safety & Code Reference
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          AI-powered safety inspections, NEC 2023 code lookup, and expert troubleshooting guidance
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="shadow-lg hover:shadow-xl transition-all border-2 border-blue-200 hover:border-blue-400 cursor-pointer" onClick={() => setCurrentView('index')}>
          <CardContent className="p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Safety Database</h3>
            <p className="text-slate-600">Browse 30+ common electrical problems with detailed troubleshooting steps</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-all border-2 border-green-200 hover:border-green-400 cursor-pointer" onClick={() => {
  setCurrentView('index');
}}>
          <CardContent className="p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI Photo Analysis</h3>
            <p className="text-slate-600">Select a problem, then upload photos for context-aware AI analysis</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-all border-2 border-yellow-200 hover:border-yellow-400 cursor-pointer" onClick={() => setCurrentView('nec-database')}>
          <CardContent className="p-6 text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">NEC 2023 Codes</h3>
            <p className="text-slate-600">Complete National Electrical Code reference with quick search</p>
          </CardContent>
        </Card>
      </div>

      {/* Search Bar */}
      <Card className="shadow-lg border-2 border-slate-200">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
            <Input
              placeholder="Search electrical problems, codes, or symptoms..."
              className="pl-14 text-lg py-7 border-2 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setCurrentView('index')}
            />
          </div>
        </CardContent>
      </Card>

      {/* Top 3 Most Common Problems */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-red-100 p-3 rounded-lg">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Top 3 Most Common Problems</h2>
            <p className="text-slate-600 dark:text-slate-400">Quick access to the most frequent electrical issues</p>
          </div>
        </div>
        <div className="grid gap-4">
          {topProblems.map((problem) => (
            <Card
              key={problem.id}
              className="shadow-md hover:shadow-xl transition-all cursor-pointer border-l-4 border-l-red-500"
              onClick={() => handleProblemSelect(problem)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-semibold">{problem.title}</h3>
                      <Badge className={getSeverityColor(problem.severity)}>
                        {problem.severity.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-base">{problem.description}</p>
                  </div>
                  <ChevronRight className="h-8 w-8 text-slate-400 flex-shrink-0 ml-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid md:grid-cols-2 gap-6">
        <Button
          size="lg"
          variant="outline"
          className="h-auto py-8 border-2 hover:border-blue-500 hover:bg-blue-50 transition-all"
          onClick={() => setCurrentView('next10')}
        >
          <div className="flex items-center gap-4 w-full">
            <div className="bg-blue-100 p-4 rounded-lg">
              <Lightbulb className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-left flex-1">
              <div className="font-semibold text-xl mb-1">View All 30 Problems</div>
              <div className="text-sm text-slate-600">Can't find your problem? View more</div>
            </div>
            <ChevronRight className="h-6 w-6 text-slate-400" />
          </div>
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="h-auto py-8 border-2 hover:border-green-500 hover:bg-green-50 transition-all"
          onClick={() => setCurrentView('index')}
        >
          <div className="flex items-center gap-4 w-full">
            <div className="bg-green-100 p-4 rounded-lg">
              <Book className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-left flex-1">
              <div className="font-semibold text-xl mb-1">Browse Full Index</div>
              <div className="text-sm text-slate-600">All electrical problems & NEC codes</div>
            </div>
            <ChevronRight className="h-6 w-6 text-slate-400" />
          </div>
        </Button>
      </div>
    </div>
  )
}