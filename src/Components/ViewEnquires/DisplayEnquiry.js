import React from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayEnquiry = (props) => {

    const navigate = useNavigate();
    
    const displayEnquiries = (enquiryList) => {
        if(enquiryList) {   
            return enquiryList.map((item) => {
                return (<tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.courseName}</td>
                    <td>{item.enquiryMessage}</td>
                </tr>);
            })
        }
    }

    return(
        <div>
            <table className='table table-condensed'>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Course Name</th>
                    <th>Enquiry</th>
                </thead>
                <tbody>
                    {displayEnquiries(props.listOfEnquiry)}
                </tbody>
            </table>
            <br />
            <br />
            <br />
            <button type="button" className='btn btn-primary' 
                onClick={() => {navigate("/")}}>
                    Back
            </button>
        </div>
    );
}

export default DisplayEnquiry;