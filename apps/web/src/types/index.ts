export type Set = {
  setId: string;
  reps: {
    min: number;
    max: number;
  };
  rir: number;
  weight: number;
};

export type Exercise = {
  exerciseId: string;
  name: string;
  sets: Set[];
  restBetweenSets: number;
  notes: string;
};

export type Workout = {
  workoutId: string;
  name: string;
  daysPerWeek: number;
  exercises: Exercise[];
};

export type Routine = {
  routineId: number;
  name: string;
  description: string;
  workouts: Workout[];
};
