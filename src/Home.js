import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = function() {
    const [blogs, setBlogs] = useState([
        {title: "My new website!", body: "Lorem ipsum dolor sit amet...", author: "Mario", id: 1},
        {title: "Welcome party", body: "Lorem ipsum dolor sit amet...", author: "Yoshi", id: 2},
        {title: "Web dev top tips", body: "Lorem ipsum dolor sit amet...", author: "Mario", id: 3}
    ]);

    useEffect(function() {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
            })
    }, []);

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;