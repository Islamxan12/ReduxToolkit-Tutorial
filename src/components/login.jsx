import React,{useState} from 'react';
import { icon } from "../constans/index";
import { Input } from "../ui";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='text-center mt-5'>
    <main className="form-signin w-25 m-auto">
    <form>
      <img className="mb-2" src={icon} alt="" width="60" height="50"/>
      <h1 className="h3 mb-3 fw-normal">Please sign Login</h1>

       <Input label={'Email adress'} setState={setEmail}/> 
       <Input label={'Password'} type='password' setState={setPassword}/> 
  
  
   
      <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">Login</button>
    </form>
  </main>
      </div>
  );
}

export default Login;