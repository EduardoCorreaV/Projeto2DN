import { useState } from "react";
import {NavLink, Outlet} from 'react-router-dom';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import './Home.css';

const Home = () =>{

    const [open, setopen] = useState(true);

    function expandMenu(){
        setopen(!open);
    }

    return(
        <div className='tela'>
            <div className={open?'menu-lateral-open':'menu-lateral-closed'}>
                <button onClick={expandMenu}>
                    {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
                </button>
                <ul>
                    <br/>
                    <img src="https://img.icons8.com/material/58/null/dashboard-layout.png"/>
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    <br/>
                    <img src="https://img.icons8.com/wired/58/null/labels.png"/>
                    <li><NavLink to='/tabela'>Tabela</NavLink></li>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <img src="https://img.icons8.com/ios-glyphs/50/null/user--v1.png"/> 
                    <br/>
                    <img src="https://img.icons8.com/ios-glyphs/20/null/exit.png"/>
                </ul>
            </div>
            <div className='display'>
                <h1>Tela de Alunos</h1>
                    <img src="https://img.icons8.com/ios-glyphs/50/null/user--v1.png"/> 
                <Outlet></Outlet>
            </div>
        </div>
    )

}

export default Home;