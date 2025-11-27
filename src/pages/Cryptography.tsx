import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Key, ArrowLeft, Info, Lock, Shield, FileKey } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Cryptography = () => {
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
            <Key className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Cryptography</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Cryptography Fundamentals</h2>
            <p className="text-muted-foreground">
              Learn the principles of cryptography, encryption algorithms, and secure communication.
            </p>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>What is Cryptography?</AlertTitle>
            <AlertDescription>
              Cryptography is the practice of secure communication in the presence of adversaries. It involves 
              creating and analyzing protocols that prevent unauthorized access to information and ensure data 
              confidentiality, integrity, and authenticity.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle>Cryptography Fundamentals</CardTitle>
              </div>
              <CardDescription>Core concepts and terminology</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">Key Concepts</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Plaintext:</strong> Original, unencrypted data</li>
                  <li><strong>Ciphertext:</strong> Encrypted data</li>
                  <li><strong>Encryption:</strong> Converting plaintext to ciphertext</li>
                  <li><strong>Decryption:</strong> Converting ciphertext back to plaintext</li>
                  <li><strong>Key:</strong> Secret value used in encryption/decryption</li>
                  <li><strong>Algorithm/Cipher:</strong> Mathematical process for encryption</li>
                  <li><strong>Hash:</strong> One-way transformation of data</li>
                </ul>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Security Goals (CIA Triad)</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Confidentiality:</strong> Keep data secret from unauthorized parties</li>
                  <li><strong>Integrity:</strong> Ensure data hasn't been modified</li>
                  <li><strong>Authentication:</strong> Verify identity of communicating parties</li>
                  <li><strong>Non-repudiation:</strong> Prevent denial of actions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lock className="h-6 w-6 text-primary" />
                <CardTitle>Symmetric Encryption</CardTitle>
              </div>
              <CardDescription>Same key for encryption and decryption</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">How It Works</Badge>
                <p className="text-sm mb-2">
                  Both sender and receiver share the same secret key. Fast and efficient, but requires 
                  secure key exchange.
                </p>
                <div className="bg-muted p-3 rounded text-xs">
                  <div>Plaintext + Key → Encryption → Ciphertext</div>
                  <div>Ciphertext + Key → Decryption → Plaintext</div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Common Algorithms</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>AES (Advanced Encryption Standard):</strong> Most widely used, 128/192/256-bit keys</li>
                  <li><strong>ChaCha20:</strong> Modern, fast, secure alternative to AES</li>
                  <li><strong>DES (Data Encryption Standard):</strong> Deprecated, insecure (56-bit key)</li>
                  <li><strong>3DES (Triple DES):</strong> Legacy, being phased out</li>
                  <li><strong>Blowfish/Twofish:</strong> Older but still used in some applications</li>
                </ul>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">AES Encryption Example (OpenSSL)</Badge>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Encrypt file with AES-256</div>
                  <div>openssl enc -aes-256-cbc -salt -in plaintext.txt -out encrypted.bin</div>
                  <div className="mt-2"># Decrypt file</div>
                  <div>openssl enc -aes-256-cbc -d -in encrypted.bin -out decrypted.txt</div>
                  <div className="mt-2"># Using a key file</div>
                  <div>openssl enc -aes-256-cbc -in plaintext.txt -out encrypted.bin -pass file:./keyfile</div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Pros & Cons</Badge>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">✓ Advantages:</h4>
                    <ul className="list-disc list-inside text-xs space-y-1">
                      <li>Very fast performance</li>
                      <li>Simple implementation</li>
                      <li>Good for large data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-destructive mb-1">✗ Disadvantages:</h4>
                    <ul className="list-disc list-inside text-xs space-y-1">
                      <li>Key distribution problem</li>
                      <li>Many keys needed (n² problem)</li>
                      <li>No non-repudiation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileKey className="h-6 w-6 text-primary" />
                <CardTitle>Asymmetric Encryption (Public Key)</CardTitle>
              </div>
              <CardDescription>Different keys for encryption and decryption</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">How It Works</Badge>
                <p className="text-sm mb-2">
                  Uses key pair: public key (can be shared) and private key (kept secret). Public key encrypts, 
                  private key decrypts.
                </p>
                <div className="bg-muted p-3 rounded text-xs space-y-1">
                  <div>Plaintext + Public Key → Encryption → Ciphertext</div>
                  <div>Ciphertext + Private Key → Decryption → Plaintext</div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Common Algorithms</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>RSA:</strong> Most widely used, 2048+ bit keys recommended</li>
                  <li><strong>ECC (Elliptic Curve Crypto):</strong> Smaller keys, same security level</li>
                  <li><strong>Ed25519:</strong> Modern, fast EdDSA signature scheme</li>
                  <li><strong>DSA:</strong> Digital Signature Algorithm (legacy)</li>
                  <li><strong>Diffie-Hellman:</strong> Key exchange protocol</li>
                </ul>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">RSA Key Generation & Usage</Badge>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Generate RSA key pair (4096-bit)</div>
                  <div>openssl genrsa -out private_key.pem 4096</div>
                  <div className="mt-2"># Extract public key</div>
                  <div>openssl rsa -in private_key.pem -pubout -out public_key.pem</div>
                  <div className="mt-2"># Encrypt with public key</div>
                  <div>openssl rsautl -encrypt -pubin -inkey public_key.pem -in plaintext.txt -out encrypted.bin</div>
                  <div className="mt-2"># Decrypt with private key</div>
                  <div>openssl rsautl -decrypt -inkey private_key.pem -in encrypted.bin -out decrypted.txt</div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">SSH Key Generation</Badge>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Generate Ed25519 SSH key (recommended)</div>
                  <div>ssh-keygen -t ed25519 -C "your_email@example.com"</div>
                  <div className="mt-2"># Generate RSA SSH key (if Ed25519 not supported)</div>
                  <div>ssh-keygen -t rsa -b 4096 -C "your_email@example.com"</div>
                  <div className="mt-2"># Copy public key to server</div>
                  <div>ssh-copy-id user@server</div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Pros & Cons</Badge>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">✓ Advantages:</h4>
                    <ul className="list-disc list-inside text-xs space-y-1">
                      <li>Solves key distribution</li>
                      <li>Digital signatures possible</li>
                      <li>Provides non-repudiation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-destructive mb-1">✗ Disadvantages:</h4>
                    <ul className="list-disc list-inside text-xs space-y-1">
                      <li>Much slower than symmetric</li>
                      <li>Limited data size</li>
                      <li>More complex implementation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cryptographic Hash Functions</CardTitle>
              <CardDescription>One-way functions for data integrity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">Properties</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Deterministic:</strong> Same input always produces same output</li>
                  <li><strong>Fast Computation:</strong> Quick to calculate hash</li>
                  <li><strong>Avalanche Effect:</strong> Small input change = large hash change</li>
                  <li><strong>One-Way:</strong> Impossible to reverse (get input from hash)</li>
                  <li><strong>Collision Resistant:</strong> Hard to find two inputs with same hash</li>
                </ul>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Common Hash Algorithms</Badge>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>SHA-256:</strong> Part of SHA-2 family, 256-bit output (recommended)</li>
                  <li><strong>SHA-3:</strong> Latest standard, different design than SHA-2</li>
                  <li><strong>SHA-1:</strong> Deprecated, broken (collisions found)</li>
                  <li><strong>MD5:</strong> Deprecated, very broken (DO NOT USE for security)</li>
                  <li><strong>BLAKE2/BLAKE3:</strong> Modern, fast alternatives</li>
                </ul>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Hash Function Examples</Badge>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Calculate SHA-256 hash</div>
                  <div>sha256sum file.txt</div>
                  <div>echo -n "Hello World" | sha256sum</div>
                  <div className="mt-2"># Calculate MD5 hash (file verification only)</div>
                  <div>md5sum file.txt</div>
                  <div className="mt-2"># Verify file integrity</div>
                  <div>sha256sum -c checksums.txt</div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Password Hashing</Badge>
                <p className="text-sm mb-2">Special algorithms designed for password storage:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>bcrypt:</strong> Adaptive, with salt, widely used</li>
                  <li><strong>Argon2:</strong> Winner of Password Hashing Competition (recommended)</li>
                  <li><strong>scrypt:</strong> Memory-hard, good for passwords</li>
                  <li><strong>PBKDF2:</strong> Standard, configurable iterations</li>
                </ul>
                <p className="text-xs text-destructive mt-2">
                  ⚠️ Never use plain SHA-256 or MD5 for passwords! Use proper password hashing functions.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Digital Signatures</CardTitle>
              <CardDescription>Proving authenticity and integrity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">How Digital Signatures Work</Badge>
                <div className="bg-muted p-3 rounded text-xs space-y-2">
                  <div><strong>Signing:</strong></div>
                  <div>1. Hash the document</div>
                  <div>2. Encrypt hash with private key = signature</div>
                  <div>3. Send document + signature</div>
                  <div className="mt-2"><strong>Verification:</strong></div>
                  <div>1. Hash the received document</div>
                  <div>2. Decrypt signature with public key</div>
                  <div>3. Compare: if hashes match, signature is valid</div>
                </div>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">GPG/PGP Signatures</Badge>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Generate GPG key</div>
                  <div>gpg --full-generate-key</div>
                  <div className="mt-2"># Sign a file</div>
                  <div>gpg --sign document.txt</div>
                  <div className="mt-2"># Create detached signature</div>
                  <div>gpg --detach-sign document.txt</div>
                  <div className="mt-2"># Verify signature</div>
                  <div>gpg --verify document.txt.sig document.txt</div>
                  <div className="mt-2"># Export public key</div>
                  <div>gpg --export --armor your@email.com {'>'} pubkey.asc</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>TLS/SSL Certificates</CardTitle>
              <CardDescription>Securing web communications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-3">How TLS Works</Badge>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Client connects, requests secure connection</li>
                  <li>Server sends certificate (public key)</li>
                  <li>Client verifies certificate with CA</li>
                  <li>Client generates session key, encrypts with server's public key</li>
                  <li>Server decrypts session key with private key</li>
                  <li>Secure communication using session key (symmetric encryption)</li>
                </ol>
              </div>

              <div className="mt-6">
                <Badge className="mb-3">Generate Self-Signed Certificate</Badge>
                <div className="bg-muted p-3 rounded font-mono text-xs space-y-1">
                  <div># Generate private key and certificate</div>
                  <div>openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365</div>
                  <div className="mt-2"># View certificate details</div>
                  <div>openssl x509 -in cert.pem -text -noout</div>
                  <div className="mt-2"># Test TLS connection</div>
                  <div>openssl s_client -connect example.com:443</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Use well-tested, standard cryptographic libraries (don't roll your own crypto)</li>
                <li>Always use 2048+ bit RSA keys or 256+ bit ECC keys</li>
                <li>Use AES-256 or ChaCha20 for symmetric encryption</li>
                <li>Use SHA-256 or better for hashing (never MD5 or SHA-1 for security)</li>
                <li>Use proper password hashing (bcrypt, Argon2, scrypt)</li>
                <li>Always use random IVs/nonces for encryption</li>
                <li>Implement proper key management and rotation</li>
                <li>Use authenticated encryption (AES-GCM, ChaCha20-Poly1305)</li>
                <li>Keep cryptographic software updated</li>
                <li>Use TLS 1.2+ for network communications</li>
                <li>Securely store private keys (encrypted, restricted access)</li>
                <li>Follow principle of least privilege for key access</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cryptography;
