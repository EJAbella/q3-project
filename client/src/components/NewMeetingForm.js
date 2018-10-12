import React, {Component} from 'react';
import { Button, Input, Form, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import {createMeeting} from "../actions/meetingActions";

class NewMeetingForm extends Component {

  state = {
    toggleForm: false,
    meeting: {
      title: '',
      presenter: 0,
      imgUrl: '',
      about: ''
    }
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      meeting: {
        ...this.state.meeting,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({toggleForm: false})
    return this.props.createMeeting(this.state.meeting);
  }



  render() {

    let presenterList = this.props.employees.map(employee => <option key={employee.id} value={employee.id}>{employee.name}</option>)

    return (
      <div id='new-meeting-form'>
        <button class='sliding-button' onClick={() => this.setState({toggleForm: !this.state.toggleForm})}>Create New Meeting</button>
        {this.state.toggleForm &&
        <Form onSubmit={this.handleSubmit} id='meeting-form'>
          <FormGroup>
            <Label for="title">Meeting Title</Label>
            <Input onChange={this.handleChange} autocomplete='off' type="text" name="title" id="title" placeholder="Title..." required/>
          </FormGroup>
          <FormGroup>
            <Label for="presenter">Presenter</Label>
            <Input onChange={this.handleChange} type="select" name="presenter" id="presenter" required>
              <option value="" disabled selected>Select a Presenter</option>
              {presenterList}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="imgUrl">Img URL</Label>
            <Input onChange={this.handleChange} autocomplete='off' type="text" name="imgUrl" id="imgUrl" placeholder="Add image url..." required/>
          </FormGroup>
          <FormGroup>
            <Label for="about">Meeting Details</Label>
            <Input onChange={this.handleChange} type="textarea" name="about" id="about" required/>
          </FormGroup>
          <Button className='sliding-button'>Submit</Button>
        </Form>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.employees
  }
};

export default connect(mapStateToProps, { createMeeting })(NewMeetingForm);




