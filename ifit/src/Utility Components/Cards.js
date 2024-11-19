import CardGroup from 'react-bootstrap/CardGroup';

function iFitCards(props) {
  const cardData = props.innerText; // array of cards /[]
  const style =  props.style;
  return (
    <CardGroup>


        {cardData}
     
    </CardGroup>
  );
}

export default iFitCards;