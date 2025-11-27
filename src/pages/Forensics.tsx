import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Search, ArrowLeft, Info, HardDrive, FileSearch, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Forensics = () => {
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
            <Search className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Digital Forensics</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Digital Forensics & Incident Response</h2>
            <p className="text-muted-foreground">
              Learn the fundamentals of digital forensics, evidence collection, and incident response techniques.
            </p>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>What is Digital Forensics?</AlertTitle>
            <AlertDescription>
              Digital forensics is the process of uncovering and interpreting electronic data for use in investigations. 
              It involves collecting, preserving, analyzing, and presenting digital evidence in a legally acceptable manner.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <HardDrive className="h-6 w-6 text-primary" />
                <CardTitle>Forensics Fundamentals</CardTitle>
              </div>
              <CardDescription>Core principles of digital forensics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">Key Principles</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Chain of Custody:</strong> Maintain detailed records of evidence handling</li>
                  <li><strong>Data Preservation:</strong> Never work on original evidence, always create forensic copies</li>
                  <li><strong>Documentation:</strong> Record every step of the investigation process</li>
                  <li><strong>Repeatability:</strong> Ensure findings can be reproduced by others</li>
                  <li><strong>Legal Compliance:</strong> Follow legal procedures and standards</li>
                </ul>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Evidence Acquisition Process</Badge>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Identify potential sources of evidence</li>
                  <li>Secure and isolate the scene/device</li>
                  <li>Document the current state (photos, notes)</li>
                  <li>Create forensic images using write-blockers</li>
                  <li>Calculate and verify hash values (MD5, SHA-256)</li>
                  <li>Store original evidence securely</li>
                  <li>Perform analysis on forensic copies only</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileSearch className="h-6 w-6 text-primary" />
                <CardTitle>File System Forensics</CardTitle>
              </div>
              <CardDescription>Analyzing file systems and storage media</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">Key Concepts</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Deleted File Recovery:</strong> Files may remain in unallocated space</li>
                  <li><strong>File Carving:</strong> Recovering files without file system metadata</li>
                  <li><strong>Slack Space:</strong> Unused space at end of allocated clusters</li>
                  <li><strong>Timestamps:</strong> MAC times (Modified, Accessed, Changed)</li>
                  <li><strong>Hidden Data:</strong> Alternate data streams, hidden partitions</li>
                </ul>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Common Forensics Tools</Badge>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Imaging Tools:</h4>
                    <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                      <div># Create disk image with dd</div>
                      <div>sudo dd if=/dev/sdX of=evidence.img bs=4M status=progress</div>
                      <div className="mt-2"># Verify with hash</div>
                      <div>sha256sum evidence.img {'>'}evidence.sha256</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Analysis Tools:</h4>
                    <ul className="list-disc list-inside text-xs space-y-1 ml-2">
                      <li><strong>Autopsy:</strong> Open-source digital forensics platform</li>
                      <li><strong>The Sleuth Kit:</strong> Command-line forensics tools</li>
                      <li><strong>FTK Imager:</strong> Disk imaging and analysis</li>
                      <li><strong>Volatility:</strong> Memory forensics framework</li>
                      <li><strong>Wireshark:</strong> Network traffic analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Database className="h-6 w-6 text-primary" />
                <CardTitle>Memory & Network Forensics</CardTitle>
              </div>
              <CardDescription>Analyzing volatile data and network traffic</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">Memory Forensics</Badge>
                <p className="text-sm mb-2">Capturing and analyzing RAM:</p>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Capture memory dump (Linux)</div>
                  <div>sudo dd if=/dev/mem of=memory.dump</div>
                  <div className="mt-2"># Or use LiME for better results</div>
                  <div>sudo insmod lime.ko "path=/tmp/memory.dump format=lime"</div>
                  <div className="mt-2"># Analyze with Volatility</div>
                  <div>volatility -f memory.dump imageinfo</div>
                  <div>volatility -f memory.dump --profile=LinuxProfile pslist</div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Memory contains running processes, network connections, passwords, encryption keys
                </p>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Network Forensics</Badge>
                <p className="text-sm mb-2">Capturing and analyzing network traffic:</p>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Capture packets with tcpdump</div>
                  <div>sudo tcpdump -i eth0 -w capture.pcap</div>
                  <div className="mt-2"># Analyze with tshark</div>
                  <div>tshark -r capture.pcap -Y "http.request"</div>
                  <div className="mt-2"># Extract files from pcap</div>
                  <div>tcpflow -r capture.pcap</div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">What to Look For</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Running malicious processes and services</li>
                  <li>Unusual network connections and traffic patterns</li>
                  <li>Injected code and rootkits in memory</li>
                  <li>Suspicious registry entries (Windows)</li>
                  <li>Hidden or encrypted files</li>
                  <li>Timeline of user activities and system events</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Incident Response</CardTitle>
              <CardDescription>Responding to security incidents effectively</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">NIST Incident Response Lifecycle</Badge>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li><strong>Preparation:</strong> Develop IR plan, train team, deploy monitoring</li>
                  <li><strong>Detection & Analysis:</strong> Identify and investigate incidents</li>
                  <li><strong>Containment:</strong> Isolate affected systems, prevent spread</li>
                  <li><strong>Eradication:</strong> Remove threat from environment</li>
                  <li><strong>Recovery:</strong> Restore systems to normal operation</li>
                  <li><strong>Post-Incident:</strong> Document lessons learned, improve defenses</li>
                </ol>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">First Responder Checklist</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>✓ Document current time and initial observations</li>
                  <li>✓ Take photos/screenshots of screens</li>
                  <li>✓ Identify and preserve volatile data (RAM, network connections)</li>
                  <li>✓ Do NOT shut down systems immediately (loses volatile data)</li>
                  <li>✓ Isolate affected systems from network if actively compromised</li>
                  <li>✓ Begin chain of custody documentation</li>
                  <li>✓ Contact appropriate authorities/management</li>
                  <li>✓ Preserve logs from all relevant systems</li>
                </ul>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Order of Volatility</Badge>
                <p className="text-sm mb-2">Collect evidence from most to least volatile:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>CPU registers and cache</li>
                  <li>Routing tables, ARP cache, process table</li>
                  <li>Memory (RAM)</li>
                  <li>Temporary file systems</li>
                  <li>Disk storage</li>
                  <li>Remote logging and monitoring data</li>
                  <li>Physical configuration and topology</li>
                  <li>Backup media and archives</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Always maintain detailed notes and documentation</li>
                <li>Never analyze original evidence - work on copies only</li>
                <li>Use write-blockers when creating forensic images</li>
                <li>Calculate and verify hash values at every step</li>
                <li>Follow your organization's IR plan and legal requirements</li>
                <li>Preserve evidence in legally acceptable manner</li>
                <li>Keep your forensics tools and skills up to date</li>
                <li>Practice on test systems before real investigations</li>
                <li>Consult legal counsel when necessary</li>
                <li>Maintain confidentiality and professional ethics</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Forensics;
