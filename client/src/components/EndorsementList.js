import React from 'react';
import { ListGroup, InputGroupAddon, InputGroup, Input, Button } from 'reactstrap';
import Endorsement from "./Endorsement";
import { connect } from 'react-redux';
import {createEndorsement} from "../actions/employeeActions";

class EndorsementList extends React.Component {

  state = {
    employeeId: this.props.employee.id,
    endorsement: ''
  }

  handleClick = () => {
    this.setState({endorsement: ''})
    return this.props.createEndorsement(this.state);
  }

  render() {

    this.props.employee.endorsements.sort((a, b) => b.count - a.count);
    let endorsements = this.props.employee.endorsements.map(endorsement => <Endorsement key={endorsement.id}
                                                                                        employeeId={this.props.employee.id}
                                                                                        endorsement={endorsement}/>)

    return (
      <React.Fragment>
        <ListGroup>
          {endorsements}
        </ListGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend" onClick={this.handleClick}><Button>New Endorsement!</Button></InputGroupAddon>
          <Input onChange={e => this.setState({endorsement: e.target.value})} value={this.state.endorsement}/>
        </InputGroup>
      </React.Fragment>
    );
  }
};

export default connect(null, { createEndorsement })(EndorsementList);