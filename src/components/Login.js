import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function  handleLogin(){
    
   let user =   fetch("http://localhost:9000/login",{
    method:"POST",
    headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({email,password})
   })  .then((response) => response.json()).then((data)=>{
    console.log(data);
   })
  }

  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-3 column mt-4">
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your email"
              className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter your password"
              className="form-control mt-3" value={password} onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <div className="form-group">
            <button onClick={handleLogin} className="btn btn-info mt-2 float-right">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
