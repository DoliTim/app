'use client';

import React from 'react';
import { LineChart } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const practiceData = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 30 },
  { name: 'Wed', value: 45 },
  { name: 'Thu', value: 25 },
  { name: 'Fri', value: 55 },
  { name: 'Sat', value: 40 },
  { name: 'Sun', value: 35 },
];

export default function AnalyticsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Practice Duration Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart data={practiceData} />
        </CardContent>
      </Card>
    </div>
  );
} 