import axios from "axios"
import { useEffect, useState } from "react"
import NavigationBar from "./NavigationBar"





const ViewEntry= () => {
    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.post("http://localhost:3000/view-entry").then(

            (response) => {

                changeData(response.data)

            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    useEffect (
        () => {
            fetchData()
        },[]
    )


return (
    <div>
      <NavigationBar/>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">VolunteerID</th>
                    <th scope="col">FullName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Date Of Birth</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Blood Group</th>
                    <th scope="col">Department</th>
                    <th scope="col">Years of Study</th>
                    <th scope="col">Camp Name</th>
                    <th scope="col">Hours Completed</th>
                    <th scope="col">Address</th>
                    <th scope="col">Unit Number</th>
                </tr>
            </thead>
            <tbody>
                {data.map(
                    (value, index )=> {
                        return (
                            <tr>
                                
                                <td>{value.volunteerid}</td>
                                <td>{value.fullname}</td>
                                <td>{value.email}</td>
                                <td>{value.phone}</td>
                                <td>{value.dateofbirth}</td>
                                <td>{value.gender}</td>
                                <td>{value.bloodgroup}</td>
                                <td>{value.department}</td>
                                <td>{value.yearofstudy}</td>
                                <td>{value.campname}</td>
                                <td>{value.hourscompleted}</td>
                                <td>{value.address}</td>
                                <td>{value.unitnumber}</td>

                            </tr>
                        )
                    }
                    )}
            </tbody>
        </table>
    </div>
)
}



export default ViewEntry