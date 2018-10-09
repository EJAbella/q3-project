import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem, Badge, Button } from "reactstrap";
import { connect } from 'react-redux';
import {addAttendee } from "../actions/meetingActions";
import UpdateMeetingForm from "./UpdateMeetingForm";

const MeetingInfo = ({ meeting, addAttendee }) => {

  let attendees = [];
  if(meeting) {
    attendees = meeting.attendees.map(attendee => <ListGroupItem key={attendee.id} className="justify-content-between"><Link to={`/employee/${attendee.id}`}>{attendee.name}</Link> <Badge pill>{attendee.points}</Badge></ListGroupItem>)
  }

  return (
    <React.Fragment>
      {meeting &&
      <div>
        <img src={meeting.imgUrl} alt=""/>
        <h1>{meeting.title}</h1>
        <Button onClick={() => addAttendee(meeting.id, 3)} color="success">Sign Up</Button>
        <UpdateMeetingForm meeting={meeting}/>
        <Link to={`/employee/${meeting.presenter.id}`}><h4>{meeting.presenter.name}</h4></Link>
        <p>{meeting.about}</p>

        <h3>Current Attendees</h3>
        {attendees}
      </div>
      }
    </React.Fragment>
  );
};

export default connect(null, { addAttendee })(MeetingInfo);