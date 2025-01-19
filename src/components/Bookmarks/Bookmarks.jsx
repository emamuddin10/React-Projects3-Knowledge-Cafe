
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    console.log(bookmarks)
  return (
    <div className="w-1/3 p-10 bg-slate-400 mt-8 ml-10">
       <h1>Spend Time On Read:{readingTime}</h1>
      <h2>Bookmarks Length:{bookmarks.length}</h2>

      {
        bookmarks.map((bookmark,idx) =>(
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))
      }
    </div>
  );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
};

export default Bookmarks;
