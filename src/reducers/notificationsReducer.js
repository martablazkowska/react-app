export default function notifications(state = [], action) {
  switch(action.type) {
    case 'NOTIFY_SUCCESS':
      return Object.assign([], state, state.push(action.message));
    case 'CLEAR_ALL_NOTIFICATIONS':
      return [];
    default:
      return state;
  }
}
