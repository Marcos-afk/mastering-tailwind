/* eslint-disable no-unused-vars */
'use client';

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react';

interface RootProps extends ComponentProps<'div'> {}

interface FileInputContextProps {
  id: string;
  files: File[];
  onFilesSelected: (files: File[], multiple?: boolean) => void;
  removeFile: (file: File) => void;
}

const FileInputContext = createContext({} as FileInputContextProps);

export function Root(props: RootProps) {
  const [files, setFiles] = useState<File[]>([]);

  const id = useId();

  const removeFile = (file: File) => {
    setFiles((prevFiles) => prevFiles.filter((prevFile) => prevFile !== file));
  };

  const onFilesSelected = (files: File[], multiple?: boolean) => {
    if (multiple) {
      setFiles((prevFiles) => [...prevFiles, ...files]);
    } else {
      setFiles(files);
    }
  };

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected, removeFile }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  );
}

export const useFileInput = () => useContext(FileInputContext);
