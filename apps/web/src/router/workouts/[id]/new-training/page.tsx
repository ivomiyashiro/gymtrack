import { useNavigate, useParams } from "react-router";
import { TypographyH3, TrainingForm } from "@/components";

const NewTraining = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleCancel = () => navigate(`/workouts/${id}`);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/workouts/work");
  };

  return (
    <div className="h-full content-center">
      <TypographyH3>Add training</TypographyH3>
      <TrainingForm onCancel={handleCancel} onSubmit={handleSubmit} />
    </div>
  );
};
export default NewTraining;
