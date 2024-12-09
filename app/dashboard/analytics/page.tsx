'use client';

import { LineChart } from '@/components/ui/chart';
import { Card } from '@/components/ui/card';

export default function AnalyticsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <h2>Practice Duration Over Time</h2>
        <LineChart data={practiceData} />
      </Card>
      {/* Add more analytics components */}
    </div>
  );
} 