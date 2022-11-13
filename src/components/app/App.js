import Aside from "../aside/Aside"
import Header from "../header/Header"
import Main from "../main/Main"

const App = () => {
    return (
        <>
            <Header/>
            <div className="app__container">
                <Aside/>
                <Main/>
            </div>
            
        </>
    )
}

export default App