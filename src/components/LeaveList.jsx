import LeaveCard from "./LeaveCard";
import { submitLeaveAsync, removeLeaveRequestAsync } from "../features/leaveSlice";
import "./table.css";
import { useNavigate } from "react-router-dom";

export default function LeaveList({leaveList, dispatch}){
  const navigate = useNavigate();

  const ids = Object.keys(leaveList);
    const structure = (
    <div className="ms-4">
      <div>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Leave Requests</h2>
          <p className="mt-2 text-lg/8 text-gray-300">There {ids.length > 1? "are" : "is"} <span className="text-cyan-100" style={{fontWeight: "bold"}}>{ids.length}</span> leave requests from the employees</p>
          <div>
            <button
    onClick={() => submitLeaveAsync("Emp", "Type", new Date().toISOString(), new Date().toISOString(), "Reason").then(v => dispatch(v))
 }
  >Add</button>
          </div>
        </div> 
        <div className="text-white">
          <table>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Leave Type</th>
                <th>Duration</th>
                <th>Applied Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {ids.map((v, i) => 
              <tr key={i}>
                <LeaveCard onEdit={() => navigate("editleave/"+v)} onDelete={() => removeLeaveRequestAsync(v).then(v => dispatch(v))} name={leaveList[v].name} ltype={leaveList[v].leaveType} duration={new Date(leaveList[v].end).getTime() - new Date(leaveList[v].start).getTime()} appliedDate={leaveList[v].start}/> 
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
    return structure;
}