import './Card.css';

const Card=(props)=>{
    
    const classes='card '+props.className;
    const innerContent=props.children;

    return(
        <section className={classes}>
            {innerContent}
        </section>
    )
}

export default Card;