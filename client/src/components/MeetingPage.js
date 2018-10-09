import React from 'react';
import { connect } from 'react-redux';
import MeetingInfo from "./MeetingInfo";

const MeetingPage = props => {
  let meeting = props.meeting.filter(meeting => meeting.id === parseInt(props.match.params.id))[0];

  return (
    <div>
      <MeetingInfo meeting={meeting}/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    meeting: state.meetings
  }
};

export default connect(mapStateToProps)(MeetingPage);