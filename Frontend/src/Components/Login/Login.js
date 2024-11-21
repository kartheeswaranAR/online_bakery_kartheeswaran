import {Link} from 'react-router-dom'
function Login(){
    return (
        <div className='container'>
        <form>

        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Employee ID</label>
          <div class="col-sm-10">
            <input type="text" className='inpt'/>
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" className='inpt'/>
          </div>
        </div>

        
       <br/>
        <button type="submit" class="btnsubmit">Login</button>
        &nbsp;
        <button type="submit" class="btnsubmit" ><Link className="nav-link" to="/">Signup</Link></button>
      </form>
        </div>
    )
}
export default Login