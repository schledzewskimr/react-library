'use client';
import React from "react";


export default function CardPageComponent() {


  return (
  <>
  <div className="card" style={{width: "18rem"}}>
  <img src="..." className="bd-placeholder-img card-img-top" alt="..." style={{height: "180px", objectFit: "cover"}} />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </>
  );
}