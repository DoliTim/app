import { FrequencyCategory } from './types';
import { earthFrequencies } from './categories/earth';
import { solfeggioFrequencies } from './categories/solfeggio';
import { planetaryFrequencies } from './categories/planetary';
import { brainwaveFrequencies } from './categories/brainwave';
import { angelicFrequencies } from './categories/angelic';
import { teslaFrequencies } from './categories/tesla';

export const frequencyCategories: FrequencyCategory[] = [
  {
    id: 'earth',
    name: 'Earth Frequencies',
    description: 'Natural frequencies of our planet',
    frequencies: earthFrequencies
  },
  {
    id: 'solfeggio',
    name: 'Solfeggio Frequencies',
    description: 'Ancient healing tones',
    frequencies: solfeggioFrequencies
  },
  {
    id: 'brainwave',
    name: 'Brainwave Frequencies',
    description: 'Neural frequency states',
    frequencies: brainwaveFrequencies
  },
  {
    id: 'planetary',
    name: 'Planetary Frequencies',
    description: 'Celestial harmonic resonances',
    frequencies: planetaryFrequencies
  },
  {
    id: 'angelic',
    name: 'Angelic Frequencies',
    description: 'Sacred number vibrations',
    frequencies: angelicFrequencies
  },
  {
    id: 'tesla',
    name: 'Tesla Frequencies',
    description: '3-6-9 frequency patterns',
    frequencies: teslaFrequencies
  }
];

export const allFrequencies = [
  ...earthFrequencies,
  ...solfeggioFrequencies,
  ...brainwaveFrequencies,
  ...planetaryFrequencies,
  ...angelicFrequencies,
  ...teslaFrequencies
];

export function getFrequencyByCategory(categoryId: string) {
  const category = frequencyCategories.find(cat => cat.id === categoryId);
  return category?.frequencies || [];
}

export function getFrequencyById(id: string) {
  return allFrequencies.find(freq => freq.id === id);
}