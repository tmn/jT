function cancel_clickHandler() {
  router.goto('home');
}

function finish_clickHandler() {
  router.goto('home');
}

module.exports = {
  cancel_clicked: cancel_clickHandler,
  finish_clicked: finish_clickHandler
}
