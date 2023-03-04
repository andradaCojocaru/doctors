import logo from './logo.svg';
import './App.css';
import {Medic} from './Medic'
import { useEffect } from 'react';
import { supabase } from './supabase';

async function getMedic() {
  let { data: test, error } = await supabase
  .from('test')
  .select()
  console.log(test);
}


function App() {

  useEffect(() => {
    getMedic()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello doctors
        </a>
        <Medic></Medic>
      </header>
    </div>
  );
}

export default App;
