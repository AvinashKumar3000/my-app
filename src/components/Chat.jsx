import React from "react";
import '../index.css';
import ChatComponent from "./ChatComponent";
const Chat = (props) => {

    return (
        <div className="App">
            <ChatComponent></ChatComponent>
            <div className="footer">
        <ul> 
          <li>
            <a className="inactive" href="/">
              <i className="fa fa-home"></i>
              <div className="link-name" >home</div>
            </a>
          </li>
          <li>
            <a className="active" href="#">
              <i className="fa fa-comments"></i>
              <div className="link-name" >chat</div>
            </a>
          </li>
          <li>
            <a className="inactive" href="/status">
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

export default Chat;