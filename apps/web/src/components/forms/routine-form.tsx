import { Routine } from "@/types";
import { Input, Label, Textarea, Form } from "@/components";

export const RoutineForm = ({
  routine,
  onCancel,
  onSubmit,
}: {
  routine?: Routine;
  onCancel: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <Form onSubmit={onSubmit} onCancel={onCancel}>
      <div className="flex flex-col gap-2">
        <Label>Name</Label>
        <Input
          type="text"
          defaultValue={routine?.name}
          placeholder="Ex: Hypertrophy workout"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Description</Label>
        <Textarea defaultValue={routine?.description} className="h-28" />
      </div>
    </Form>
  );
};
