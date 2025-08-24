import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";

const MyApplication = () => {
    const { user }=UseAuth();
    const [jobs, setJobs]=useState([]);
   
    useEffect(()=>{
        fetch(`http://localhost:4000/job-application?email=${user.email}`)
        .then(res => res.json())
        .then(data=> setJobs(data))
    }, [user.email])
    return (
        <div>
            <h2 className="text-3xl">My applications : {jobs.length}</h2>
        
        </div>
    );
};

export default MyApplication;