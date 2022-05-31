import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {Link,} from 'react-router-dom';
import Todo from './Todo'
function Todos() {


  const[todos,setTodos]=useState();

  useEffect(()=>{
    axios.get("http://localhost:81/todo").then((res)=>{
      const responseTodos=res.data;
      setTodos(responseTodos);
    });
  },[]);
  console.log(todos);
  return (
    <div className='container border border-primary rounded mt-5 ' style={{ height: "500px", width: "900px" }} >
      <div className='d-flex justify-content-center mt-3' >
        <button className='btn btn-primary btn-lg mt-3' > Todos </button>
        <Link to="/Category" className="nav-link btn btn-primary btn-lg mt-3 text-white " style={{ marginLeft: "15px",paddingTop:"11px" }} >Category</Link>
      </div>
      <div className='row mt-4' >
        <div className='col-5' >
          <input type="text" placeholder='ToDo Description' className='form-control' style={{ width: "300px" }}></input>
        </div>

        <div className='col-3'>
          <select class="form-select inline-block" aria-label="Default select example">
            <option selected>Categories</option>
            <option value="1">Categories1</option>
            <option value="2">Categories2</option>
            <option value="3">Categories3</option>
          </select>
        </div>

        <div className='col-3'>
          <select class="form-select inline-block" aria-label="Default select example">
            <option selected>Status</option>
            <option value="1">Status1</option>
            <option value="2">Status2</option>
            <option value="3">Status3</option>
          </select>
        </div>
        <div className='col-1'>
          <button className='btn btn-primary'>Add</button>

        </div>


      </div>
      <div>
        
              <ul class="list-group mt-4">
                {/* {
                  todos && todos.map(todo=>(
                    <li class="list-group-item disabled">{todo.title}</li>
                  ))
                } */}
             

               <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Morbi leo risus</li>
              <li class="list-group-item">Porta ac consectetur ac</li>
              <li class="list-group-item">Vestibulum at eros</li> 
            </ul>
     
      </div>

    </div>
  )
}

export default Todos