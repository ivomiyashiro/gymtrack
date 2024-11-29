import { useNavigate } from "react-router";
import { WorkoutForm, TypographyH3 } from "@/components";

const NewRoutine = () => {
  const navigate = useNavigate();

  const handleCancel = () => navigate("/routines");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/routines");
  };

  return (
    <div className="h-full content-center">
      <TypographyH3>Create new workout</TypographyH3>
      <WorkoutForm onCancel={handleCancel} onSubmit={handleSubmit} />
    </div>
  );
};

export default NewRoutine;
