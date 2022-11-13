import './header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <div className='header__logo'>
                    x
                </div>
                <div className='header__buttons'>
                    <button className='header__button'>Войти</button>
                    <button className='header__button'>Регистрация</button>
                </div>
            </div>
        </header>
    )
}

export default Header