export default (
  state = {
    open:false,
    items:[]
  },
   action) => {
  switch (action.type) {
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
    case 'GET_MENU':
    return Object.assign({}, state, {
        items: action.data
      });
    default:
    return {
      open : state.open
    };
  }
};
