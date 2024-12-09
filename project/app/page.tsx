'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Database, Heart, Activity, Sparkles, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto relative z-10"
          >
            <Badge 
              variant="outline" 
              className="mb-6 border-purple-500/50 bg-purple-500/10"
            >
              Welcome to The Schumann
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Discover & Track Your
              </span>
              <br />
              <span className="text-white">
                Sacred Frequencies
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Learn about Earth's healing frequencies, track your practice, and optimize your well-being
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sacred Library */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-black/40 border-purple-500/20">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sacred Library</h3>
                  <p className="text-gray-400 mb-4">
                    Explore our comprehensive collection of healing frequencies:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Earth's 7.83Hz Schumann Resonance</li>
                    <li>• Ancient Solfeggio Frequencies</li>
                    <li>• Planetary Harmonics</li>
                    <li>• Brainwave States</li>
                  </ul>
                  <Link href="/frequencies">
                    <Button className="w-full mt-6 bg-purple-500/10 hover:bg-purple-500/20">
                      Explore Library
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Practice Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-black/40 border-purple-500/20">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Track Your Practice</h3>
                  <p className="text-gray-400 mb-4">
                    Monitor and optimize your frequency practice:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Visual practice calendar</li>
                    <li>• Session timer with frequency selection</li>
                    <li>• Progress tracking</li>
                    <li>• Personal notes and insights</li>
                  </ul>
                  <Link href="/practice">
                    <Button className="w-full mt-6 bg-purple-500/10 hover:bg-purple-500/20">
                      Start Practice
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pro Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-[#FFD700]/10 to-[#B8860B]/10 border-[#FFD700]/20">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-[#FFD700]/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-[#FFD700]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">V2 Pro Features</h3>
                  <p className="text-gray-400 mb-4">
                    Advanced frequency optimization:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Full spectrum control (0.1-999.99Hz)</li>
                    <li>• Custom frequency programs</li>
                    <li>• Enhanced tracking capabilities</li>
                    <li>• Professional analytics</li>
                  </ul>
                  <Link href="/">
                    <Button className="w-full mt-6 bg-gradient-to-r from-[#FFD700]/20 to-[#B8860B]/20 hover:from-[#FFD700]/30 hover:to-[#B8860B]/30">
                      Upgrade to Pro
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Your Journey to Frequency Mastery</h2>
            <p className="text-gray-400">Follow these steps to optimize your frequency practice</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Learn",
                description: "Explore our Sacred Library to understand different frequencies and their benefits"
              },
              {
                icon: Activity,
                title: "Practice",
                description: "Use our timer to track your frequency sessions and build consistency"
              },
              {
                icon: Database,
                title: "Track",
                description: "Monitor your progress with our visual calendar and session history"
              },
              {
                icon: Sparkles,
                title: "Optimize",
                description: "Discover your optimal frequencies and create personalized programs"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="h-16 w-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-gray-400 mb-8">
              Start exploring our Sacred Library or begin tracking your practice today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/frequencies">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Explore Library
                  <Database className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/practice">
                <Button variant="outline">
                  Start Practice
                  <Heart className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}