import { useNavigate } from "react-router";
import { RoutineForm, TypographyH3 } from "@/components";

const EditRoutine = () => {
  const navigate = useNavigate();

  const handleCancel = () => navigate("/routines");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/routines");
  };

  return (
    <div className="h-full content-center">
      <TypographyH3>Edit routine</TypographyH3>
      <RoutineForm onCancel={handleCancel} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditRoutine;
