import React,{useContext} from 'react';
import { useParams } from 'react-router';
import ResultContext from '../../context/SearchResultContext';

const PageDetails = () => {
    const {id} = useParams();
    const {results, setResults} = useContext(ResultContext);
    console.log(results, id);
    /*
    no hace falta un llamado a otro endpoint (ya está toda la data necesaria), 
    así que acá llamar al CONTEXT.
    
    */

    return (
        <section className="details-container">
            <h2>PageDetails</h2>
        </section>
        
    )
}

export default PageDetails;
