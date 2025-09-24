import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.Fatima.examenapp',
  appName: 'FatimaExamen2',
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