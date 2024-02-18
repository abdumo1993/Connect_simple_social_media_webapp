import { useNavigate } from "react-router-dom"

export default function DeleteProfile() {
    const navigate = useNavigate();
    function handleDelete () {
        return 0;
    }
    return (
        <div className="deleteProfile">
            <h1>Are You Sure You Want To Delete This Account</h1>
            <p><strong>Note</strong>: Once deleted there is no going back. </p>
            <div className="delete--buttons">
                <div className="profile--button delete" onClick={handleDelete}>Delete</div>
                <div className="profile--button" onClick={() => navigate('/api/profile')}>Cancel</div>
            </div>
        </div>
    )
}