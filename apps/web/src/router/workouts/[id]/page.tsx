import { useNavigate, useParams } from "react-router";
import { CalendarDaysIcon, PlusIcon } from "lucide-react";

import { PageLayout } from "@/layouts";
import { Button, TypographyH3, TypographyP } from "@/components";

const WorkoutPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClick = () => navigate(`/workouts/${id}/new-training`);

  return (
    <PageLayout title="Workout Page" prevUrl="/workouts">
      <div className="flex justify-between">
        <TypographyH3>Training days</TypographyH3>
        <Button
          variant="link"
          size="sm"
          className="text-primary"
          onClick={handleClick}
        >
          <PlusIcon />
          Add
        </Button>
      </div>
      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
        <CalendarDaysIcon className="size-16 text-secondary-foreground" />
        <div className="my-6 text-center">
          <TypographyH3 className="mb-1">Training days</TypographyH3>
          <TypographyP className="text-secondary-foreground">
            Create your workouts separated by days of the week and/or by muscle
            groups
          </TypographyP>
        </div>
        <Button onClick={handleClick}>Create training days</Button>
      </div>
    </PageLayout>
  );
};
export default WorkoutPage;
