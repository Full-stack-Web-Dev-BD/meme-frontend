import React, { useState } from 'react'
import { randomNum2 } from '../../../utils/constant'
import "./dashboardSidebar.css"
import VolumeUpIcon from '@mui/icons-material/VolumeUpOutlined';


const DashboardSidebar = ({ state }) => {
    const [players, setPlayers] = useState([
        { name: '1234567890' },
        { name: 'Name 2' },
        { name: 'Name 3' },
        { name: 'Name 4' },
        { name: 'Name 5' },
        { name: 'Name 6' },
    ])
    const [activePl, setActivePl] = useState('')
    function setActivePlayer(playerID) {
        if (activePl) {
            document.getElementById(activePl).classList.remove('active_player')
            document.getElementById(playerID).classList.add('active_player')
        } else {
            document.getElementById(playerID).classList.add('active_player')
        }
        setActivePl(playerID)
    }
    return (
        <div className='dashboard_sidebar_inner'>
            <div className='sidebar_top'>
                <span>
                    <VolumeUpIcon style={{ color: 'white', fontSize: '36px', cursor: 'pointer' }} />
                </span>
            </div>
            <div className='sidebar_wrap'>
                <button className='btn yellow_btn'>PLAYERS</button>
                <div className='player_list mt-5'>
                    {
                        state.roomDetails.perticipant?.map((pert, i) => (
                            <div key={i} className='db_single_player d-flex' id={`playerID${(i + 1)}`} onClick={e => setActivePlayer('playerID' + (i + 1))}>
                                <div className='player_pp'>
                                    <img src={`/assets/${i + 1}.png`} />
                                </div>
                                <h4 className='player_name'> {pert.userName}    </h4>
                                <div className='p_egg'>
                                    <div className='p_egg_count'>
                                        <img src='/assets/RottenEgg.png' />
                                        <span>{randomNum2()} </span>
                                    </div>
                                    <div className='p_egg_count'>
                                        <img src='/assets/EasterEgg.png' />
                                        <span> {randomNum2()} </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DashboardSidebar