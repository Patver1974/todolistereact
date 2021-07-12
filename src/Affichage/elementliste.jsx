import PropTypes from 'prop-types';
import style from '../style/style.css';

const ElementListe = (props) => {
    const {nom, description, priorite, termine} = props;
    const styleUrgent=(priorite=='Urgent') ? style.styleUrgent :'';
    const Termine =() => {
        document.getElementById("bouttontermine").disabled = true;

    }
    return (
        <ul>
            
            <li>{nom} <span className={styleUrgent}>{priorite}</span><button disabled = {true}>Termine</button></li>
            <li>{description} <button id='bouttontermine' type='button' onClick={Termine}>Supprimer</button></li>
            
        </ul>
    )
}

ElementListe.propTypes = {
    nom: PropTypes.string.isRequired,
    description: PropTypes.string,
    priorite: PropTypes.string.isRequired
}

export default ElementListe;