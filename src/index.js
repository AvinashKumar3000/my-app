
import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthPage from "./pages/AuthPage";

const IndexPage = () => {
  const [state, setstate] = useState(false)
  const handleState = ( arg ) => {
    setstate(arg)
  }
  if( !state ){
    return(
      <AuthPage handleState={handleState}/>
    )
  }
  return (<App/>) 
}

ReactDOM.render(
      <div>
        <IndexPage/>
      </div>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
