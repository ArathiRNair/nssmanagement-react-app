import axios from 'axios'
import { useState } from 'react'
import NavigationBar from './NavigationBar'


const AddEntry= () => {
    const [input, changeInput] = useState(
         {
        volunteerid:"",
        fullname:"",
        email:"",
        phone:"",
        dateofbirth:"",
        gender:"",
        bloodgroup:"",
        department:"",
        yearsofstudy:"",
        campname:"",
        hourscompleted:"",
        address:"",
        unitnumber:""
    }

    )

const inpuHandler=(event)=>{
    changeInput({...input,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(input)
    axios.post("http://localhost:3000/add-entry",input).then(
        (response)=>{
            alert("Volunteer added successfully")
        }
    ).catch(
        (error)=>{
            console.error("Error adding Volunteer",error)
            alert("failed to add Volunteer")
        }
    )
    
}


    return (
        <div>
<NavigationBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Volunteer ID</label>
                                <input 
                                name="volunteerid"
                                value={input.volunteerid}
                                onChange={inpuHandler}
                                type="text" className="form-control"
                                 />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">full Name</label>
                                <input 
                                name="fullname"
                                value={input.fullname}
                                onChange={inpuHandler}
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email</label>
                                <input 
                                name="email"
                                value={input.email}
                               onChange={inpuHandler}
                                
                                type="email" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Phone</label>
                                <input
                                name="phone"
                                value={input.phone}
                                onChange={inpuHandler}
                                
                                type="number" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Date of Birth</label>
                                <input 
                                name="dateofbirth"
                                value={input.dateofbirth}
                               onChange={inpuHandler}
                                type="date" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Gender</label>
                                <input 
                                name="gender"
                                value={input.gender}
                                onChange={inpuHandler}
                                
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Blood Group</label>
                                <select  id="" className="form-control" name="bloodgroup" value={input.bloodgroup} onChange={inpuHandler} >
                                    <option value="A+">A+</option>
                                    <option value="B+">B+</option>
                                    <option value="O+">O+</option>
                                    <option value="A-">A-</option>
                                    <option value="B-">B-</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                               <label htmlFor="" className="form-label">Department</label>
                                <select  id="" className="form-control" name="department" value={input.department} onChange={inpuHandler} >
                                    <option value="MCA">MCA</option>
                                    <option value="MBA">MBA</option>
                                    <option value="CS">CS</option>
                                    <option value="ECE">ECE</option>
                                    <option value="EEE">EEE</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Year of Study</label>
                                <input 
                                name="yearofstudy"
                                value={input.yearofstudy}
                                onChange={inpuHandler}
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Camp Name</label>
                                <input
                                name="campname"
                                value={input.campname}
                                onChange={inpuHandler}
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Hours Completed</label>
                                <input
                                name="hourscompleted"
                                value={input.hourscompleted}
                                onChange={inpuHandler}
                                type="text" className="form-control"/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Address</label>
                                <input
                                name="address"
                                value={input.address}
                                onChange={inpuHandler}
                                type="text" className="form-control"/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Unit Number</label>
                                <input
                                name="unitnumber"
                                value={input.unitnumber}
                                onChange={inpuHandler}
                                type="number" className="form-control"/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>ADD</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEntry