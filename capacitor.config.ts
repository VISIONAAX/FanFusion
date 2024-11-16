import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.fanbet.app',
  appName: 'FanFusion',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
    // url: 'http://localhost:3000',
    // cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2300,
    },
  },
};

export default config;