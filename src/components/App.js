import '../index.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {

  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards(cards.filter(i => i._id !== card._id));
    });
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setSelectedCard({});
  };

  React.useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="content">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards} />
          <Footer />
          <PopupWithForm
            popupId="popup-avatar"
            formName="popup-avatar-form"
            formHeader="Обновить аватар"
            buttonId="popup-avatar-form-button"
            buttonSign="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}>
            <input
              name="input-avatar-link"
              className="popup__input"
              type="url"
              placeholder="Ссылка на картинку"
              required />
            <span
              className="popup__input-error input-avatar-link-error">
            </span>
          </PopupWithForm>
          <PopupWithForm
            popupId="popup-profile"
            formName="popup-profile-form"
            formHeader="Редактировать профиль"
            buttonId="popup-profile-form-button"
            buttonSign="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}>
            <input
              name="input-profile-name"
              className="popup__input"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required />
            <span
              className="popup__input-error input-profile-name-error">
            </span>
            <input
              name="input-profile-status"
              className="popup__input"
              type="text"
              placeholder="Статус"
              minLength="2"
              maxLength="200"
              required />
            <span
              className="popup__input-error input-profile-status-error">
            </span>
          </PopupWithForm>
          <PopupWithForm
            popupId="popup-card"
            formName="popup-card-form"
            formHeader="Новое место"
            buttonId="popup-card-form-button"
            buttonSign="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}>
            <input
              name="input-card-location"
              className="popup__input"
              type="text"
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
              placeholder="Ссылка на картинку"
              required />
            <span
              className="popup__input-error input-card-link-error">
            </span>
          </PopupWithForm>
          <PopupWithForm
            popupId="popup-confirmation"
            formName="popup-confirmation-form"
            formHeader="Вы уверены?"
            buttonId="popup-confirmation-form-button"
            buttonSign="Да" />
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;