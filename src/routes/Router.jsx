

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Acceuil from '../screen/Acceuil/Acceuil.jsx';
import CurrentEmployees from '../screen/Current Employees/Current Employees.jsx'


function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Acceuil />}></Route>
            <Route path="/currentemployees" element={<CurrentEmployees />}></Route>
            <Route path="*" element={<Acceuil />}></Route>

        </Routes>
    </BrowserRouter>

}

export default Router;