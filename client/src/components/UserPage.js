import React from 'react';
import { connect } from 'react-redux';
import UserInfo from "./UserInfo";
import EndorsementList from "./EndorsementList";

const UserPage = props => {

  let employee = props.employees.filter(employee => employee.id === parseInt(props.match.params.id))[0];

  return (
    <React.Fragment>
      {employee &&
      <div>
        <UserInfo employee={employee}/>

        <h3>Endorsements Received:</h3>
        <EndorsementList employee={employee}/>
      </div>
      }
    </React.Fragment>
  );
};


const mapStateToProps = state => {
  return {
    employees: state.employees
  }
};

export default connect(mapStateToProps)(UserPage);