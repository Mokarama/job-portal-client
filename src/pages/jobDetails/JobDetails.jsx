import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const {_id,title, company, deadline } =useLoaderData();
    // console.log(job);
    return (
        <div className="m-10">
            <h2 className="text-3xl">Job Details for : {title}</h2>
            <p>apply for : {company}</p>
            <p>deadline: {deadline}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className="btn btn-primary">Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;