import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

    const [newLocation, setNewLocation] = React.useState('');
    const [newLink, setNewLink] = React.useState('');

    function handleLocationChange(e) {
        setNewLocation(e.target.value);
    }

    function handleLinkChange(e) {
        setNewLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace(newLocation, newLink);
    }

    return (
        <PopupWithForm
            popupId="popup-card"
            formName="popup-card-form"
            formHeader="Новое место"
            buttonId="popup-card-form-button"
            buttonSign="Создать"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}>
            <input
                name="input-card-location"
                className="popup__input"
                type="text"
                onChange={handleLocationChange}
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required />
            <span
                className="popup__input-error input-card-location-error">
            </span>
            <input
                name="input-card-link"
                className="popup__input"
                type="url"
                onChange={handleLinkChange}
                placeholder="Ссылка на картинку"
                required />
            <span
                className="popup__input-error input-card-link-error">
            </span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;