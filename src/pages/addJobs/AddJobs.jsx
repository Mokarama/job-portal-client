
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const AddJobs = () => {
    const { user } = useAuth();
    const navigate =useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max,currency, ...newJob } = initialData;
    console.log(min, max, currency, newJob);

    newJob.salaryRange ={ min, max, currency};
    newJob.responsibility =newJob.responsibility.split('\n');
    newJob.requirements= newJob.requirements.split('\n');
    console.log(newJob);

     fetch('http://localhost:4000/jobs',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newJob)

     })
     .then(res=>res.json())
     .then(data => {
                if (data.insertedId) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Job  has been added",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                 navigate('/myPostedJobs');
                }
     })
  };

  return (
    <div className="w-3/4 mx-auto">
      <h2 className="text-3xl font-bold">Add a new jobs</h2>
      <div className=" ">
        <form onSubmit={handleSubmit} className="">
          <div className="card bg-base-100  shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                {/* **title*** */}
                <label className="label ">Title</label>
                <input
                  name="title"
                  type="text"
                  className="input w-full"
                  placeholder="Add Title"
                />

                {/* **location *** */}
                <label className="label">Location</label>
                <input
                  name="location"
                  type="text"
                  className="input w-full"
                  placeholder="Job location"
                />

                {/* ***job type*** */}
                <select
                  name="jobType"
                  defaultValue="Pick a font"
                  className="select select-ghost w-full"
                >
                  <option disabled={true}>Pick a job type</option>
                  <option>Full-time</option>
                  <option>Intern</option>
                  <option>Part-time</option>
                </select>

                {/* ***category*** */}
                 <select
                  name="category"
                  defaultValue="Pick a font"
                  className="select select-ghost w-full"
                >
                  <option disabled={true}>Pick a category</option>
                  <option>Enggineering</option>
                  <option>Marketing</option>
                  <option>Graphics</option>
                </select>

                {/* ***Salary Range*** */}
                <label>Min Salary</label>
                <input name="min" type="number" placeholder="Minimum Salary" />

                <label>Max Salary</label>
                <input name="max" type="number" placeholder="Maximum Salary" />

                <label>Currency</label>
                <select name="currency">
                  <option value="USD">USD</option>
                  <option value="BDT">BDT</option>
                  <option value="INR">INR</option>
                </select>


                {/* /**Description area */}
                <textarea
                  name="description"
                  className="textarea h-24 w-full"
                  placeholder="Description"
                ></textarea>

                {/* **Resposibility area *** */}
                <label className="label">Jobs Resposibility</label>
                <textarea className="textarea h-24" placeholder="Write each responsibility in a new line" name="responsibility"></textarea>


                {/* **Requirements area *** */}
                <label className="label">Jobs Requirements</label>
                <textarea className="textarea h-24" placeholder="Write each requirements in a new line" name="requirements"></textarea>

              {/* /***applicationDeadline */}
              <label className="label ">Application Deadline</label>
                <input
                  name="deadline"
                  type="date"
                  className="input w-full"
                  placeholder="Application Deadline"
                />

                {/* **HR-Name area *** */}
                <label className="label">HR-Name</label>
                <input
                  name="hr-name"
                  type="text"
                  className="input w-full"
                  placeholder="HR-Name"
                />

                {/* **HR-Email area *** */}
                <label className="label">HR-Email</label>
                <input defaultValue={user?.email}
                  name="hr-email"
                  type="email"
                  className="input w-full"
                  placeholder="HR-Email"
                />

                {/* **company logo area *** */}
                <label className="label">Company logo URL</label>
                <input
                  name="companyLogo"
                  type="url"
                  className="input w-full"
                  placeholder="Add Company logo"
                />

                {/* /****submit button */}
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
