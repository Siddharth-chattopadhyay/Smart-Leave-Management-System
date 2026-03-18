import { useNavigate } from "react-router-dom";


function NavigationBar() {
    const navigate = useNavigate();
    return (
        <div className="bg-white m-4 rounded-md p-5">
            <a onClick={() => navigate("addleave")} className="text-black bg-blue-400 p-2 rounded-md mx-2">Submit Leave Request</a>
            <a onClick={() => navigate("/")} className="text-black bg-blue-400 p-2 rounded-md mx-2">Home</a>
        </div>
    )
}

export default NavigationBar;