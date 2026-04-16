import { cn } from "@/lib/utils";

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export function FormLabel({ className, children, ...props }: FormLabelProps) {
  return (
    <label
      className={cn(
        "text-caption font-semibold uppercase tracking-widest text-white/50",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}
