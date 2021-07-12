import PropTypes from 'prop-types';
import style from '../style/style.css';

const ElementListe = (props) => {
    const {id, nom, description, priorite, termine} = props;
    const styleUrgent=(priorite=='Urgent') ? style.styleUrgent :'';
    
    const handleTermine = (e) => {
        e.preventDefault(); 

        const data = {
            id: id,
            nom: nom,
            description: description,
            priorite: priorite,
            termine: true
        }
        
        console.log(data); //verif console 

        props.onTermineTache(data);
    }
    const handleDelete = (e) => {
        e.preventDefault(); 

        const data = {
            id: id,
            nom: nom,
            description: description,
            priorite: priorite,
            termine: termine
        }
        
        console.log(data); //verif console 

        props.onDeleteTache(data);
    }
    return (
        <ul>
            
            <li>{nom} <span className={styleUrgent}>{priorite}</span><button onClick={handleTermine} disabled = {termine}>Termine</button></li>
            <li>{description} <button onClick={handleDelete}>Supprimer</button></li>
            
        </ul>
    )
}

ElementListe.propTypes = {
    nom: PropTypes.string.isRequired,
    description: PropTypes.string,
    priorite: PropTypes.string.isRequired
}

export default ElementListe;