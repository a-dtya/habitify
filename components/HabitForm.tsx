import { useState } from 'react';
import { Button, Input, Label, Select, Option } from '@shadcn/ui';

export function HabitForm({ onAdd }) {
  const [habitName, setHabitName] = useState('');
  const [frequency, setFrequency] = useState('daily');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName) {
      onAdd({ name: habitName, frequency });
      setHabitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Habit Name</Label>
        <Input 
          type="text" 
          value={habitName} 
          onChange={(e) => setHabitName(e.target.value)} 
          placeholder="e.g., Drink water" 
          required 
        />
      </div>
      <div>
        <Label>Frequency</Label>
        <Select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <Option value="daily">Daily</Option>
          <Option value="weekly">Weekly</Option>
        </Select>
      </div>
      <Button type="submit" className="w-full">Add Habit</Button>
    </form>
  );
}
