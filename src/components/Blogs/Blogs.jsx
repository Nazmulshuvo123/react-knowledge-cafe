import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmarks}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () =>{
        fetch('blogs.json')
        .then((res) => res.json())
        .then((data) => setBlogs(data))
    },[])
    return (
        <div className="w-2/3 pt-7">
            
            {
                blogs.map(blog => <Blog
                    handleAddToBookmarks={handleAddToBookmarks}
                     key={blog.id} 
                     blog={blog}>
                    </Blog>)
            }
        </div>
    );
};

export default Blogs;