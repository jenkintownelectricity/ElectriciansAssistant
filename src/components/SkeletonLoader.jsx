import { Card, CardContent } from '@/components/ui/card.jsx'

const SkeletonLoader = ({ count = 6 }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <Card
          key={index}
          className="border-l-4 border-l-gray-200 animate-pulse"
        >
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 space-y-3">
                {/* Badges */}
                <div className="flex items-center gap-2">
                  <div className="h-6 w-20 bg-gray-200 rounded"></div>
                  <div className="h-6 w-24 bg-gray-200 rounded"></div>
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-100 rounded w-full"></div>
                  <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                </div>

                {/* Bottom info */}
                <div className="flex gap-3">
                  <div className="h-3 w-24 bg-gray-100 rounded"></div>
                  <div className="h-3 w-20 bg-gray-100 rounded"></div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-1">
                <div className="h-8 w-8 bg-gray-200 rounded"></div>
                <div className="h-8 w-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export const QuickAccessSkeleton = () => {
  return (
    <div className="flex gap-4 overflow-hidden">
      {Array.from({ length: 4}).map((_, index) => (
        <Card
          key={index}
          className="min-w-[280px] max-w-[280px] border-l-4 border-l-gray-200 animate-pulse"
        >
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-6 w-16 bg-gray-200 rounded"></div>
              <div className="h-6 w-20 bg-gray-200 rounded"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-3 bg-gray-100 rounded w-3/4"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default SkeletonLoader
