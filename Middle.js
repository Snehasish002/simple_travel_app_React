



const Middle = function (props){

    return(
        <div className="card">
            <img className="card-image" src={props.image} alt="img" />
            <div className="details">
                <div className="location">
                    <i class="fa-solid fa-location-dot"></i>
                    <p className="locate">{props.location}</p>
                    <a className="gray" href="#">{props.map}</a>
                </div>
                <div className="date-about">
                    <h1 className="place-name">{props.place}</h1>
                    <h4 className="date">{props.date}</h4>
                    <p className="para">{props.placeDetails}</p>
                </div>
            </div>
        </div>
    )
}

export default Middle;