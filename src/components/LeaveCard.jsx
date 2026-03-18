export default function LeaveCard({ name, ltype, duration, appliedDate, onDelete, onEdit }) {
    const dur = new Date(duration);
    return (
        <>
            <td>{name}</td>
            <td>{ltype}</td>
            <td>{`M:${dur.getMonth()} D:${dur.getDate()}`}</td>
            <td>{new Date(appliedDate).toISOString()}</td>
            <td>
                <button className="bg-red-500 p-1 rounded-md m-2 text-black" onClick={onDelete}>Delete</button>
                <button className="bg-yellow-500 p-1 rounded-md text-black" onClick={onEdit}>Edit</button>
            </td>
        </>
    );
}