import { useState } from "react";
import PropTypes from 'prop-types';
import TacheDisplay from "./affichageliste";
import AffichageAddTache from "./AffichageAddTache";

const ToDoListe = (props) => {
    
    const [tache, setTache] = useState(props.tache);
    
    const handleAddtache=(data)=>{
        
        setTache({...tache,data});

    }


    return (
        <>
<AffichageAddTache onAddTache={handleAddtache} />
<TacheDisplay tache={tache}/> 
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

