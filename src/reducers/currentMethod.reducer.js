import { CAR_METHOD, BUS_METHOD, TAXI_METHOD } from '../constants/action_types.js';

const CurrentMethod = (state = '', action = {}) => {
  switch (action.type) {
    case CAR_METHOD:
      return 'Car Direction'
      break;
    case BUS_METHOD:
      return 'Bus Station'
      break;
    case TAXI_METHOD:
      return 'Find a taxi'
    default:
      return state
  }
}

export default CurrentMethod;
