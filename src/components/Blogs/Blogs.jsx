import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleAddToBookmark,handleSetAsTime}) => {
    const [blogs,setBlogs] = useState([])
    // console.log(Blogs)
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h3 className="text-black">Blog Lenth: {blogs.length}</h3>
            {
              blogs.map(blog =><Blog 
                key={blog.id} 
                handleSetAsTime={handleSetAsTime}
                handleAddToBookmark={handleAddToBookmark}
                blog={blog}></Blog> )
            }
        </div>
    );
};

Blogs.prototype={
    handleAddToBookmark: PropTypes.object
}

export default Blogs;