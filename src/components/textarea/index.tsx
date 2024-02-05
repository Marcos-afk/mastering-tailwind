import { ComponentProps } from 'react';

interface TextAreaProps extends ComponentProps<'textarea'> {}

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none
      focus-visible:border-violet-300 focus-visible:ring-4 focus-visible:ring-violet-100
      dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-400
      dark:focus:border-violet-500 dark:focus:ring-violet-600/10"
      {...props}
    />
  );
}
