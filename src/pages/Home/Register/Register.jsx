import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContex } from '../../../providers/AuthProvider'


const Register = () => {
    //Recive object from AuthProvider API
    const { createUser } = useContext(AuthContex);

    // Error show
    const [regerror, setRegerror] = useState('')
    //success message
    const [success, setSuccess] = useState('');
    
    const navigate = useNavigate();



    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, photo, email, password)

        //resetError
        setRegerror('');
        //reset success
        setSuccess('')

        if (password.length < 6) {
            setRegerror('Pass should at lest 6')
            return;
        }

        //create user
        createUser(email, password)
            .then(res => {
                console.log(res.user)
                setSuccess('User Create Successfully')
                navigate('/')

            })
            .catch(error => {
                console.error(error);
                setRegerror(error.message)
            })

    }

    return (
        <div>

            <Navbar></Navbar>
            <div className="m-4">
                <h1 className="text-3xl text-center">Register Here</h1>
                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name.." className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo-url" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center m-4">Already have an account
                    <Link to="/login" className="text-red-400 font-bold"> Login</Link>
                </p>

                {
                    regerror && <p className="text-xl text-red-700 text-center">{regerror}</p>
                }
                {
                    success && <p className="text-xl text-green-700 text-center">{success}</p>
                }
            </div>

        </div>
    );
};

export default Register;