import './main.scss'

const Main = () => {
    return (
        <main className='main'>
            <div className='main__container'>
                <div className='main__search main-search'>
                    <div className='main-search__left'>
                         <label className='main-search__left-description'>
                            Искать тесты:
                         <input className='main-search__left-label' type='text' name='search' placeholder='Например, математика'/>
                        </label>
                    </div>
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