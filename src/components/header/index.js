import './style.scss';

function Header({lastname, firstname}){
    return(
        <header>
            <h1 className="name">
            {lastname}{firstname}</h1>
        </header>
    )
}
export default Header