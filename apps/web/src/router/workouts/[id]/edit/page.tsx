import { TypographyH3, WorkoutForm } from "@/components/ui";
import { useNavigate, useParams, useSearchParams } from "react-router";

const EditWorkout = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? "";
  const description = searchParams.get("description") ?? "";

  const handleCancel = () => navigate("/workouts");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/workouts");
  };

  return (
    <div className="h-full content-center">
      <TypographyH3>Edit workout</TypographyH3>
      <WorkoutForm
        workout={{ id: Number(id), name, description }}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
export default EditWorkout;
