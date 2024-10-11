import React from 'react'
import { Link } from 'react-router-dom';
import { FaEye, FaStar } from "react-icons/fa";

export default function NewsCard(props) {
    const {singleNews}=props;
    const {author,rating,title,thumbnail_url,image_url,details,_id,total_view}=singleNews;
    console.log(_id);
  return (
    <div className="container mx-auto">
        <div className="rounded-lg bg-[#323231] py-2 m-2">
            <diV className="flex items-start justify-start">
            <div className="px-2 py-2 m-2">
            <img src={author.img} alt="" className="rounded-full w-10 h-10"/>
            </div>
            <div className="flex flex-col px-2 py-2 m-2">
            <span className="text-gray-300">{author.name}</span> 
            <span>{author.published_date}</span>
            </div>
           
            </diV>
        </div>
        <div className="m-2 p-2">
            <h1 className="text-gray-300 text-lg">{title}</h1>
        </div>
        <div className="m-2 p-2">
            <img src={image_url} alt="" className="w-full"/>
        </div>
        <div className="m-2 p-2">
        <p className="text-sm text-gray-400 text-justify py-3 px-8">
              {details.slice(0, 200)}{" "}
              <Link
                to={`/news/${_id}`}
                className="text-blue-600 underline font-bold text-lg"
              >
                Read More...
              </Link>
            </p>
        </div>
        <div className="m-2 p-2 rounded-lg bg-[#323231] flex justify-between">
  <div className="flex items-center justify-start gap-1"> {/* Align items in the center and add space */}
    <FaStar color="gold" />
    <span className="ml-1 text-white">{rating.number}</span> {/* Add some margin and color */}
  </div>
  <div className="flex items-center justify-start gap-1">
     <FaEye color="gold"/>
     <span className="ml-1 text-white">{total_view}</span>
  </div>
</div>

       

    </div>


  )
}
