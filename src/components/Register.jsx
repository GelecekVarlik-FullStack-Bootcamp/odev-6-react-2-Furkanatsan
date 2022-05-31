import React,{useState} from 'react'
import axios from 'axios'

function Register() {


  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const [cPassword,setcPassword]=useState("");



  
    const postData=(e)=>{
      e.preventDefault();
      axios.post("http://localhost:81/auth/register",{
        "username":userName,
        "password":password,
        "passwordConfirm":cPassword
  
      }).then(res=>console.log("posting data",res)).catch(err=>console.log(err))
  
    }
  
  

  


  return (
    <div className='container mt-5 '>
      
      <div className='row'>
        <div className='col-md-12'>
          <div class="alert alert-primary text-center" role="alert">
            New Register
          </div>
          <form>
          <div>
          <label >Username: </label>
          <input type="text" className='form-control' value={userName} onChange={(e)=>setUserName(e.target.value)}  ></input>
          </div>
          <div>
          <label >Password: </label>
          <input type="password" className='form-control'value={password} onChange={(e)=>setPassword(e.target.value)}></input>
          </div>
          <div>
          <label >Confirm Password: </label>
          <input type="password" className='form-control'value={cPassword} onChange={(e)=>setcPassword(e.target.value)}></input>
          </div>
          <button className='btn btn-primary' onClick={postData}>Signin</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register