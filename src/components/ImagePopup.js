import closeIcon from '../images/close-icon.svg';

function ImagePopup() {
    return (
        <div id="popup-image" className="popup">
            <div className="popup__container popup__container_image">
                <button className="popup__close-button" type="button">
                    <img className="popup__close-icon" src={closeIcon} alt="Иконка." />
                </button>
                <img className="popup__image" src="#" alt="Картинка." />
                <p className="popup__image-sign"></p>
            </div>
        </div>
    );
}

export default ImagePopup;