import { useNavigate } from "react-router-dom";
import { useState } from "react";


function NotFound() {
    const [redirectMessage, setRedirectMessage] = useState("« Redirect to Movies page »");

    setTimeout(() => { setRedirectMessage("") }, 3000)

    return (
        <div>
            <h1>{redirectMessage}</h1>
            <h1>404 Not Found</h1>
        </div>
    );
}

export default NotFound;