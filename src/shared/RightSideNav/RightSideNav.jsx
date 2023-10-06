import { FaGoogle, FaGithubSquare, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            {/* Button */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithubSquare></FaGithubSquare>
                    GitHub
                </button>
            </div>
            
                  {/* Ancure */}
            <div className='p-4 mb-6'>
                <h2 className="text-3xl mb-4">Find Us On</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href=''>
                    <FaFacebook className='mr-3'></FaFacebook>
                    Facebook
                </a>
                <a className='p-4 flex text-lg items-center border-x' href=''>
                    <FaTwitter className='mr-3'></FaTwitter>
                     Twitter
                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg' href=''>
                    <FaInstagram className='mr-3'></FaInstagram>
                    Instagram
                </a>
            </div>

                {/* Q-Zone */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Q-Zone</h2>
                <img className='w-full' src={qZone1} alt="" />
                <img className='w-full' src={qZone2} alt="" />
                <img className='w-full' src={qZone3} alt="" />
            </div>

        </div>

    );
};

export default RightSideNav;