import { useParams } from "react-router-dom"
import Posts from "./posts";
import { mokePost } from "../../statics/mokePosts";
export default function Post() {
    const { id } = useParams();
    const currentPost = mokePost.find(value =>{ 
        return value.id === id})
    console.log(currentPost)
    return (
        <div>
            <p>{currentPost.text}</p>
        </div>
    )
}