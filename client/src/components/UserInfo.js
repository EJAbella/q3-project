import React from 'react';
import { Progress } from 'reactstrap';

const UserInfo = ({ employee }) => {

  let level = employee.points / 100
  let progress = employee.points - Math.floor(level) * 100;


  return (
    <React.Fragment>
      {employee &&
      <React.Fragment>
        <div className='col-3'>
          <img src={employee.img} alt=""/>
          <h2>Level: {Math.floor(level)}</h2>
        </div>
        <div id='user-info' className='col-9'>
          <h1>{employee.name}</h1>
          <p>{employee.bio}</p>
          <Progress animated color="success" value={progress}/>
        </div>


      </React.Fragment>
      }
    </React.Fragment>
  );
};

export default UserInfo;