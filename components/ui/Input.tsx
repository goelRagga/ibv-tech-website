"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* ─── Base underline field styles ─────────────────────────────────────────── */
const fieldBase = [
  "w-full bg-transparent pb-2",
  "text-body-sm text-white/65 placeholder:text-white/30 placeholder:font-normal",
  "border-b border-white/[0.12]",
  "focus:outline-none focus:border-rainbow-red",
  "transition-colors duration-200",
  "disabled:cursor-not-allowed disabled:opacity-50",
].join(" ");

/* ─── Input ────────────────────────────────────────────────────────────────── */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(fieldBase, className)}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

/* ─── Textarea ─────────────────────────────────────────────────────────────── */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(fieldBase, "resize-none", className)}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
