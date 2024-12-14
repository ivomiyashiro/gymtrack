export const calculateSetAnalytics = ({
  value,
  prevValue,
}: {
  value: number;
  prevValue: number;
}) => {
  const progress: boolean = value >= prevValue;
  let progressBarValue: number;
  let progressPorcentage: string;

  const difference = value - prevValue;
  const percentageDifference =
    prevValue === 0
      ? 100
      : ((Math.abs(difference) / prevValue) * 100).toFixed(1);

  progressBarValue = Math.min(100, (value / prevValue) * 100);

  if (difference < 0) {
    progressPorcentage = `${Math.abs(difference).toFixed(1)} (${percentageDifference}%)`;
  } else if (difference === 0) {
    progressPorcentage = "(0%)";
  } else {
    progressPorcentage = `${difference.toFixed(1)} (${percentageDifference}%)`;
  }

  return {
    progress,
    progressBarValue,
    progressPorcentage,
  };
};
