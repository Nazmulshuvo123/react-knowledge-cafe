import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="m-3">
            <div className="bg-gray-300 rounded-md mb-3">
                <h3 className="text-3xl font-bold pb-3 pt-3">{title}</h3>
            </div>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark:PropTypes.object
}
export default Bookmark;