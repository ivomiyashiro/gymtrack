import { useNavigate } from "react-router";
import { ChevronLeftIcon } from "lucide-react";

import { TypographyH1 } from "@/components";
import { cn } from "@/lib/utils";

const PageLayout = ({
  children,
  title,
  showPrevButton = true,
  prevUrl,
  className,
}: {
  children: React.ReactNode;
  title?: string;
  prevUrl?: string;
  showPrevButton?: boolean;
  className?: string;
}) => {
  const navigate = useNavigate();

  return (
    <div className="grid h-full grid-rows-[52px_1fr] py-6">
      <div>
        <div className="fixed left-0 top-0 w-full items-center bg-primary px-4 py-2">
          <div className="relative flex items-center justify-center">
            {showPrevButton && (
              <button
                className="absolute left-0 p-2"
                onClick={() => (prevUrl ? navigate(prevUrl) : navigate(-1))}
              >
                <ChevronLeftIcon />
              </button>
            )}
            {title && <TypographyH1 className="text-3xl">{title}</TypographyH1>}
          </div>
        </div>
      </div>
      <div className={cn("h-full", className)}>{children}</div>
    </div>
  );
};

export default PageLayout;
