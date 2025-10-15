import React from 'react';
import { Sparkles, ArrowRight, Check, Lock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { APP_VERSIONS, getNextTier, calculateAnnualSavings, FEATURE_NAMES } from '../config/versions';

export default function UpgradePrompt({ currentTier = 'residential', triggeredBy }) {
  const nextTierId = getNextTier(currentTier);

  // If already at highest tier, don't show upgrade prompt
  if (!nextTierId) {
    return null;
  }

  const currentVersion = APP_VERSIONS[currentTier];
  const nextVersion = APP_VERSIONS[nextTierId];
  const savings = calculateAnnualSavings(nextTierId);

  // Get features that are new in next tier
  const newFeatures = nextVersion.features.filter(
    feature => !currentVersion.features.includes(feature)
  );

  return (
    <Card className="border-2 border-blue-400 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/40 dark:to-purple-950/40 shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2 flex-wrap">
          <Sparkles className="h-5 w-5 text-blue-600" />
          <CardTitle className="text-blue-900 dark:text-blue-100">
            Upgrade to {nextVersion.name}
          </CardTitle>
          {savings > 0 && (
            <Badge className="ml-auto bg-green-600 text-white hover:bg-green-700">
              Save ${savings} Annually
            </Badge>
          )}
        </div>
        {triggeredBy && (
          <CardDescription className="text-blue-800 dark:text-blue-200 mt-2">
            <div className="flex items-center gap-2 p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
              <Lock className="h-4 w-4" />
              <span>You tried to access: <strong>{triggeredBy}</strong></span>
            </div>
          </CardDescription>
        )}
        <CardDescription className="text-blue-700 dark:text-blue-300 mt-1">
          {nextVersion.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Features Section */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-blue-900 dark:text-blue-100 flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              New Features Unlocked:
            </h4>
            <ul className="space-y-2">
              {newFeatures.slice(0, 6).map(feature => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {FEATURE_NAMES[feature] || feature.replace(/_/g, ' ')}
                  </span>
                </li>
              ))}
              {newFeatures.length > 6 && (
                <li className="text-sm text-blue-600 dark:text-blue-400 font-medium pl-6">
                  + {newFeatures.length - 6} more features
                </li>
              )}
            </ul>
          </div>

          {/* Pricing Section */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-blue-900 dark:text-blue-100">
              Pricing:
            </h4>
            <div className="space-y-3 p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-800">
              {typeof nextVersion.price.monthly === 'number' ? (
                <>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        ${nextVersion.price.monthly}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">/month</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Billed monthly, cancel anytime
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                        ${nextVersion.price.yearly}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">/year</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                        Save ${savings}
                      </Badge>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        ({nextVersion.price.savingsPercent}% off)
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-4">
                  <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    Custom Pricing
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Contact us for enterprise pricing tailored to your team
                  </p>
                </div>
              )}
            </div>

            {/* Usage Limits */}
            <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <p className="font-medium text-gray-700 dark:text-gray-300">Includes:</p>
              <ul className="space-y-0.5 ml-3">
                <li>• {nextVersion.limits.photoAnalysisPerMonth} photo analyses/month</li>
                <li>• {nextVersion.limits.savedSearches} saved searches</li>
                <li>• {nextVersion.limits.users} user{nextVersion.limits.users !== 1 && 's'}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        {nextTierId === 'commercial' && (
          <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Perfect for:</strong> Commercial electricians working on office buildings,
              retail spaces, and light industrial projects
            </p>
          </div>
        )}

        {nextTierId === 'enterprise' && (
          <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
            <p className="text-sm text-purple-900 dark:text-purple-100">
              <strong>Perfect for:</strong> Electrical contracting companies with multiple crews,
              large industrial projects, and need for team management and analytics
            </p>
          </div>
        )}

        {/* CTA Button */}
        <Button
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
          size="lg"
        >
          <ArrowRight className="h-5 w-5 mr-2" />
          Upgrade to {nextVersion.name}
        </Button>

        {/* Additional Info */}
        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
          <span>✓ 14-day money-back guarantee</span>
          <span>✓ Instant activation</span>
          <span>✓ No data loss</span>
        </div>
      </CardContent>
    </Card>
  );
}
