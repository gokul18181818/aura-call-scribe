
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  Mic, 
  Calendar, 
  Clock, 
  Users, 
  Mail, 
  CheckCircle, 
  MoreVertical,
  Upload,
  Play,
  Pause,
  Download,
  ExternalLink
} from "lucide-react";
import { Header } from "@/components/Header";
import { CallCard } from "@/components/CallCard";
import { StatsCard } from "@/components/StatsCard";

const Index = () => {
  const [isRecording, setIsRecording] = useState(false);

  // Mock data for demonstration
  const recentCalls = [
    {
      id: 1,
      title: "Client Discovery Call - Acme Corp",
      date: "2024-01-15",
      duration: "45:32",
      participants: ["John Doe", "Sarah Wilson", "Mike Chen"],
      status: "completed",
      hasTranscript: true,
      hasSummary: true,
      actionItems: 3
    },
    {
      id: 2,
      title: "Weekly Team Standup",
      date: "2024-01-14",
      duration: "28:15",
      participants: ["Team Alpha"],
      status: "processing",
      hasTranscript: false,
      hasSummary: false,
      actionItems: 0
    },
    {
      id: 3,
      title: "Product Demo - TechStart",
      date: "2024-01-12",
      duration: "1:12:45",
      participants: ["Alex Johnson", "Lisa Park"],
      status: "completed",
      hasTranscript: true,
      hasSummary: true,
      actionItems: 7
    }
  ];

  const stats = [
    { title: "Total Calls", value: "24", change: "+12%", icon: Mic },
    { title: "Hours Processed", value: "18.5", change: "+8%", icon: Clock },
    { title: "Action Items", value: "47", change: "+23%", icon: CheckCircle },
    { title: "Emails Generated", value: "19", change: "+15%", icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 py-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 py-2 text-sm text-blue-600 font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            AI Assistant Ready
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Welcome to Aura
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Your AI-powered call assistant that transforms conversations into actionable insights
          </p>
        </div>

        {/* Quick Action */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl shadow-blue-500/10">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-slate-800">Quick Upload</h3>
                <p className="text-slate-600">Upload a recorded call for instant AI processing</p>
              </div>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg">
                <Upload className="mr-2 h-5 w-5" />
                Upload Audio
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Recent Calls */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-800">Recent Calls</h2>
            <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              View All
            </Button>
          </div>
          
          <div className="grid gap-6">
            {recentCalls.map((call) => (
              <CallCard key={call.id} call={call} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
