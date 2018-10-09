import axios from 'axios';
import {
  CREATE_ENDORSEMENT_FAILED,
  CREATE_ENDORSEMENT_SUCCESS,
  CREATING_ENDORSEMENT,
  FETCH_EMPLOYEES_FAILED,
  FETCH_EMPLOYEES_SUCCESS,
  FETCHING_EMPLOYEES, UPDATE_ENDORSEMENT_FAILED,
  UPDATE_ENDORSEMENT_SUCCESS,
  UPDATING_ENDORSEMENT
} from "./types";

export const getEmployees = () => dispatch => {
  dispatch({
    type: FETCHING_EMPLOYEES
  });

  axios.get('http://localhost:8080/employee')
    .then(result => dispatch({
      type: FETCH_EMPLOYEES_SUCCESS,
      payload: result.data
    }))
    .catch(err => dispatch({
      type: FETCH_EMPLOYEES_FAILED,
      payload: err
    }))
};

export const updateEndorsement = (employeeId, endorsementId) => dispatch => {
  dispatch({
    type: UPDATING_ENDORSEMENT
  });

  axios.patch(`http://localhost:8080/endorsement/${endorsementId}/${employeeId}`)
    .then(result => dispatch({
      type: UPDATE_ENDORSEMENT_SUCCESS,
      payload: {
        employeeId,
        endorsementId
      }
    }))
    .catch(err => dispatch({
      type: UPDATE_ENDORSEMENT_FAILED,
      payload: err
    }))
};

export const createEndorsement = endorsementInfo => dispatch => {
  dispatch({
    type: CREATING_ENDORSEMENT
  });

  axios.post(`http://localhost:8080/endorsement`, endorsementInfo)
    .then(result => dispatch({
      type: CREATE_ENDORSEMENT_SUCCESS,
      payload: {
        employeeId: endorsementInfo.employeeId,
        endorsement: result.data
      }
    }))
    .catch(err => dispatch({
      type: CREATE_ENDORSEMENT_FAILED,
      payload: err
    }))
};