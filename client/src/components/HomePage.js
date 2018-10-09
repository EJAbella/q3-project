import React from 'react';
import HomeJumbotron from "./HomeJumbotron";
import MeetingList from "./MeetingList";
import NewMeetingForm from "./NewMeetingForm";

const HomePage = () => {
  return (
    <div>
      <HomeJumbotron/>
      <NewMeetingForm/>
      <MeetingList/>
    </div>
  );
};

export default HomePage;

