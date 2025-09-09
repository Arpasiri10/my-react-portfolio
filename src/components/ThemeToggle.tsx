import { memo } from "react";
import { useTheme } from "../hooks/useTheme";

const SunIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden
    >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor" />
    </svg>
);

type Props = {
    className?: string;
};

function ThemeToggleInternal({ className }: Props) {
    const { theme, toggleTheme } = useTheme();

    const isDark = theme === "dark";

    return (
        <button
            type="button"
            aria-label="Toggle color theme"
            onClick={toggleTheme}
            className={`relative inline-flex h-10 w-20 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${isDark ? "bg-neutral-800" : "bg-neutral-200"} ${className ?? ""}`}
        >
            <span
                className={`absolute left-3 select-none ${isDark ? "text-neutral-500" : "text-black"}`}
            >
                {!isDark && <SunIcon className="h-4 w-4" />}
            </span>
            <span
                className={`absolute right-3 select-none ${isDark ? "text-white" : "text-neutral-500"}`}
            >
                {isDark && <MoonIcon className="h-4 w-4" />}
            </span>

            <span
                className={`pointer-events-none inline-flex h-8 w-8 items-center justify-center rounded-full shadow transition-transform duration-300 ${isDark ? "bg-neutral-900 text-white translate-x-10" : "bg-white text-black translate-x-1"}`}
            >
                {isDark ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />}
            </span>
        </button>
    );
}

export const ThemeToggle = memo(ThemeToggleInternal);