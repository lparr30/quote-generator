const Card = (props) => {
    return <div>
        <h3>"{props.quote}"</h3>
        <p>-{props.name}</p>
    </div>
};

export default Card;
