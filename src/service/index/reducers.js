export default (
  state = {
    open:false
  },
   action) => {
  switch (action.type) {
    // case 'TOGGLE_MENU':
    // return {
    //   open : state.open
    // };
    case 'TOGGLE_MENU_OPEN':
    return Object.assign({}, state, {
        open: true
      });
    case 'TOGGLE_MENU_CLOSE':
    return Object.assign({}, state, {
        open: false
      });
    case 'ITEM_CLICK':
    return Object.assign({}, state, {
        currItem: action.item,
        open: false
      });
    default:
    return {
      open : state.open
    };
  }
};
