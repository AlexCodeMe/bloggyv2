import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from 'lucide-react'

type Suggestion = {
  id: number
  title: string
  description: string
  content: string
}

export function ContentSuggestions({ suggestions }: { suggestions: Suggestion[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">AI-Powered Content Suggestions</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {suggestions.map((suggestion) => (
          <Card key={suggestion.id}>
            <CardHeader>
              <CardTitle>{suggestion.title}</CardTitle>
              <CardDescription>{suggestion.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{suggestion.content}</p>
              <Button className="mt-4" variant="outline">
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Outline
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}