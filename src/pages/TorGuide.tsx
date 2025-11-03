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
              <CardTitle>Tails OS - The Ultimate Anonymity Solution</CardTitle>
              <CardDescription>Complete guide to using Tails for maximum privacy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>What is Tails?</AlertTitle>
                <AlertDescription>
                  Tails (The Amnesic Incognito Live System) is a portable operating system that protects against 
                  surveillance and censorship. It runs from USB/DVD, routes all connections through Tor, and 
                  leaves no trace on the computer you're using.
                </AlertDescription>
              </Alert>

              <div>
                <Badge className="mb-3">Step 1: Download Tails</Badge>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Visit the official Tails website:
                    <div className="bg-muted p-2 rounded font-mono text-xs mt-1">
                      https://tails.net/install/
                    </div>
                  </li>
                  <li>Download the latest Tails ISO image (usually 1.2-1.3 GB)</li>
                  <li>Download the verification tools to ensure authentic download</li>
                  <li>Verify the download using:
                    <div className="bg-muted p-2 rounded font-mono text-xs mt-1">
                      # On Linux/Mac<br/>
                      gpg --verify tails-amd64-*.img.sig tails-amd64-*.img
                    </div>
                  </li>
                </ol>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Step 2: Create Tails USB (Windows)</Badge>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Download balenaEtcher from balena.io/etcher</li>
                  <li>Insert USB drive (minimum 8GB, will be erased)</li>
                  <li>Open Etcher and select downloaded Tails .img file</li>
                  <li>Select your USB drive</li>
                  <li>Click "Flash!" and wait for completion</li>
                  <li>Safely eject USB when finished</li>
                </ol>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Step 2: Create Tails USB (Linux)</Badge>
                <div className="space-y-2">
                  <p className="text-sm">Using dd command (be careful with device names!):</p>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    # Find your USB device<br/>
                    lsblk
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    # Write Tails to USB (replace sdX with your device)<br/>
                    sudo dd if=tails-amd64-*.img of=/dev/sdX bs=4M status=progress && sync
                  </div>
                  <p className="text-xs text-destructive mt-2">
                    Warning: Using wrong device name will destroy data! Double-check with lsblk
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Step 2: Create Tails USB (macOS)</Badge>
                <div className="space-y-2">
                  <p className="text-sm">Use Etcher or command line:</p>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    # Find your USB device<br/>
                    diskutil list
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    # Unmount the disk (replace diskN)<br/>
                    diskutil unmountDisk /dev/diskN
                  </div>
                  <div className="bg-muted p-2 rounded font-mono text-xs">
                    # Write Tails to USB<br/>
                    sudo dd if=tails-amd64-*.img of=/dev/rdiskN bs=4m && sync
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Step 3: Boot into Tails</Badge>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Insert Tails USB into computer you want to use</li>
                  <li>Restart computer and access boot menu:
                    <ul className="ml-6 mt-1 space-y-1 text-xs">
                      <li>• Windows: Usually F12, F11, F9, or ESC during startup</li>
                      <li>• Mac: Hold Option/Alt key during startup</li>
                      <li>• Linux: Usually F12, F2, or DEL</li>
                    </ul>
                  </li>
                  <li>Select USB drive from boot menu</li>
                  <li>Wait for Tails welcome screen to appear</li>
                  <li>Click "Start Tails" (or configure additional settings)</li>
                </ol>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Step 4: First Time Setup</Badge>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Language and keyboard layout selection</li>
                  <li>Network connection:
                    <div className="ml-6 text-xs space-y-1 mt-1">
                      <p>• Connect to WiFi or Ethernet</p>
                      <p>• Tails will automatically route through Tor</p>
                      <p>• Wait for "Connected to Tor" notification</p>
                    </div>
                  </li>
                  <li>Optional: Enable persistent storage (for saving files between sessions)</li>
                  <li>Set administration password if needed for session</li>
                </ol>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Key Features of Tails</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Amnesia:</strong> Leaves no trace on computer after shutdown</li>
                  <li><strong>Tor Integration:</strong> All internet connections forced through Tor</li>
                  <li><strong>Encryption Tools:</strong> Built-in PGP, LUKS encryption</li>
                  <li><strong>Anonymous Communication:</strong> Tor Browser, Thunderbird email</li>
                  <li><strong>Persistent Storage:</strong> Optional encrypted storage for files</li>
                  <li><strong>Unsafe Browser:</strong> For captive portals (no Tor routing)</li>
                  <li><strong>MAC Address Spoofing:</strong> Changes hardware address automatically</li>
                </ul>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Using Persistent Storage (Optional)</Badge>
                <p className="text-sm mb-2">Create encrypted storage to save files between sessions:</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Boot into Tails</li>
                  <li>Applications → Tails → Configure persistent volume</li>
                  <li>Choose strong passphrase (20+ characters recommended)</li>
                  <li>Select what to persist:
                    <ul className="ml-6 mt-1 space-y-1 text-xs">
                      <li>• Personal files</li>
                      <li>• Browser bookmarks</li>
                      <li>• Email client</li>
                      <li>• Network connections</li>
                      <li>• Additional software</li>
                    </ul>
                  </li>
                  <li>Restart Tails and unlock persistence at boot</li>
                </ol>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Tails Security Best Practices</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Never</strong> log into personal accounts that can identify you</li>
                  <li>Don't use Tails on compromised/monitored computers</li>
                  <li>Always verify Tails downloads with GPG signatures</li>
                  <li>Keep Tails updated (updates released every 6 weeks)</li>
                  <li>Use strong passphrase for persistent storage (if enabled)</li>
                  <li>Don't install additional software unless absolutely necessary</li>
                  <li>Shut down properly (don't just unplug) to ensure RAM is cleared</li>
                  <li>Consider using public WiFi for additional anonymity layer</li>
                  <li>Disable Bluetooth and close laptop lid when not in use</li>
                  <li>Be aware of physical security and shoulder surfing</li>
                </ul>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Common Tails Applications</Badge>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <h5 className="font-semibold">Internet:</h5>
                    <ul className="list-disc list-inside text-xs space-y-1 ml-2">
                      <li>Tor Browser - Anonymous web browsing</li>
                      <li>Thunderbird - Email client with PGP</li>
                      <li>Pidgin - Encrypted instant messaging</li>
                      <li>OnionShare - Anonymous file sharing</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold">Security Tools:</h5>
                    <ul className="list-disc list-inside text-xs space-y-1 ml-2">
                      <li>KeePassXC - Password manager</li>
                      <li>GnuPG - Encryption and signing</li>
                      <li>MAT2 - Metadata removal tool</li>
                      <li>VeraCrypt - Disk encryption</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Updating Tails</Badge>
                <p className="text-sm mb-2">Two methods to update:</p>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm">Automatic Update:</h5>
                    <ul className="list-disc list-inside text-xs space-y-1 ml-2">
                      <li>Boot Tails and connect to internet</li>
                      <li>Wait for update notification (if available)</li>
                      <li>Click "Upgrade" and follow instructions</li>
                      <li>Restart after update completes</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">Manual Update:</h5>
                    <ul className="list-disc list-inside text-xs space-y-1 ml-2">
                      <li>Download latest Tails image</li>
                      <li>Create new USB using same method</li>
                      <li>Clone persistent storage if needed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Alert className="mt-6">
                <Info className="h-4 w-4" />
                <AlertTitle>Important Limitations</AlertTitle>
                <AlertDescription className="text-xs space-y-1">
                  <p>• Tails cannot protect against hardware keyloggers or compromised BIOS</p>
                  <p>• Connection timing analysis can still potentially track users</p>
                  <p>• Not designed for high-risk scenarios like evading nation-state surveillance</p>
                  <p>• Use responsibly and understand that no tool provides 100% anonymity</p>
                </AlertDescription>
              </Alert>
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
