import './main.scss'

const Main = () => {
    return (
        <main className='main'>
                <div className='main__search main-search'>
                        <label className='main-search__label'>
                            Искать тесты:
                        <input className='main-search__input' type='text' name='search' placeholder='Например, математика'/>
                        </label>

                         <p className='main-search__description'>
                        Введите название теста или вставьте код чтобы присоедениться  
                        </p>
                </div>
                <ul className='tests'>
                    <li className='tests__item'>
                        <img className='tests__image' src='../../assets/images/govno.png' alt="list-item"/>
                        <h3 className='tests__title'>Есть ли у вас навыки управления командой?</h3>
                    </li>
                </ul>
        </main>
    )
}

export default Main