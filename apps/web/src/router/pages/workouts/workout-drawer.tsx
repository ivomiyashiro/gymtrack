import { forwardRef } from "react";
import { PlusIcon } from "lucide-react";

import { Workout } from "@/types";

import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Input,
  Label,
} from "@/components";

export const WorkoutDrawer = forwardRef<
  HTMLButtonElement,
  { workout?: Workout }
>(({ workout }, ref) => {
  return (
    <Drawer>
      <DrawerTrigger ref={ref} className="flex items-center gap-2 text-primary">
        <PlusIcon className="size-4" />
        Add
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-muted-foreground">
            {workout ? "Edit routine" : "Create Workout"}
          </DrawerTitle>
          <DrawerDescription></DrawerDescription>
          <div className="mt-6 flex flex-col gap-4 text-left">
            <div className="flex flex-col gap-2">
              <Label>Name</Label>
              <Input
                type="text"
                defaultValue={workout?.name}
                placeholder="Ex: Push day"
              />
            </div>
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Save routine</Button>
          <DrawerClose className="sr-only" />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
});

WorkoutDrawer.displayName = "RoutineDrawer";
