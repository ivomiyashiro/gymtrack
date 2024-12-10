export type Set = {
  setId: number;
  rir: number;
  weight: number;
};

export type WorkoutExcercise = {
  workoutExcerciseId: number;
  name: string;
  personalRecord: {
    weight: number;
    reps: number;
  };
};

export type Workout = {
  workoutId: string;
  name: string;
  exercises: WorkoutExcercise[];
};

export type Routine = {
  routineId: number;
  name: string;
  description: string;
  workouts: Workout[];
};
