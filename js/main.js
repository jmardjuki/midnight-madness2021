const width = window.innerWidth;
const height = window.innerHeight - 10;

let draw = SVG().addTo('#drawing')
  , rect = draw.circle(100, 100).fill('#f06');

// cardioid heart