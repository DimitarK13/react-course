import { useState } from 'react';

export default function Login() {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    console.log(
      `User Email: ${userInput.email}\n User Password: ${userInput.password}`
    );
  }

  function handleUserInput(identifier, e) {
    setUserInput((prevValues) => {
      return {
        ...prevValues,
        [identifier]: e.target.value,
      };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            onChange={(e) => handleUserInput('email', e)}
            value={userInput.email}
          />
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            onChange={(e) => handleUserInput('password', e)}
            value={userInput.password}
          />
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
