var goals = [
  new Goal('Vekt', 3.6, 8, 'kg'),
  new Goal('Økter i uka', 5, 6),
  new Goal('Skritt om dagen', 3200, 12000)
];

function Goal(name, goal, achieved, unit) {
  return {
    name: name.toUpperCase(),
    goal: goal,
    unit: unit ? ' ' + unit : '',
    achieved: achieved,
    progress: (goal / achieved * 100) + '%'
  }
}

function add_exercise_clickHandler() {
  router.push('selectExercise')
}

function menu_clickHandler() {
  router.push('menu');
}

function logout_clickHandler() {
  router.goto('login');
}

module.exports = {
  add_exercise_clicked: add_exercise_clickHandler,
  goals: goals,
  logout_clicked: logout_clickHandler,
  menu_clicked: menu_clickHandler
}
