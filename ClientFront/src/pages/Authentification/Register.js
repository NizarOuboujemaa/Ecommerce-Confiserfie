import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast'; 
import axios from 'axios';
import "../../styles/authstyle.css";

const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [answer,setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/register', {name,email,password,phone,address,answer});
            console.log(res);
            console.log(res.data.success);
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
    <Layout title={"Connexion"}>
      <div className="page-wrapper">
        <div className='register'>
        <form onSubmit={handleSubmit}>  
            <h1>It all start from here</h1>
           
                <div className="mb-3">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputName" placeholder='Enter your Name' required/>
                </div>
                <div className="mb-3">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail" placeholder='Enter your email' required/>
                </div>
                <div className="mb-3">
                    <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword" placeholder='Enter your Password' required/>
                </div>
                <div className="mb-3">
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputPhone" placeholder='Enter your Phone Number' required/>
                </div>
                <div className="mb-3">
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputAddress" placeholder='Enter your Living Address' required/>
                </div>
                <div className="mb-3">
                    <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputAddress" placeholder='What is the name of your childhood Friend' required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>

    </Layout>
  );
};

export default Register;