import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const {signIn, googleSignIn} = useContext(authContext);
    const handelLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const eamil = form.get('email');
        const password = form.get('password');
        
        signIn(eamil, password)
        .then(result =>{
            toast.success('Successfully login');
            console.log(result.user);
            navigate(location?.state ? location.state : '/');
            
        })
        .catch(error =>{
            console.error(error);
            
        })

    }
    const handelGoogleSingnIn = () =>{
        googleSignIn()
        .then(result => {
            toast.success('Longin Successfully');
            console.log(result.user);
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error);
            
        })
    }
    return (
        <div className="mb-20">
            <div className="max-w-md mx-auto">
                <div className="">
                    <h3 className="text-4xl text-black font-bold text-center py-5">Login</h3>
                    <p className="text-xl text-black font-semibold text-center">Welcome back! Sign in to your account</p>
                </div>
                <form onSubmit={handelLogin} className="card-body shadow-2xl my-5 rounded-md">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="text-white font-bold bg-[#a28441] py-2 rounded-md">Login</button>
                        <p className="text-md">Do not have an account yet? <Link to={"/signup"} className="text-red-600 font-bold">Sign Up</Link></p>
                    </div>
                    <div className="text-center form-control">
                        <hr />
                        <p>or</p>
                        <button onClick={handelGoogleSingnIn} className="text-[#a28441] font-bold border-[#a28441] border-2 py-2 rounded-md flex justify-center items-center px-5"> <span className="mr-2">Google</span>
                            <svg viewBox="0 0 48 48" className="w-5 mr-2">
                                <title>Google Logo</title>
                                <clipPath id="g">
                                    <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                                </clipPath>
                                <g className="colors" clipPath="url(#g)">
                                    <path fill="#FBBC05" d="M0 37V11l17 13z" />
                                    <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                    <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                    <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;