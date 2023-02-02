
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App () {
  useEffect(() =>{
    getGiphy();
  }, [])

  const getGiphy = () => {
    axios.get('/giphy').then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log('error!', error);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">APIS</h1>
          <h4><i>APIS</i></h4>
        </header>
        <br/>
      </div>
    );
  
}

export default App;
