import React from 'react';
import { ListGroupItem, Badge } from 'reactstrap';
import { connect } from 'react-redux';
import {updateEndorsement} from "../actions/employeeActions";

const Endorsement = ({ endorsement, updateEndorsement, employeeId }) => {

  return (
    <ListGroupItem className="justify-content-between">
      {endorsement.type} <Badge pill>{endorsement.count}</Badge>
      <a onClick={() => updateEndorsement(employeeId, endorsement.id)}><i className="fas fa-angle-double-up"></i></a>
    </ListGroupItem>
  );
};


export default connect(null, { updateEndorsement })(Endorsement);