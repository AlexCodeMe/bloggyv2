'use client'

import { useState, useEffect } from 'react'

const aiTips = [
  "Use descriptive language to paint a vivid picture for your readers.",
  "Start with a compelling hook to grab your audience's attention.",
  "Incorporate personal anecdotes to make your content more relatable.",
  "Use subheadings to break up your text and improve readability.",
  "End with a strong call-to-action to engage your readers.",
]

export function HeroSection() {
  const [currentTip, setCurrentTip] = useState(aiTips[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip(aiTips[Math.floor(Math.random() * aiTips.length)])
    }, 5000) // Change tip every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="mb-12 bg-muted p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">AI Writing Tip of the Moment:</h2>
      <p className="text-lg italic">&ldquo;{currentTip}&rdquo;</p>
    </section>
  )
}