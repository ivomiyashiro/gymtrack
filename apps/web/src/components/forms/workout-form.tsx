import { Workout } from "@/types";
import { Form, Input, Label, Checkbox } from "@/components";

const DIAS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

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
      <div className="flex flex-col gap-6">
        <Label>Training day(s)</Label>
        <div className="flex justify-between">
          {DIAS.map((dia) => (
            <div
              key={dia}
              className="flex flex-col items-center justify-center gap-2"
            >
              <Label htmlFor={dia} className="text-xs">
                {dia}
              </Label>
              <Checkbox id={dia} />
            </div>
          ))}
        </div>
      </div>
    </Form>
  );
};
