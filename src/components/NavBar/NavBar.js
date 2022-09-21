import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav>
            <div>
                <h1>IV Technology</h1>
            </div>
            <div>
                <button>Almacenamiento</button>
                <button>Perifericos</button>
                <button>Gabinetes</button>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    );
}
export default NavBar; 