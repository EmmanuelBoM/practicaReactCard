import React from 'react';
import './card.css';
import imgPerfil from './img1.png'
import gitLogo from './github.png'
import { BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom'
import App from './App'

function Page(){
    return(
        <div className='card-item'>
            <div class="title" >Second Page</div>
            <nav class="link">
                 <Link to="/">App</Link>
            </nav>       
        </div>
    )
}


export default Page;