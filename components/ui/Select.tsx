"use client";

import * as React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { cn } from "@/lib/utils";

/* ─── Root re-exports ──────────────────────────────────────────────────────── */
export const Select = RadixSelect.Root;
export const SelectValue = RadixSelect.Value;
export const SelectGroup = RadixSelect.Group;

/* ─── Trigger ──────────────────────────────────────────────────────────────── */
export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Trigger>
>(({ className, children, ...props }, ref) => (
  <RadixSelect.Trigger
    ref={ref}
    className={cn(
      "flex w-full items-center justify-between",
      "bg-transparent pb-2",
      "text-body-sm",
      "border-b border-white/[0.12]",
      "focus:outline-none focus:border-rainbow-red",
      "transition-colors duration-200",
      "cursor-pointer",
      // placeholder colour handled via data attribute
      "data-[placeholder]:text-white/30 text-white/65",
      className
    )}
    {...props}
  >
    {children}
    <RadixSelect.Icon>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="text-white/35 shrink-0"
      >
        <path
          d="M2.5 4.5L6 8L9.5 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </RadixSelect.Icon>
  </RadixSelect.Trigger>
));
SelectTrigger.displayName = "SelectTrigger";

/* ─── Content (dropdown portal) ───────────────────────────────────────────── */
export const SelectContent = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Content>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <RadixSelect.Portal>
    <RadixSelect.Content
      ref={ref}
      position={position}
      sideOffset={8}
      className={cn(
        "z-50 min-w-[var(--radix-select-trigger-width)]",
        "rounded-xl bg-[#1c1c1e] border border-white/[0.08]",
        "shadow-lg shadow-black/40",
        "overflow-hidden",
        "animate-in fade-in-0 zoom-in-95",
        className
      )}
      {...props}
    >
      <RadixSelect.Viewport className="p-1">{children}</RadixSelect.Viewport>
    </RadixSelect.Content>
  </RadixSelect.Portal>
));
SelectContent.displayName = "SelectContent";

/* ─── Item ─────────────────────────────────────────────────────────────────── */
export const SelectItem = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Item>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Item>
>(({ className, children, ...props }, ref) => (
  <RadixSelect.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-pointer select-none items-center",
      "rounded-lg px-3 py-2",
      "text-body-sm text-white/65",
      "outline-none",
      "transition-colors duration-150",
      "hover:bg-white/[0.06] hover:text-white",
      "data-[state=checked]:text-rainbow-red data-[state=checked]:bg-rainbow-red/10",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
      className
    )}
    {...props}
  >
    <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
  </RadixSelect.Item>
));
SelectItem.displayName = "SelectItem";
