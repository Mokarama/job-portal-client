import { FaDollarSign, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";


const HotJobsCard = ({ job }) => {
  const {_id,
    title,
    company_logo,
    category,
    location,
    description,
    requirements,
    salaryRange,
  } = job;
  return (
    <div className="card shadow-sm bg-white">
      <div className="card-body">
        <div className="flex  gap-2">
            {/* //image area */}
        <div>
          <figure>
            <img className="w-16" src={company_logo} alt="Logo" />
          </figure>
        </div>
          {/* //title area */}
        <div className="">
          <h2 className="card-title">{title}</h2>
          <p className="flex gap-2 items-center">
            <FaLocationDot></FaLocationDot>
            {location}
          </p>
        </div>
        </div>
        
        <div>
           <h4 className="text-xl font-semibold">{category} <p className="badge badge-secondary my-2">NEW</p></h4>
           <p>{description}</p> 
        </div>

         <div className="flex flex-wrap gap-4">
             {
                requirements.map(requirement=><p className="border border-gray-300 p-2 rounded-xl ">{requirement}</p>)
             }
            </div>


             {/* //salaryRange */}
             <div className="flex items-center">
                <div><h2>Salary: </h2></div>
                <div>
                    <h2 className="flex items-center gap-1"><FaDollarSign></FaDollarSign> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</h2>
                </div>
             </div>


        <div className="card-actions justify-end">
         <Link  to={`/jobs/${_id}`}>
              <button className="btn btn-primary">Apply</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;

/*

_id
68a092f24418197e5c1a7826
title
"Marketing Specialist"
location
"Banani, Dhaka"
jobType
"Remote"
category
"Marketing"
applicationDeadline
"2024-12-15"

salaryRange
Object
description
"Join our marketing team to strategize and implement innovative campaig…"
company
"GoatMark Inc"

requirements
Array (4)

responsibilities
Array (3)
status
"active"
hr_email
"recruitment@brightmark.com"
hr_name
"Tasnia Ahmed"
company_logo
"https://i.ibb.co/TvvzXfq/google.png"*/
