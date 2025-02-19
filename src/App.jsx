import './App.css'
import { IoIosMenu } from "react-icons/io";
import React from 'react';
import { FaHome } from "react-icons/fa";


export default function App() {
  const toggleAction = () => {
    const action_area = document.getElementById('Action');
    const sports_area = document.getElementById('Sports');
    const open_world_area = document.getElementById('openWorld');
    const racing_area = document.getElementById('Racing');
    if (action_area.style.display === 'none') {
      action_area.style.display = 'block';
    } else {
      action_area.style.display = 'none';
    }
    sports_area.style.display = 'none';
    open_world_area.style.display = 'none';
    racing_area.style.display = 'none';
  }

  const toggleSports = () => {
    const action_area = document.getElementById('Action');
    const sports_area = document.getElementById('Sports');
    const open_world_area = document.getElementById('openWorld');
    const racing_area = document.getElementById('Racing');
    if (sports_area.style.display === 'none') {
      sports_area.style.display = 'block';
    } else {
      sports_area.style.display = 'none';
    }
    action_area.style.display = 'none';
    open_world_area.style.display = 'none';
    racing_area.style.display = 'none';
  }

  const toggleOpenWorld = () => {
    const action_area = document.getElementById('Action');
    const sports_area = document.getElementById('Sports');
    const open_world_area = document.getElementById('openWorld');
    const racing_area = document.getElementById('Racing');
    if (open_world_area.style.display === 'none') {
      open_world_area.style.display = 'block';
    } else {
      open_world_area.style.display = 'none';
    }
    action_area.style.display = 'none';
    sports_area.style.display = 'none';
    racing_area.style.display = 'none';
  }

  const toggleRacing = () => {
    const action_area = document.getElementById('Action');
    const sports_area = document.getElementById('Sports');
    const open_world_area = document.getElementById('openWorld');
    const racing_area = document.getElementById('Racing');
    if (racing_area.style.display === 'none') {
      racing_area.style.display = 'block';
    } else {
      racing_area.style.display = 'none';
    }
    action_area.style.display = 'none';
    open_world_area.style.display = 'none';
    sports_area.style.display = 'none';
  }
  
  return (
    <div className = "App">
      <nav id = 'navBar'>
        <FaHome size={40} style = {{ marginTop: 20, marginLeft: 40}} />
        <b>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
          <li>Contacts</li>
          <li>Settings</li>
        </ul>
        </b>
      </nav>
      <h1 id = 'heading1'>GAMING AND ESPORTS</h1>
      <b>
      <div id = 'buttonArea'>
        <button id = 'Button1' className='Button'>
        Register</button>
        <button id = 'Button2' className='Button'>
          Login</button>
      </div>
      </b>
      <nav id = 'navBar2'>
        <b>
        <ul>
          <li onClick = {toggleAction}>Action</li>
          <li onClick = {toggleSports}>Sports</li>
          <li onClick = {toggleOpenWorld}>Open World</li>
          <li onClick = {toggleRacing}>Racing</li>
        </ul>
        </b>
      </nav>
      <div id = 'gameArea'>
        <div id = 'Action' style = {{ display: 'none'}}>
          <div id = 'actionArea'>
            <h2 id = 'actionHeading'>Action</h2>
            <div className = 'row'>
              <div className = 'card'>
                <h2>Tekken 3</h2>
                <img className = 'gameImage' src = 'src/Images/tekken3.jpg' />
              </div>
              <div className = 'card'>
                <h2>Mortal Kombat</h2>
                <img className = 'gameImage' src = 'src/Images/mortalkombat.jpg' />
              </div>
            </div>
            <div className = 'row'>
              <div className = 'card'>
                <h2>Prince of Persia</h2>
                <img className = 'gameImage' src='src/Images/pop.jpg' />
              </div>
              <div className = 'card'>
                <h2>God of War</h2>
                <img className = 'gameImage' src = 'src/Images/godofwar.jpg' />
              </div>
            </div>
          </div>
        </div>
        <div id = 'Sports' style = {{ display: 'none'}}>
          <div id = 'sportsArea'>
            <h2 id = 'sportsHeading'>Sports</h2>
            <div className = 'row'>
              <div className='card'>
                <h2>Fifa 15</h2>
                <img src = 'src/Images/fifa15.jpg' className = 'gameImage' />
              </div>
              <div className='card'>
                <h2>Cricket 22</h2>
                <img src = 'src/Images/cricket22.png' className = 'gameImage' />
              </div>
            </div>
            <div className = 'row'>
              <div className='card'>
                <h2>NBA 2K24</h2>
                <img src = 'src/Images/nba.jpg' className = 'gameImage' />
              </div>
              <div className='card'>
                <h2>WWE 2K24</h2>
                <img src = 'src/Images/wwe.png' className = 'gameImage' />
              </div>
            </div>
        </div>
        </div>
        <div id = 'openWorld'>
          <div id = 'openWorldArea'>
            <h2 id = 'openWorldHeading'>Open World</h2>
            <div className = 'row'>
            <div className='card'>
              <h2>GTA V</h2>
              <img src = 'src/Images/gta5.jpg' className = 'gameImage' />
            </div>
              <div className='card'>
                <h2>Saints Row 4</h2>
                <img src = 'src/Images/saintsrow4.jpg' className = 'gameImage' />
              </div>
            </div>
            <div className = 'row'>
              <div className='card'>
                <h2>Red Dead Redemption 2</h2>
                <img src = 'src/Images/rdr2.avif' className = 'gameImage' />
              </div>
              <div className='card'>
                <h2>GTA San Andreas</h2>
                <img src = 'src/Images/gtasanandreas.jpg' className = 'gameImage' />
              </div>
            </div>
          </div>
        </div>
        <div id = 'Racing'>
        <div id = 'racingArea'>
        <h2 id = 'racingHeading'>Racing</h2>
          <div className = 'row'>
            <div className='card'>
              <h2>Forza Horizon 5</h2>
              <img src = 'src/Images/forza.jpg' className = 'gameImage' />
            </div>
            <div className='card'>
              <h2>IRacing</h2>
              <img src = 'src/Images/iracing.jpg' className = 'gameImage' />
            </div>
          </div>
          <div className='row'>
            <div className='card'>
              <h2>F1 24</h2>
              <img src = 'src/Images/f124.jpg' className = 'gameImage' />
            </div>
            <div className='card'>
              <h2>Forza Motorsport</h2>
              <img src = 'src/Images/forzamotorsport.jpg' className = 'gameImage' />
            </div>
          </div>
        </div>
        </div>
      </div>
      <nav id = 'footerNav'>
        <h3>Express Gaming</h3>
        <p id = 'para1'>A New Future of Gaming</p>
      </nav>
    </div>
  )
}