import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs,setBlogs] = useState([])
    console.log(Blogs)
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h3 className="text-black">Blogs</h3>
            {/* {
              blogs.map(blog => )
            } */}
        </div>
    );
};

export default Blogs;