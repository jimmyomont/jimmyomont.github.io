
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import Labo from "../Labo";
import './style.scss'
import { Analytics } from '@vercel/analytics/react';

function App(){
    return(
        <>
        <div className="margin">
        <Header 
        lastname="Jimmy."
        firstname="OMONT">
        </Header>
        <Main>
        <Labo />
        </Main>
        </div>
        <Footer />
        <Analytics />
        </>
    );
}
export default App;