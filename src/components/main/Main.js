import './main.scss'

const Main = () => {
    return (
        <main className='main'>
            <div className='main__container'>
                <div className='main__search main-search'>
                    <p className='main-search__description'>
                        Искать тесты
                    </p>
                    <input type='text' name='search' placeholder='Например, математика'/>
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