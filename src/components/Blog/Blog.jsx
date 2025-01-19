import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleAddToBookmark,handleSetAsTime}) => {
    // console.log(blog)
    const {title,cover,author_img,author,posted_date,reading_time,hashtags,id}=blog
    return (
        <div>
           <img className="w-full " src={cover} alt={`cover picture of the title is  ${title}`} />
           
           <div className="flex justify-between">
            <div className="flex gap-3 items-center">
             <img className="w-[59px]" src={author_img} alt="" />
             <div>
               <p className="text-xl font-bold">{author}</p>
               <p className="text-sm">{posted_date}</p>
             </div>
            </div>
            <div className="flex gap-2 items-center">
               <p className="">{reading_time} min read</p>
               <button onClick={()=>handleAddToBookmark(blog)}> <FaBookmark></FaBookmark></button>
            </div>
           </div>
           <p className="text-5xl font-bold">{title}</p>
           <div>
            {
              hashtags.map((tag,idx) => <span key={idx}># {tag}</span>)
            }
           </div>
           <button className="text-blue-700" onClick={()=>handleSetAsTime(id,reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
   blog: PropTypes.object.isRequired,
   handleAddToBookmark: PropTypes.func,
   handleSetAsTime: PropTypes.func

}
export default Blog;