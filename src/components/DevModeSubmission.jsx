import React, { useState } from 'react';
import { PlusCircle, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function DevModeSubmission({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    code: '',
    article: '',
    title: '',
    category: '',
    description: '',
    application: '',
    safetyNotes: '',
    relatedCodes: '',
    commonViolations: '',
    photoTips: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/api/dev/submit-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      setSuccess(true);

      // Auto-clear form and reset success state after 2 seconds
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          code: '',
          article: '',
          title: '',
          category: '',
          description: '',
          application: '',
          safetyNotes: '',
          relatedCodes: '',
          commonViolations: '',
          photoTips: ''
        });
        if (onSubmitSuccess) onSubmitSuccess(data);
      }, 2000);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="border-2 border-yellow-400 bg-yellow-50 dark:bg-yellow-950/20">
      <CardHeader>
        <div className="flex items-center gap-2">
          <PlusCircle className="h-5 w-5 text-yellow-600" />
          <CardTitle className="text-yellow-900 dark:text-yellow-100">
            Development Mode - Quick Add Code
          </CardTitle>
          <Badge variant="outline" className="ml-auto border-yellow-600 text-yellow-700">
            DEV ONLY
          </Badge>
        </div>
        <CardDescription className="text-yellow-800 dark:text-yellow-200">
          Found a missing code during field testing? Add it here for review.
          This will be logged and can be added to the database.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Required Fields Section */}
          <div className="space-y-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-yellow-300">
            <h3 className="font-semibold text-sm text-yellow-900 dark:text-yellow-100 flex items-center gap-2">
              <span className="text-red-500">*</span> Required Fields
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Code Number <span className="text-red-500">*</span>
                </label>
                <Input
                  name="code"
                  placeholder="e.g., 210.52(C)"
                  value={formData.code}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-slate-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Article <span className="text-red-500">*</span>
                </label>
                <Input
                  name="article"
                  placeholder="e.g., 210"
                  value={formData.article}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-slate-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Title <span className="text-red-500">*</span>
              </label>
              <Input
                name="title"
                placeholder="e.g., Kitchen Countertop Receptacles"
                value={formData.title}
                onChange={handleChange}
                required
                className="bg-white dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Description (NEC Code Text) <span className="text-red-500">*</span>
              </label>
              <Textarea
                name="description"
                placeholder="The actual NEC code text/requirement..."
                value={formData.description}
                onChange={handleChange}
                rows={3}
                required
                className="bg-white dark:bg-slate-800"
              />
            </div>
          </div>

          {/* Optional Fields Section */}
          <div className="space-y-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-yellow-300">
            <h3 className="font-semibold text-sm text-yellow-900 dark:text-yellow-100">
              Optional Details (Recommended)
            </h3>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Category
              </label>
              <Input
                name="category"
                placeholder="e.g., Branch Circuits, Grounding, Wiring Methods"
                value={formData.category}
                onChange={handleChange}
                className="bg-white dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Application (Plain English Explanation)
              </label>
              <Textarea
                name="application"
                placeholder="What does this mean for the job? How is it applied in practice?"
                value={formData.application}
                onChange={handleChange}
                rows={2}
                className="bg-white dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Safety Notes
              </label>
              <Input
                name="safetyNotes"
                placeholder="Why this matters for safety..."
                value={formData.safetyNotes}
                onChange={handleChange}
                className="bg-white dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Related Codes
              </label>
              <Input
                name="relatedCodes"
                placeholder="210.8(A), 210.52(A), 406.4(D) (comma separated)"
                value={formData.relatedCodes}
                onChange={handleChange}
                className="bg-white dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Common Violations
              </label>
              <Input
                name="commonViolations"
                placeholder="What you typically see done wrong in the field..."
                value={formData.commonViolations}
                onChange={handleChange}
                className="bg-white dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Photo Tips
              </label>
              <Input
                name="photoTips"
                placeholder="How to photograph this issue for documentation..."
                value={formData.photoTips}
                onChange={handleChange}
                className="bg-white dark:bg-slate-800"
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Success Message */}
          {success && (
            <Alert className="border-green-500 bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-100">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription>
                Code submitted successfully! It will be reviewed and added to the database.
              </AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading || success}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
            size="lg"
          >
            {loading ? (
              <>
                <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Submitting...
              </>
            ) : success ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Submitted!
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Submit Code for Review
              </>
            )}
          </Button>

          <p className="text-xs text-center text-yellow-700 dark:text-yellow-300">
            This will be logged to the console. In Phase 2, it will be written to Google Sheets Dev_Submissions tab.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
