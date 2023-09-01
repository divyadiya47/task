import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";
const Register = () => {
  const navigate = useNavigate();
  const[input, setInput] = useState ({
    name:"",
    email:"",
  password:"",
    });


const handleSubmit = (e) => {
  e.preventDefault();
  localStorage.setItem("user", JSON.stringify(input));
  if(input.name && input.email && input.password){
    navigate("/login");
  }
  else{
    alert(" Please Enter Name ,Email and Password")

  }
};
  return (
    <>
    <section className="vh-100 bg-image"
    style={{
      backgroundImage:
      "url('https://img.freepik.com/free-vector/watercolor-stains-abstract-background_23-2149107181.jpg?w=740&t=st=1693555376~exp=1693555976~hmac=132f080f7b4e5f27d41f89f3cb68a8343bbbcb32aa221e7041663https://img.freepik.com/free-vector/watercolor-stains-abstract-background_23-2149107181.jpg?w=740&t=st=1693555376~exp=1693555976~hmac=132f080f7b4e5f27d41f89f3cb68a8343bbbcb32aa221e7041663a5981159ca9va5981159ca9')",
    }}
    
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px"}}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5 ">
                    Create an account
                  </h2>

                  <form onSubmit={handleSubmit}>

        <div className="form-outline mb-4">
                 
                     <input id="form3Example1cg" name="name" value={input.name} 
                           onChange={(e) => setInput({
                                  ... input,[e.target.name]: e.target.value,
                                 }) }
                                   type="text"
                               className="form-control form-control-lg" 
                                    />
                                   <label className="form-label" htmlFor="form3Example1cg">
                                    Username</label> 
                                  
                                      </div>

          <div className="form-outline mb-4">

                        <input name="email"
                        id="form3Example3cg" 
                         value={input.email} 
                         onChange={(e) => setInput({
                                ... input,[e.target.name]: e.target.value,
                               }) }
                                 type="email"
                             className="form-control form-control-lg"
                          />
                           <label className="form-label" htmlFor="form3Example3cg">E-mail</label> 
                              
                              </div>  
         <div className="form-outline mb-4">                   
                        <input name="password"
                        id="form3Example4cg" 
                         type="password" 
                        value={input.password} 
                        onChange={(e) => setInput({
                               ... input,[e.target.name]: e.target.value,
                              }) }
                            className="form-control form-control-lg"  />    
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password</label> 
                                    
                </div>
                <div className="d-flex justify-content-center">
                 <button  type="submit"
                 className="btn btn-success btn-block btn-lg gradient-custom-4 text-body text-white" >
                  Register</button>
                  </div> 
          <p className="text-center text-muted mt-5 mb-0"> 
          Have already an account ? 
            <a href="/Login" className="fw-bold text-body">
                        <u>Login here</u></a>
              </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      </>
  )
}

export default Register;