import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function DetailsNewsPage() {
    let {id}=useParams();
    let [singleNews,setSingleNews]=useState([]);
    const getSingleNewsById=async ()=>{
        const data=await fetch(`http://localhost:5000/news/${id}`);  // Fetch the Book.json file
        const result = await data.json();        // Parse the JSON response
        //const foundBook = result.find(b => b.bookId === parseInt(bookId));  // Find the book that matches the bookId

        if (result) {
            setSingleNews(result);  // Set the found book to state
        }
    }
    useEffect(() => {
        getSingleNewsById();
    }, []);
  return (
    <div>DetailsNewsPage</div>
  )
}
