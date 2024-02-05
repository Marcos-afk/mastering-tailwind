import { LogOut } from 'lucide-react';
import Image from 'next/image';

import { Button } from '../button';

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src="https://avatars.githubusercontent.com/u/72817154?v=4"
        className="h-10 w-10 rounded-full"
        alt=""
        width={40}
        height={40}
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Marcos André
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          andremarcos967@gmail.com
        </span>
      </div>

      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  );
}
