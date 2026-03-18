import { useState } from "react";
import { editLeaveAsync, submitLeaveAsync } from "../features/leaveSlice";
import { useNavigate, useParams } from "react-router-dom";

function AddLeave({dispatch, leaveList}) {
    const {id} = useParams();
    const predata = leaveList[id];
    const navigate = useNavigate();
    let formData = {...(predata??{"type": "sick"})};

    function handleChange(e) {
        formData = ({...formData, [e.target.name] : e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (id === undefined)
            submitLeaveAsync(formData.name, formData.type, formData.start, formData.end, formData.reason).then(v => dispatch(v));
        else 
            editLeaveAsync(id, formData.name, formData.type, formData.start, formData.end, formData.reason).then(v => dispatch(v));
        navigate("/");
    }
    return (
        <>
            <h1 className="text-white ms-5 font-bold" style={{fontSize: "40px"}}>Add Leave Request</h1>
            <form onSubmit={handleSubmit}>
                <div className="space-y-1 p-5">
                    <div className="border-b border-gray-900/10">
                        <div className="sm:col-span-4">
                        <label htmlFor="name" className="block text-sm/6 font-medium text-gray-400">
                            Employee Name
                        </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Employee Name"
                                    onChange={handleChange}
                                    defaultValue={predata?.name ?? ""}
                                    className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-3 mt-5">
                        <label htmlFor="type" className="block text-sm/6 font-medium text-gray-400">
                            Leave Type
                        </label>
                        <div className="mt-2 grid grid-cols-1">
                            <select
                            id="type"
                            name="type"
                            onChange={handleChange}
                            defaultValue={formData.type}
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                                <option value="sick">Sick Leave</option>
                                <option value="casual">Casual Leave</option>
                                <option value="emergency">Emergency Leave</option>
                                <option value="vacation">Vacation Leave</option>
                                <option value="halfday">Half-Day Leave</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-span-full mt-5">
                        <label htmlFor="about" className="block text-sm/6 font-medium text-gray-400">
                        Reason
                        </label>
                        <div className="mt-2">
                        <textarea
                            onChange={handleChange}
                            defaultValue={predata?.reason ?? ""}
                            id="reason"
                            name="reason"
                            placeholder="Reason"
                            rows={3}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                        </div>
                    </div>

                    <div className="col-span-full mt-5">
                        <label htmlFor="about" className="block text-sm/6 font-medium text-gray-400">
                        Start Date
                        </label>
                        <div className="mt-2">
                            <input type="date"
                            onChange={handleChange}
                            defaultValue={predata?.start ?? ""}
                            name="start"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                             />
                        </div>
                    </div>

                    <div className="col-span-full mt-5">
                        <label htmlFor="about" className="block text-sm/6 font-medium text-gray-400">
                        End Date
                        </label>
                        <div className="mt-2">
                            <input type="date"
                            onChange={handleChange}
                            defaultValue={predata?.end ?? ""}
                            name="end"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                             />
                        </div>
                    </div>
                </div>

                <button className="bg-emerald-400 p-2 rounded-md ms-5">Submit</button>
            </form>
        </>
    )
}

export default AddLeave;