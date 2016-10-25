export default (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
    return {
      open : !action.state
    };
    default:
    return {
      open : state.open
    };
  }
};
