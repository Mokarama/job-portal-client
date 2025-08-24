
import Lottie from "lottie-react";
import logInLottieJSON from "../../assets/lottie/login.json"
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router";



const SignIn = () => {
    
 const {logInUser} =useContext(AuthContext);
 const location = useLocation();
 const navigate =useNavigate()
 console.log('in signIn page', location);
 const form= location.state || '/';



    const handleSignIn=(e)=>{
        e.preventDefault();

        const from =e.target;
        
        const email =from.email.value;
        const password=from.password.value;
        console.log(email, password);
    //password validation
    //show password validation error

    logInUser(email, password)
    .then((result)=>{
        console.log(result.user);
        navigate(form);
    })

    .catch((error)=>{
        console.log(error.message);
    })

    }
    return (
           <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div className="w-96">
              <Lottie animationData={logInLottieJSON}></Lottie>
            </div>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-4xl font-bold ml-4 mt-4">LogIn now!</h1>
            <form onSubmit={handleSignIn}>
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button type="submit" className="btn btn-neutral mt-4">
                    Login
                  </button>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignIn;