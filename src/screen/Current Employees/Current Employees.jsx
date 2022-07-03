import './style/style.css'
import { useNavigate } from 'react-router-dom';

function CurrentEmployees() {
    const nav = useNavigate()


    return <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display"></table>
        <button onClick={() => nav('/acceuil')}>Home</button>
    </div>


}
export default CurrentEmployees;