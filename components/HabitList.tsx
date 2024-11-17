import { useState } from 'react';
import { Checkbox } from '@shadcn/ui';

export function HabitList({ habits }) {
  const [completedHabits, setCompletedHabits] = useState([]);

  const handleCompletion = (habit) => {
    setCompletedHabits((prev) =>
      prev.includes(habit) ? prev.filter((h) => h !== habit) : [...prev, habit]
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
