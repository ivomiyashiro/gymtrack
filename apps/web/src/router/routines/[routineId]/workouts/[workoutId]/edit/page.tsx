import { useNavigate, useParams } from "react-router";
import { TypographyH3, WorkoutForm } from "@/components";

const EditWorkout = () => {
  const navigate = useNavigate();
  const { routineId } = useParams();

  const handleCancel = () => navigate(`/routines/${routineId}/workouts`);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/routines/${routineId}/workouts`);
  };

  return (
    <div className="h-full content-center">
      <TypographyH3>Add workout</TypographyH3>
      <WorkoutForm onCancel={handleCancel} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditWorkout;
