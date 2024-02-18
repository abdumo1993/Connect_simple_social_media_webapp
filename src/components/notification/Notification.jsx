import logo from '../../assets/newspaper.png';
import NavBar from '../NavBar';
export default function Notification () {
    return (
        <div className="notification">
            <img src={logo}  className="notification--img" />
            <p className="notification--text">posted this Lorem ipsum dolor...</p>
        </div>
    )
}