import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourseList } from '../../store/courseListSlice';

const ListCourses = () => {

    const [courses,setCourses] = useState([]);
    const navigate = useNavigate();
    const courseList =  useSelector((state) => state.courseList.listOfCourses);
    const dispatch =  useDispatch();
    

    useEffect(()=>{
        setCourses(courseList);
    },[courseList]);

    useEffect(()=>{
        dispatch(fetchCourseList());
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
                            onClick={() => {navigate('enquiryForm?courseName='+item.link_name,{ replace: true })}}>
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