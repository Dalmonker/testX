import './main.scss'

const Main = () => {
    return (
        <main className='main'>
            <div className='main__container'>
                <div className='main__search main-search'>

                    <label className='main-search__description'>
                            Искать тесты:
                        <input className='main-search__label' type='text' name='search' placeholder='Например, математика'/>
                    </label>

                    <p className='main-search__text'>
                    Введите название теста или вставьте код чтобы присоедениться  
                    </p>
                    
                </div>
                <div className='main__list main-list'>
                    <ul className='main-list__items'>
                        <li className='main-list_item'>

                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Main