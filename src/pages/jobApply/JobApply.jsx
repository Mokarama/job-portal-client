import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";


const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate =useNavigate();


  console.log(id, user, "user information");

  const submitJobApplication = (e) => {
    e.preventDefault();
    // console.log(e);

    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedIn, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };

    fetch("http://localhost:4000/myApplications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("insert id",data);

        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/myApplications');
        }
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold">Apply Job And Good Luck!</h2>
          <form onSubmit={submitJobApplication}>
            <fieldset className="fieldset">
              {/* LinkedIn area */}
              <label className="label">LinkedIn URL</label>
              <input
                type="url"
                name="linkedIn"
                className="input"
                placeholder="LinkedIn URL"
              />
              {/* github area */}
              <label className="label">Github URL</label>
              <input
                type="url"
                name="github"
                className="input"
                placeholder="Github URL"
              />
              {/* resume area */}
              <label className="label">Resume URL</label>
              <input
                type="url"
                name="resume"
                className="input"
                placeholder="Resume URL"
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Apply
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
