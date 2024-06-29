import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input</h2>
        <p className='text-stone-400 mb-4'>
          Oops... looks like you forgot to enter a value!!
        </p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button
              onClick={onCancel}
              className='text-stone-800 hover:text-stone-950'>
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className='bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md'>
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input ref={title} label='Title' type='text' />
          <Input ref={description} label='Description' isTextarea />
          <Input ref={dueDate} label='Due Date' type='date' />
        </div>
      </div>
    </>
  );
}
