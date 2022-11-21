import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div style={{
      display: 'flex', justifyContent: 'center'
   }} >
      {characters.map(character => (
         <Card
            detailId={character.id}
            key={character.name}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => props.onClose(character.id)}
            //      ^------
         />
      ))}
   </div>
);
}
