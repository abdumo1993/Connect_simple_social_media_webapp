import { useParams } from "react-router-dom"
import Posts from "./posts";
import { useEffect, useState } from "react";
import axios from "axios";
import commentLogo from '../../assets/comment.png';
import shareLogo from '../../assets/share.png';
import sendLogo from '../../assets/send.png'
export function handleLike() {
    return 0;
}
function handleComment () {
    return 0;
}
export default function Post(props) {
    const { id } = useParams();
    const [currentPost, setCurrentPost] = useState({})
    
    

    useEffect(() => {
        async function fetchpost() {
            const p = await axios.get(`http://192.168.1.8:3000/api/posts/${id}`)
            setCurrentPost(p.data);
        }
        fetchpost();
    }, [])
    // two, post and comments fields in post.
    const { post, comments } = currentPost
    console.log(post)
    return (
        <div className="post">
            <div className="post--post">
                {/* {post.post.text} */}
                {post && (
                    <>
                        <img src={post.imageUrl} alt="post image" />
                        <p>{post.text}</p>
                        <div className="post--comment--react">
                            <div className="post--like post--comment--like" onClick={handleLike}>
                                <span className="likebutton" >👍</span>
                                <span>Like</span>
                            </div>
                            <div className="comment">
                                <form className="comment">
                                    <textarea name="comment" id="comment" cols="auto" rows="4" placeholder="write comment."></textarea>
                                    <button className="comment--btn" onClick={handleComment}><img src={sendLogo} alt="" /></button>
                                </form>
                            </div>
                        </div>


                    </>
                )}
            </div>
            <div className="post--comments">
            <h4>Comments</h4>
                {comments && comments.map((val) => {
                    return <div className="post--comments--comment">
                        <p>{val.text}</p>
                    </div>
                })}
            </div>
        </div>
    )
}