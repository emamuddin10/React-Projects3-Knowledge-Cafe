import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    
    return (
        <div className='border-2 bg-slate-300 p-4 rounded-xl mb-2'>
        <h3 className='3xl'>{bookmark?.title} </h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object
}
export default Bookmark;