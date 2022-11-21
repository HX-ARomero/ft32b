import styles from "./Detail.module.css";
import { useState, useEffect } from "react"
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail(props) {
    const { detailId } = useParams();
    const [ character , setCharacter] = useState({});
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        })
        .catch((err) => {
            window.alert('No hay personajes con ese ID');
        });
        return setCharacter({});
    }, [detailId]);
    
    console.log(character);

    return (
        <div className={styles.container}>
            <Link to="/home">
                <button>Go Back!</button>
            </Link>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <h3>Origin: {character.origin?.name}</h3>
            <h3>Species: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>
        </div>
    )
}