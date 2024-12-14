import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronRightIcon,
  GitCompareArrowsIcon,
} from "lucide-react";
import { calculateSetAnalytics } from "@/utils";
import {
  Card,
  Progress,
  ProgressBgColors,
  TypographyP,
  SetInfo,
} from "@/components";

const AnalyticProgressBar = ({
  bgColor,
  prevValue,
  title,
  value,
}: {
  bgColor: ProgressBgColors;
  prevValue: number;
  title: string;
  value: number;
}) => {
  const { progressPorcentage, progressBarValue, progress } =
    calculateSetAnalytics({
      value,
      prevValue,
    });

  return (
    <div className="flex w-full gap-3">
      <Progress
        value={progressBarValue}
        bgColor={bgColor}
        className="h-18 w-2"
      />
      <div className="flex h-full flex-col justify-between text-muted-foreground">
        <span className="text-foreground">{title}</span>
        <span>{value}</span>
        <span
          className={`flex items-center gap-1 ${progress ? "text-green-500" : ""}`}
        >
          {progress ? (
            <ArrowUpIcon className="size-4" />
          ) : (
            <ArrowDownIcon className="size-4" />
          )}
          {progressPorcentage}
        </span>
      </div>
    </div>
  );
};

export const AnalyticsSetsCard = () => {
  return (
    <div>
      <TypographyP className="mb-2 flex items-center gap-2 text-muted-foreground">
        Today <ChevronRightIcon className="size-4" />
      </TypographyP>
      <Card className="flex-col items-start">
        <div className="w-full p-4">
          <TypographyP className="flex items-center gap-2 text-muted-foreground">
            <GitCompareArrowsIcon className="size-5" />
            Compared to previuos
          </TypographyP>
          <div className="mb-6 mt-4 grid w-full grid-cols-2 grid-rows-2 gap-4">
            <AnalyticProgressBar
              bgColor="primary"
              prevValue={3}
              title="Sets"
              value={3}
            />
            <AnalyticProgressBar
              bgColor="blue"
              prevValue={25}
              title="Reps"
              value={30}
            />
            <AnalyticProgressBar
              bgColor="green"
              prevValue={850}
              title="Volumen"
              value={975}
            />
            <AnalyticProgressBar
              bgColor="orange"
              prevValue={3}
              title="Kg/Rep"
              value={20}
            />
          </div>
        </div>
        <SetInfo
          allowRepeting={true}
          allowDeleting={true}
          createdAt={new Date()}
          reps={10}
          weight={80}
          rir={2}
        />
        <SetInfo
          allowRepeting={true}
          allowDeleting={true}
          createdAt={new Date()}
          reps={10}
          weight={110}
          rir={2}
        />
      </Card>
    </div>
  );
};
