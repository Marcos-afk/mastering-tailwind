'use client';

import { ReactNode } from 'react';

import * as RadixSelect from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';

interface SelectProps {
  children: ReactNode;
  placeholder: string;
}

export function Select({ children, placeholder }: SelectProps) {
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger
        className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm
      outline-none data-[placeholder]:text-zinc-600"
      >
        <RadixSelect.Value placeholder={placeholder} className="text-black" />
        <RadixSelect.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          side="bottom"
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
          sideOffset={8}
        >
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
