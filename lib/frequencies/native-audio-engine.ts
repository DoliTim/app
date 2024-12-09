import { Capacitor } from '@capacitor/core';

export class NativeAudioEngine {
  private audioContext: AudioContext | null = null;
  private oscillator: OscillatorNode | null = null;

  constructor() {
    if (Capacitor.isNativePlatform()) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  async play(frequency: number) {
    if (!this.audioContext) return;

    // Stop any existing tone
    await this.stop();

    // Create and configure oscillator
    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.type = 'sine';
    this.oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    this.oscillator.connect(this.audioContext.destination);
    this.oscillator.start();
  }

  async stop() {
    if (this.oscillator) {
      this.oscillator.stop();
      this.oscillator.disconnect();
      this.oscillator = null;
    }
  }
} 