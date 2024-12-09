'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { frequencyCategories } from '@/lib/frequencies/data';
import type { Frequency } from '@/lib/types/frequency';

export function FrequencyVisualizer() {
  const [selectedFrequency, setSelectedFrequency] = useState<Frequency | null>(null);

  return (
    <div className="grid gap-6">
      {frequencyCategories.map((category) => (
        <Card key={category.id} className="p-4">
          <h3 className="text-lg font-semibold mb-4">{category.name}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {category.frequencies.map((freq) => (
              <motion.div
                key={freq.id}
                className="aspect-square rounded-lg"
                style={{ backgroundColor: freq.color || '#666' }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedFrequency(freq)}
              >
                <div className="h-full flex flex-col items-center justify-center text-white p-2 text-center">
                  <span className="font-bold">{freq.hz}Hz</span>
                  <span className="text-sm">{freq.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      ))}

      {selectedFrequency && (
        <Card className="p-4">
          <h3 className="font-semibold mb-2">{selectedFrequency.name}</h3>
          <p className="text-sm text-muted-foreground">{selectedFrequency.description}</p>
          <ul className="mt-2 space-y-1">
            {selectedFrequency.benefits.map((benefit, i) => (
              <li key={i} className="text-sm">• {benefit}</li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
} 