import { useState } from "react";
import PropTypes from 'prop-types';
import TacheDisplay from "./TacheDisplay";
import AffichageAddTache from "./AffichageAddTache";
import {nanoid} from 'nanoid';

const tacheinit = [
    { id: nanoid(), nom:'acheter1', description:'je dois tout acheter1', priorite:'Urgent', termine:true},
    { id: nanoid(), nom:'acheter2', description:'je dois tout acheter2', priorite:'Urgent', termine:false},
    { id: nanoid(), nom:'acheter3', description:'je dois tout acheter3', priorite:'normal', termine:true}
  ];

const ToDoListe = () => {

    const [tache, setTache] = useState(tacheinit);
    
    const handleAddtache=(data)=>{
        console.log (data);
        data.id=nanoid();
        setTache([...tache,data]);

    }
    const handleDeleteTache=(data)=>{
        console.log (data);
        delete tache[data.id];
        

    }
    const handleTermineTache=(data)=>{
        console.log (data);
        

    }


    return (
        <>
<AffichageAddTache onAddTache={handleAddtache} />
<TacheDisplay tache={tache}/> 
<TacheDisplay onTermineTacheToDo={handleTermineTache} />
<TacheDisplay onDeleteTacheToDo={handleDeleteTache} />


        </>
    );
}

        ToDoListe.propTypes = {
            tache: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                nom: PropTypes.string.isRequired,
                description: PropTypes.string,
                priorite: PropTypes.string.isRequired,
                termine: PropTypes.string
            }))
        }
        
        export default ToDoListe

