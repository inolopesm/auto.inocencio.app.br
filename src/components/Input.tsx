import { twMerge } from "tailwind-merge";

interface InputProps extends React.ComponentProps<"input"> {
  onValueChange?: (value: string) => void;
}

export function Input({
  className,
  onChange,
  onValueChange,
  ...props
}: InputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }

    if (onValueChange) {
      onValueChange(event.target.value);
    }
  };

  return (
    <input
      onChange={handleChange}
      className={twMerge(
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-900 dark:placeholder:text-gray-400",
        className,
      )}
      {...props}
    />
  );
}
