import { useState } from "react";
import PropTypes from 'prop-types';

const AffichageAddTache = (props) => {
    
    const [nom, setNom] = useState('');
    const [descripton, setDescription] = useState('');
    const [priorite, setPriorite] = useState('');

    const handleAdd = (e) => {
        e.preventDefault(); 

        const data = {
            nom: nom,
            descripton: descripton,
            priorite: priorite,
            termine: false
        }
        
        console.log(data); //verif console 
        setNom('');
        setDescription('');
        setPriorite('normal');
        props.onAddTache(data);
    }

    return (
<div>
    <form onSubmit={handleAdd}>
        <div>
            <h2>Ajouter une nouvelle tâche</h2>
        </div>
        <div>
            <label>Nom</label>
            <input id="nom" type="text" onChange={(e) => setNom(e.target.value)} value={nom} />
        </div>
        <div>
            <label>Description</label>
            <textarea id="description" rows="5" type="text" onChange={(e) => setDescription(e.target.value)} value={descripton} />
        </div>
        <div>
            <label htmlFor="priorite">Priorité </label>
            <select name="priorite" id="priorite" onChange={(e) => setPriorite(e.target.value)} value={priorite}>
                <option value="encours">En cours</option>
                <option value="normal">Normal</option>
                <option value="urgent">Urgent</option>
            </select>
        <button type="ajouter">Ajouter</button>
        </div>
    </form>
</div>
    )


}
AffichageAddTache.defaultProps = {
   onAddTache: () => {} // loop
}
AffichageAddTache.propTypes = {
    onAddTache: PropTypes.func
}
  export default AffichageAddTache;
