import { useState } from 'react';
import BlogList from "./BlogList";

const Home = function() {
    const [blogs, setBlogs] = useState([
        {title: "My new website!", body: "Lorem ipsum dolor sit amet...", author: "Mario", id: 1},
        {title: "Welcome party", body: "Lorem ipsum dolor sit amet...", author: "Yoshi", id: 2},
        {title: "Web dev top tips", body: "Lorem ipsum dolor sit amet...", author: "Mario", id: 3}
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} />
        </div>
    );
}

export default Home;