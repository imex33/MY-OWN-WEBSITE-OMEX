import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Code, ArrowLeft, Info, Shield, Bug, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SecureCoding = () => {
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
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Secure Coding</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Secure Coding Practices</h2>
            <p className="text-muted-foreground">
              Learn how to write secure code and prevent common vulnerabilities in your applications.
            </p>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Why Secure Coding Matters</AlertTitle>
            <AlertDescription>
              Most security vulnerabilities stem from coding errors and poor security practices. By following secure 
              coding principles, you can prevent vulnerabilities before they make it into production.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle>Core Security Principles</CardTitle>
              </div>
              <CardDescription>Fundamental concepts for secure development</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">Key Principles</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Least Privilege:</strong> Grant minimum permissions necessary</li>
                  <li><strong>Defense in Depth:</strong> Multiple layers of security controls</li>
                  <li><strong>Fail Securely:</strong> Errors should not expose sensitive data</li>
                  <li><strong>Input Validation:</strong> Never trust user input</li>
                  <li><strong>Output Encoding:</strong> Properly encode all output data</li>
                  <li><strong>Authentication & Session Management:</strong> Implement securely</li>
                  <li><strong>Cryptography:</strong> Use strong, proven algorithms</li>
                  <li><strong>Error Handling:</strong> Don't leak sensitive information</li>
                  <li><strong>Security by Design:</strong> Build security in from the start</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bug className="h-6 w-6 text-primary" />
                <CardTitle>OWASP Top 10 Vulnerabilities</CardTitle>
              </div>
              <CardDescription>Most critical web application security risks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">1. Injection Attacks</Badge>
                <p className="text-sm mb-2">SQL, NoSQL, OS command injection via untrusted data</p>
                <div className="bg-destructive/10 border border-destructive/20 p-3 rounded text-xs">
                  <div className="font-semibold mb-1">❌ Vulnerable Code:</div>
                  <div className="font-mono bg-muted p-2 rounded">
                    query = "SELECT * FROM users WHERE id = " + userId;
                  </div>
                </div>
                <div className="bg-primary/10 border border-primary/20 p-3 rounded text-xs mt-2">
                  <div className="font-semibold mb-1">✓ Secure Code:</div>
                  <div className="font-mono bg-muted p-2 rounded">
                    query = "SELECT * FROM users WHERE id = ?";
                    <br />stmt.setInt(1, userId);
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">2. Broken Authentication</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Weak password requirements</li>
                  <li>Credentials exposed in URLs or logs</li>
                  <li>Missing session timeout</li>
                  <li>Session fixation vulnerabilities</li>
                </ul>
                <div className="bg-primary/10 border border-primary/20 p-3 rounded text-xs mt-2">
                  <div className="font-semibold mb-1">✓ Best Practices:</div>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Implement multi-factor authentication</li>
                    <li>Use strong password hashing (bcrypt, Argon2)</li>
                    <li>Regenerate session IDs after authentication</li>
                    <li>Implement account lockout after failed attempts</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">3. Sensitive Data Exposure</Badge>
                <p className="text-sm mb-2">Protecting data at rest and in transit:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Always use HTTPS/TLS for data transmission</li>
                  <li>Encrypt sensitive data at rest</li>
                  <li>Don't store sensitive data unnecessarily</li>
                  <li>Use strong encryption algorithms (AES-256)</li>
                  <li>Implement proper key management</li>
                  <li>Disable caching for sensitive data</li>
                </ul>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">4. XML External Entities (XXE)</Badge>
                <p className="text-sm mb-2">Prevent XXE attacks in XML parsers:</p>
                <div className="bg-primary/10 border border-primary/20 p-3 rounded text-xs">
                  <div className="font-semibold mb-1">✓ Secure Configuration:</div>
                  <div className="font-mono bg-muted p-2 rounded">
                    factory.setFeature("http://xml.org/sax/features/external-general-entities", false);
                    <br />factory.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">5. Broken Access Control</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Enforce access controls on every request</li>
                  <li>Deny by default, allow explicitly</li>
                  <li>Check permissions server-side, not just client-side</li>
                  <li>Disable directory listing and file browsing</li>
                  <li>Validate user authorization for all actions</li>
                </ul>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">6. Security Misconfiguration</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Remove default accounts and passwords</li>
                  <li>Disable unnecessary features and services</li>
                  <li>Keep all software updated and patched</li>
                  <li>Implement proper security headers</li>
                  <li>Don't expose detailed error messages</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <CardTitle>Cross-Site Scripting (XSS) Prevention</CardTitle>
              </div>
              <CardDescription>Protecting against XSS attacks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">Types of XSS</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Reflected XSS:</strong> Malicious script in URL parameters</li>
                  <li><strong>Stored XSS:</strong> Script saved in database, served to users</li>
                  <li><strong>DOM-based XSS:</strong> Client-side script manipulation</li>
                </ul>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Prevention Techniques</Badge>
                <div className="space-y-3">
                  <div className="bg-primary/10 border border-primary/20 p-3 rounded text-xs">
                    <div className="font-semibold mb-1">✓ Output Encoding (HTML Context):</div>
                    <div className="font-mono bg-muted p-2 rounded">
                      {'// Encode user input before displaying'}
                      <br />{'output = escapeHtml(userInput);'}
                      <br />{'// Convert < > & " \' to HTML entities'}
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 p-3 rounded text-xs">
                    <div className="font-semibold mb-1">✓ Content Security Policy (CSP):</div>
                    <div className="font-mono bg-muted p-2 rounded">
                      Content-Security-Policy: default-src 'self'; script-src 'self'
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 p-3 rounded text-xs">
                    <div className="font-semibold mb-1">✓ HTTPOnly Cookies:</div>
                    <div className="font-mono bg-muted p-2 rounded">
                      Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Strict
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Input Validation Best Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">Validation Rules</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Whitelist {'>'} Blacklist:</strong> Define what's allowed, not what's blocked</li>
                  <li><strong>Validate Type:</strong> Ensure data matches expected type</li>
                  <li><strong>Validate Length:</strong> Enforce minimum and maximum lengths</li>
                  <li><strong>Validate Range:</strong> Check numeric values are within bounds</li>
                  <li><strong>Validate Format:</strong> Use regex for emails, dates, etc.</li>
                  <li><strong>Server-Side Validation:</strong> Never trust client-side only</li>
                  <li><strong>Sanitize Input:</strong> Remove or encode dangerous characters</li>
                </ul>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Example Validation</Badge>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-2">
                  <div>// Email validation</div>
                  <div>const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;</div>
                  <div>if (!emailRegex.test(email)) {'{'} return error; {'}'}</div>
                  <div className="mt-2">// Integer validation</div>
                  <div>const age = parseInt(input);</div>
                  <div>if (isNaN(age) || age {'<'} 0 || age {'>'} 150) {'{'} return error; {'}'}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Secure Development Lifecycle</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Requirements:</strong> Define security requirements early</li>
                <li><strong>Design:</strong> Threat modeling and security architecture review</li>
                <li><strong>Development:</strong> Follow secure coding standards</li>
                <li><strong>Testing:</strong> Security testing (SAST, DAST, penetration testing)</li>
                <li><strong>Deployment:</strong> Secure configuration management</li>
                <li><strong>Maintenance:</strong> Regular updates and security patches</li>
                <li><strong>Code Review:</strong> Peer review with security focus</li>
                <li><strong>Training:</strong> Keep team updated on security best practices</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Testing Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">Static Analysis (SAST)</Badge>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>SonarQube - Code quality and security</li>
                  <li>Checkmarx - Commercial SAST platform</li>
                  <li>Bandit - Python security linter</li>
                  <li>ESLint security plugins - JavaScript</li>
                </ul>
              </div>

              <div className="mt-4">
                <Badge className="mb-3">Dynamic Analysis (DAST)</Badge>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>OWASP ZAP - Web app security scanner</li>
                  <li>Burp Suite - Web vulnerability scanner</li>
                  <li>Nikto - Web server scanner</li>
                </ul>
              </div>

              <div className="mt-4">
                <Badge className="mb-3">Dependency Scanning</Badge>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>npm audit / yarn audit - Node.js dependencies</li>
                  <li>OWASP Dependency-Check - Multiple languages</li>
                  <li>Snyk - Dependency vulnerability scanning</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SecureCoding;
