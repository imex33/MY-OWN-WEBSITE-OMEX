import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WebSecurity = () => {
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
            <Network className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Web Security</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Web Application Security</h2>
            <p className="text-muted-foreground">
              Master web vulnerabilities and learn how to protect web applications from attacks.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>OWASP Top 10 - 2021</CardTitle>
              <CardDescription>The most critical web application security risks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge variant="destructive" className="mb-2">A01:2021 - Broken Access Control</Badge>
                <p className="text-sm mb-2">Users can access resources they shouldn't be able to</p>
                <p className="text-xs text-muted-foreground">Example: Changing URL parameter to access another user's data</p>
              </div>
              <div>
                <Badge variant="destructive" className="mb-2">A02:2021 - Cryptographic Failures</Badge>
                <p className="text-sm mb-2">Sensitive data exposed due to weak or missing encryption</p>
                <p className="text-xs text-muted-foreground">Example: Passwords stored in plaintext, weak SSL/TLS</p>
              </div>
              <div>
                <Badge variant="destructive" className="mb-2">A03:2021 - Injection</Badge>
                <p className="text-sm mb-2">Untrusted data sent to interpreter as part of command</p>
                <p className="text-xs text-muted-foreground">Example: SQL, NoSQL, OS command injection</p>
              </div>
              <div>
                <Badge variant="destructive" className="mb-2">A04:2021 - Insecure Design</Badge>
                <p className="text-sm mb-2">Missing or ineffective security controls in design phase</p>
                <p className="text-xs text-muted-foreground">Example: No rate limiting on authentication</p>
              </div>
              <div>
                <Badge variant="destructive" className="mb-2">A05:2021 - Security Misconfiguration</Badge>
                <p className="text-sm mb-2">Insecure default configurations or incomplete setup</p>
                <p className="text-xs text-muted-foreground">Example: Default credentials, verbose error messages</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SQL Injection (SQLi)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">How it works:</h4>
                <p className="text-sm mb-2">Attacker inserts malicious SQL code into application queries</p>
                <div className="bg-muted p-3 rounded-md text-xs font-mono mb-2">
                  {`' OR '1'='1' --`}<br/>
                  {`admin' --`}<br/>
                  {`'; DROP TABLE users; --`}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Prevention:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Use parameterized queries (prepared statements)</li>
                  <li>Input validation and sanitization</li>
                  <li>Least privilege database accounts</li>
                  <li>Use ORMs properly</li>
                  <li>Never concatenate user input into SQL</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cross-Site Scripting (XSS)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Types of XSS:</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Reflected XSS:</strong> Malicious script reflected off web server</li>
                  <li><strong>Stored XSS:</strong> Script permanently stored on target server</li>
                  <li><strong>DOM-based XSS:</strong> Vulnerability in client-side code</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 mt-3">Prevention:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Output encoding/escaping</li>
                  <li>Content Security Policy (CSP) headers</li>
                  <li>Input validation on client and server</li>
                  <li>Use frameworks with auto-escaping</li>
                  <li>HTTPOnly and Secure cookie flags</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cross-Site Request Forgery (CSRF)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">How it works:</h4>
                <p className="text-sm">Attacker tricks victim into executing unwanted actions on authenticated site</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Prevention:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Anti-CSRF tokens (synchronizer tokens)</li>
                  <li>SameSite cookie attribute</li>
                  <li>Double submit cookies</li>
                  <li>Verify origin with standard headers</li>
                  <li>Re-authentication for sensitive actions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Authentication & Session Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Best Practices:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Use strong password hashing (bcrypt, Argon2)</li>
                    <li>Implement multi-factor authentication (MFA)</li>
                    <li>Secure session management with random tokens</li>
                    <li>Set appropriate session timeouts</li>
                    <li>Regenerate session IDs after login</li>
                    <li>Use HTTPS for all authenticated pages</li>
                    <li>Implement account lockout after failed attempts</li>
                    <li>Never expose session IDs in URLs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Headers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="bg-muted p-2 rounded text-xs font-mono">
                  Content-Security-Policy: default-src 'self'
                </div>
                <div className="bg-muted p-2 rounded text-xs font-mono">
                  X-Frame-Options: DENY
                </div>
                <div className="bg-muted p-2 rounded text-xs font-mono">
                  X-Content-Type-Options: nosniff
                </div>
                <div className="bg-muted p-2 rounded text-xs font-mono">
                  Strict-Transport-Security: max-age=31536000
                </div>
                <div className="bg-muted p-2 rounded text-xs font-mono">
                  X-XSS-Protection: 1; mode=block
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WebSecurity;
