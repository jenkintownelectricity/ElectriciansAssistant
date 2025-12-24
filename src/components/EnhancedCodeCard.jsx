import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Star, Share2, Camera, ExternalLink, Copy, Check } from 'lucide-react'
import { motion } from 'framer-motion'

const EnhancedCodeCard = ({
  code,
  onClick,
  isBookmarked = false,
  onBookmark,
  showPhotoTips = false,
}) => {
  const [copied, setCopied] = useState(false)
  const [localBookmarked, setLocalBookmarked] = useState(isBookmarked)

  const handleBookmark = (e) => {
    e.stopPropagation()
    setLocalBookmarked(!localBookmarked)
    if (onBookmark) {
      onBookmark(code)
    }
  }

  const handleShare = async (e) => {
    e.stopPropagation()

    // Create shareable text
    const shareText = `NEC 2023 ${code.code}: ${code.title}\n${code.description || ''}`

    // Try native share API first (mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: `NEC ${code.code}`,
          text: shareText,
        })
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.log('Share failed:', err)
        }
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareText)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.log('Copy failed:', err)
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <Card
        className="cursor-pointer hover:shadow-xl transition-all duration-300
                   border-l-4 border-l-blue-500 hover:border-l-blue-600
                   bg-white group"
        onClick={onClick}
      >
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-3">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Code and Category */}
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Badge className="font-mono bg-blue-100 text-blue-700 hover:bg-blue-200 font-semibold">
                  {code.code}
                </Badge>
                {code.category && (
                  <Badge variant="outline" className="text-xs border-gray-300">
                    {code.category}
                  </Badge>
                )}
                {code.article && (
                  <Badge variant="secondary" className="text-xs">
                    Article {code.article}
                  </Badge>
                )}
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-gray-900 mb-2 leading-tight">
                {code.title}
              </h3>

              {/* Description */}
              {code.description && (
                <p className="text-sm text-gray-600 line-clamp-2 mb-3 leading-relaxed">
                  {code.description}
                </p>
              )}

              {/* Application (if available) */}
              {code.application && (
                <p className="text-xs text-gray-500 italic line-clamp-1">
                  {code.application}
                </p>
              )}

              {/* Bottom Row - Photo Tips & Related Codes */}
              <div className="flex items-center gap-3 mt-3 text-xs text-gray-500">
                {code.photoTips && showPhotoTips && (
                  <div className="flex items-center gap-1 group/photo">
                    <Camera className="h-3 w-3 text-blue-500" />
                    <span className="group-hover/photo:text-blue-600">Photo tips available</span>
                  </div>
                )}
                {code.relatedCodes && code.relatedCodes.length > 0 && (
                  <div className="flex items-center gap-1">
                    <ExternalLink className="h-3 w-3 text-gray-400" />
                    <span>{code.relatedCodes.length} related</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-1 flex-shrink-0">
              {/* Bookmark Button */}
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 w-8 p-0 transition-all duration-200 ${
                  localBookmarked
                    ? 'text-yellow-500 hover:text-yellow-600'
                    : 'text-gray-400 hover:text-yellow-500'
                }`}
                onClick={handleBookmark}
                title={localBookmarked ? 'Remove bookmark' : 'Bookmark this code'}
              >
                <Star
                  className={`h-4 w-4 ${localBookmarked ? 'fill-current' : ''}`}
                />
              </Button>

              {/* Share Button */}
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-gray-400 hover:text-blue-500 transition-colors"
                onClick={handleShare}
                title={copied ? 'Copied!' : 'Share this code'}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : navigator.share ? (
                  <Share2 className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Safety Notes (if critical) */}
          {code.safetyNotes && (
            <div className="mt-3 p-2 bg-red-50 border-l-2 border-red-500 rounded text-xs text-red-700">
              <strong>Safety:</strong> {code.safetyNotes}
            </div>
          )}

          {/* Common Violations (if any) */}
          {code.commonViolations && (
            <div className="mt-2 p-2 bg-yellow-50 border-l-2 border-yellow-500 rounded text-xs text-yellow-700">
              <strong>Common Violation:</strong> {code.commonViolations}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default EnhancedCodeCard
