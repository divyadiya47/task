import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import Table from 'react-bootstrap/Table';

const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  const handleLogout = ()=>{
    localStorage.removeItem("loggedin");
    navigate("/login");
  }
  return (
    <>
    <section className="vh-100 bg-image"
    style={{
      backgroundImage:
      "url('https://img.freepik.com/free-vector/watercolor-stains-abstract-background_23-2149107181.jpg?w=740&t=st=1693555376~exp=1693555976~hmac=132f080f7b4e5f27d41f89f3cb68a8343bbbcb32aa221e7041663a5981159ca9')",
    }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-6 col-xl-12 col-xl-12">
              <div className="card" style={{ borderRadius: "15px"}}>
                <div className="card-body p-20">
                  <h2 className="text-uppercase text-center mb-5">
                  Employes Details
                  </h2>
                    <h1 className="text-center">WELCOME -{userName.name}</h1><p>
                    <Table striped bordered hover variant="dark">
      
      <thead>
        <tr >
          <th></th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody >
        <tr >
          <td>1</td>
          <td> <a class="tablesize3" href="Employes">Name1</a> </td>
          <td>abcd@gmail.com</td>
          <td>Web developer</td>
        </tr>
        <tr>
          <td>2</td>
          <td > <a class="tablesize2" href="Employes">Name2</a> </td>
          <td>ghij@gmail.com</td>
          <td>Frontend developer</td>
        </tr>
        <tr>
          <td>3</td>
          <td> <a class="tablesize1" href="Employes">Name3</a> </td>
          <td>mnop@gmail.com</td>
          <td>Full stack developer</td>
        </tr>
      </tbody>
    </Table>
                    </p>  
                    <div className="d-flex justify-content-center">  
                    <button onClick={handleLogout}  
                    type="button"         
                    className="btn btn-success btn-lg gradient-custom-4 text-body center">
                      Logout
                    </button></div>
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

export default Home;