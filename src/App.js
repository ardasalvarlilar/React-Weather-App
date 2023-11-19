import TurkeyMap from 'turkey-map-react';
import Sonuc from './components/Sonuc';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const key = "f9dba21823ae48f4cfac34cff8830e82"
  const [city, setCity] = useState('')
  const [response, setResponse] = useState('')

useEffect(() => {
  // Application Programming Interface
  async function getApi() {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=tr`);
      setResponse(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  if(city !== ''){
    getApi()
  }
},[city])

  return (
    <div>
      <TurkeyMap
        hoverable={true} 
        onHover={({plateNumber, name}) => console.log(plateNumber, name)} 
        onClick={({name}) => setCity(name)}
      />
      {response && <Sonuc response = {response} />}
    </div>
  );
}

export default App;
