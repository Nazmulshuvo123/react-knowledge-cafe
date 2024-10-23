import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks, readingTime}) => {
    return (

        <div className="md:w-1/3 pt-7 border rounded-md mt-7 text-center pb-3 bg-slate-400">

            <div className="bg-blue-400 p-4 m-4 rounded-md">
                <h2 className="font-bold text-3xl text-pink-600">Reading Time: {readingTime}</h2>
            </div>
            <h2 className="text-3xl font-bold pb-7 ">Bookmarks Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;