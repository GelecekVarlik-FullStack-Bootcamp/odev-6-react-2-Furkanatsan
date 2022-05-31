import React from 'react'
import {Link,} from 'react-router-dom';
function Category() {
  return (
    <div className='container border border-primary rounded mt-5  ' style={{ height: "500px", width: "900px" }} >
      <div className='d-flex justify-content-center mt-3' >
      <Link to="/Todos" className="nav-link btn btn-primary btn-lg mt-3 text-white " style={{paddingTop:"11px" }}>Todos</Link>
        <button className='btn btn-primary btn-lg mt-3' style={{ marginLeft: "15px" }}  >Categories</button>
      </div>
      <div className='row mt-4' >
        <div className='col-sm-8' >
          <input type="text" placeholder='Category Title' className='form-control' style={{ width: "300px" }}></input>
        </div>
        <div className='col-sm-4'>
          <button className='btn btn-primary'>Add</button>
        </div>
      </div>

            <ul class="list-group mt-4">
        <li class="list-group-item disabled">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>

      

    </div>
  )
}

export default Category