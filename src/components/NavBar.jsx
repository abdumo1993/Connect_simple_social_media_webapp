import logo from '../assets/react.svg';
import home from '../assets/home.png';
import news from '../assets/newspaper.png';
import search from '../assets/transparency.png';
import notification from '../assets/notification.png';
import { useNavigate } from 'react-router-dom';
export default function NavBar() {
    const navigate = useNavigate();
    
    return (
        <nav className="nav">
            <div className="nav--logo">
                <img className="nav--img" src= {logo} />
                <h3 className="nav--title">Connect</h3>
            </div>
            <div className="nav--menu">
                <div className="nav--news" onClick={() => navigate('/api/home')}>
                    <img src={news} alt="" />
                </div>
                <div className="nav--search" onClick={() => navigate('/api/search')}>
                    <img src={search} alt="" />
                </div>
                <div className="nav--notification" onClick={() => navigate('/api/notifications')}>
                    <img src={notification} alt="" />
                </div>
            </div>
            <div className="nav--profile" onClick={() => navigate('/api/profile')}>
                <img src={logo}  className="nav--profile--img" />
                <p className="nav--profile--text">Profile</p>
            </div>

        </nav>
    )
}
// profile
// newsfeed, search, notification

