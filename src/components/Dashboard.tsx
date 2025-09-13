import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BookOpen, Target, TrendingUp, Clock, Star, Upload } from "lucide-react";

const Dashboard = () => {
  const studyProgress = [
    { subject: "Machine Learning", progress: 78, color: "bg-learning-gradient" },
    { subject: "Data Structures", progress: 92, color: "bg-success-gradient" },
    { subject: "Web Development", progress: 65, color: "bg-learning-gradient" },
  ];

  const recentActivity = [
    { title: "Completed ML Quiz", time: "2 hours ago", score: "85%" },
    { title: "Uploaded Study Notes", time: "5 hours ago", type: "PDF" },
    { title: "Generated Assessment", time: "1 day ago", questions: "15" },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-learning-gradient flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Adaptive Learning Platform</h1>
            <p className="text-muted-foreground">Personalized study experience powered by AI</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="shadow-card-elevated border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-learning-gradient flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">24</p>
                    <p className="text-sm text-muted-foreground">Study Goals</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card-elevated border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-success-gradient flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">89%</p>
                    <p className="text-sm text-muted-foreground">Avg Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card-elevated border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-learning-gradient flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">126h</p>
                    <p className="text-sm text-muted-foreground">Study Time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Tracking */}
          <Card className="shadow-card-elevated border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {studyProgress.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{item.subject}</span>
                    <span className="text-sm text-muted-foreground">{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Document Upload */}
          <Card className="shadow-card-elevated border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Upload Study Materials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-smooth cursor-pointer">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-foreground font-medium mb-2">Drop files here or click to upload</p>
                <p className="text-sm text-muted-foreground">
                  Support for PDF, DOCX, TXT files up to 10MB
                </p>
                <Button className="mt-4 bg-learning-gradient border-0 text-white hover:opacity-90">
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Recommendations */}
          <Card className="shadow-card-elevated border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                AI Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-accent/50 border border-accent">
                <h4 className="font-medium text-foreground mb-2">Focus Area</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Based on your performance, consider reviewing Neural Networks concepts.
                </p>
                <Button size="sm" className="bg-learning-gradient border-0 text-white hover:opacity-90">
                  Start Review
                </Button>
              </div>
              
              <div className="p-4 rounded-lg bg-accent/50 border border-accent">
                <h4 className="font-medium text-foreground mb-2">Study Schedule</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Your optimal study time is 2-4 PM. Schedule next session?
                </p>
                <Button size="sm" variant="outline">
                  Schedule Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="shadow-card-elevated border-border/50">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                    {activity.score && (
                      <p className="text-xs text-primary font-medium">Score: {activity.score}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-3">
            <Button className="w-full bg-learning-gradient border-0 text-white hover:opacity-90">
              Generate Assessment
            </Button>
            <Button variant="outline" className="w-full">
              View Analytics
            </Button>
            <Button variant="outline" className="w-full">
              Study Recommendations
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;