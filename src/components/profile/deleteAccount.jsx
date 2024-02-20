import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useApi } from "../Contexts/apiContext";

export default function DeleteProfile() {
    const navigate = useNavigate();
    const apiUrl = useApi();
    async function handleDelete() {
        const res = await axios.delete(`${apiUrl}/api/profile/delete`, { withCredentials: true })
        if (res.status === 202) navigate('/')
        else {
            alert('Something went wrong!')
            navigate('/api/profile')
        }

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