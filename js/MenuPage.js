function close_menu_clickHandler() {
  router.goBack();
  // router.goto('home')
}

module.exports = {
  close_menu_clicked: close_menu_clickHandler
};
