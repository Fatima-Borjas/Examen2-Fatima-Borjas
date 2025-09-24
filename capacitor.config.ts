import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.examen.app',
  appName: 'Mi app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Camera: {
      allowEditing: false,
      quality: 90
    }
  }
};

export default config;