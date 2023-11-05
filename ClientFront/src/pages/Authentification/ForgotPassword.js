import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast'; 
import axios from 'axios';
import "../../styles/authstyle.css";


const ForgotPassword = () => {
    const [email,setEmail] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [answer,setAnswer] = useState("");
    const navigate = useNavigate();

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/forgot-password', {email,newPassword,answer});
            console.log(res);
            
            if(res && res.data.success){ 
                toast.success(res.data && res.data.message);
                navigate("/login");
            }else{
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('something went wrong');
            
        }
    }; 
  return (
    <Layout title={'Forgot Password'}>
        <div className="page-wrapper1">
        <div className='register'>
            <h1>Reset Password</h1>
           <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your email' required/>
                </div>
                <div className="mb-3">
                  
                    <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your friend name Childhood' required/>
                </div>
                <div className="mb-3">
                    
                    <input type="password" value={newPassword}  onChange={(e) => setNewPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter your Password' required/>
                </div>
                
                <button type="submit" className="btn btn-primary">Reset</button>
                <div className='mb-3'></div> {/* Espace vide */}
            </form>
        </div>
        </div>
    </Layout>
  );
};

export default ForgotPassword;