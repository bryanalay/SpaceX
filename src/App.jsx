import { useEffect, useState } from 'react'
import logo from './assests/spacex-logo.png'
import * as API from './services/launches'
function App() {
  const [launches, setLaunches] = useState([])

  useEffect(()=>{
    API.getAllLaunches().then(setLaunches)
  }, [])

  return (
    <div className='appDivStyle'>
      <img src={logo} width={300}/>
      <h1>SpaceX</h1>
      <ul>
        {launches.map(launch =>(
          <li key={launch.flight_Number}>
            {launch.mission_name}<br/>({launch.launch_year})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
