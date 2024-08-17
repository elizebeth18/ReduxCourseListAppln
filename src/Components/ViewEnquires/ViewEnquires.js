import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DisplayEnquiry from './DisplayEnquiry';

const url = "http://localhost:9112/enquiry";

const ViewEnquires = () => {

    const[enquiryList,setEnquiryList] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then((res) => {
            console.log(res.data);
            setEnquiryList(res.data);
        }).catch((err) => console.error(err))
    },[]);

    return (
        <div className='container'>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <center>
                        <h3>View Enquires</h3>
                    </center>
                </div>
                <div className="panel-body">
                    <DisplayEnquiry listOfEnquiry={enquiryList} />
                </div>
            </div>
        </div>
    );
}

export default ViewEnquires;