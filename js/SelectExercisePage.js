var O = require('FuseJS/Observable');

// Testdata
var programmer = ['Nybegynnerprogrammet', 'Starting Strength', 'Leg day'];
var active_program = 0;

var programList = programmer.map(function (program, i) {
  return new Program(i, program);
});


function Program(id, name) {
  return {
    id: id,
    name: name,
    textColor: O(active_program === id ? '#ffffff' : '#888'),
    backgroundColor: O(active_program === id ? '#2168ad' : '#2168ad00'),
    exercises: []
  };
}

function go_back_clickHandler() {
  router.goBack();
}

function program_clickHandler(obj) {
  active_program = Number(obj.data.id);

  programList.forEach(function (program) {
    program.textColor.value = active_program === program.id ? '#ffffff' : '#888';
    program.backgroundColor.value = active_program === program.id ? '#2168ad' : '#2168ad00';
  });
}

function startWorkout_clickHandler() {
  router.push('workout');
}

module.exports = {
  programList: programList,
  
  go_back: go_back_clickHandler,
  program: program_clickHandler,
  startWorkout: startWorkout_clickHandler
};
