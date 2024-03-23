"use client";
import * as Dialog from '@radix-ui/react-dialog';
import React, { ReactNode } from 'react';

export default function Modal({ children, open, setOpen }: { children: ReactNode, open?: boolean, setOpen?: (open: boolean) => void }) {
  return (
    <Dialog.Root>
      <Dialog.Overlay className="bg-black/50 fixed inset-0 data-[state=open]:animate-[modal-overlay-open_200ms] data-[state=closed]:animate-[modal-overlay-close_200ms]" />
      {children}
    </Dialog.Root >
  )
}

function ModalContent({ children }: { children: ReactNode }) {
  return (
    <Dialog.Portal>
      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white p-8 rounded-md data-[state=open]:animate-[modal-open_200ms] data-[state=closed]:animate-[modal-close_200ms] shadow-md">
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
