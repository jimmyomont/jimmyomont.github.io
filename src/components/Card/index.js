import './style.scss';

function Card ({style, title, content, lien, image, descr} ) {
    return (
        <article className={style}>
        <div className="block">
            <div className="card-title">{title}</div>
            <div className="card-content"><p>{content}</p></div>
            <a href={lien}>
                <img className='card-image' src={image} alt="" />
                </a> 
            <div className="card-content"><p>{descr}</p></div>
                <a href={lien} className='card-content hidden'>Lien vers le site</a>
        </div>
    </article>
    )
}

export default Card;