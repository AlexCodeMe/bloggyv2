'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sparkles } from 'lucide-react'

export function QuickDraft() {
  const [draftTitle, setDraftTitle] = useState('')
  const [draftContent, setDraftContent] = useState('')

  const handleAIAssist = () => {
    // Simulated AI assistance for quick draft
    console.log('AI assistance requested for:', draftTitle)
    setDraftContent(prevContent => prevContent + "\n\nAI Suggestion: Consider expanding on the main topic by...")
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Quick Draft</h2>
      <Card>
        <CardHeader>
          <CardTitle>Jot down your ideas quickly</CardTitle>
          <CardDescription>Use AI assistance to enhance your draft</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input
              type="text"
              placeholder="Draft Title"
              value={draftTitle}
              onChange={(e) => setDraftTitle(e.target.value)}
            />
            <div className="flex">
              <textarea
                className="flex-grow min-h-[100px] rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Start writing your draft here..."
                value={draftContent}
                onChange={(e) => setDraftContent(e.target.value)}
              />
              <Button
                type="button"
                variant="outline"
                className="ml-2"
                onClick={handleAIAssist}
              >
                <Sparkles className="h-4 w-4" />
              </Button>
            </div>
            <Button type="submit">Save Draft</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}