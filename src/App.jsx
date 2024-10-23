import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = (blog) =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = (time) =>{
    // setReadingTime (readingTime + time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }

  return (
    <>
     <Header></Header>
     <main className='md:flex w-10/12 mx-auto space-x-3'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}
        handleMarkAsRead={handleMarkAsRead}></Blogs>

        <Bookmarks bookmarks={bookmarks}
                   readingTime={readingTime}>
        </Bookmarks>
     </main>
      
    </>
  )
}

export default App
