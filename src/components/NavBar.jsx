import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <Link to="/">Головна сторінка</Link>
            <Link to="/add">Додати рецепт</Link>
        </nav>
    )
}

export default NavBar