
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  Users, 
  FileText, 
  CheckCircle, 
  Mail,
  MoreVertical,
  Play,
  Download,
  ExternalLink
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Call {
  id: number;
  title: string;
  date: string;
  duration: string;
  participants: string[];
  status: "completed" | "processing" | "failed";
  hasTranscript: boolean;
  hasSummary: boolean;
  actionItems: number;
}

interface CallCardProps {
  call: Call;
}

export const CallCard = ({ call }: CallCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700 border-green-200";
      case "processing":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "failed":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                {call.title}
              </h3>
              <Badge variant="outline" className={getStatusColor(call.status)}>
                {call.status}
              </Badge>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {call.duration}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {call.participants.length} participants
              </div>
              <span>{new Date(call.date).toLocaleDateString()}</span>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Play className="mr-2 h-4 w-4" />
                Play Audio
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                Download
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ExternalLink className="mr-2 h-4 w-4" />
                Open in HubSpot
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {call.status === "processing" && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-slate-600">Processing...</span>
              <span className="text-blue-600 font-medium">75%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FileText className={`h-4 w-4 ${call.hasTranscript ? 'text-green-600' : 'text-gray-400'}`} />
              <span className="text-sm text-slate-600">Transcript</span>
            </div>
            
            <div className="flex items-center gap-2">
              <CheckCircle className={`h-4 w-4 ${call.hasSummary ? 'text-green-600' : 'text-gray-400'}`} />
              <span className="text-sm text-slate-600">Summary</span>
            </div>
            
            {call.actionItems > 0 && (
              <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                {call.actionItems} Action Items
              </Badge>
            )}
          </div>

          {call.status === "completed" && (
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
              <Mail className="mr-2 h-4 w-4" />
              Generate Email
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
