import PropTypes from 'prop-types';
import { FiBookmark } from "react-icons/fi";

const Blog = ({blog, handleAddToBookmarks}) => {
    const {title, cover, author_img, author, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
        <img className='rounded-lg mb-8' src={cover} alt= {`cover picture of the title ${title}`}/>
        <div className='flex items-center justify-between'>
            <div className='flex pt-3 pb-3'>
                <img className='w-14 h-14 rounded-full' src={author_img} alt="" />

                <div className='ml-6'>
                    <h3 className='font-bold text-2xl text-[#111111]'>{author}</h3>
                    <h5 className='font-semibold text-xl text-[#11111199]'>{posted_date}</h5>
                </div>
            </div>

            <div className='flex items-center'>
                <span className='font-medium text-xl text-[#11111199]'>{reading_time} min read</span>
                <div>
                <button onClick={handleAddToBookmarks}
                 className='ml-2 mt-3 text-xl text-emerald-600'><FiBookmark></FiBookmark></button>
                </div>
            </div>
        </div>
            <h2 className='font-bold text-4xl text-[#111111] pb-4'>{title}</h2>
            <p className='pb-3 font-medium text-xl text-[#11111199]'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;
