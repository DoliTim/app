'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { schumannFrequencies } from '@/lib/frequencies/data';
import { frequencyPlayer } from '@/lib/frequencies/audio';

interface FrequencyWheelProps {
  hasV2?: boolean;
}

export function FrequencyWheel({ hasV2 = false }: FrequencyWheelProps) {
  const [mounted, setMounted] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const centerX = 200;
  const centerY = 200;
  const radius = 150;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full aspect-square max-w-[400px] mx-auto bg-muted/10 animate-pulse rounded-full" />
    );
  }

  const frequencies = schumannFrequencies.filter(freq => !freq.requiresV2 || hasV2);
  const angleStep = (2 * Math.PI) / frequencies.length;

  const handleFrequencyClick = (frequency: number) => {
    if (frequencyPlayer.isCurrentlyPlaying() && frequencyPlayer.getCurrentFrequency() === frequency) {
      frequencyPlayer.stop();
    } else {
      frequencyPlayer.stop();
      frequencyPlayer.play(frequency);
    }
  };

  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto">
      <svg
        ref={svgRef}
        viewBox="0 0 400 400"
        className="w-full h-full"
      >
        <motion.path
          d="M200,50 L350,350 L50,350 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.2"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {frequencies.map((freq, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          return (
            <g key={freq.id}>
              <motion.circle
                cx={x}
                cy={y}
                r="30"
                fill={freq.color || '#4B5563'}
                opacity="0.8"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFrequencyClick(freq.hz)}
                style={{ cursor: 'pointer' }}
              />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="currentColor"
                fontSize="12"
              >
                {freq.hz} Hz
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}