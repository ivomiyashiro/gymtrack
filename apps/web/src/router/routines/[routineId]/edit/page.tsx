import { useNavigate } from "react-router";
import { TypographyH3, WorkoutForm } from "@/components";

const EditRoutine = () => {
  const navigate = useNavigate();

  const handleCancel = () => navigate("/routines");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/routines");
  };

  return (
    <div className="h-full content-center">
      <TypographyH3>Edit workout</TypographyH3>
      <WorkoutForm onCancel={handleCancel} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditRoutine;
