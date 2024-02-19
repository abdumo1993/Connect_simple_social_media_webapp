import { useState } from 'react'
import logo from '../../assets/newspaper.png'
import { Link } from "react-router-dom";
import { mokePost } from '../../statics/mokePosts';
import commentLogo from '../../assets/comment.png';
import shareLogo from '../../assets/share.png';
export default function Posts(props) {
    const [showMore, setShowMore] = useState(false)
    // const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tenetur alias nemo quo maiores rem saepe dicta iste dignissimos expedita! Eos quas temporibus alias consectetur cumque tenetur, nemo voluptatibus veritatis';
    const { post } = props
    console.log(post)

    return (
        <div className="newsfeed--posts">
            <img src={logo} alt="" className="post--img" />
            <div className="post--content">
                <p className="post--content--text">{showMore ? post.text : post.text.slice(0, 600) + '...'}</p>
                {<Link to={`/api/home/${post._id}`} className='here'>
                    <p className="post--content--more" onClick={() => { setShowMore(prev => !prev) }}>{showMore ? '...less' : '...more'}</p>
                </Link>}
                
                <div className="post--react">
                    <div className="post--like">
                        <span className="likebutton">👍</span>
                        <span>Like</span>
                    </div>
                    <div className="post--comment">
                        <img src={commentLogo} alt="comment" />
                        <span>comment</span>
                    </div>
                {/* 1f44d like button*/}
                    <div className="post--share">
                        <img src={shareLogo} alt="share" />
                        <span>share</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
