import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

export function Card(props) {
   //console.log(props);
   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.detailId) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites, props.detailId]);

   function handleFavorite() {
      if(isFav) {
         setIsFav(false)
         props.deleteFavorites(props.detailId)
      } else {
         setIsFav(true)
         props.addFavorites(props)
      }
   }

   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            { isFav ? (
               <button onClick={handleFavorite}>❤️</button>
                  ) : (
               <button onClick={handleFavorite}>🤍</button>
                  )
            }
            <button onClick={props.onClose}>X</button>
            </div>
               <h2>{props.name}</h2>
            <Link to={`/detail/${props.detailId}`}>
               <img className={styles.image} src={props.image} alt={props.name} />
            </Link>
               <div className={styles.data}>
                  <h4>{props.species}</h4>
                  <h4>{props.gender}</h4>
               </div>
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavorites: function(char) {
         dispatch(addFavorites(char))
      },
      deleteFavorites: function(id) {
         dispatch(deleteFavorites(id))
      }
   }
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)