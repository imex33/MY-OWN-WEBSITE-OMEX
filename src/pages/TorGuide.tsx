import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Eye, ArrowLeft, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TorGuide = () => {
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
            <Eye className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Tor Installation Guide</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Installing Tor Browser & Network</h2>
            <p className="text-muted-foreground">
              Learn how to install and configure Tor for anonymous browsing and privacy protection.
            </p>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>What is Tor?</AlertTitle>
            <AlertDescription>
              Tor (The Onion Router) is free software that enables anonymous communication by routing traffic 
              through a worldwide network of volunteer relays. It protects your privacy and defends against 
              network surveillance and traffic analysis.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Installing Tor Browser on Windows</CardTitle>
              <CardDescription>The easiest way to use Tor on Windows</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">Method 1: Official Tor Browser</Badge>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Visit the official Tor Project website</li>
                  <li className="ml-6">
                    <div className="bg-muted p-2 rounded font-mono text-xs mt-1">
                      https://www.torproject.org/download/
                    </div>
                  </li>
                  <li>Download the Windows installer (.exe file)</li>
                  <li>Run the installer and choose installation language</li>
                  <li>Select installation directory (default is fine)</li>
                  <li>Click "Install" and wait for completion</li>
                  <li>Launch Tor Browser from desktop or Start menu</li>
                  <li>Click "Connect" to connect to the Tor network</li>
                </ol>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Method 2: Using Package Manager (Chocolatey)</Badge>
                <p className="text-sm mb-2">If you have Chocolatey installed:</p>
                <div className="bg-muted p-3 rounded font-mono text-sm">
                  choco install tor-browser
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">First Run Configuration:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Choose "Connect" for standard connection</li>
                  <li>Use "Configure" if you're behind a firewall or proxy</li>
                  <li>Wait for connection to establish (may take 1-2 minutes)</li>
                  <li>Test by visiting check.torproject.org</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Installing Tor Browser on Linux (Ubuntu/Debian)</CardTitle>
              <CardDescription>Multiple installation methods for Linux systems</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">Method 1: Official Tor Browser Bundle</Badge>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Download from torproject.org</li>
                  <li className="ml-6">
                    <div className="bg-muted p-2 rounded font-mono text-xs mt-1">
                      wget https://www.torproject.org/dist/torbrowser/[version]/tor-browser-linux64-[version]_en-US.tar.xz
                    </div>
                  </li>
                  <li>Extract the archive:
                    <div className="bg-muted p-2 rounded font-mono text-xs mt-1">
                      tar -xf tor-browser-linux64-*.tar.xz
                    </div>
                  </li>
                  <li>Navigate to extracted folder:
                    <div className="bg-muted p-2 rounded font-mono text-xs mt-1">
                      cd tor-browser_en-US/
                    </div>
                  </li>
                  <li>Run the browser:
                    <div className="bg-muted p-2 rounded font-mono text-xs mt-1">
                      ./start-tor-browser.desktop
                    </div>
                  </li>
                </ol>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Method 2: Using APT Repository</Badge>
                <div className="space-y-2">
                  <p className="text-sm">Add Tor repository:</p>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo apt install apt-transport-https
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    echo "deb https://deb.torproject.org/torproject.org $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/tor.list
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    wget -qO- https://deb.torproject.org/torproject.org/A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tor-archive-keyring.gpg
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs mt-2">
                    sudo apt update<br/>
                    sudo apt install tor torbrowser-launcher
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs mt-2">
                    torbrowser-launcher
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Method 3: Flatpak (Universal)</Badge>
                <div className="space-y-2">
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    flatpak install flathub com.github.micahflee.torbrowser-launcher
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    flatpak run com.github.micahflee.torbrowser-launcher
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Installing Tor on Kali Linux</CardTitle>
              <CardDescription>Multiple options for Kali Linux users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">Method 1: Tor Browser (Recommended)</Badge>
                <p className="text-sm mb-2">Kali Linux includes Tor Browser in repositories:</p>
                <div className="space-y-2">
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo apt update
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo apt install -y tor torbrowser-launcher
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    torbrowser-launcher
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  This will download and install the official Tor Browser on first run
                </p>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Method 2: Tor Service (Command Line)</Badge>
                <p className="text-sm mb-2">Install Tor as a service for proxying:</p>
                <div className="space-y-2">
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo apt install tor
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo systemctl start tor
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo systemctl enable tor
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs mt-2">
                    sudo systemctl status tor
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Tor will now run on localhost:9050 (SOCKS5 proxy)
                </p>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Method 3: Using Proxychains with Tor</Badge>
                <p className="text-sm mb-2">Route any application through Tor:</p>
                <div className="space-y-2">
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo apt install tor proxychains4
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo systemctl start tor
                  </div>
                  <p className="text-sm mt-2">Edit proxychains config:</p>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo nano /etc/proxychains4.conf
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Ensure "socks5 127.0.0.1 9050" is at the bottom
                  </p>
                  <p className="text-sm mt-2">Usage example:</p>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    proxychains4 firefox<br/>
                    proxychains4 nmap -sT target.com
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Method 4: Anonsurf (Kali Specific)</Badge>
                <p className="text-sm mb-2">Route entire system through Tor:</p>
                <div className="space-y-2">
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo apt install kali-anonsurf
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo anonsurf start
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo anonsurf status
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo anonsurf stop
                  </div>
                </div>
                <p className="text-xs text-destructive mt-2">
                  Warning: This routes ALL traffic through Tor and may slow down your system
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Installing Tor on macOS</CardTitle>
              <CardDescription>Installation methods for Mac users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">Method 1: Tor Browser (Easiest)</Badge>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Download from torproject.org/download/</li>
                  <li>Open the .dmg file</li>
                  <li>Drag Tor Browser to Applications folder</li>
                  <li>Open Tor Browser from Applications</li>
                  <li>Click "Connect" to join Tor network</li>
                </ol>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Method 2: Using Homebrew</Badge>
                <div className="space-y-2">
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    brew install tor
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    brew services start tor
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Tor will run as a service on localhost:9050
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Verifying Tor Connection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Check if Tor is working:</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Visit: <code className="bg-muted px-2 py-1 rounded text-xs">check.torproject.org</code></li>
                  <li>Should display: "Congratulations. This browser is configured to use Tor."</li>
                  <li>Check your IP has changed from your real IP</li>
                  <li>Use: <code className="bg-muted px-2 py-1 rounded text-xs">curl --socks5 localhost:9050 https://check.torproject.org/api/ip</code></li>
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Testing Tor Service (Command Line):</h4>
                <div className="space-y-2">
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    curl --socks5 127.0.0.1:9050 https://check.torproject.org
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    curl --socks5 127.0.0.1:9050 https://ifconfig.me
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tor Security Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Always use HTTPS websites when possible</li>
                <li>Don't use Tor for torrenting (slow and bad for network)</li>
                <li>Don't install browser plugins in Tor Browser</li>
                <li>Keep Tor Browser updated to latest version</li>
                <li>Don't maximize Tor Browser window (fingerprinting)</li>
                <li>Avoid logging into personal accounts over Tor</li>
                <li>Don't open documents downloaded through Tor while online</li>
                <li>Use bridges if Tor is blocked in your country</li>
                <li>Consider using Tor with VPN for additional privacy</li>
                <li>Never use Tor for illegal activities</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common Tor Commands</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Service Management:</h4>
                <div className="space-y-2">
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo systemctl start tor
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo systemctl stop tor
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo systemctl restart tor
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo systemctl status tor
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Configuration:</h4>
                <div className="space-y-2">
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    sudo nano /etc/tor/torrc
                  </div>
                  <p className="text-xs text-muted-foreground">Edit Tor configuration file</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TorGuide;
