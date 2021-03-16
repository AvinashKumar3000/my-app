import React from "react";
import StatusComponent from "./StatusComponent";
const Status = (props) => {
    return (
        <div className="App">
            <StatusComponent></StatusComponent>
            <div className="footer">
        <ul> 
          <li>
            <a className="inactive" href="/music">
              <i className="fa fa-music"></i>
              <div className="link-name" >music</div>
            </a>
          </li>
          <li>
            <a className="inactive" href="/chat">
              <i className="fa fa-comments"></i>
              <div className="link-name" >chat</div>
            </a>
          </li>
          <li>
            <a className="active" href="#">
              <i className="fa fa-circle-o-notch"></i>
              <div className="link-name" >status</div>
            </a>
          </li>
          <li>
            <a className="inactive" href="/manage">
              <i className="fa fa-cogs"></i>
              <div className="link-name" >manage</div>
            </a>
          </li>
        </ul>
      </div>
        </div>
    )
}

export default Status;