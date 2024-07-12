import {Link} from 'react-router-dom'

function NavBar(){
    return (
    <ul className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
           <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            <li>
                <Link to={`/contatti`}>Contatti</Link>
            </li>
            <li>
                <Link to={`/about`}>About</Link>
            </li>
            <li>
                 <Link to={`/cities`}>Card versione 1</Link>
            </li>
            <li>
                <Link to={`/cities-children`}>Card versione 2</Link>
            </li>
        </div>
    </ul>
    )
}
export default NavBar