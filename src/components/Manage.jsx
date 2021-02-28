import React from "react";
import ManageComponent from "./ManageComponent";
const Manage = (props) => {
    return (
        <div className="App">
            <ManageComponent></ManageComponent>
            <div className="footer">
                <ul> 
                <li>
                    <a className="inactive" href="/">
                    <i class="fa fa-home"></i>
                    <div className="link-name" >home</div>
                    </a>
                </li>
                <li>
                    <a className="inactive" href="/chat">
                    <i class="fa fa-comments"></i>
                    <div className="link-name" >chat</div>
                    </a>
                </li>
                <li>
                    <a className="inactive" href="/status">
                    <i class="fa fa-circle-o-notch"></i>
                    <div className="link-name" >status</div>
                    </a>
                </li>
                <li>
                    <a className="active" href="#">
                    <i class="fa fa-cogs"></i>
                    <div className="link-name" >manage</div>
                    </a>
                </li>
                </ul>
      </div>
        </div>
    )
}

export default Manage;