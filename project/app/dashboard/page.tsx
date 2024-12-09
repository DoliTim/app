'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PracticeCalendar } from '@/components/practice/practice-calendar';
import { DeviceSettings } from '@/components/dashboard/device-settings';
import { PersonalNotes } from '@/components/dashboard/personal-notes';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Personal Dashboard</h1>
        
        <div className="grid gap-8">
          <PracticeCalendar />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Device Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <DeviceSettings />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personal Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <PersonalNotes />
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}