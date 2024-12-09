import { NativeAudioEngine } from './native-audio-engine';

class FrequencyPlayer {
  private engine: NativeAudioEngine;

  constructor() {
    this.engine = new NativeAudioEngine();
  }

  async play(frequency: number) {
    await this.engine.play(frequency);
  }

  async stop() {
    await this.engine.stop();
  }
}

export const frequencyPlayer = new FrequencyPlayer(); 