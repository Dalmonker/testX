import './aside.scss'

const Aside = () => {
    return (
        <aside className='aside'>
            <div className='aside__container'>
                <ul className='aside__items'>
                    <li className='aside__item'>
                        <a href='#' className='aside__link'>
                            Тесты
                        </a>
                    </li>
                    <li className='aside__item'>
                        <a href='#' className='aside__link'>
                            Категории
                        </a>
                    </li>
                    <li className='aside__item'>
                        <a href='#' className='aside__link'>
                            Статьи
                        </a>
                    </li>
                    <li className='aside__item'>
                        <a href='#' className='aside__link'>
                            Создать тест
                        </a>
                    </li>
                    <li className='aside__item'>
                        <a href='#' className='aside__link'>
                            Рейтинг
                        </a>
                    </li>
                    <li className='aside__item'>
                        <a href='#' className='aside__link'>
                            Классы
                        </a>
                    </li>
                    <li className='aside__item'>
                        <a href='#' className='aside__link'>
                            Пройденные тесты
                        </a>
                    </li>
                    <li className='aside__item'>
                        <a href='#' className='aside__link'>
                            Мои тесты
                        </a>
                    </li>
                    <li className='aside__item'>
                        <a href='#' className='aside__link'>
                            Избранное
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside