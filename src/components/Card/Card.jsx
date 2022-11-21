import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
   console.log(props);
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={props.onClose}>X</button>
            </div>
            <Link to={`/detail/${props.detailId}`}>
               <h2>{props.name}</h2>
               <img className={styles.image} src={props.image} alt={props.name} />
               <div className={styles.data}>
                  <h4>{props.species}</h4>
                  <h4>{props.gender}</h4>
               </div>
            </Link>
      </div>
   );
}
