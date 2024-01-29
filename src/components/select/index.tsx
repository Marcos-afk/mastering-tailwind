'use client';

import { ReactNode } from 'react';

import * as S from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends S.SelectProps {
  children: ReactNode;
  placeholder: string;
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <S.Root {...props}>
      <S.Trigger
        className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm
       outline-none focus-visible:border-violet-300 focus-visible:ring-4 focus-visible:ring-violet-100 data-[placeholder]:text-zinc-600"
      >
        <S.Value placeholder={placeholder} className="text-black" />
        <S.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </S.Icon>
      </S.Trigger>

      <S.Portal>
        <S.Content
          side="bottom"
          position="popper"
          className="animate-slideDownAndFade z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm "
          sideOffset={8}
        >
          <S.Viewport>{children}</S.Viewport>
        </S.Content>
      </S.Portal>
    </S.Root>
  );
}
