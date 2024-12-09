import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

export class NativeBridge {
  static isNative() {
    return Capacitor.isNativePlatform();
  }

  static async initializeApp() {
    if (this.isNative()) {
      await StatusBar.setStyle({ style: Style.Dark });
      await SplashScreen.hide();
    }
  }
} 