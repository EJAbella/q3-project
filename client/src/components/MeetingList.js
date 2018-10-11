import React from 'react';
import Meeting from "./Meeting";
import { connect } from 'react-redux';

const MeetingList = props => {

  let meetingList = props.meetings.map(meeting => <Meeting key={meeting.id} meeting={meeting}/>);

  return (
    <div id='card-container'>
      {meetingList}
    </div>
  );
};

const mapStateToProps = state => {
  return({
    meetings: state.meetings
  })
};

export default connect(mapStateToProps)(MeetingList);