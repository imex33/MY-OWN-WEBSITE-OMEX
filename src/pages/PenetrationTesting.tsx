import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Bug, ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PenetrationTesting = () => {
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
            <Bug className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Penetration Testing</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Legal Notice</AlertTitle>
            <AlertDescription>
              Only perform penetration testing on systems you own or have explicit written permission to test. 
              Unauthorized access is illegal and can result in criminal charges.
            </AlertDescription>
          </Alert>

          <div>
            <h2 className="text-3xl font-bold mb-4">Ethical Hacking & Penetration Testing</h2>
            <p className="text-muted-foreground">
              Learn the methodologies and techniques used by professional penetration testers.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Penetration Testing Phases</CardTitle>
              <CardDescription>The five stages of a professional pentest</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-2">1. Reconnaissance</Badge>
                <p className="text-sm">Gather information about the target (passive and active)</p>
                <ul className="list-disc list-inside text-sm mt-2 ml-4">
                  <li>OSINT (Open Source Intelligence)</li>
                  <li>DNS enumeration, WHOIS lookups</li>
                  <li>Social media reconnaissance</li>
                  <li>Employee information gathering</li>
                </ul>
              </div>
              <div>
                <Badge className="mb-2">2. Scanning & Enumeration</Badge>
                <p className="text-sm">Identify live hosts, open ports, and running services</p>
                <ul className="list-disc list-inside text-sm mt-2 ml-4">
                  <li>Port scanning (Nmap, Masscan)</li>
                  <li>Service version detection</li>
                  <li>Vulnerability scanning</li>
                  <li>Network mapping</li>
                </ul>
              </div>
              <div>
                <Badge className="mb-2">3. Gaining Access</Badge>
                <p className="text-sm">Exploit vulnerabilities to gain initial access</p>
                <ul className="list-disc list-inside text-sm mt-2 ml-4">
                  <li>Exploit known vulnerabilities</li>
                  <li>Password attacks (brute force, dictionary)</li>
                  <li>Social engineering</li>
                  <li>Phishing campaigns</li>
                </ul>
              </div>
              <div>
                <Badge className="mb-2">4. Maintaining Access</Badge>
                <p className="text-sm">Establish persistence and backdoors</p>
                <ul className="list-disc list-inside text-sm mt-2 ml-4">
                  <li>Install backdoors and rootkits</li>
                  <li>Create privileged accounts</li>
                  <li>Modify system configurations</li>
                  <li>Schedule tasks for persistence</li>
                </ul>
              </div>
              <div>
                <Badge className="mb-2">5. Covering Tracks</Badge>
                <p className="text-sm">Remove evidence and clean up</p>
                <ul className="list-disc list-inside text-sm mt-2 ml-4">
                  <li>Clear logs and history</li>
                  <li>Remove uploaded tools</li>
                  <li>Restore modified files</li>
                  <li>Document findings for report</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common Attack Vectors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Network-Based Attacks:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Man-in-the-Middle (MITM) attacks</li>
                  <li>ARP poisoning and spoofing</li>
                  <li>DNS hijacking</li>
                  <li>Session hijacking</li>
                  <li>Packet sniffing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 mt-4">Application-Based Attacks:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>SQL injection</li>
                  <li>Cross-Site Scripting (XSS)</li>
                  <li>Remote Code Execution (RCE)</li>
                  <li>File inclusion vulnerabilities</li>
                  <li>Authentication bypass</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Essential Penetration Testing Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Information Gathering:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Nmap:</strong> Network scanner and port discovery</li>
                  <li><strong>Recon-ng:</strong> Web reconnaissance framework</li>
                  <li><strong>theHarvester:</strong> Email and subdomain discovery</li>
                  <li><strong>Maltego:</strong> Visual link analysis</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 mt-4">Exploitation:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Metasploit:</strong> Exploitation framework</li>
                  <li><strong>Burp Suite:</strong> Web application testing</li>
                  <li><strong>SQLmap:</strong> Automated SQL injection</li>
                  <li><strong>Hydra:</strong> Password cracking tool</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 mt-4">Post-Exploitation:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Mimikatz:</strong> Credential extraction</li>
                  <li><strong>PowerSploit:</strong> PowerShell exploitation</li>
                  <li><strong>Empire:</strong> Post-exploitation framework</li>
                  <li><strong>BloodHound:</strong> Active Directory mapping</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Report Writing & Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">A professional pentest report should include:</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Executive Summary:</strong> High-level overview for management</li>
                <li><strong>Scope & Methodology:</strong> What was tested and how</li>
                <li><strong>Findings:</strong> Vulnerabilities discovered with severity ratings</li>
                <li><strong>Evidence:</strong> Screenshots, logs, proof of concept</li>
                <li><strong>Recommendations:</strong> Specific remediation steps</li>
                <li><strong>Technical Details:</strong> In-depth technical information</li>
                <li><strong>Risk Assessment:</strong> CVSS scores and impact analysis</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PenetrationTesting;
