import { useState } from 'react';
import { HabitForm } from './HabitForm';
import { HabitList } from './HabitList';

type Habit = {
    name: string;
    frequency: 'daily' | 'weekly'; // You can extend this based on your needs
  };

export function HabitTracker() {
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (habit: Habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-6">Habit Tracker</h1>
      <HabitForm onAdd={addHabit} />
      <div className="mt-8">
        <h2 className="text-xl mb-4">Your Habits</h2>
        <HabitList habits={habits} />
      </div>
    </div>
  );
}
