function Card (title, content, lien, image, descr ) {
    return (
        <article className='card'>
        <div className="block">
            <div className="card_title">{title}</div>
            <div className="card_content">{content}</div>
            <a href={lien}>
                <img className='cardImage' src={image} alt="" />
                </a> 
            <div className="card_content">{descr}</div>
        </div>
    </article>
    )
}

export default Card;