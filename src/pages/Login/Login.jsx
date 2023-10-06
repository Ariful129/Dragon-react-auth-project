import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContex } from "../../providers/AuthProvider";



const Login = () => {
    //From Auth API
    const { signIn } = useContext(AuthContex);


    // // Error show
    const [regerror, setRegerror] = useState('')

    const location = useLocation();
    const navigate = useNavigate();
    console.log('Location Login page', location.state)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password')

        signIn(email, password)
            .then(res => {
                console.log(res.user)
                //Navigate After Login
                navigate(location?.state ? location.state : '/login');
               
              if(!location.state){
                 navigate('/')
              }
                
            })
            .catch(error => {
                console.error(error.message);
                 setRegerror(error.message)
            })



    }

      



    return (
        <div>

            <Navbar></Navbar>
            <div className="m-4">
                <h1 className="text-3xl text-center">Please LogIn</h1>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                
                 
                {
                    regerror && <p className="text-xl text-red-700 text-center">{regerror}</p>
                }
                
                <p className="text-center m-4">Do not have an account
                    <Link to="/register" className="text-red-400 font-bold"> Register</Link>
                </p>
            </div>

        </div>
    );
};

export default Login;