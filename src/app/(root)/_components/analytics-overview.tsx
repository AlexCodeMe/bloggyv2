import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, ThumbsUp, MessageSquare, TrendingUp } from 'lucide-react'
import { SVGProps } from "react"

type IconKey = 'Eye' | 'ThumbsUp' | 'MessageSquare' | 'TrendingUp'

export type AnalyticItem = {
  id: number
  title: string
  value: number
  change: string
  icon: IconKey
}

const iconMap: Record<IconKey, React.ComponentType<SVGProps<SVGSVGElement>>> = {
  Eye: Eye,
  ThumbsUp: ThumbsUp,
  MessageSquare: MessageSquare,
  TrendingUp: TrendingUp,
}

export function AnalyticsOverview({ analytics }: { analytics: AnalyticItem[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Analytics Overview</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {analytics.map((item) => {
          const IconComponent = iconMap[item.icon]
          return (
            <Card key={item.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                <IconComponent className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
                <p className="text-xs text-muted-foreground">{item.change} from last month</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
