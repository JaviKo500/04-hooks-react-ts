import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

// import { HooksApp } from './HooksApp';
// import { TrafficLight } from './01-useState/TrafficLight';
// import { TrafficLightEffect } from './02-useEffect/TrafficLightEffect';
import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp/> */}
    {/* <TrafficLight/> */}
    {/* <TrafficLightEffect/> */}
    <TrafficLightWithHook/>
  </StrictMode>,
)
