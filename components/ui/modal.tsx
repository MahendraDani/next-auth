"use client";
import { cn } from '@/lib/utils';
import * as Dialog from '@radix-ui/react-dialog';
import React, { ReactNode } from 'react';

export default function Modal({ children, open, setOpen, overlayClassNames }: { children: ReactNode, open?: boolean, setOpen?: (open: boolean) => void, overlayClassNames?: string }) {
  return (
    <Dialog.Root>
      <Dialog.Overlay className={cn("bg-black/50 fixed inset-0", overlayClassNames)} />
      {children}
    </Dialog.Root >
  )
}

function ModalContent({ children, contentClassNames }: { children: ReactNode, contentClassNames?: string }) {
  return (
    <Dialog.Portal>
      <Dialog.Content className={cn("fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white p-8 rounded-md shadow-md", contentClassNames)}>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  )
}

function ModalTitle({ children }: { children: ReactNode }) {
  return <Dialog.Title className="m-0 text-xl font-medium">
    {children}
  </Dialog.Title>
}

function ModalDescription({ children }: { children: ReactNode }) {
  return (
    <Dialog.Description className="mt-[5px] mb-5 text-[15px] text-gray-700/70 leading-normal">
      {children}
    </Dialog.Description>
  )
}
Modal.Trigger = Dialog.Trigger;
Modal.Content = ModalContent;
Modal.Title = ModalTitle;
Modal.Description = ModalDescription;
Modal.Close = Dialog.Close;
Modal.Overlay = Dialog.Overlay;
