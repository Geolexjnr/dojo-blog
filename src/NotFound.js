import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <h2>Sorry</h2>
            <p>That page could not be found</p>
            <p>Click <Link to = "/">here</Link> to go back to the homepage...</p>
        </div>
     );
}
 
export default NotFound;