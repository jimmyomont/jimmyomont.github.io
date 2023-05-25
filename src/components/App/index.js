
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import Labo from "../Labo";
import './style.scss'

function App(){
    return(
        <>
        <div className="margin">
        <Header 
        lastname="Jimmy "
        firstname="OMONT">
        </Header>
        <Main>
        <Labo />
        </Main>
        </div>
        <Footer />
        </>
    );
}
export default App;