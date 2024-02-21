import { Link, useSearchParams } from "react-router-dom";
import NavBar from "../NavBar";
import Posts from "./posts";
import { mokePost } from "../../statics/mokePosts"
import { useEffect, useState } from "react";
import axios from "axios";
import { useApi } from "../Contexts/apiContext";
import send from '../../assets/send.png';
import addImage from '../../assets/addImage.png'

function PostForm() {
    const [post, setPost] = useState({})
    const apiUrl = useApi();
    async function handleSend(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('text', post.posttext)
        formData.append('image', post.image)
        await axios.post(`${apiUrl}/api/posts`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        })

    }

    return (
        <div className="postform">
            <form onSubmit={handleSend} className="postform--form">
                <div className="file-upload">
                    <label htmlFor="image">
                        <img src={addImage} alt="" />
                    </label>
                    <input type="file" name="image" id="image" className="imageinput" onChange={(event) => setPost(prev => ({ ...prev, [event.target.name]: event.target.files[0] }))} />
                </div>
                <textarea name="posttext" id="posttext" rows="8" placeholder="write post here." className="posttext" onChange={(event) => setPost(prev => ({ ...prev, [event.target.name]: event.target.value }))}></textarea>
                <button>
                    <img src={send} alt="send" />
                </button>
            </form>
        </div>
    )
}

export default function Newsfeed() {
    const apiUrl = useApi();
    const [allPosts, setAllPosts] = useState([])
    useEffect(() => {
        // this is for getting all posts 
        async function fetchdata() {

            try {
                const res = await axios.get(`${apiUrl}/api/posts`, { withCredentials: true })
                setAllPosts(res.data)

            }

            catch (err) {
                console.log(err)
            }
        }
        fetchdata();
    }, [])

    return (
        <div className="main">

            <NavBar />
            <div className="newsfeed">
                <PostForm />
                <hr></hr>
                {allPosts.map((value, index) => (

                    <Posts key={index} post={value} />

                ))}
            </div>
        </div>
    )
}