import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = function() {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function() {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data for resource.')
                } else {
                    return res.json();
                }
            })
            .then(data => {
                setIsPending(false);
                setError(null);
                setBlogs(data);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;