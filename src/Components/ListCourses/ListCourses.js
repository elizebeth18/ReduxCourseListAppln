import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ListCourses = () => {

    const [courses,setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{

        console.log("useEffect");
        axios.get('http://localhost:9112/learn-c.org')
        .then((response) => {
            //console.log(response.data);
            setCourses(response.data);

        }).catch((err) => {
            console.error(err)
        });

    },[]);

    const displayCourses = (cData) => {
        if(cData){
            return cData.map((item) => {
                return (<div className='col-md-5 courseDiv'  key={item.id}>
                    <div className='col-md-12'>
                        <img src={item.image_url} alt={item.link_name} style={{width: '100%'}}/>
                    </div>
                    <div className='col-md-12 text-center' style={{margin: 10}}>
                        <span>{item.link_name}</span>
                    </div>
                    <center>
                        <button className='btn btn-primary'
                            onClick={() => {navigate('enquiryForm',{ replace: true })}}>
                                Enquiry
                        </button>
                    </center>
                </div>)
            });
        }
    }
    return(
        <div>
            <div className='col-md-12'>
                {displayCourses(courses)}
            </div>
        </div>
    );
}

export default ListCourses;