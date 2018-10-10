import React from 'react';
import { Button } from 'reactstrap';

const LoginPage = ({ login }) => {
  return (
    <div>
      Login Here
      <Button onClick={login}>Log In</Button>
    </div>
  );
};

export default LoginPage;