import React from 'react'

function Sonuc({response}) {
  console.log(response)
  let style = {
    "margin": "auto",
    "textAlign": "center"
  }
  return (
    <div style={style}>

    <h1>Şehir ismi: {response.name}</h1>
    <h2>Derece: {response.main.temp}</h2>
    <h2>Nem: %{response.main.humidity}</h2>
    <h2>{response.weather[0].description}</h2>
    </div>
  )
}

export default Sonuc