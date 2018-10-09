import React from 'react';
import { Progress } from 'reactstrap';

const UserInfo = ({ employee }) => {

  let level = employee.points / 100
  let progress = employee.points - Math.floor(level) * 100;


  return (
    <React.Fragment>
      {employee &&
      <div>
        <h1>{employee.name}</h1>
        <p>{employee.bio}</p>

        <h3>Level: {Math.floor(level)}</h3>
        <Progress animated color="success" value={progress}/>
      </div>
      }
    </React.Fragment>
  );
};

export default UserInfo;