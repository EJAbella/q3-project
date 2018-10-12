import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const HomeJumbotron = (props) => {
  return (
    <div>
      <Jumbotron id='jumbotron'>
        <h1 className="display-3">Meetings</h1>
        <p className="lead">A simple way to drive positive engagement in team settings.</p>
        <hr className="my-2" />
        <p>Select a meeting from below to view additional information.</p>
      </Jumbotron>
    </div>
  );
};

export default HomeJumbotron;