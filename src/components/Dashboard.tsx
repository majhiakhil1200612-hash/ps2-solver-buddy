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
    <div className="min-h-screen bg-hero-gradient relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-glass"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-learning-gradient rounded-full blur-3xl opacity-20 animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-success-gradient rounded-full blur-3xl opacity-20 animate-pulse-glow delay-1000"></div>
      
      <div className="relative z-10 p-6 animate-fade-in">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-learning-gradient flex items-center justify-center shadow-glow-primary animate-scale-in">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4 bg-learning-gradient bg-clip-text text-transparent animate-slide-up">
            Adaptive Learning Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
            Transform your education with AI-powered personalized learning experiences
          </p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up delay-300">
            <Card className="group shadow-card-elevated hover:shadow-card-hover border-border/30 bg-card/50 backdrop-blur-glass transition-all duration-500 hover:scale-105 hover:border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-learning-gradient flex items-center justify-center shadow-glow-primary group-hover:animate-pulse-glow">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground mb-1">24</p>
                    <p className="text-muted-foreground font-medium">Study Goals</p>
                    <div className="w-full h-1 bg-secondary rounded-full mt-2 overflow-hidden">
                      <div className="h-full w-4/5 bg-learning-gradient rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group shadow-card-elevated hover:shadow-card-hover border-border/30 bg-card/50 backdrop-blur-glass transition-all duration-500 hover:scale-105 hover:border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-success-gradient flex items-center justify-center shadow-glow-success group-hover:animate-pulse-glow">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground mb-1">89%</p>
                    <p className="text-muted-foreground font-medium">Avg Score</p>
                    <div className="w-full h-1 bg-secondary rounded-full mt-2 overflow-hidden">
                      <div className="h-full w-5/6 bg-success-gradient rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group shadow-card-elevated hover:shadow-card-hover border-border/30 bg-card/50 backdrop-blur-glass transition-all duration-500 hover:scale-105 hover:border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent-gradient flex items-center justify-center shadow-glow-primary group-hover:animate-pulse-glow">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground mb-1">126h</p>
                    <p className="text-muted-foreground font-medium">Study Time</p>
                    <div className="w-full h-1 bg-secondary rounded-full mt-2 overflow-hidden">
                      <div className="h-full w-3/4 bg-accent-gradient rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Tracking */}
          <Card className="shadow-card-elevated hover:shadow-card-hover border-border/30 bg-card/50 backdrop-blur-glass transition-all duration-500 animate-slide-up delay-500">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="w-10 h-10 rounded-xl bg-learning-gradient flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {studyProgress.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-foreground text-lg">{item.subject}</span>
                    <span className="text-lg font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {item.progress}%
                    </span>
                  </div>
                  <div className="relative">
                    <Progress value={item.progress} className="h-3 bg-secondary/50" />
                    <div className="absolute inset-0 h-3 bg-gradient-to-r from-learning-gradient opacity-80 rounded-full" 
                         style={{ width: `${item.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Document Upload */}
          <Card className="shadow-card-elevated hover:shadow-card-hover border-border/30 bg-card/50 backdrop-blur-glass transition-all duration-500 animate-slide-up delay-700">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center">
                  <Upload className="w-5 h-5 text-white" />
                </div>
                Upload Study Materials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="group border-2 border-dashed border-border/50 rounded-2xl p-12 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-500 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-learning-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-learning-gradient/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-bounce">
                    <Upload className="w-10 h-10 text-primary group-hover:animate-pulse" />
                  </div>
                  <p className="text-foreground font-semibold text-lg mb-3">Drop files here or click to upload</p>
                  <p className="text-muted-foreground mb-6">
                    Support for PDF, DOCX, TXT files up to 10MB
                  </p>
                  <Button className="bg-learning-gradient border-0 text-white hover:opacity-90 hover:scale-105 transition-bounce px-8 py-3 text-lg font-semibold rounded-xl shadow-glow-primary">
                    Choose Files
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-8 animate-slide-up delay-700">
          {/* AI Recommendations */}
          <Card className="shadow-card-elevated hover:shadow-card-hover border-border/30 bg-card/50 backdrop-blur-glass transition-all duration-500">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center animate-pulse-glow">
                  <Star className="w-5 h-5 text-white" />
                </div>
                AI Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="group p-6 rounded-2xl bg-learning-gradient/10 border border-primary/20 hover:bg-learning-gradient/20 transition-all duration-500 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-learning-gradient/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <h4 className="font-semibold text-foreground mb-3 text-lg">🎯 Focus Area</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Based on your performance, consider reviewing Neural Networks concepts.
                  </p>
                  <Button size="sm" className="bg-learning-gradient border-0 text-white hover:opacity-90 hover:scale-105 transition-bounce rounded-xl px-6">
                    Start Review
                  </Button>
                </div>
              </div>
              
              <div className="group p-6 rounded-2xl bg-success-gradient/10 border border-success/20 hover:bg-success-gradient/20 transition-all duration-500 hover:scale-105 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-success-gradient/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <h4 className="font-semibold text-foreground mb-3 text-lg">📅 Study Schedule</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Your optimal study time is 2-4 PM. Schedule next session?
                  </p>
                  <Button size="sm" variant="outline" className="hover:scale-105 transition-bounce rounded-xl px-6 border-success hover:bg-success/10">
                    Schedule Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="shadow-card-elevated hover:shadow-card-hover border-border/30 bg-card/50 backdrop-blur-glass transition-all duration-500">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {recentActivity.map((activity, index) => (
                <div key={index} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-accent/30 transition-all duration-300 border-b border-border/20 last:border-0">
                  <div className="w-3 h-3 rounded-full bg-learning-gradient mt-2 group-hover:animate-pulse-glow"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-1">{activity.title}</p>
                    <p className="text-sm text-muted-foreground mb-2">{activity.time}</p>
                    {activity.score && (
                      <p className="text-sm text-primary font-semibold bg-primary/10 px-2 py-1 rounded-lg inline-block">
                        Score: {activity.score}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-4">
            <Button className="w-full bg-learning-gradient border-0 text-white hover:opacity-90 hover:scale-105 transition-bounce py-4 text-lg font-semibold rounded-2xl shadow-glow-primary">
              🚀 Generate Assessment
            </Button>
            <Button variant="outline" className="w-full hover:scale-105 transition-bounce py-4 text-lg rounded-2xl border-primary/20 hover:bg-primary/10">
              📊 View Analytics
            </Button>
            <Button variant="outline" className="w-full hover:scale-105 transition-bounce py-4 text-lg rounded-2xl border-success/20 hover:bg-success/10">
              💡 Study Recommendations
            </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;