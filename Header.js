import img from './Fill 213.png'

function Navbar (){
    return (
        <div className="navbar">
            <img className="logo" src={img} alt="" />
            <h1 className="heading">my travel journal.</h1>
        </div>
    )
}

export default Navbar;