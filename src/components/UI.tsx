import React from "react";

type FlexProps = {
  direction?: "row" | "col";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: boolean;
  gap?: string;
  className?: string;
  children?: React.ReactNode;
};

export function Flex({
  direction = "col",
  align = "start",
  justify = "start",
  wrap = false,
  gap = "",
  className = "",
  children,
}: FlexProps) {
  const dirClass = direction === "row" ? "flex-row" : "flex-col";

  let alignClass = "items-start";
  if (align === "center") alignClass = "items-center";
  else if (align === "end") alignClass = "items-end";
  else if (align === "stretch") alignClass = "items-stretch";
  else if (align === "baseline") alignClass = "items-baseline";

  let justifyClass = "justify-start";
  if (justify === "center") justifyClass = "justify-center";
  else if (justify === "end") justifyClass = "justify-end";
  else if (justify === "between") justifyClass = "justify-between";
  else if (justify === "around") justifyClass = "justify-around";
  else if (justify === "evenly") justifyClass = "justify-evenly";

  const wrapClass = wrap ? "flex-wrap" : "flex-nowrap";

  return (
    <div className={`flex ${dirClass} ${alignClass} ${justifyClass} ${wrapClass} ${gap} ${className}`}>
      {children}
    </div>
  );
}

type RowProps = {
  gap?: string;
  className?: string;
  children?: React.ReactNode;
};

export function Row({ gap = "", className = "", children }: RowProps) {
  return (
    <Flex direction="row" gap={gap} className={className}>
      {children}
    </Flex>
  );
}

type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Card({ className = "", children }: CardProps) {
  const base =
    "rounded-xl border border-neutral-200/70 dark:border-neutral-800/70 bg-white dark:bg-black";
  return <div className={`${base} ${className}`}>{children}</div>;
}

type ButtonProps = {
  variant?: "primary" | "secondary" | "neutral" | "purple" | "greenBlue" | "grayDark";
  className?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export function Button({
  variant = "primary",
  className = "",
  children,
  href,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-md transition text-white";

  let variantClass = "bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90";
  if (variant === "secondary") variantClass = "bg-gradient-to-r from-slate-600 to-slate-800 hover:opacity-90";
  else if (variant === "neutral")
    variantClass =
      "bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-white hover:opacity-90";
  else if (variant === "greenBlue") variantClass = "bg-gradient-to-r from-green-500 to-blue-600 hover:opacity-90";
  else if (variant === "grayDark") variantClass = "bg-gradient-to-r from-gray-700 to-gray-900 hover:opacity-90";

  const classes = `${base} ${variantClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default { Flex, Row, Card, Button };
