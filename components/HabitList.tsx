import { useState } from 'react';
import { Checkbox } from './ui/checkbox';

type Habit = {
    name: string;
    frequency: 'daily' | 'weekly'; // You can add more options if needed
};

type HabitListProps = {
    habits: Habit[];
};
  
export function HabitList({ habits }:HabitListProps) {

  const [completedHabits, setCompletedHabits] = useState<string[]>([]);

  const handleCompletion = (habitName: string) => {
    setCompletedHabits((prev) =>
      prev.includes(habitName) ? prev.filter((h) => h !== habitName) : [...prev, habitName]
    );
  };

  return (
    <div className="space-y-4">
      {habits.map((habit, index) => (
        <div key={index} className="flex items-center justify-between">
          <span className={`text-lg ${completedHabits.includes(habit.name) ? 'line-through' : ''}`}>
            {habit.name}
          </span>
          <Checkbox 
            checked={completedHabits.includes(habit.name)} 
            onChange={() => handleCompletion(habit.name)} 
          />
        </div>
      ))}
    </div>
  );
}
