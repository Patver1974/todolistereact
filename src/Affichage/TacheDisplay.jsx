import PropTypes from 'prop-types';

import ElementListe from './elementliste';
const TacheDisplay = (props) => {

    const tachesJSX = props.tache.map(
       
        p => <ElementListe key={p.id} {...p} />
    );
    console.log('Liste JSX de nom', tachesJSX);

    const handleTermineTache = (data) => {
        data.preventDefault(); 
        props.onTermineTacheToDo(data);
    }

    const handleDeleteTache = (data) => {
        data.preventDefault(); 
        props.onDeleteTacheToDo(data);
    }

    return (
        <>
        <ElementListe onTermineTache={handleTermineTache} />
        <ElementListe onDeleteTache={handleDeleteTache} />
            <h2>Liste de tache</h2>
            <ul>{tachesJSX}</ul>
        </>
    );
}

TacheDisplay.propTypes = {
    tache: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        nom: PropTypes.string.isRequired,
        description: PropTypes.string,
        priorite: PropTypes.string.isRequired,
        termine: PropTypes.string
    }))
}

export default TacheDisplay