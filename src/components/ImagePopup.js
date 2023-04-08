import closeIcon from '../images/close-icon.svg';

function ImagePopup(props) {

    let card = props.card;
    
    return (
        <div id="popup-image" className={`popup ${card ? 'popup_opened' : ''}`}>
            <div className="popup__container popup__container_image">
                <button className="popup__close-button" type="button" onClick={props.onClose}>
                    <img className="popup__close-icon" src={closeIcon} alt="Иконка." />
                </button>
                <img className="popup__image" src={card.link} alt="Картинка." />
                <p className="popup__image-sign">{card.name}</p>
            </div>
        </div>
    );
}

export default ImagePopup;