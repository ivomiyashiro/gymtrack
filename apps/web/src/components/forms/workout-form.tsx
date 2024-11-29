import { Workout } from "@/types";
import {
  Form,
  Input,
  Label,
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components";

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
      <div className="flex flex-col gap-2">
        <Label>Days per week</Label>
        <Select defaultValue="1">
          <SelectTrigger>
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Form>
  );
};
