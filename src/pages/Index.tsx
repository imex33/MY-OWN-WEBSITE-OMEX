import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Bug, Network, Database, Code, Terminal, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const categories = [
    {
      icon: Shield,
      title: "Network Security",
      description: "Learn about firewalls, VPNs, and network protocols",
      path: "/network-security",
      color: "text-blue-500"
    },
    {
      icon: Lock,
      title: "Cryptography",
      description: "Master encryption, hashing, and secure communications",
      path: "/cryptography",
      color: "text-purple-500"
    },
    {
      icon: Bug,
      title: "Penetration Testing",
      description: "Ethical hacking and vulnerability assessment techniques",
      path: "/penetration-testing",
      color: "text-red-500"
    },
    {
      icon: Network,
      title: "Web Security",
      description: "OWASP Top 10, XSS, SQL Injection, and more",
      path: "/web-security",
      color: "text-green-500"
    },
    {
      icon: Database,
      title: "System Security",
      description: "OS hardening, access control, and system monitoring",
      path: "/system-security",
      color: "text-orange-500"
    },
    {
      icon: Code,
      title: "Secure Coding",
      description: "Best practices for writing secure applications",
      path: "/secure-coding",
      color: "text-cyan-500"
    },
    {
      icon: Terminal,
      title: "Tools & Commands",
      description: "Essential security tools and command-line utilities",
      path: "/tools",
      color: "text-yellow-500"
    },
    {
      icon: Eye,
      title: "Digital Forensics",
      description: "Investigation techniques and evidence handling",
      path: "/forensics",
      color: "text-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold">Omex_ CyberSec Academy</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/tools" className="text-sm font-medium hover:text-primary transition-colors">
                Tools
              </Link>
              <Link to="/tor-guide" className="text-sm font-medium hover:text-primary transition-colors">
                Tor Guide
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Master Cybersecurity
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Learn ethical hacking, penetration testing, and security fundamentals from Omex_. 
          Real knowledge, real skills, real-world applications.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/network-security">Start Learning</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/tools">Browse Tools</Link>
          </Button>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Learning Paths</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link to={category.path} key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Icon className={`h-12 w-12 mb-4 ${category.color}`} />
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2025 Omex_ CyberSec Academy. Educational purposes only.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
