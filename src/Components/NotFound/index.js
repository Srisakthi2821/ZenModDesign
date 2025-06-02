import {Link} from 'react-router-dom'
import './index.css'
import notFoundImage from '../assets/Notfound/notfound.jpg'
const NotFound = () => (
    <div className="not-found">
        <img src={notFoundImage} alt="Not Found" className="not-found-image" />
        <h1 className="not-found-text">404 - Page Not Found</h1>
        <p className="not-found-text not-found-description">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="login-button bgHomebutton">Go back to Home</Link>
    </div>
)

export default NotFound;