import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from "react-redux";
// import { useSelector } from 'react-redux'
// import { useLocation } from "react-router";
import { Link } from 'react-router-dom'
import "../components/PaymentDetails.css";
function PaymentDetails() {
  const { data } = useSelector((state) => state.display);
  console.log(data, "hello");
  return (
    <div  className="Paymentimage"  > 
        <div class="row justify-content-evenly mt-5">
    
        <div class="col-md-3 mb-4 ">
          <div class="card">
       
 
           <div class="card-header">  <span style={{ color: 'red' }}> Order Summary</span>  
  
   <div className="card-body">  {
            // data.map((e)=>Object.keys(e).map(el=>el))
            data.map((e) => (
              <div> 
                     <ListGroup variant="flush">          {" "}
                <ListGroup.Item> <div> Item-weight :<span style={{ color: 'red' }}>{e.ItemWeight}</span></div>{" "}</ListGroup.Item>   
                <ListGroup.Item> <div> PickUpDate:<span style={{ color: 'red' }}>{e.PickUpDate}</span></div>{" "}</ListGroup.Item> 
                <ListGroup.Item><div> ChooseParcelImage:<span style={{ color: 'red' }}>{e.ChooseParcelImage}</span></div>{" "}</ListGroup.Item> 
                <ListGroup.Item><div> ReciversName:<span style={{ color: 'red' }}>{e.ReciversName}</span></div>{" "}</ListGroup.Item>
                <ListGroup.Item><div> ReciverPhonenumber:<span style={{ color: 'red' }}>{e.ReciverPhonenumber}</span></div>{" "}</ListGroup.Item>
                </ListGroup>     
              </div> 
                         ))
          }
<br></br>
<div class="container">  
   <button className="btn btn-success"><Link to='/Services'  className="SignIn"  > Go to Payment</Link>  </button>  <br></br> <br></br>
      {}
  <button  className="btn btn-danger"><Link to='/Parcel'   className="SignIn" >Cancel</Link>  </button>
  </div>
     </div>  
     </div>
     </div>    
     </div> 
     </div>
      </div>

      );
}
export default PaymentDetails;

