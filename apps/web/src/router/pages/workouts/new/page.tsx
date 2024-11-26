import { useNavigate } from "react-router";
import { Button, Input, Label, Textarea, TypographyH3 } from "@/components/ui";

const NewWorkout = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/workouts");
  };

  return (
    <div className="h-full content-center">
      <TypographyH3>Create new workout</TypographyH3>
      <form className="my-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Label>Name</Label>
          <Input type="text" placeholder="Ex: Hypertrophy workout" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Description</Label>
          <Textarea className="h-28" />
        </div>
        <div className="flex gap-2">
          <Button
            type="button"
            size="sm"
            variant="secondary"
            className="w-full"
            onClick={() => navigate("/workouts")}
          >
            Cancel
          </Button>
          <Button type="submit" size="sm" variant="default" className="w-full">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
export default NewWorkout;
