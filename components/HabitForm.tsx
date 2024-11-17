import { FormEvent, useState, ChangeEvent } from 'react';
import { Button } from './ui/button';
import {Input} from './ui/input';
import { Label} from './ui/label';
import {Select, SelectItem} from './ui/select';

type Habit = {
    name: string;
    frequency: 'daily' | 'weekly';
};

type HabitFormProps = {
    onAdd: (habit: Habit) => void;
};
    

export function HabitForm({ onAdd }: HabitFormProps) {
  const [habitName, setHabitName] = useState<string>('');
  const [frequency, setFrequency] = useState<'daily'|'weekly'>('daily');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (habitName) {
      onAdd({ name: habitName, frequency });
      setHabitName('');
    }
  };

  const handleFrequencyChange = (value: 'daily' | 'weekly') => {
    setFrequency(value);
  };

  const handleHabitNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHabitName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Habit Name</Label>
        <Input 
          type="text" 
          value={habitName} 
          onChange={handleHabitNameChange} 
          placeholder="e.g., Drink water" 
          required 
        />
      </div>
      <div>
        <Label>Frequency</Label>
        <Select value={frequency} onValueChange={handleFrequencyChange}>
          <SelectItem value="daily">Daily</SelectItem>
          <SelectItem value="weekly">Weekly</SelectItem>
        </Select>
      </div>
      <Button type="submit" className="w-full">Add Habit</Button>
    </form>
  );
}
