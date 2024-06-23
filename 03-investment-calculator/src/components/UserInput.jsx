import Input from './Input';

export default function UserInput() {
  return (
    <div id='user-input'>
      <div className='input-group'>
        <Input label='Initial Investement' />
        <Input label='Annual Investement' />
      </div>

      <div className='input-group'>
        <Input label='Expected Return' />
        <Input label='Duration' />
      </div>
    </div>
  );
}
