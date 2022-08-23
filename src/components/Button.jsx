import Link from "next/link";
import clsx from "clsx";

const baseStyles = {
  solid:
    "inline-flex justify-center rounded-2xl py-1 px-4 text-sm   tracking-tight shadow-sm focus:outline-none",
  outline:
    "inline-flex justify-center rounded-2xl border py-[calc(theme(spacing.1)-1px)] px-[calc(theme(spacing.4)-1px)] text-sm   tracking-tight focus:outline-none",
};

const variantStyles = {
  solid: {
    slate:
      "bg-primaryPurple text-white hover:bg-lightPurple focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkPurple active:bg-lightPurple active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900",
    blue: "bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600",
    white:
      "bg-white text-primaryPurple hover:text-lightPurple focus-visible:text-lightPurple focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-lightPurple disabled:opacity-40 disabled:hover:text-blue-600",
  },
  outline: {
    slate:
      "border-primaryPurple text-primaryPurple hover:border-lightPurple hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lightPurple active:border-lightPurple active:bg-slate-50 active:text-lightPurple disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-transparent",
    blue: "border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:text-blue-600/70 disabled:opacity-40 disabled:hover:border-blue-300 disabled:hover:bg-transparent",
  },
};

export function Button({
  variant = "solid",
  color = "slate",
  className,
  ...props
}) {
  return (
    <button
      className={clsx(
        baseStyles[variant],
        variantStyles[variant][color],
        className
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  variant = "solid",
  color = "slate",
  href,
  className,
  ...props
}) {
  return (
    <Link href={href}>
      <a
        className={clsx(
          baseStyles[variant],
          variantStyles[variant][color],
          className
        )}
        {...props}
      />
    </Link>
  );
}
