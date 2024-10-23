import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = (blog) =>{
    console.log('Button click')
  }

  return (
    <>
     <Header></Header>
     <main className='md:flex w-10/12 mx-auto'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks></Bookmarks>
     </main>
      
    </>
  )
}

export default App
