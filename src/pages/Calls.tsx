
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter,
  Calendar,
  Download,
  Upload,
  SortAsc
} from "lucide-react";
import { Header } from "@/components/Header";
import { CallCard } from "@/components/CallCard";
import { StatsCard } from "@/components/StatsCard";

const Calls = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data for all calls
  const allCalls = [
    {
      id: 1,
      title: "Client Discovery Call - Acme Corp",
      date: "2024-01-15",
      duration: "45:32",
      participants: ["John Doe", "Sarah Wilson", "Mike Chen"],
      status: "completed" as const,
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
      status: "processing" as const,
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
      status: "completed" as const,
      hasTranscript: true,
      hasSummary: true,
      actionItems: 7
    },
    {
      id: 4,
      title: "Quarterly Business Review - BigCorp",
      date: "2024-01-10",
      duration: "1:45:20",
      participants: ["Team Lead", "Client Team"],
      status: "completed" as const,
      hasTranscript: true,
      hasSummary: true,
      actionItems: 12
    },
    {
      id: 5,
      title: "Sales Pipeline Review",
      date: "2024-01-08",
      duration: "32:45",
      participants: ["Sales Team"],
      status: "failed" as const,
      hasTranscript: false,
      hasSummary: false,
      actionItems: 0
    }
  ];

  const filteredCalls = allCalls.filter(call => {
    const matchesSearch = call.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         call.participants.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = filterStatus === "all" || call.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const callStats = [
    { title: "Total Calls", value: allCalls.length.toString(), change: "+5 this week", icon: Calendar },
    { title: "Completed", value: allCalls.filter(c => c.status === "completed").length.toString(), change: "+3 this week", icon: Calendar },
    { title: "Processing", value: allCalls.filter(c => c.status === "processing").length.toString(), change: "1 active", icon: Calendar },
    { title: "Failed", value: allCalls.filter(c => c.status === "failed").length.toString(), change: "0 this week", icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              All Calls
            </h1>
            <p className="text-slate-600 mt-2">Manage and review your call history</p>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg">
            <Upload className="mr-2 h-5 w-5" />
            Upload New Call
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {callStats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Filters and Search */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder="Search calls by title or participant..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/80 border-slate-200"
                />
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("all")}
                  className={filterStatus === "all" ? "bg-blue-600" : ""}
                >
                  All
                </Button>
                <Button
                  variant={filterStatus === "completed" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("completed")}
                  className={filterStatus === "completed" ? "bg-green-600" : ""}
                >
                  Completed
                </Button>
                <Button
                  variant={filterStatus === "processing" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("processing")}
                  className={filterStatus === "processing" ? "bg-blue-600" : ""}
                >
                  Processing
                </Button>
                <Button
                  variant={filterStatus === "failed" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("failed")}
                  className={filterStatus === "failed" ? "bg-red-600" : ""}
                >
                  Failed
                </Button>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <SortAsc className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calls List */}
        <div className="space-y-4">
          {filteredCalls.length > 0 ? (
            filteredCalls.map((call) => (
              <CallCard key={call.id} call={call} />
            ))
          ) : (
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-12 text-center">
                <div className="text-slate-400 mb-4">
                  <Calendar className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-slate-600 mb-2">No calls found</h3>
                <p className="text-slate-500">Try adjusting your search or filter criteria</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Calls;
