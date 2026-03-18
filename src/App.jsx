import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import LeaveList from './components/LeaveList';
import DateTime from './components/form/DateTime';
import AddLeave from './components/AddLeave';
import "./app.css";
import NavigationBar from './components/NavigationBar';

function App() {
  const leaveList = useSelector(state => state.leave.leaveRequests);
  const dispatch = useDispatch();

  return (
    <div className='py-24 sm:py-32'>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<LeaveList leaveList={leaveList} dispatch={dispatch}/>}/>
        <Route path='datetime' element={<DateTime/>}/>
        <Route path='addleave' element={<AddLeave dispatch={dispatch} leaveList={leaveList}/>}/>
        <Route path='editleave/:id' element={<AddLeave dispatch={dispatch} leaveList={leaveList}/>}/>
      </Routes>
    </div>
  );
}

export default App;