import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Posts from "./posts";
import { mokePost } from "../../statics/mokePosts"

export default function Newsfeed() {
    const posts = mokePost;
    return (
        <div className="main">

            <NavBar />
            <div className="newsfeed">
                {posts.map((value, index) => (
                    
                        <Posts key={index} id={value.id} />
                    
                ))}
            </div>
        </div>
    )
}