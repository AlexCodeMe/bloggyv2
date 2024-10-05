import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Stat = {
  label: string
  value: number
}

export function BlogStats({ stats }: { stats: Stat[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Blog Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}