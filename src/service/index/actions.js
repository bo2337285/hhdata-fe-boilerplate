import Moment from 'Moment';

export const toggleMenu = () => {
  return {
    type: 'TOGGLE_MENU'
  }
}
export const menuOpen = () => {
  return {
    type: 'TOGGLE_MENU_OPEN'
  }
}
export const menuClose = () => {
  return {
    type: 'TOGGLE_MENU_CLOSE'
  }
}
export const onItemClick = (item) => {
  return {
    type: 'ITEM_CLICK',
    item
  }
}

export const getMenu = () => {
  return async (dispatch) => {

    let msg = await fetch('data/menu',{
      method: 'POST',
      body: JSON.stringify({"aa":"aa"}),
      header: {'content-type':'application/json; charset=utf-8'}
    }).then((res)=>res.json())

    dispatch({type: 'GET_MENU',data:msg.data })
    dispatch({type: 'ITEM_CLICK',item:msg.data[0] })
  }
}

export const changeBtnTextWithTimeout = (text) => {
  return async (dispatch) => {
    // await sleep(3000);
    let res = await fetch('data/aa',{
      method: 'POST',
      body: JSON.stringify({"aa":"aa"})
    })
    let data = await res.json();
    console.log(data);
    dispatch({type: 'CHANGE_BTN_TEXT',text:text })
  }
}
