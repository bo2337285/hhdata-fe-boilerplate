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
