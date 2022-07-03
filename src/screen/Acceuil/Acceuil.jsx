import './style/style.css'
import { useNavigate } from 'react-router-dom'
import { ajouteEmployee } from '../../service/employeeServices.js'

function Acceuil() {
    const nav = useNavigate();
    return <div id="Acceuil">

        <h1>HRnet</h1>
        <button id="navToEmployees" onClick={() => { nav('/currentemployees') }}>View Current Employees</button>
        <p className='titre'>Create employee</p>
        <form action="" onSubmit={() => ajouteEmployee()}>
            <label htmlFor="First Name">First Name </label>
            <input type="text" placeholder='First Name' name='First Name' />

            <label htmlFor="Last Name">Last Name </label>
            <input type="text" placeholder='Last Name' name='Last Name' />

            <label htmlFor="BrthDate">BirthDate</label>
            <input type="date" placeholder='startDate' name='startDate' />

            <label htmlFor="startDate">StartDate</label>
            <input type="date" placeholder='starteDate' name='startDate' />

            <fieldset>
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input type="text" />

                <label htmlFor="city">City</label>
                <input type="text" />

                <label htmlFor="state">State</label>
                <select name="state">
                    <option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AS">American Samoa</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District Of Columbia</option><option value="FM">Federated States Of Micronesia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="GU">Guam</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MH">Marshall Islands</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="MP">Northern Mariana Islands</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PW">Palau</option><option value="PA">Pennsylvania</option><option value="PR">Puerto Rico</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VI">Virgin Islands</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option>
                </select>

                <label htmlFor="zip-code">Zip Code</label>
                <input type="number" />

            </fieldset>
            <label htmlFor="Departement">Departement</label>
            <select name="Departement">
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Engineering">Engineering</option>
                <option value="Human Ressources">Human Ressources</option>
                <option value="Legal">Legal</option>

            </select>
            <button className="save" type="submit">Save</button>

        </form>




    </div>
}

export default Acceuil;