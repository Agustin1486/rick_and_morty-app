import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
   
   <div>
      {characters.map((element) =>( 
      <Card
          name={element.name}
          species={element.species}
          gender={element.gender}
          image={element.image}
          onClose={() => alert("Emulamos que se cierra la card")}
          key={element.id}
          />
          ))}
   </div>
   ); 
}
