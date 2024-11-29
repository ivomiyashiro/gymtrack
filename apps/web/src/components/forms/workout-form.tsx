import { Workout } from "@/types";
import { Input, Label, Textarea, Form } from "@/components";

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
    <Form onSubmit={onSubmit} onCancel={onCancel}>
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
    </Form>
  );
};
