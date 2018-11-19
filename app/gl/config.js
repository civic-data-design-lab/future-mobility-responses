//gl program attribute locations
const OFFSET_LOCATION = 0;
const ROTATION_LOCATION = 1;
const POSITION_LOCATION = 2;
const COLOR_LOCATION = 3;
const AGE_LOCATION = 4;
const INIT_OFFSET_LOCATION = 5;
const PICKING_COLOR_LOCATION = 6;

export {
  OFFSET_LOCATION,
  ROTATION_LOCATION,
  POSITION_LOCATION,
  COLOR_LOCATION,
  AGE_LOCATION,
  INIT_OFFSET_LOCATION,
  PICKING_COLOR_LOCATION
}

//Global constants for the visualization
const COLOR_RAMP = [
  213,14,80,
  255,207,1,
  76,183,72,
  28,77,161,
  147,38,143,
  230,132,139,
  255,233,166,
  154,207,141,
  144,153,205,
  191,142,192
].map(d => d/255);

export {
  COLOR_RAMP
}
