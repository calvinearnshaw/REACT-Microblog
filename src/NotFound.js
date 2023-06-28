import {Link} from "react-router-dom";

const NotFound = function() {
    return (
        <div className='not-found'>
            <h2>Error 404 - Not Found</h2>
            <p>That page cannot be found.</p>
            <Link to='/'>Home</Link>
        </div>
    );
}

export default NotFound;