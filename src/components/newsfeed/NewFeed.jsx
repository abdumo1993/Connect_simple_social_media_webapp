import { Link, useSearchParams } from "react-router-dom";
import NavBar from "../NavBar";
import Posts from "./posts";
import { mokePost } from "../../statics/mokePosts"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Newsfeed() {
    const apiUrl = import.meta.env.VITE_API_URL
    const [allPosts, setAllPosts] = useState([])
    useEffect(() => {
        // this is for getting all posts 
        async function fetchdata () {

            try{const res = await axios.get(`${apiUrl}/api/posts`, {withCredentials: true})
            setAllPosts(res.data)

        }
            
            catch(err) {
                console.log(err)
            }
        }
        fetchdata();
    }, [])
    console.log('here')
    return (
        <div className="main">

            <NavBar />
            <div className="newsfeed">
                {allPosts.map((value, index) => (

                    <Posts key={index} post={value} />

                ))}
            </div>
        </div>
    )
}