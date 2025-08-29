"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A simple area chart";

const chartConfig = {
  Balance: {
    label: "Balance",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function MonthlyChartArea({ data }: { data: any[] }) {
  const reversedData = data ? [...data].reverse() : [];

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Monthly Spending</CardTitle>
        <CardDescription>
          Showing spending breakdown for the past month.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={reversedData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="Date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="Balance"
              type="natural"
              fill="var(--color-Balance)"
              fillOpacity={0.4}
              stroke="var(--color-Balance)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month (Replace with real trend data)
              <TrendingUp className="h-4 w-4" />
            </div>
            {/*<div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2024
            </div>*/}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
