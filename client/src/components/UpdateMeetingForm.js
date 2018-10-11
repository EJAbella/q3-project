import React, {Component} from 'react';
import { Button, Input, Form, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import {updateMeeting} from "../actions/meetingActions";

class UpdateMeetingForm extends Component {

  state = {
    toggleForm: false,
    meeting: {
      id: this.props.meeting.id,
      title: this.props.meeting.title,
      presenter: this.props.meeting.presenter.id,
      imgUrl: this.props.meeting.imgUrl,
      about: this.props.meeting.about
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
    return this.props.updateMeeting(this.state.meeting);
  }



  render() {

    let presenterList = this.props.employees.map(employee => <option key={employee.id} value={employee.id}>{employee.name}</option>)

    return (
      <React.Fragment>
        <br/>
        {localStorage.getItem('userId') == this.props.meeting.presenter.id && <Button onClick={() => this.setState({toggleForm: !this.state.toggleForm})} color="warning">Update Meeting Details</Button>}
        {this.state.toggleForm &&
        <Form onSubmit={this.handleSubmit} id='meeting-form'>
          <FormGroup>
            <Label for="title">Meeting Title</Label>
            <Input onChange={this.handleChange} value={this.state.meeting.title} type="text" name="title" id="title" placeholder="Title..." required/>
          </FormGroup>
          <FormGroup>
            <Label for="presenter">Presenter</Label>
            <Input onChange={this.handleChange} defaultValue={this.state.meeting.presenter} type="select" name="presenter" id="presenter" required>
              {presenterList}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="imgUrl">Img URL</Label>
            <Input onChange={this.handleChange} value={this.state.meeting.imgUrl} type="text" name="imgUrl" id="imgUrl" placeholder="Add image url..." required/>
          </FormGroup>
          <FormGroup>
            <Label for="about">Meeting Details</Label>
            <Input onChange={this.handleChange} value={this.state.meeting.about} type="textarea" name="about" id="about" required/>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.employees
  }
};

export default connect(mapStateToProps, { updateMeeting })(UpdateMeetingForm);