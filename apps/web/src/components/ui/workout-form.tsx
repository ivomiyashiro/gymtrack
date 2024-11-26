import { Button, Input, Label, Textarea } from "@/components/ui";
import { Workout } from "@/types";

export const WorkoutForm = ({
  workout,
  onCancel,
  onSubmit,
}: {
  workout?: Workout;
  onCancel: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form className="my-6 flex flex-col gap-4" onSubmit={onSubmit}>
      <div className="flex flex-col gap-2">
        <Label>Name</Label>
        <Input
          type="text"
          defaultValue={workout?.name}
          placeholder="Ex: Hypertrophy workout"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Description</Label>
        <Textarea defaultValue={workout?.description} className="h-28" />
      </div>
      <div className="flex gap-2">
        <Button
          type="button"
          size="sm"
          variant="secondary"
          className="w-full"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button type="submit" size="sm" variant="default" className="w-full">
          Save
        </Button>
      </div>
    </form>
  );
};
