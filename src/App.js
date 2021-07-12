
import './App.css';
import {nanoid} from 'nanoid';

import ToDoListe from './Affichage/ToDoListe';
function App() {
  const tache = [
    { id: nanoid(), nom:'acheter1', description:'je dois tout acheter1', priorite:'Urgent', termine:true},
    { id: nanoid(), nom:'acheter2', description:'je dois tout acheter2', priorite:'Urgent', termine:false},
    { id: nanoid(), nom:'acheter3', description:'je dois tout acheter3', priorite:'normal', termine:true}
  ]




  return (
    <div className="App">

      <ToDoListe tache={tache}/>
    </div>
  );
}

export default App;
