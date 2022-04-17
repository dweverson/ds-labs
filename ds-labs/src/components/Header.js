import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header >
        <Link to={`/`} style={{ textDecoration: 'none' }}><h1>DS Labs</h1></Link>
        </header>
    )
}