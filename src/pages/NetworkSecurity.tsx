import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NetworkSecurity = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Link>
            </Button>
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Network Security</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Network Security Fundamentals</h2>
            <p className="text-muted-foreground">
              Learn how to protect networks from unauthorized access, misuse, and threats.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>OSI Model & Network Layers</CardTitle>
              <CardDescription>Understanding the seven layers of network communication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-2">Layer 7 - Application</Badge>
                <p className="text-sm">HTTP, HTTPS, FTP, DNS, SMTP - User-facing protocols</p>
              </div>
              <div>
                <Badge className="mb-2">Layer 4 - Transport</Badge>
                <p className="text-sm">TCP/UDP - End-to-end communication and reliability</p>
              </div>
              <div>
                <Badge className="mb-2">Layer 3 - Network</Badge>
                <p className="text-sm">IP, ICMP, Routing - Logical addressing and path determination</p>
              </div>
              <div>
                <Badge className="mb-2">Layer 2 - Data Link</Badge>
                <p className="text-sm">MAC addresses, Switches - Physical addressing</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Firewalls & Access Control</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Types of Firewalls:</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Packet Filtering:</strong> Examines packets and blocks/allows based on rules</li>
                  <li><strong>Stateful Inspection:</strong> Tracks connection states and contexts</li>
                  <li><strong>Application Layer:</strong> Deep packet inspection at application level</li>
                  <li><strong>Next-Gen Firewalls (NGFW):</strong> IPS, deep packet inspection, malware detection</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>VPN & Tunneling Protocols</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Common VPN Protocols:</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>OpenVPN:</strong> Open-source, highly secure, uses SSL/TLS</li>
                  <li><strong>WireGuard:</strong> Modern, fast, simple cryptography</li>
                  <li><strong>IPSec:</strong> Suite of protocols for secure IP communications</li>
                  <li><strong>L2TP/IPSec:</strong> Layer 2 Tunneling Protocol with IPSec encryption</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Network Scanning & Reconnaissance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Port Scanning Techniques:</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>TCP Connect Scan:</strong> Full three-way handshake (most reliable but detectable)</li>
                  <li><strong>SYN Scan:</strong> Half-open scan (stealthy, doesn't complete handshake)</li>
                  <li><strong>UDP Scan:</strong> Scans UDP ports (slower, less reliable)</li>
                  <li><strong>Service Detection:</strong> Identifies running services and versions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Network Security Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Implement defense in depth with multiple security layers</li>
                <li>Use network segmentation to isolate critical systems</li>
                <li>Enable logging and monitoring for all network devices</li>
                <li>Keep firmware and software updated on network equipment</li>
                <li>Use strong encryption for all network communications</li>
                <li>Implement intrusion detection/prevention systems (IDS/IPS)</li>
                <li>Regular security audits and penetration testing</li>
                <li>Disable unnecessary services and ports</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NetworkSecurity;
