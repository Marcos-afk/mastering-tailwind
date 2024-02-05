export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5 dark:bg-zinc-800">
      <div className="flex flex-col gap-1">
        <span className="text-sm/5 font-medium leading-5 text-violet-700 dark:text-zinc-100">
          Used space
        </span>
        <span className="text-sm/5 font-medium leading-5 text-violet-500 dark:text-zinc-400">
          Your team has used 80% of your available space. Need more?
        </span>
        <div className="mt-3 h-2 w-full rounded-full bg-violet-100 dark:bg-zinc-600">
          <div className="h-2 w-4/5 rounded-full bg-violet-600 dark:bg-violet-400" />
        </div>

        <div className="mt-3 flex gap-3">
          <button
            type="button"
            className="text-sm font-medium text-violet-500 transition-colors hover:text-violet-700
            dark:text-violet-300 dark:hover:text-violet-100"
          >
            Dismiss
          </button>
          <button
            type="button"
            className="text-sm font-medium text-violet-700 transition-colors hover:text-violet-900
            dark:text-zinc-300 dark:hover:text-zinc-100"
          >
            Upgrade plan
          </button>
        </div>
      </div>
    </div>
  );
}
