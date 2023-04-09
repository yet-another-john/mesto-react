import pencil from '../images/pencil.svg';
import plus from '../images/plus.svg';
import React from 'react';
import Card from '../components/Card';
import api from '../utils/api';

function Main(props) {

    const [userAvatar, setUserAvatar] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setUserAvatar(userData.avatar);
                setUserName(userData.name);
                setUserDescription(userData.about);
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
        <main className="main">
            <section className="profile">
                <button className="profile__edite-icon-avatar" type="button" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src={userAvatar} alt="Аватар." />
                </button>
                <div className="profile__info">
                    <div className="profile__name-button">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button" type="button" onClick={props.onEditProfile}>
                            <img className="profile__edit-icon" src={pencil} alt="Иконка." />
                        </button>
                    </div>
                    <p className="profile__status">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
                    <img className="profile__add-button-plus" src={plus} alt="Иконка." />
                </button>
            </section>
            <section className="elements">
                {cards.map((card, i) => (
                    <Card key={card._id} card={card} onCardClick={props.onCardClick} />
                ))}
            </section>
        </main>);
}

export default Main;