import React from 'react'

function RegisterPage() {
  return (
    <form className='register'>
    <input type='text' placeholder='username'/>
    <input type='password' placeholder='password'/>
    <button>Register</button>
</form>
  );
}

export default RegisterPage