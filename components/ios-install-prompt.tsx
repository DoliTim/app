'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Share } from 'lucide-react';

export function IOSInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if running on iOS and not in standalone mode
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    
    if (isIOS && !isStandalone) {
      setShowPrompt(true);
    }
  }, []);

  if (!showPrompt) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t"
    >
      <div className="flex items-center gap-4">
        <Share className="h-6 w-6" />
        <div className="flex-1">
          <h3 className="font-semibold">Install App</h3>
          <p className="text-sm text-muted-foreground">
            Tap the share button and select "Add to Home Screen"
          </p>
        </div>
      </div>
    </motion.div>
  );
} 