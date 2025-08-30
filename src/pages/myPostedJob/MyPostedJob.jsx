import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyPostedJob = () => {
  const [jobs, setJobs] = useState([]);

  const { user } = useAuth();
  console.log(user);

//   useEffect(() => {
//     fetch(`http://localhost:4000/jobs?email=${user.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         setJobs(data);
//       });
//   }, [user.email]);


useEffect(() => {
  if (!user?.email) return; // user আসার আগ পর্যন্ত কিছু করবেন না

  fetch(`http://localhost:4000/jobs?email=${user.email}`)
    .then((res) => res.json())
    .then((data) => {
      setJobs(data);
    })
    .catch((err) => console.error("Failed to fetch jobs", err));
}, [user]);

  return (
    <div>
      <h2>My posted Job {jobs.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
           {
            jobs.map((job, index)=> <tr>
              <th>{index + 1}</th>
              <td>{job.title}</td>
              <td>{job.applicationDeadline}</td>
              <td></td>
            </tr>)
           }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJob;
