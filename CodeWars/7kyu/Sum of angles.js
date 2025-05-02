// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

// My First Pass

function angle(n) {
    return n*180 - 360
  }

// Code Wars Refractor

const angle = n => (n - 2) * 180;