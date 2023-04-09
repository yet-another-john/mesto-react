import trashCan from '../images/trash-can.svg';

function Card(props) {

    let card = props.card;

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="element">
            <button className="element__delete" type="button">
                <img src={trashCan} alt="Иконка." />
            </button>
            <img className="element__image element__mask" src={card.link} alt={card.name} onClick={handleClick} />
            <div className="element__sign-like">
                <h2 className="element__sign">{card.name}</h2>
                <div>
                    <button className="element__like" type="button"></button>
                    <p className="element__likes-counter">{card.likes.length}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;