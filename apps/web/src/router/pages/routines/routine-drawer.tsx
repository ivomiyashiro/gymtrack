import { forwardRef } from "react";
import { PlusIcon } from "lucide-react";

import { Routine } from "@/types";
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
  Textarea,
} from "@/components";

export const RoutineDrawer = forwardRef<
  HTMLButtonElement,
  { routine?: Routine }
>(({ routine }, ref) => {
  return (
    <Drawer>
      <DrawerTrigger ref={ref} className="flex items-center gap-2 text-primary">
        <PlusIcon className="size-4" />
        Add
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-muted-foreground">
            {routine ? "Edit routine" : "Create routine"}
          </DrawerTitle>
          <DrawerDescription></DrawerDescription>
          <div className="mt-6 flex flex-col gap-4 text-left">
            <div className="flex flex-col gap-2">
              <Label>Name</Label>
              <Input
                type="text"
                defaultValue={routine?.name}
                placeholder="Ex: Hypertrophy workout"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Description</Label>
              <Textarea defaultValue={routine?.description} className="h-28" />
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

RoutineDrawer.displayName = "RoutineDrawer";
