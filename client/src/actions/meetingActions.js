import axios from 'axios';
import {
  ADD_ATTENDEE_FAILED,
  ADD_ATTENDEE_SUCCESS,
  ADDING_ATTENDEE,
  CREATE_MEETING_FAILED,
  CREATE_MEETING_SUCCESS,
  CREATING_MEETING, DELETE_MEETING_FAILED, DELETE_MEETING_SUCCESS, DELETING_MEETING,
  FETCH_MEETINGS_FAILED,
  FETCH_MEETINGS_SUCCESS,
  FETCHING_MEETINGS, UPDATE_MEETING_FAILED, UPDATE_MEETING_SUCCESS, UPDATING_MEETING
} from "./types";


export const getMeetings = () => dispatch => {
  dispatch({
    type: FETCHING_MEETINGS
  });

  axios.get('http://localhost:8080/meeting')
    .then(result => dispatch({
        type: FETCH_MEETINGS_SUCCESS,
        payload: result.data
      }))
    .catch(err => dispatch({
      type: FETCH_MEETINGS_FAILED,
      payload: err
    }))
};

export const createMeeting = meeting => dispatch => {
  dispatch({
    type: CREATING_MEETING
  });

  axios.post('http://localhost:8080/meeting', meeting)
    .then(result => dispatch({
      type: CREATE_MEETING_SUCCESS,
      payload: result.data
    }))
    .catch(err => dispatch({
      type: CREATE_MEETING_FAILED,
      payload: err
    }))
};

export const addAttendee = (meetingId, employeeId) => dispatch => {
  dispatch({
    type: ADDING_ATTENDEE
  });

  axios.patch(`http://localhost:8080/meeting/${meetingId}/${employeeId}`)
    .then(result => dispatch({
      type: ADD_ATTENDEE_SUCCESS,
      payload: {
        meetingId,
        employee: result.data
      }
    }))
    .catch(err => dispatch({
      type: ADD_ATTENDEE_FAILED,
      payload: err
    }))
};

export const deleteMeeting = id => dispatch => {
  dispatch({
    type: DELETING_MEETING
  });

  axios.delete(`http://localhost:8080/meeting/${id}`)
    .then(result => dispatch({
      type: DELETE_MEETING_SUCCESS,
      payload: result.data
    }))
    .catch(err => dispatch({
      type: DELETE_MEETING_FAILED,
      payload: err
    }))
};

export const updateMeeting = meeting => dispatch => {
  dispatch({
    type: UPDATING_MEETING
  });

  axios.patch(`http://localhost:8080/meeting/${meeting.id}`, meeting)
    .then(result => dispatch({
      type: UPDATE_MEETING_SUCCESS,
      payload: result.data
    }))
    .catch(err => dispatch({
      type: UPDATE_MEETING_FAILED,
      payload: err
    }))
};
