
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [readingTime,setReadinTime]=useState(0)
  
  const handleAddToBookmark = blog=>{
    console.log('this is blog',blog)
    const newBookmarks =[...bookmarks,blog]
    setBookmarks(newBookmarks)
  }
  const handleSetAsTime  =(id,time)=>{
    console.log('remove book',id)
    console.log('time added',time,id)
    const newReadingTime = readingTime + time
    setReadinTime(newReadingTime)
    // remove the read form bookmark

    const remainingBookMark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookMark)
    
  }
  console.log(readingTime)
  return (
    <>
      
      <Header></Header>
      <div className='flex max-w-6xl mx-auto '>
        <Blogs handleSetAsTime={handleSetAsTime} handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
