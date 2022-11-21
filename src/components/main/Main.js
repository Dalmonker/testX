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
                        <div className='tests__image'>
                            <img src='image.png' alt="list-item"/>
                        </div>
                        <div className='tests__info'>
                            <h3 className='tests__title'>Есть ли у вас навыки управления командой?</h3>

                            <div className='tests__up'>

                                <div className='tests__checkbox'>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5.5L6.8 10.5L5 8.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.5 2H3.5C2.67157 2 2 2.67157 2 3.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V3.5C14 2.67157 13.3284 2 12.5 2Z" stroke="black" stroke-linejoin="round"/>
                                </svg>

                                        <span>10</span>
                                </div>

                                <div className='tests__date'>
                                    <span>2020/04/22</span>
                                </div>

                            </div>

                            <div className='tests__down'>

                                <div className='tests__views'>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.9894 3.5C5.55378 3.5 3.05534 4.90969 1.08847 7.72906C1.03233 7.81042 1.00156 7.9066 1.00006 8.00544C0.998556 8.10428 1.02639 8.20135 1.08003 8.28438C2.59128 10.65 5.05628 12.5 7.9894 12.5C10.8907 12.5 13.4063 10.6444 14.9203 8.27344C14.9727 8.19203 15.0006 8.09727 15.0006 8.00047C15.0006 7.90366 14.9727 7.8089 14.9203 7.7275C13.4028 5.38375 10.8688 3.5 7.9894 3.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z" stroke="black" stroke-miterlimit="10"/>
                                </svg>

                                    <span>900</span>
                                </div>

                                    <ul className='tests__star'> 
                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.9999 6.70062H13.2169L10.8282 0L8.43955 6.70062H0.656494L7.02272 10.8235L4.54336 17.5241L10.8282 13.3715L17.1131 17.5241L14.629 10.8235L20.9999 6.70062ZM11.6178 12.3537L10.8282 11.8323V4.00512L11.9301 7.09179L12.237 7.95234H16.7037L13.8505 9.79863L13.016 10.3388L13.3457 11.2287L14.4587 14.2309L11.6178 12.3537Z" fill="black"/>
                                        </svg>
                                        </li>
                                    </ul>
                            </div>
                            <button className='tests__button'>
                                Пройти тест
                            </button>
                        </div>
                    </li>
                    <li className='tests__item'>
                        <div className='tests__image'>
                            <img src='image.png' alt="list-item"/>
                        </div>
                        <div className='tests__info'>
                            <h3 className='tests__title'>Есть ли у вас навыки управления командой?</h3>

                            <div className='tests__up'>

                                <div className='tests__checkbox'>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5.5L6.8 10.5L5 8.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.5 2H3.5C2.67157 2 2 2.67157 2 3.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V3.5C14 2.67157 13.3284 2 12.5 2Z" stroke="black" stroke-linejoin="round"/>
                                </svg>

                                        <span>10</span>
                                </div>

                                <div className='tests__date'>
                                    <span>2020/04/22</span>
                                </div>

                            </div>

                            <div className='tests__down'>

                                <div className='tests__views'>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.9894 3.5C5.55378 3.5 3.05534 4.90969 1.08847 7.72906C1.03233 7.81042 1.00156 7.9066 1.00006 8.00544C0.998556 8.10428 1.02639 8.20135 1.08003 8.28438C2.59128 10.65 5.05628 12.5 7.9894 12.5C10.8907 12.5 13.4063 10.6444 14.9203 8.27344C14.9727 8.19203 15.0006 8.09727 15.0006 8.00047C15.0006 7.90366 14.9727 7.8089 14.9203 7.7275C13.4028 5.38375 10.8688 3.5 7.9894 3.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z" stroke="black" stroke-miterlimit="10"/>
                                </svg>

                                    <span>900</span>
                                </div>

                                    <ul className='tests__star'> 
                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.9999 6.70062H13.2169L10.8282 0L8.43955 6.70062H0.656494L7.02272 10.8235L4.54336 17.5241L10.8282 13.3715L17.1131 17.5241L14.629 10.8235L20.9999 6.70062ZM11.6178 12.3537L10.8282 11.8323V4.00512L11.9301 7.09179L12.237 7.95234H16.7037L13.8505 9.79863L13.016 10.3388L13.3457 11.2287L14.4587 14.2309L11.6178 12.3537Z" fill="black"/>
                                        </svg>
                                        </li>
                                    </ul>
                            </div>
                            <button className='tests__button'>
                                Пройти тест
                            </button>
                        </div>
                    </li>
                    <li className='tests__item'>
                        <div className='tests__image'>
                            <img src='image.png' alt="list-item"/>
                        </div>
                        <div className='tests__info'>
                            <h3 className='tests__title'>Есть ли у вас навыки управления командой?</h3>

                            <div className='tests__up'>

                                <div className='tests__checkbox'>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5.5L6.8 10.5L5 8.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.5 2H3.5C2.67157 2 2 2.67157 2 3.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V3.5C14 2.67157 13.3284 2 12.5 2Z" stroke="black" stroke-linejoin="round"/>
                                </svg>

                                        <span>10</span>
                                </div>

                                <div className='tests__date'>
                                    <span>2020/04/22</span>
                                </div>

                            </div>

                            <div className='tests__down'>

                                <div className='tests__views'>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.9894 3.5C5.55378 3.5 3.05534 4.90969 1.08847 7.72906C1.03233 7.81042 1.00156 7.9066 1.00006 8.00544C0.998556 8.10428 1.02639 8.20135 1.08003 8.28438C2.59128 10.65 5.05628 12.5 7.9894 12.5C10.8907 12.5 13.4063 10.6444 14.9203 8.27344C14.9727 8.19203 15.0006 8.09727 15.0006 8.00047C15.0006 7.90366 14.9727 7.8089 14.9203 7.7275C13.4028 5.38375 10.8688 3.5 7.9894 3.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z" stroke="black" stroke-miterlimit="10"/>
                                </svg>

                                    <span>900</span>
                                </div>

                                    <ul className='tests__star'> 
                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.9999 6.70062H13.2169L10.8282 0L8.43955 6.70062H0.656494L7.02272 10.8235L4.54336 17.5241L10.8282 13.3715L17.1131 17.5241L14.629 10.8235L20.9999 6.70062ZM11.6178 12.3537L10.8282 11.8323V4.00512L11.9301 7.09179L12.237 7.95234H16.7037L13.8505 9.79863L13.016 10.3388L13.3457 11.2287L14.4587 14.2309L11.6178 12.3537Z" fill="black"/>
                                        </svg>
                                        </li>
                                    </ul>
                            </div>
                            <button className='tests__button'>
                                Пройти тест
                            </button>
                        </div>
                    </li>
                    <li className='tests__item'>
                        <div className='tests__image'>
                            <img src='image.png' alt="list-item"/>
                        </div>
                        <div className='tests__info'>
                            <h3 className='tests__title'>Есть ли у вас навыки управления командой?</h3>

                            <div className='tests__up'>

                                <div className='tests__checkbox'>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5.5L6.8 10.5L5 8.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.5 2H3.5C2.67157 2 2 2.67157 2 3.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V3.5C14 2.67157 13.3284 2 12.5 2Z" stroke="black" stroke-linejoin="round"/>
                                </svg>

                                        <span>10</span>
                                </div>

                                <div className='tests__date'>
                                    <span>2020/04/22</span>
                                </div>

                            </div>

                            <div className='tests__down'>

                                <div className='tests__views'>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.9894 3.5C5.55378 3.5 3.05534 4.90969 1.08847 7.72906C1.03233 7.81042 1.00156 7.9066 1.00006 8.00544C0.998556 8.10428 1.02639 8.20135 1.08003 8.28438C2.59128 10.65 5.05628 12.5 7.9894 12.5C10.8907 12.5 13.4063 10.6444 14.9203 8.27344C14.9727 8.19203 15.0006 8.09727 15.0006 8.00047C15.0006 7.90366 14.9727 7.8089 14.9203 7.7275C13.4028 5.38375 10.8688 3.5 7.9894 3.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z" stroke="black" stroke-miterlimit="10"/>
                                </svg>

                                    <span>900</span>
                                </div>

                                    <ul className='tests__star'> 
                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.9999 6.70062H13.2169L10.8282 0L8.43955 6.70062H0.656494L7.02272 10.8235L4.54336 17.5241L10.8282 13.3715L17.1131 17.5241L14.629 10.8235L20.9999 6.70062ZM11.6178 12.3537L10.8282 11.8323V4.00512L11.9301 7.09179L12.237 7.95234H16.7037L13.8505 9.79863L13.016 10.3388L13.3457 11.2287L14.4587 14.2309L11.6178 12.3537Z" fill="black"/>
                                        </svg>
                                        </li>
                                    </ul>
                            </div>
                            <button className='tests__button'>
                                Пройти тест
                            </button>
                        </div>
                    </li>
                    <li className='tests__item'>
                        <div className='tests__image'>
                            <img src='image.png' alt="list-item"/>
                        </div>
                        <div className='tests__info'>
                            <h3 className='tests__title'>Есть ли у вас навыки управления командой?</h3>

                            <div className='tests__up'>

                                <div className='tests__checkbox'>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5.5L6.8 10.5L5 8.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.5 2H3.5C2.67157 2 2 2.67157 2 3.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V3.5C14 2.67157 13.3284 2 12.5 2Z" stroke="black" stroke-linejoin="round"/>
                                </svg>

                                        <span>10</span>
                                </div>

                                <div className='tests__date'>
                                    <span>2020/04/22</span>
                                </div>

                            </div>

                            <div className='tests__down'>

                                <div className='tests__views'>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.9894 3.5C5.55378 3.5 3.05534 4.90969 1.08847 7.72906C1.03233 7.81042 1.00156 7.9066 1.00006 8.00544C0.998556 8.10428 1.02639 8.20135 1.08003 8.28438C2.59128 10.65 5.05628 12.5 7.9894 12.5C10.8907 12.5 13.4063 10.6444 14.9203 8.27344C14.9727 8.19203 15.0006 8.09727 15.0006 8.00047C15.0006 7.90366 14.9727 7.8089 14.9203 7.7275C13.4028 5.38375 10.8688 3.5 7.9894 3.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z" stroke="black" stroke-miterlimit="10"/>
                                </svg>

                                    <span>900</span>
                                </div>

                                    <ul className='tests__star'> 
                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.9999 6.70062H13.2169L10.8282 0L8.43955 6.70062H0.656494L7.02272 10.8235L4.54336 17.5241L10.8282 13.3715L17.1131 17.5241L14.629 10.8235L20.9999 6.70062ZM11.6178 12.3537L10.8282 11.8323V4.00512L11.9301 7.09179L12.237 7.95234H16.7037L13.8505 9.79863L13.016 10.3388L13.3457 11.2287L14.4587 14.2309L11.6178 12.3537Z" fill="black"/>
                                        </svg>
                                        </li>
                                    </ul>
                            </div>
                            <button className='tests__button'>
                                Пройти тест
                            </button>
                        </div>
                    </li>
                    <li className='tests__item'>
                        <div className='tests__image'>
                            <img src='image.png' alt="list-item"/>
                        </div>
                        <div className='tests__info'>
                            <h3 className='tests__title'>Есть ли у вас навыки управления командой?</h3>

                            <div className='tests__up'>

                                <div className='tests__checkbox'>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5.5L6.8 10.5L5 8.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.5 2H3.5C2.67157 2 2 2.67157 2 3.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V3.5C14 2.67157 13.3284 2 12.5 2Z" stroke="black" stroke-linejoin="round"/>
                                </svg>

                                        <span>10</span>
                                </div>

                                <div className='tests__date'>
                                    <span>2020/04/22</span>
                                </div>

                            </div>

                            <div className='tests__down'>

                                <div className='tests__views'>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.9894 3.5C5.55378 3.5 3.05534 4.90969 1.08847 7.72906C1.03233 7.81042 1.00156 7.9066 1.00006 8.00544C0.998556 8.10428 1.02639 8.20135 1.08003 8.28438C2.59128 10.65 5.05628 12.5 7.9894 12.5C10.8907 12.5 13.4063 10.6444 14.9203 8.27344C14.9727 8.19203 15.0006 8.09727 15.0006 8.00047C15.0006 7.90366 14.9727 7.8089 14.9203 7.7275C13.4028 5.38375 10.8688 3.5 7.9894 3.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z" stroke="black" stroke-miterlimit="10"/>
                                </svg>

                                    <span>900</span>
                                </div>

                                    <ul className='tests__star'> 
                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.9999 6.70062H13.2169L10.8282 0L8.43955 6.70062H0.656494L7.02272 10.8235L4.54336 17.5241L10.8282 13.3715L17.1131 17.5241L14.629 10.8235L20.9999 6.70062ZM11.6178 12.3537L10.8282 11.8323V4.00512L11.9301 7.09179L12.237 7.95234H16.7037L13.8505 9.79863L13.016 10.3388L13.3457 11.2287L14.4587 14.2309L11.6178 12.3537Z" fill="black"/>
                                        </svg>
                                        </li>
                                    </ul>
                            </div>
                            <button className='tests__button'>
                                Пройти тест
                            </button>
                        </div>
                    </li>
                    <li className='tests__item'>
                        <div className='tests__image'>
                            <img src='image.png' alt="list-item"/>
                        </div>
                        <div className='tests__info'>
                            <h3 className='tests__title'>Есть ли у вас навыки управления командой?</h3>

                            <div className='tests__up'>

                                <div className='tests__checkbox'>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5.5L6.8 10.5L5 8.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.5 2H3.5C2.67157 2 2 2.67157 2 3.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V3.5C14 2.67157 13.3284 2 12.5 2Z" stroke="black" stroke-linejoin="round"/>
                                </svg>

                                        <span>10</span>
                                </div>

                                <div className='tests__date'>
                                    <span>2020/04/22</span>
                                </div>

                            </div>

                            <div className='tests__down'>

                                <div className='tests__views'>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.9894 3.5C5.55378 3.5 3.05534 4.90969 1.08847 7.72906C1.03233 7.81042 1.00156 7.9066 1.00006 8.00544C0.998556 8.10428 1.02639 8.20135 1.08003 8.28438C2.59128 10.65 5.05628 12.5 7.9894 12.5C10.8907 12.5 13.4063 10.6444 14.9203 8.27344C14.9727 8.19203 15.0006 8.09727 15.0006 8.00047C15.0006 7.90366 14.9727 7.8089 14.9203 7.7275C13.4028 5.38375 10.8688 3.5 7.9894 3.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z" stroke="black" stroke-miterlimit="10"/>
                                </svg>

                                    <span>900</span>
                                </div>

                                    <ul className='tests__star'> 
                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.9999 6.70062H13.2169L10.8282 0L8.43955 6.70062H0.656494L7.02272 10.8235L4.54336 17.5241L10.8282 13.3715L17.1131 17.5241L14.629 10.8235L20.9999 6.70062ZM11.6178 12.3537L10.8282 11.8323V4.00512L11.9301 7.09179L12.237 7.95234H16.7037L13.8505 9.79863L13.016 10.3388L13.3457 11.2287L14.4587 14.2309L11.6178 12.3537Z" fill="black"/>
                                        </svg>
                                        </li>
                                    </ul>
                            </div>
                            <button className='tests__button'>
                                Пройти тест
                            </button>
                        </div>
                    </li>
                    <li className='tests__item'>
                        <div className='tests__image'>
                            <img src='image.png' alt="list-item"/>
                        </div>
                        <div className='tests__info'>
                            <h3 className='tests__title'>Есть ли у вас навыки управления командой?</h3>

                            <div className='tests__up'>

                                <div className='tests__checkbox'>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5.5L6.8 10.5L5 8.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.5 2H3.5C2.67157 2 2 2.67157 2 3.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V3.5C14 2.67157 13.3284 2 12.5 2Z" stroke="black" stroke-linejoin="round"/>
                                </svg>

                                        <span>10</span>
                                </div>

                                <div className='tests__date'>
                                    <span>2020/04/22</span>
                                </div>

                            </div>

                            <div className='tests__down'>

                                <div className='tests__views'>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.9894 3.5C5.55378 3.5 3.05534 4.90969 1.08847 7.72906C1.03233 7.81042 1.00156 7.9066 1.00006 8.00544C0.998556 8.10428 1.02639 8.20135 1.08003 8.28438C2.59128 10.65 5.05628 12.5 7.9894 12.5C10.8907 12.5 13.4063 10.6444 14.9203 8.27344C14.9727 8.19203 15.0006 8.09727 15.0006 8.00047C15.0006 7.90366 14.9727 7.8089 14.9203 7.7275C13.4028 5.38375 10.8688 3.5 7.9894 3.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z" stroke="black" stroke-miterlimit="10"/>
                                </svg>

                                    <span>900</span>
                                </div>

                                    <ul className='tests__star'> 
                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3434 6.70062H12.5604L10.1717 0L7.78306 6.70062H0L6.36622 10.8235L3.88687 17.5241L10.1717 13.3715L16.4566 17.5241L13.9725 10.8235L20.3434 6.70062Z" fill="black"/>
                                        </svg>
                                        </li>

                                        <li>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.9999 6.70062H13.2169L10.8282 0L8.43955 6.70062H0.656494L7.02272 10.8235L4.54336 17.5241L10.8282 13.3715L17.1131 17.5241L14.629 10.8235L20.9999 6.70062ZM11.6178 12.3537L10.8282 11.8323V4.00512L11.9301 7.09179L12.237 7.95234H16.7037L13.8505 9.79863L13.016 10.3388L13.3457 11.2287L14.4587 14.2309L11.6178 12.3537Z" fill="black"/>
                                        </svg>
                                        </li>
                                    </ul>
                            </div>
                            <button className='tests__button'>
                                Пройти тест
                            </button>
                        </div>
                    </li>
                </ul>
        </main>
    )
}

export default Main