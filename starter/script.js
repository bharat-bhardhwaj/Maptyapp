


class Workout {

  constructor(coords,distance,duration){
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;


  }
}


class Running extends Workout {

  constructor(coords,distance,duration,cadence){

  }

}

class Cycling extends Workout {


  constructor(coords,distance,duration,elevationGain){
    
  }

}



/// Main class


const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');








