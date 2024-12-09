import { NativeBridge } from '@/lib/native-bridge';

export class FrequencyPlayer {
  async play(frequency: number) {
    if (NativeBridge.isNative()) {
      await NativeBridge.playFrequency(frequency);
    } else {
      // Web audio fallback
    }
  }
} 