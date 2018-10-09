import {
  CREATE_ENDORSEMENT_FAILED,
  CREATE_ENDORSEMENT_SUCCESS,
  CREATING_ENDORSEMENT,
  FETCH_EMPLOYEES_FAILED,
  FETCH_EMPLOYEES_SUCCESS,
  FETCHING_EMPLOYEES, UPDATE_ENDORSEMENT_FAILED, UPDATE_ENDORSEMENT_SUCCESS,
  UPDATING_ENDORSEMENT
} from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_EMPLOYEES:
      return state;

    case FETCH_EMPLOYEES_SUCCESS:
      return action.payload;

    case FETCH_EMPLOYEES_FAILED:
      return state;

    case CREATING_ENDORSEMENT:
      return state;

    case CREATE_ENDORSEMENT_SUCCESS:
      return state.map(employee => employee.id === action.payload.employeeId ? {...employee, points: employee.points += 20, endorsements: [...employee.endorsements, action.payload.endorsement]} : employee);

    case CREATE_ENDORSEMENT_FAILED:
      return state;

    case UPDATING_ENDORSEMENT:
      return state;

    case UPDATE_ENDORSEMENT_SUCCESS:
      return state.map(employee => {
        if(employee.id === action.payload.employeeId) {
          return {
            ...employee,
            points: employee.points += 10,
            endorsements: employee.endorsements.map(endorsement => {
              if(endorsement.id === action.payload.endorsementId) {
                return {
                  ...endorsement,
                  count: endorsement.count+=1
                }
              } else {
                return endorsement
              }
            })
          }
        } else {
          return employee
        }
      })

    case UPDATE_ENDORSEMENT_FAILED:
      return state;

    default:
      return state;
  }
}