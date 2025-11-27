import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Server, ArrowLeft, Info, Shield, Lock, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SystemSecurity = () => {
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
            <Server className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">System Security</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">System & Infrastructure Security</h2>
            <p className="text-muted-foreground">
              Learn how to secure operating systems, servers, and infrastructure components.
            </p>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>What is System Security?</AlertTitle>
            <AlertDescription>
              System security focuses on protecting computer systems, servers, and infrastructure from unauthorized 
              access, misuse, and threats. It includes hardening operating systems, implementing access controls, 
              and monitoring for suspicious activities.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle>Linux System Hardening</CardTitle>
              </div>
              <CardDescription>Securing Linux servers and workstations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">User & Access Management</Badge>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Create user with limited privileges</div>
                  <div>sudo useradd -m -s /bin/bash username</div>
                  <div>sudo passwd username</div>
                  <div className="mt-2"># Add user to sudo group (if needed)</div>
                  <div>sudo usermod -aG sudo username</div>
                  <div className="mt-2"># Lock/disable user account</div>
                  <div>sudo passwd -l username</div>
                  <div className="mt-2"># Remove user</div>
                  <div>sudo userdel -r username</div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">SSH Security</Badge>
                <p className="text-sm mb-2">Harden SSH configuration (/etc/ssh/sshd_config):</p>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Disable root login</div>
                  <div>PermitRootLogin no</div>
                  <div className="mt-2"># Disable password authentication (use keys)</div>
                  <div>PasswordAuthentication no</div>
                  <div>PubkeyAuthentication yes</div>
                  <div className="mt-2"># Change default port (optional)</div>
                  <div>Port 2222</div>
                  <div className="mt-2"># Limit user access</div>
                  <div>AllowUsers user1 user2</div>
                  <div className="mt-2"># Enable two-factor authentication</div>
                  <div>AuthenticationMethods publickey,keyboard-interactive</div>
                </div>
                <div className="bg-muted p-3 rounded font-mono text-xs mt-2">
                  <div># Restart SSH service</div>
                  <div>sudo systemctl restart sshd</div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Firewall Configuration (UFW)</Badge>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Enable UFW</div>
                  <div>sudo ufw enable</div>
                  <div className="mt-2"># Set default policies</div>
                  <div>sudo ufw default deny incoming</div>
                  <div>sudo ufw default allow outgoing</div>
                  <div className="mt-2"># Allow specific services</div>
                  <div>sudo ufw allow ssh</div>
                  <div>sudo ufw allow 80/tcp</div>
                  <div>sudo ufw allow 443/tcp</div>
                  <div className="mt-2"># Check status</div>
                  <div>sudo ufw status verbose</div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">System Updates & Patches</Badge>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Update package lists</div>
                  <div>sudo apt update</div>
                  <div className="mt-2"># Upgrade packages</div>
                  <div>sudo apt upgrade -y</div>
                  <div className="mt-2"># Full system upgrade</div>
                  <div>sudo apt full-upgrade -y</div>
                  <div className="mt-2"># Enable automatic security updates</div>
                  <div>sudo apt install unattended-upgrades</div>
                  <div>sudo dpkg-reconfigure -plow unattended-upgrades</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lock className="h-6 w-6 text-primary" />
                <CardTitle>File System Security</CardTitle>
              </div>
              <CardDescription>Protecting files and directories</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">File Permissions</Badge>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># View permissions</div>
                  <div>ls -la</div>
                  <div className="mt-2"># Change permissions (symbolic)</div>
                  <div>chmod u+rwx,g+rx,o-rwx file.txt</div>
                  <div className="mt-2"># Change permissions (numeric)</div>
                  <div>chmod 750 file.txt  # rwxr-x---</div>
                  <div className="mt-2"># Change ownership</div>
                  <div>sudo chown user:group file.txt</div>
                  <div className="mt-2"># Recursive permissions</div>
                  <div>chmod -R 755 /var/www/html</div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Permission values: r=4, w=2, x=1 (e.g., 755 = rwxr-xr-x)
                </p>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Special Permissions</Badge>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">SUID (Set User ID):</h4>
                    <div className="bg-muted p-2 rounded font-mono text-xs">
                      chmod u+s /path/to/file  # Runs with owner's privileges
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">SGID (Set Group ID):</h4>
                    <div className="bg-muted p-2 rounded font-mono text-xs">
                      chmod g+s /path/to/directory  # Files inherit group
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Sticky Bit:</h4>
                    <div className="bg-muted p-2 rounded font-mono text-xs">
                      chmod +t /tmp  # Only owner can delete files
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Disk Encryption</Badge>
                <p className="text-sm mb-2">Encrypt partitions with LUKS:</p>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Format partition with LUKS</div>
                  <div>sudo cryptsetup luksFormat /dev/sdX1</div>
                  <div className="mt-2"># Open encrypted partition</div>
                  <div>sudo cryptsetup luksOpen /dev/sdX1 encrypted_volume</div>
                  <div className="mt-2"># Format and mount</div>
                  <div>sudo mkfs.ext4 /dev/mapper/encrypted_volume</div>
                  <div>sudo mount /dev/mapper/encrypted_volume /mnt</div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Find Security Issues</Badge>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Find SUID/SGID files (potential privilege escalation)</div>
                  <div>find / -perm -4000 -type f 2{'>'}/dev/null</div>
                  <div>find / -perm -2000 -type f 2{'>'}/dev/null</div>
                  <div className="mt-2"># Find world-writable files</div>
                  <div>find / -perm -002 -type f 2{'>'}/dev/null</div>
                  <div className="mt-2"># Find files without owner</div>
                  <div>find / -nouser -o -nogroup 2{'>'}/dev/null</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Terminal className="h-6 w-6 text-primary" />
                <CardTitle>Monitoring & Logging</CardTitle>
              </div>
              <CardDescription>System monitoring and audit logging</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">System Logs</Badge>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># View system logs</div>
                  <div>sudo journalctl -xe</div>
                  <div className="mt-2"># View authentication logs</div>
                  <div>sudo tail -f /var/log/auth.log</div>
                  <div className="mt-2"># View failed login attempts</div>
                  <div>sudo grep "Failed password" /var/log/auth.log</div>
                  <div className="mt-2"># View SSH connections</div>
                  <div>sudo grep "Accepted" /var/log/auth.log</div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Fail2Ban - Intrusion Prevention</Badge>
                <p className="text-sm mb-2">Automatically ban IPs with repeated failed login attempts:</p>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Install Fail2Ban</div>
                  <div>sudo apt install fail2ban</div>
                  <div className="mt-2"># Enable and start</div>
                  <div>sudo systemctl enable fail2ban</div>
                  <div>sudo systemctl start fail2ban</div>
                  <div className="mt-2"># Check status</div>
                  <div>sudo fail2ban-client status</div>
                  <div>sudo fail2ban-client status sshd</div>
                  <div className="mt-2"># Unban IP</div>
                  <div>sudo fail2ban-client set sshd unbanip 192.168.1.100</div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Process Monitoring</Badge>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># View running processes</div>
                  <div>ps aux | grep suspicious_process</div>
                  <div className="mt-2"># View real-time processes</div>
                  <div>htop</div>
                  <div className="mt-2"># View network connections</div>
                  <div>sudo netstat -tulpn</div>
                  <div>sudo ss -tulpn</div>
                  <div className="mt-2"># Check listening ports</div>
                  <div>sudo lsof -i -P -n</div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Rootkit Detection</Badge>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Install and run rkhunter</div>
                  <div>sudo apt install rkhunter</div>
                  <div>sudo rkhunter --update</div>
                  <div>sudo rkhunter --check</div>
                  <div className="mt-2"># Install and run chkrootkit</div>
                  <div>sudo apt install chkrootkit</div>
                  <div>sudo chkrootkit</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SELinux & AppArmor</CardTitle>
              <CardDescription>Mandatory Access Control systems</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">SELinux (Red Hat/CentOS)</Badge>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Check SELinux status</div>
                  <div>sestatus</div>
                  <div className="mt-2"># Set to enforcing mode</div>
                  <div>sudo setenforce 1</div>
                  <div className="mt-2"># Set to permissive mode (for testing)</div>
                  <div>sudo setenforce 0</div>
                  <div className="mt-2"># View SELinux denials</div>
                  <div>sudo ausearch -m avc -ts recent</div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">AppArmor (Ubuntu/Debian)</Badge>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Check AppArmor status</div>
                  <div>sudo aa-status</div>
                  <div className="mt-2"># Enable profile</div>
                  <div>sudo aa-enforce /etc/apparmor.d/usr.sbin.nginx</div>
                  <div className="mt-2"># Set to complain mode</div>
                  <div>sudo aa-complain /etc/apparmor.d/usr.sbin.nginx</div>
                  <div className="mt-2"># Disable profile</div>
                  <div>sudo aa-disable /etc/apparmor.d/usr.sbin.nginx</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Keep systems updated with latest security patches</li>
                <li>Use strong, unique passwords and SSH keys</li>
                <li>Implement principle of least privilege</li>
                <li>Enable and configure firewall (UFW, iptables)</li>
                <li>Disable unnecessary services and ports</li>
                <li>Use fail2ban or similar intrusion prevention</li>
                <li>Enable SELinux or AppArmor when available</li>
                <li>Regular security audits and vulnerability scans</li>
                <li>Monitor logs for suspicious activity</li>
                <li>Implement backup and disaster recovery plans</li>
                <li>Use encrypted connections (SSH, HTTPS, VPN)</li>
                <li>Regular security training for system administrators</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SystemSecurity;
