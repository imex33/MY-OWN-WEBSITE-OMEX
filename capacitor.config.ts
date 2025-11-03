import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.fc5d810c46e14bd08238d2a930cb9a69',
  appName: 'Omex_ CyberSec',
  webDir: 'dist',
  server: {
    url: 'https://fc5d810c-46e1-4bd0-8238-d2a930cb9a69.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
