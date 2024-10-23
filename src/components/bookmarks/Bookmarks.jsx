import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 pt-7 border rounded-md mt-7 text-center pb-3 bg-slate-400">
            <h2 className="text-3xl font-bold pl-6 pb-7">Bookmarks Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks:PropTypes.array
}
export default Bookmarks;