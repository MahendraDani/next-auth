"use client";
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

export const LoginForm = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button >
        Login
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/50 fixed inset-0 data-[state=open]:animate-[modal-overlay-open_200ms] data-[state=closed]:animate-[modal-overlay-close_200ms]" />
      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white p-8 rounded-md data-[state=open]:animate-[modal-open_200ms] data-[state=closed]:animate-[modal-close_200ms] shadow-md">
        <Dialog.Title className="m-0 text-xl font-medium">
          Login to your Account
        </Dialog.Title>
        <Dialog.Description className="mt-[5px] mb-5 text-[15px] text-gray-700/70 leading-normal">
          No need to remember long passwords anymore, magiclinks!
        </Dialog.Description>
        <form>
          <fieldset className="flex flex-col items-start gap-1 text-black/70">
            <label className="" htmlFor="email">
              Email
            </label>
            <input
              className="w-full h-[40px] focus:text-black inline-flex items-center justify-center rounded-md px-2 border-[1.5px] border-slate-400/70 focus:outline-none focus:border-slate-400"
              placeholder="Pedro Duarte"
            />
          </fieldset>
          <div className="mt-[25px] flex w-full justify-center items-center">
            <Dialog.Close asChild>
              <button className="w-full px-12 inline-flex h-[40px] items-center justify-center rounded-sm font-normal leading-none text-slate-200 bg-black/80 hover:bg-black/90 duration-150 ease-in">
                Login
              </button>
            </Dialog.Close>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
