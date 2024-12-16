import { useRef, useState } from "react";
import { ChevronRightIcon } from "lucide-react";

import { Set } from "@/types";

import { PageLayout } from "@/layouts";

import { AnalyticsSetsCard, Card, SetInfo, TypographyP } from "@/components";
import { LoadSetDrawer } from "./load-set-drawer";

const data = [
  {
    setId: 1,
    reps: 2,
    weight: 2,
    rir: 2,
    createdAt: new Date(),
  },
  {
    setId: 2,
    reps: 1,
    weight: 1,
    rir: 1,
    createdAt: new Date(),
  },
];

const ExcercisePage = () => {
  const openDrawerButtonRef = useRef<HTMLButtonElement>(null);
  const [selectedExcercise, setSelectedExcersice] = useState<Set>();

  const handleAddSet = () => {
    openDrawerButtonRef.current?.click();
  };

  const handleRepeat = (set: Set) => alert("Reapt " + set.setId);

  const handleDeleteSet = (setId: number) => alert(`Delete ${setId}`);

  const handleEditSet = (set: Set) => {
    setSelectedExcersice(set);
    openDrawerButtonRef.current?.click();
  };

  const handleDrawerClose = () => {
    setSelectedExcersice(undefined);
  };

  return (
    <PageLayout title="Excercise" className="flex flex-col gap-10">
      <AnalyticsSetsCard
        data={data}
        onDelete={handleDeleteSet}
        onEdit={handleEditSet}
        onRepeat={handleRepeat}
      />
      <div>
        <TypographyP className="mb-2 flex items-center gap-2 text-muted-foreground">
          {new Date().toDateString()} <ChevronRightIcon className="size-4" />
        </TypographyP>
        <Card className="flex flex-col">
          {data.map((set) => (
            <SetInfo
              key={set.setId}
              allowDeleting={true}
              set={set}
              onDelete={() => handleDeleteSet(set.setId)}
              onEdit={() => handleEditSet(set)}
            />
          ))}
        </Card>
      </div>
      <LoadSetDrawer
        ref={openDrawerButtonRef}
        set={selectedExcercise}
        onClose={handleDrawerClose}
        onSaved={handleAddSet}
      />
    </PageLayout>
  );
};

export default ExcercisePage;
