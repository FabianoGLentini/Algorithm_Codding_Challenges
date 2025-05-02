// You are running a race on a circular race track against the ghost of your past self.

// Each time you lap your ghost, you get a confidence boost because you realize how much faster you got.

// Given your speed (km/h), your ghosts speed (km/h), the length of the circular race track (km) and the time you run (h), predict how often you will lap your ghost.

// Lapping your ghost means going from being behind your ghost to being in front of your ghost.

// Code wars solution 

function number_lappings(my_speed,ghost_speed,time,round_length){
    const oneLapVelocity = round_length / time;
    const lapDifference = my_speed / oneLapVelocity - ghost_speed / oneLapVelocity;
    const flooredLapDifference = Math.floor(lapDifference);
    const ghostLapped = flooredLapDifference === lapDifference ? lapDifference - 1 : flooredLapDifference;
    
    return Math.max(0, ghostLapped);
  }

// or 

const number_lappings = (yourSpeed, ghostSpeed, runTime, trackLength) =>
  Math.max(0, Math.ceil((runTime * (yourSpeed - ghostSpeed)) / trackLength) - 1);