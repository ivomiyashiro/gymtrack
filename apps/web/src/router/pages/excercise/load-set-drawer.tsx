import { useRef, useState } from "react";
import { PlusIcon } from "lucide-react";

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
  InputCounter,
  NumericKeyboard,
} from "@/components";

type InputSetNameType = "reps" | "weight" | "rir";
type SetValuesType = Record<InputSetNameType, number>;

export const LoadSetDrawer = () => {
  const DEFAULT_FOCUSED: InputSetNameType = "reps";
  const DEFAULT_SET_VALUES: SetValuesType = {
    reps: 0,
    weight: 0,
    rir: 0,
  };

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isNumericKeyboardVisible, setNumericKeyboardVisible] = useState(true);
  const [focusInput, setFocusInput] =
    useState<InputSetNameType>(DEFAULT_FOCUSED);
  const [setValue, setSetValue] = useState<SetValuesType>(DEFAULT_SET_VALUES);

  const handleValueChange = (value: number, key: string) => {
    setSetValue((prev) => ({ ...prev, [key]: value }));
  };

  const handleClose = () => {
    setNumericKeyboardVisible(false);
  };

  const handleFocusNext = () => {
    const keys = Object.keys(setValue) as InputSetNameType[];
    setFocusInput((prev) => keys[keys.indexOf(prev) + 1] || keys[0]);
  };

  const handleFocusInput = (inputName: InputSetNameType) => {
    setNumericKeyboardVisible(true);
    setFocusInput(inputName);
  };

  const handleSave = () => {
    setSetValue(DEFAULT_SET_VALUES);
    closeButtonRef.current?.click();
  };

  return (
    <Drawer onClose={() => setNumericKeyboardVisible(false)}>
      <DrawerTrigger className="fixed bottom-16 left-1/2 flex size-0 h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-primary p-0">
        <PlusIcon className="!size-12" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-muted-foreground">
            Reps, weight and RIR
          </DrawerTitle>
          <DrawerDescription></DrawerDescription>
          <div className="mt-6 flex flex-col gap-4">
            <InputCounter
              label="reps"
              name="reps"
              steps={[1]}
              value={setValue.reps}
              isFocus={focusInput === "reps"}
              onFocus={(e) =>
                handleFocusInput(e.target.name as InputSetNameType)
              }
              onValueChange={handleValueChange}
            />
            <InputCounter
              label="kg"
              name="weight"
              steps={[1, 5]}
              value={setValue.weight}
              isFocus={focusInput === "weight"}
              onFocus={(e) =>
                handleFocusInput(e.target.name as InputSetNameType)
              }
              onValueChange={handleValueChange}
            />
            <InputCounter
              label="RIR"
              name="rir"
              steps={[1]}
              value={setValue.rir}
              isFocus={focusInput === "rir"}
              onFocus={(e) =>
                handleFocusInput(e.target.name as InputSetNameType)
              }
              onValueChange={handleValueChange}
            />
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <Button onClick={handleSave}>Save set</Button>
          <DrawerClose ref={closeButtonRef} className="sr-only" />
        </DrawerFooter>
        <NumericKeyboard
          value={setValue[focusInput]}
          currentFocusInputKey={focusInput}
          isVisible={isNumericKeyboardVisible}
          className="mt-4"
          onClose={handleClose}
          onFocusNext={handleFocusNext}
          onValueChange={handleValueChange}
        />
      </DrawerContent>
    </Drawer>
  );
};
