import React,{ useState } from "react";
import { useParams } from "react-router-dom";
import "../css/MusicLibrary.css";

/**

window.onscroll = function() {myFunction()};
      
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
      
function myFunction() {
if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
} else {
    header.classList.remove("sticky");
}
}
 */

const Send = ( props ) => {
    return (
        <div className="send-msg">
            <div className="msg">
                { props.msg }
            </div>
            <div className="time">
                { props.time }
            </div>
        </div>
    )
} 

const Recieve = ( props ) => {
    return (
        <div className="recieve-msg">
            <div className="msg">
                { props.msg }
            </div>
            <div className="time">
                { props.time }
            </div>
        </div>
    )
} 

const ChatPage = (props) => {
    const [ msgInput , setmsgInput ] = useState("")
    const [ msgList, setmsgList ] = useState([
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"send"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"recieve"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"send"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"recieve"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"send"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"recieve"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"send"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"recieve"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"send"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"recieve"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"send"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"recieve"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"send"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"recieve"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"send"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"recieve"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"send"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"recieve"
        },
        { 
            msg: "hai this is me" ,
            time: "12:00 PM",
            type:"send"
        },
    ])
    const userId = useParams().id

    const clickedSendBtn = (e) => {
        e.preventDefault()
        if(msgInput !== ""){
            setmsgList([
                ...msgList,
                {
                    msg: msgInput ,
                    time: "12:00 PM",
                    type:"send"
                }
            ])
            setmsgInput("")
    
            window.scrollTo(0,window.innerHeight+500);
        }else{
            window.scrollTo(0,window.innerHeight+500);
        }
        
    }
    return (
        <div className="app">
            <div className="app-header flx-row sticky" id="myHeader">
                <div className="img-box-circle-sm"></div>
                <div className="user-name">
                    <div className="name">
                        { userId }
                    </div>
                    <div className="c-status">
                        status
                    </div>
                </div>
                
            </div>
            <div className="app-body">
                {
                    msgList.map((obj) => {
                        if(obj.type === 'send'){
                            return Send(obj)
                        } else {
                            return Recieve(obj)
                        }
                    })
                }
            </div>
            <div className="app-footer">
                <div className="search-section">
                    <div className="search flx-row">
                        <div className="search-bar flx-row">
                            <input type="text" className="input" placeholder="Find my playlist" value={msgInput}  onChange={(e)=>{ e.preventDefault(); setmsgInput(e.target.value) }} />
                        </div>
                        <button className="btn" onClick ={ (e) => clickedSendBtn(e) } >
                            send
                        </button>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;