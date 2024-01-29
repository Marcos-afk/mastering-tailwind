'use client';

import * as S from '@radix-ui/react-select';
import { Check } from 'lucide-react';

interface SelectItemProps extends S.SelectItemProps {
  text: string;
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <S.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
      {...props}
    >
      <S.ItemText className="text-black">{text}</S.ItemText>
      <S.ItemIndicator>
        <Check className="h-4 w-4 text-violet-600" />
      </S.ItemIndicator>
    </S.Item>
  );
}
