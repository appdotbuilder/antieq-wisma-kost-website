import * as React from "react"
import { cn } from "@/lib/utils"

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

interface SelectTriggerProps {
  className?: string;
  children: React.ReactNode;
}

interface SelectContentProps {
  children: React.ReactNode;
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

interface SelectValueProps {
  placeholder?: string;
}

interface ExtendedProps {
  value?: string;
  onValueChange?: (value: string) => void;
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}

const Select: React.FC<SelectProps> = ({ value, onValueChange, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="relative">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<ExtendedProps>, {
            value,
            onValueChange,
            isOpen,
            setIsOpen,
          });
        }
        return child;
      })}
    </div>
  );
};

const SelectTrigger: React.FC<SelectTriggerProps & ExtendedProps> = ({ className, children, setIsOpen, isOpen }) => {
  return (
    <button
      type="button"
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onClick={() => setIsOpen && setIsOpen(!isOpen)}
    >
      {children}
      <span className="ml-2">▼</span>
    </button>
  );
};

const SelectContent: React.FC<SelectContentProps & ExtendedProps> = ({ children, isOpen, onValueChange, setIsOpen }) => {
  if (!isOpen) return null;
  
  return (
    <div className="absolute top-full left-0 right-0 z-50 mt-1 max-h-96 overflow-auto rounded-md border bg-popover text-popover-foreground shadow-lg">
      <div className="p-1">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<ExtendedProps>, {
              onValueChange,
              setIsOpen,
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};

const SelectItem: React.FC<SelectItemProps & ExtendedProps> = ({ value, children, onValueChange, setIsOpen }) => {
  return (
    <button
      type="button"
      className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
      onClick={() => {
        if (onValueChange && value && setIsOpen) {
          onValueChange(value);
          setIsOpen(false);
        }
      }}
    >
      {children}
    </button>
  );
};

const SelectValue: React.FC<SelectValueProps & ExtendedProps> = ({ placeholder, value }) => {
  return <span>{value || placeholder}</span>;
};

export {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
}