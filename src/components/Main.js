import pencil from '../images/pencil.svg';
import plus from '../images/plus.svg';
import trashCan from '../images/trash-can.svg';

function Main(props) {
    return (
        <main className="main">
            <section className="profile">
                <button className="profile__edite-icon-avatar" type="button" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src="#" alt="Аватар." />
                </button>
                <div className="profile__info">
                    <div className="profile__name-button">
                        <h1 className="profile__name"></h1>
                        <button className="profile__edit-button" type="button" onClick={props.onEditProfile}>
                            <img className="profile__edit-icon" src={pencil} alt="Иконка." />
                        </button>
                    </div>
                    <p className="profile__status"></p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
                    <img className="profile__add-button-plus" src={plus} alt="Иконка." />
                </button>
            </section>
            <section className="elements">
                <template id="card">
                    <div className="element">
                        <button className="element__delete" type="button">
                            <img src={trashCan} alt="Иконка." />
                        </button>
                        <img className="element__image element__mask" src="#" alt="Картинка." />
                        <div className="element__sign-like">
                            <h2 className="element__sign"></h2>
                            <div>
                                <button className="element__like" type="button"></button>
                                <p className="element__likes-counter"></p>
                            </div>
                        </div>
                    </div>
                </template>
            </section>
        </main>);
}

export default Main;