"use client";
import Modal from './ui/modal';

export const LoginForm = () => (

  <Modal overlayClassNames='data-[state=open]:animate-[modal-overlay-open_200ms] data-[state=closed]:animate-[modal-overlay-close_200ms]'>
    <Modal.Trigger>
      Login
    </Modal.Trigger>
    <Modal.Content contentClassNames="data-[state=open]:animate-[modal-open_200ms] data-[state=closed]:animate-[modal-close_200ms]">
      <Modal.Title>
        <p>Login to your account</p>
      </Modal.Title>
      <Modal.Description>
        <p>No need to remember long passwords anymore, magiclinks!</p>
      </Modal.Description>
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
          <Modal.Close asChild>
            <button className="w-full px-12 inline-flex h-[40px] items-center justify-center rounded-sm font-normal leading-none text-slate-200 bg-black/80 hover:bg-black/90 duration-150 ease-in">
              Login
            </button>
          </Modal.Close>
        </div>
      </form>
    </Modal.Content>
  </Modal>

);

