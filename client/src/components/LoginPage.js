import React from 'react';
import { Button } from 'reactstrap';

const LoginPage = ({ login }) => {
  return (
    <div className="login-container">
      <div className='login-content'>
        <h1>Welcome</h1>
        <Button onClick={login}>Log In</Button>
      </div>
    </div>
  );
};

export default LoginPage;