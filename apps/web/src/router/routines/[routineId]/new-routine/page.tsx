import { useNavigate, useParams } from "react-router";
import { TypographyH3, WorkoutForm } from "@/components";

const NewRoutine = () => {
  const navigate = useNavigate();
  const { routineId } = useParams();

  const handleCancel = () => navigate(`/routines/${routineId}`);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/routines");
  };

  return (
    <div className="h-full content-center">
      <TypographyH3>Add workout</TypographyH3>
      <WorkoutForm onCancel={handleCancel} onSubmit={handleSubmit} />
    </div>
  );
};

export default NewRoutine;
