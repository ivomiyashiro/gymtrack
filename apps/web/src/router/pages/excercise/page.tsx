import { PageLayout } from "@/layouts";

import { AnalyticsSetsCard, SetsCard } from "@/components";
import { LoadSetDrawer } from "./load-set-drawer";

const ExcercisePage = () => {
  return (
    <PageLayout title="Excercise" className="flex flex-col gap-10">
      <AnalyticsSetsCard />
      <SetsCard
        createdAt={new Date()}
        sets={[
          {
            setId: 1,
            reps: 1,
            weight: 1,
            rir: 1,
          },
          {
            setId: 2,
            reps: 1,
            weight: 1,
            rir: 1,
          },
        ]}
      />
      <LoadSetDrawer />
    </PageLayout>
  );
};

export default ExcercisePage;
