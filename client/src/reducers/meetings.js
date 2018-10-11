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
} from "../actions/types";


const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_MEETINGS:
      return state;

    case FETCH_MEETINGS_SUCCESS:
      return action.payload;

    case FETCH_MEETINGS_FAILED:
      return state;

    case CREATING_MEETING:
      return state;

    case CREATE_MEETING_SUCCESS:
      return [...state, action.payload];

    case CREATE_MEETING_FAILED:
      return state;

    case ADDING_ATTENDEE:
      return state;

    case ADD_ATTENDEE_SUCCESS:
      return state.map(meeting => meeting.id === action.payload.meetingId ? {...meeting, attendees: [...meeting.attendees, action.payload.employee]} : meeting);

    case ADD_ATTENDEE_FAILED:
      return state;

    case UPDATING_MEETING:
      return state;

    case UPDATE_MEETING_SUCCESS:
      return state.map(meeting => meeting.id === action.payload.id ? action.payload : meeting);

    case UPDATE_MEETING_FAILED:
      return state;

    case DELETING_MEETING:
      return state;

    case DELETE_MEETING_SUCCESS:
      return state.filter(meeting => meeting.id !== action.payload);

    case DELETE_MEETING_FAILED:
      return state;

    default:
      return state;
  }
}