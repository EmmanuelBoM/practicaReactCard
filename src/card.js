import React from 'react';
import './card.css';
import imgPerfil from './img1.png'
import gitLogo from './github.png'
import { BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom'




function Card({nombre, apellidos, correo, username} ){
    let [apellidoP, apellidoM] = apellidos; // Aplicacion de desestructuración
    return(
        <div className="container">
            <h3 class="title">Card Page</h3>
            <div className='card-item'>
                <div className='card'>
                <div className="card-front">
                    <h3>Hello World.</h3>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTU0LjQyNTc4MSAxMzUuNzg1MTU2YzguMTY0MDYzLTEuNDEwMTU2IDEzLjYzNjcxOS05LjE2Nzk2OCAxMi4yMzA0NjktMTcuMzMyMDMxLTcuOTg4MjgxLTQ2LjI4OTA2MyAyNy43MTg3NS04OC40NTMxMjUgNzQuMzk0NTMxLTg4LjQ1MzEyNSA0Ni41MzUxNTcgMCA4Mi4zMDQ2ODggNDEuOTY0ODQ0IDc0LjQyNTc4MSA4OC4yNjk1MzEtMS4zODY3MTggOC4xNjc5NjkgNC4xMDU0NjkgMTUuOTE0MDYzIDEyLjI3MzQzOCAxNy4zMDQ2ODggOC4xNjc5NjkgMS4zOTQ1MzEgMTUuOTE0MDYyLTQuMTA1NDY5IDE3LjMwNDY4OC0xMi4yNzM0MzggMTAuOTYwOTM3LTY0LjQ0OTIxOS0zOC43ODEyNS0xMjMuMzAwNzgxLTEwNC4wMDM5MDctMTIzLjMwMDc4MS02NS4xNDg0MzcgMC0xMTUuMTI4OTA2IDU4Ljg0Mzc1LTEwMy45NTcwMzEgMTIzLjU1NDY4OCAxLjQxMDE1NiA4LjE4NzUgOS4xOTkyMTkgMTMuNjM2NzE4IDE3LjMzMjAzMSAxMi4yMzA0Njh6bTAgMCIgZmlsbD0iIzI2MzM1MiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMwMC42NjQwNjIgMjQwLjY0NDUzMWMtMTEuMjQyMTg3LTIyLjA2NjQwNi0zOC4wMTk1MzEtMzAuODc1LTYwLTIwLTEwLjIxODc1LTIwLjA1ODU5My0zMy41ODk4NDMtMjkuNTM1MTU2LTU0LjgzMjAzMS0yMi4xNjAxNTZ2LTkxLjg2MzI4MWMwLTI0LjQ4NDM3NS0xOS42NzU3ODEtNDQuOTQxNDA2LTQzLjg2NzE4Ny00NS42MDU0NjktMjUuMzQ3NjU2LS43MTg3NS00Ni4zNTE1NjMgMTkuNTgyMDMxLTQ2LjM1MTU2MyA0NC45ODQzNzV2MjMxLjA4MjAzMWwtMTcuNjIxMDkzLTE4LjQ1MzEyNWMtMTYuOTE0MDYzLTE3LjcwNzAzMS00NS4yMzQzNzYtMTguOTUzMTI1LTYzLjEzNjcxOS0yLjc2OTUzMS0xOC44OTA2MjUgMTcuMDc0MjE5LTE5LjgzMjAzMSA0Ni4xNDg0MzctMi40Mzc1IDY0LjQyMTg3NWwxMDEuMjczNDM3IDEwOC4wMTk1MzFjMTQuMTIxMDk0IDE1LjA1ODU5NCAzNC4wNjY0MDYgMjMuNjk5MjE5IDU0LjcxNDg0NCAyMy42OTkyMTloMTIyLjE0NDUzMWM0MS4zNTU0NjkgMCA3NS0zMy42NDQ1MzEgNzUtNzV2LTE1NmMwLTMzLjIzMDQ2OS0zNS4wNTA3ODEtNTUuMTE3MTg4LTY0Ljg4NjcxOS00MC4zNTU0Njl6bTM0Ljg4NjcxOSAxOTYuMzU1NDY5YzAgMjQuODEyNS0yMC4xODc1IDQ1LTQ1IDQ1aC0xMjIuMTQ0NTMxYy0xMi4zOTA2MjUgMC0yNC4zNTU0NjktNS4xODM1OTQtMzIuODI4MTI1LTE0LjIyMjY1Ni0uMzYzMjgxLS4zODI4MTMtMTAxLjA1MDc4MS0xMDcuNzc3MzQ0LTEwMS40MTQwNjMtMTA4LjE2MDE1Ni01LjgwMDc4MS02LjA3ODEyNi01LjUyMzQzNy0xNS43NzczNDQuODA0Njg4LTIxLjUwMzkwNyA1Ljk2NDg0NC01LjM4NjcxOSAxNS41MzEyNS00LjgzMjAzMSAyMS4zMjQyMTkgMS4yMzQzNzVsNDMuNDY4NzUgNDUuNTE5NTMyYzkuMzIwMzEyIDkuNzY1NjI0IDI1Ljg0NzY1NiAzLjE0MDYyNCAyNS44NDc2NTYtMTAuMzU1NDY5di0yNjguNTExNzE5YzAtOC40Mjk2ODggNi45OTIxODctMTUuMjM0Mzc1IDE1LjUzOTA2My0xNC45OTYwOTQgOC4wOTc2NTYuMjIyNjU2IDE0LjY4MzU5MyA3LjIyNjU2MyAxNC42ODM1OTMgMTUuNjE3MTg4IDAgMTY1LjA1NDY4Ny0uMjgxMjUgOTAuMjM4MjgxLS4yODEyNSAxNzkuMzc4OTA2IDAgOC4zMDg1OTQgNi43NjU2MjUgMTUuMDc4MTI1IDE1LjE0MDYyNSAxNC45OTIxODggOC4zNjMyODIuMDg1OTM3IDE1LjE0MDYyNS02LjY3OTY4OCAxNS4xNDA2MjUtMTQuOTkyMTg4di00Ny44NTE1NjJjMS4zMzU5MzgtNi45MTQwNjMgNy40MjE4NzUtMTIuMTQ4NDM4IDE0LjcxODc1LTEyLjE0ODQzOCA4LjI2OTUzMSAwIDE1IDYuNzMwNDY5IDE1IDE1djQ1YzAgOC4yODUxNTYgNi43MTQ4NDQgMTUgMTUgMTUgOC4yODUxNTcgMCAxNS02LjcxNDg0NCAxNS0xNXYtMjVjMC04LjI2OTUzMSA2LjczMDQ2OS0xNSAxNS0xNXMxNSA2LjczMDQ2OSAxNSAxNXYyNWMwIDguMjg1MTU2IDYuNzE0ODQ0IDE1IDE1IDE1IDguMjg1MTU3IDAgMTUtNi43MTQ4NDQgMTUtMTV2LTVjMC04LjI2OTUzMSA2LjczMDQ2OS0xNSAxNS0xNXMxNSA2LjczMDQ2OSAxNSAxNXptMCAwIiBmaWxsPSIjMjYzMzUyIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
                </div>
                    <div className="card-back">
                        <img src={imgPerfil}/>
                        <div className="textos">
                            <h3 className="nombre"> {` ${nombre} ${apellidoP} ${apellidoM} - He/Him `} </h3>  {/* Aplicacion de Interpolacion de cadenas*/ }
                            <p className="subt">Email:</p>
                            <p className="texto">{correo} </p>
                            <a className="logo" href="https://github.com/EmmanuelBoM"><img src={gitLogo}/></a>
                            <p className="texto">{username}</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="link">
                 <Link to="/">App</Link>
            </nav>  
        </div>
    )
}


export default Card;