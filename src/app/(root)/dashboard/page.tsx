import { useAuth } from "@/hooks/useAuth"
import { HeroSection } from "../_components/hero-section"
import { RecentActivity } from "../_components/recent-activity"
import { AnalyticItem, AnalyticsOverview } from "../_components/analytics-overview"
import { ContentSuggestions } from "../_components/content-suggestions"
import { QuickDraft } from "../_components/quick-draft"

// Dummy data
const recentActivityData = [
  { id: 1, title: "New comment on '10 Tips for Better Writing'", description: "2 hours ago", content: "Great article! I especially liked tip #7..." },
  { id: 2, title: "Your post 'AI in Everyday Life' is trending", description: "1 day ago", content: "Your post has received over 100 views in the last 24 hours." },
  { id: 3, title: "Draft saved: 'The Future of Technology'", description: "3 days ago", content: "You've made progress on your draft. Consider publishing soon!" },
  { id: 4, title: "Draft saved: 'The Rise of Generative AI'", description: "3 days ago", content: "You've made progress on your draft. Consider publishing soon!" },
]

const analyticsData: AnalyticItem[] = [
  { id: 1, title: "Total Views", value: 1234, change: "+20.1%", icon: "Eye" },
  { id: 2, title: "Likes", value: 423, change: "+15%", icon: "ThumbsUp" },
  { id: 3, title: "Comments", value: 89, change: "+7%", icon: "MessageSquare" },
  { id: 4, title: "Trending Posts", value: 3, change: "+2", icon: "TrendingUp" },
];


const contentSuggestionsData = [
  { id: 1, title: "Expand on 'The Impact of AI on Healthcare'", description: "Based on your recent post", content: "Consider exploring telemedicine advancements and AI-driven diagnostics." },
  { id: 2, title: "Write about 'Sustainable Living in Urban Areas'", description: "Trending topic in your niche", content: "Discuss innovative urban farming techniques and energy-efficient housing." },
  { id: 3, title: "Create a series on 'Personal Finance for Millennials'", description: "High engagement potential", content: "Cover topics like debt management, investing basics, and retirement planning." },
]

export default async function Dashboard() {
  const session = await useAuth()

  if (!session) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Welcome back!</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <RecentActivity activities={recentActivityData} />
        <AnalyticsOverview analytics={analyticsData} />
        <ContentSuggestions suggestions={contentSuggestionsData} />
        <QuickDraft />
      </main>
    </div>
  )
}