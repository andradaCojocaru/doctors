import logo from './logo.svg';
import './App.css';
import {Medic} from './Medic'
import { useEffect } from 'react';
import { supabase } from './supabase';
import Searchbar from './Searchbar';
import styled from '@emotion/styled'
import ChatGpt from './ChatGpt';

async function getNume() {
  let { data: test, error } = await supabase
  .from('medic')
  .select("Nume")
  console.log(test);
}

async function getPrenume() {
  let { data: test, error } = await supabase
  .from('medic')
  .select("Prenume")
  console.log(test);
}

async function getMediciFiltered(filtruSpecializareId) {
  let { data: test, error } = await supabase
  .from('medic')
  .select("*")
  .eq('SpecializareId', filtruSpecializareId)
  console.log(test);
}

async function getSpecializare(filtruSpecializareId) {
  let { data: test, error } = await supabase
  .from('Specializare')
  .select("Categorie")
  .eq('idSpecializare', filtruSpecializareId)
  console.log(test);
}

async function getReview(filtruSpecializareId) {
  let { data: test, error } = await supabase
  .from('Review')
  .select("Comentariu")
  .eq('MedicId', filtruSpecializareId)
  console.log(test);
}

async function getScore(filtruSpecializareId) {
  let { data: test, error } = await supabase
  .from('Review')
  .select("Scor")
  .eq('MedicId', filtruSpecializareId)
  console.log(test);
}

function App() {
  useEffect(() => {
    //getMediciFiltered(1)
    //getSpecializare(1)
    //getReview(1)
    //getScore(4)
    //getNume()
    //getPrenume()
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
        <ChatGpt></ChatGpt>
      </header>
    </div>
  );
}

export default App;
