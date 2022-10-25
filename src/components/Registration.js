import React,{useState}from 'react';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

function Registration(){
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[mobile,setMobile] = useState("");
    const[msg,setMsg] = useState("");
    const data = {name,email,mobile,msg};
    const navigate = useNavigate('');
   
    useEffect(()=>{
     const auth = localStorage.getItem('useInfo');
     if(auth){
       navigate('/add-product')
     }
   
    })
    function handleInput(){
        
              fetch('http://localhost:9000/register', {
                method: 'POST', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              })
                .then((response) => response.json())
                .then((data) => {
                    const logdata = JSON.stringify(data);
                    localStorage.setItem('useInfo',logdata);
                  console.log('Success:', data);
                  navigate('/about')
                })
                .catch((error) => {
                  console.error('Error:', error);
                });

    }
    return (<>
    <div className="container">
            <div className="row offset-2 mt-20">
                <div className="col-md-10">
                    <h2 className="align-center text-center">Register</h2>
                    <div className="mb-3 row">
                        <label  className="col-sm-2 col-form-label">Name{name}</label>
                        <div className="col-sm-10">
                <input type="text" placeholder="Enter Name" className="form-control" 
                id="staticEmail" value={name} onChange={(e)=>{setName(e.target.value)}}  />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="Enter email address" className="form-control" value={email} id="inputPassword" onChange={(e)=>{setEmail(e.target.value)}} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-2 col-form-label">Mobile Number</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="Enter mobile number" value={mobile} className="form-control" id="inputPassword"  onChange={(e)=>{setMobile(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Message</label>
                        <div className="col-sm-10">
                           <textarea className="form-control" onChange={(e) =>{setMsg(e.target.value)}} value={msg} name="msg"></textarea>
                        </div>
                    </div>
                    <div className="mb-3 row">
                       
                        <div className="col-sm-10">
                           <button onClick={handleInput} className="btn btn-info pull-left">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Registration