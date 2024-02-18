import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";

export default function EditProfile() {
    
    const navigate = useNavigate()
    function handleEdit() {
        return 0;
    }
    return (
        <div className="editProfile">
            <form className="formEdit">

                <div className = 'edit--inputs'>
                    <label htmlFor="email">email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className = 'edit--inputs'>
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className = 'edit--inputs'>
                    <label htmlFor="username">username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="edit--password">
                    <span>Edit password?</span>
                </div>
                <div className="edit--buttons">

                    <button className="profile--button" onClick={handleEdit}>Apply</button>
                    <button type="button" className="profile--button" onClick={() => navigate('/api/profile')}>cancel</button>
                </div>

            </form>
        </div>
    )
}