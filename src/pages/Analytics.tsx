
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown,
  Clock,
  Users,
  Mail,
  CheckCircle,
  BarChart3,
  PieChart,
  Calendar,
  Download
} from "lucide-react";
import { Header } from "@/components/Header";
import { 
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent 
} from "@/components/ui/chart";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart as RechartsPieChart,
  Cell,
  Area,
  AreaChart
} from "recharts";

const Analytics = () => {
  // Mock analytics data
  const callVolumeData = [
    { month: "Jan", calls: 12, hours: 8.5 },
    { month: "Feb", calls: 18, hours: 12.2 },
    { month: "Mar", calls: 24, hours: 16.8 },
    { month: "Apr", calls: 31, hours: 22.1 },
    { month: "May", calls: 28, hours: 19.5 },
    { month: "Jun", calls: 35, hours: 25.3 }
  ];

  const participantData = [
    { name: "1-2 people", value: 45, color: "#3B82F6" },
    { name: "3-5 people", value: 35, color: "#10B981" },
    { name: "6-10 people", value: 15, color: "#F59E0B" },
    { name: "10+ people", value: 5, color: "#EF4444" }
  ];

  const performanceData = [
    { metric: "Avg Call Duration", value: "42 min", change: "+8%", trend: "up" },
    { metric: "Action Items Generated", value: "156", change: "+23%", trend: "up" },
    { metric: "Email Success Rate", value: "94%", change: "+5%", trend: "up" },
    { metric: "Processing Time", value: "2.3 min", change: "-12%", trend: "down" }
  ];

  const weeklyData = [
    { day: "Mon", calls: 8, actionItems: 24 },
    { day: "Tue", calls: 12, actionItems: 36 },
    { day: "Wed", calls: 15, actionItems: 45 },
    { day: "Thu", calls: 10, actionItems: 30 },
    { day: "Fri", calls: 18, actionItems: 54 },
    { day: "Sat", calls: 3, actionItems: 9 },
    { day: "Sun", calls: 2, actionItems: 6 }
  ];

  const chartConfig = {
    calls: {
      label: "Calls",
      color: "#3B82F6",
    },
    hours: {
      label: "Hours",
      color: "#10B981",
    },
    actionItems: {
      label: "Action Items",
      color: "#F59E0B",
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Analytics
            </h1>
            <p className="text-slate-600 mt-2">Insights into your call patterns and AI performance</p>
          </div>
          <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceData.map((metric, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-600">{metric.metric}</p>
                    <p className="text-3xl font-bold text-slate-800">{metric.value}</p>
                    <div className="flex items-center gap-1">
                      {metric.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-600" />
                      )}
                      <p className={`text-sm font-medium ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                        {metric.change}
                      </p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Call Volume Trend */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Call Volume Over Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={callVolumeData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area 
                      type="monotone" 
                      dataKey="calls" 
                      stroke="#3B82F6" 
                      fill="#3B82F6" 
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Weekly Activity */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-600" />
                Weekly Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="calls" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Participant Distribution */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-600" />
                Participant Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <RechartsPieChart data={participantData} cx="50%" cy="50%" outerRadius={80}>
                      {participantData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </RechartsPieChart>
                  </RechartsPieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {participantData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-slate-600">{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Processing Hours */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-600" />
                Processing Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={callVolumeData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="hours" 
                      stroke="#10B981" 
                      strokeWidth={3}
                      dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* AI Performance Summary */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              AI Performance Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">94.2%</div>
                <div className="text-sm text-slate-600">Transcription Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2.3 min</div>
                <div className="text-sm text-slate-600">Avg Processing Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">87%</div>
                <div className="text-sm text-slate-600">Action Item Relevance</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Analytics;
