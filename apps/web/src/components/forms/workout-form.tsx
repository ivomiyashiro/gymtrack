import { Workout } from "@/types";
import { Form, Input, Label } from "@/components";

export const WorkoutForm = ({
  workout,
  onSubmit,
  onCancel,
}: {
  workout?: Workout;
  onCancel: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <Form className="gap-8" onSubmit={onSubmit} onCancel={onCancel}>
      <div className="flex flex-col gap-2">
        <Label>Name</Label>
        <Input
          type="text"
          defaultValue={workout?.name}
          placeholder="Ex: Push day"
        />
      </div>
    </Form>
  );
};
