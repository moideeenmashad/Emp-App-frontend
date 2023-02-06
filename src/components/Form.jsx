import React ,{useState} from 'react'
import Navbar from './Navbar'

const Form = () => {
    const [data,setData] = useState({
        Name : "",
        Designation :"" ,
        Location : "",
        Salary : 0
    })
    const inputHandler =(event) =>{
        const {name,value} = event.target
        setData(
            (previousState)=>({
              ...previousState,
              [name]: value  
            })
        )
    }

    const readValues =()=>{
        console.log(data)
    }
  return (
   <div>
     <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
            <Navbar />
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Name</label>
                        <input 
                        type="text" 
                        name="Name" 
                        placeholder='Enter Your Name' 
                        onChange={inputHandler}
                        className="form-control"
                        value={data.Name} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Designation</label>
                        <input 
                        type="text" 
                        name="Designation" 
                        onChange={inputHandler}
                        placeholder='Enter Your Designation' 
                        className="form-control"
                        value={data.Designation} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Location</label>
                        <input 
                        type="text" 
                        name="Location" 
                        onChange={inputHandler} 
                        placeholder='Enter Your Location' 
                        className="form-control"
                        value={data.Location} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Salary</label>
                        <input 
                        type="text"
                        name="Salary" 
                        onChange={inputHandler} 
                        placeholder='Enter Your Salary' 
                        className="form-control"
                        value={data.Salary} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValues}>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
   </div>
  )
}

export default Form