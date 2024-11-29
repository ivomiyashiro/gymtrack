import { useNavigate } from "react-router";
import { WorkoutForm, TypographyH3 } from "@/components";

const NewWorkout = () => {
  const navigate = useNavigate();

  const handleCancel = () => navigate("/workouts");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/workouts");
  };

  return (
    <div className="h-full content-center">
      <TypographyH3>Create new workout</TypographyH3>
      <WorkoutForm onCancel={handleCancel} onSubmit={handleSubmit} />
    </div>
  );
};

export default NewWorkout;
