import { ChevronRightIcon } from "lucide-react";
import { Set } from "@/types";
import { Card, SetInfo, TypographyP } from "@/components";

export const SetsCard = ({
  sets,
  createdAt,
}: {
  sets: Set[];
  createdAt: Date;
}) => {
  return (
    <div>
      <TypographyP className="mb-2 flex items-center gap-2 text-muted-foreground">
        {createdAt.toDateString()} <ChevronRightIcon className="size-4" />
      </TypographyP>
      <Card className="flex flex-col">
        {sets.map(({ setId, reps, weight, rir }) => (
          <SetInfo
            key={setId}
            allowDeleting={true}
            createdAt={new Date()}
            reps={reps}
            weight={weight}
            rir={rir}
          />
        ))}
      </Card>
    </div>
  );
};
