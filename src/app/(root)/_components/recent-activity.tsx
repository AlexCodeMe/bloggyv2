import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Activity = {
  id: number
  title: string
  description: string
  content: string
}

export function RecentActivity({ activities }: { activities: Activity[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <Card key={activity.id}>
            <CardHeader>
              <CardTitle>{activity.title}</CardTitle>
              <CardDescription>{activity.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{activity.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}