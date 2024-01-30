'use client';

import { useAutoAnimate } from '@formkit/auto-animate/react';

import { FileItem } from './file-item';
import { useFileInput } from './root';

export function FileList() {
  const { files } = useFileInput();
  const [parent] = useAutoAnimate();

  const randomState = () => {
    const states = ['progress', 'complete', 'error'];
    return states[Math.floor(Math.random() * states.length)];
  };

  return (
    <div className="mt-4 flex flex-col gap-3" ref={parent}>
      {files.map((file) => (
        <FileItem
          key={file.name}
          name={file.name}
          size={file.size}
          state={randomState() as 'progress' | 'complete' | 'error' | undefined}
        />
      ))}
    </div>
  );
}
