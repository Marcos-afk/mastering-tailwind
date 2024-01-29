'use client';

import { useMemo } from 'react';

import { User } from 'lucide-react';
import Image from 'next/image';

import { useFileInput } from './root';

export function ImagePreview() {
  const { files } = useFileInput();

  const previewURL = useMemo(() => {
    if (!files.length || files.length === 0) {
      return null;
    }

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    );
  }

  return (
    <Image
      src={previewURL}
      alt="Preview"
      width={64}
      height={64}
      className="h-16 w-16 rounded-full object-cover"
    />
  );
}