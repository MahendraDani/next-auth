"use client";
import { FormEvent, useState } from 'react';
import Modal from './ui/modal';
import loginUser from '@/actions/login-user';
import Spinner from './ui/spinner';

export const LoginForm = () => {
  const [open, setOpen] = useState(false);
  return (
    <Modal open={open} setOpen={setOpen} overlayClassNames='data-[state=open]:animate-[modal-overlay-open_200ms] data-[state=closed]:animate-[modal-overlay-close_200ms]'>
      <Modal.Trigger>
        Login
      </Modal.Trigger>
      <Modal.Content contentClassNames="data-[state=open]:animate-[modal-open_200ms] data-[state=closed]:animate-[modal-close_200ms]">
        <Modal.Title>
          <span>Login to your account</span>
        </Modal.Title>
        <Modal.Description>
          <span>No need to remember long passwords anymore, magiclinks!</span>
        </Modal.Description>
        <Form afterSave={() => { setOpen(false) }} />
      </Modal.Content>
    </Modal>
  )
}


// All form submit logic should be hanlded in the beloew component
// NOTE: this component is important to mount and unmount dialog after each form submit and reset the saving state
function Form({ afterSave }: { afterSave: () => void }) {
  const [saving, setSaving] = useState(false);

  async function handleLoginForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSaving(true);

    let formData = new FormData(e.currentTarget);
    await loginUser(formData);
    afterSave();
  }

  return (
    <form onSubmit={handleLoginForm}>
      <fieldset disabled={saving} className="group flex flex-col items-start gap-1 text-black/70">
        <div className='w-full group-disabled:opacity-50'>
          <FormFields />
        </div>
        <div className="mt-[25px] flex w-full justify-center items-center">
          <button type='submit' className="w-full px-12 inline-flex h-[40px] items-center justify-center rounded-sm font-normal leading-none text-slate-200 bg-black/80 hover:bg-black/90 duration-150 ease-in group-disabled:pointer-events-none">
            <span className='group-disabled:hidden'>Login</span>
            <Spinner className='w-6 h-6 group-enabled:hidden dark:text-slate-200 fill-purple-500' />
          </button>
        </div>
      </fieldset>
    </form>
  )
}

// Should contain all form fields in a form
function FormFields() {
  return (
    <>
      <label className="" htmlFor="email">
        Email
      </label>
      <input
        className="w-full h-[40px] focus:text-black inline-flex items-center justify-center rounded-md px-2 border-[1.5px] border-slate-400/70 focus:outline-none focus:border-slate-400"
        placeholder="Pedro Duarte"
        name='email'
      />
    </>
  )
}

