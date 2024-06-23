import Input from './Input';

export default function UserInput({ onUpdate }) {
  return (
    <div id='user-input'>
      <div className='input-group'>
        <Input handleUpdate={onUpdate} label='Initial Investment' />
        <Input handleUpdate={onUpdate} label='Annual Investment' />
      </div>

      <div className='input-group'>
        <Input handleUpdate={onUpdate} label='Expected Return' />
        <Input handleUpdate={onUpdate} label='Duration' />
      </div>
    </div>
  );
}
