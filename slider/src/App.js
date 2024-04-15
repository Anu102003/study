import React from 'react';
import Slider from './Slider';
import { slideData } from './SlideData';
import "./App.scss"
 const App = () => {
  return (
    <div id='app'>

      <Slider heading="Example Slider" slides={slideData} />
    </div>
  )
}
export default App;