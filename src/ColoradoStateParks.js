import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain"

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(trees);
  wildlife();
  return <div><MesaVerde /></div>;
}

export default ColoradoStateParks