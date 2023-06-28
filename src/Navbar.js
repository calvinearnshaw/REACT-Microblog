import {Link} from 'react-router-dom';

const Navbar = function() {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/create' style={{
                    color: 'white',
                    backgroundColor: '#F1356D',
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar