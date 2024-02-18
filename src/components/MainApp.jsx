import NavBar from "./NavBar";
import Newsfeed from "./newsfeed/NewFeed";
import NotificationPage from "./notification/NotificationsPage";
import EditProfile from "./profile/EditProfile";
import Profile from "./profile/profile";

export default function MainApp () {
    return (
        <div className="mainapp">
        <main className="main">
            <NavBar />
            <Newsfeed />
            {/* <NotificationPage /> */}
            {/* <Profile /> */}
            {/* <EditProfile /> */}
        </main>
        </div>
    )
}