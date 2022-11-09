import getVideoId from 'get-video-id';
import React, { useState } from 'react'
import "./dashboardMainContent.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { randomNum, utilActiveDB, utilSelectedInput } from '../../../utils/constant';
import ProfileBox from '../../Components/ProfileBox/ProfileBox';
import Countdown, { } from 'react-countdown'
import { toast } from 'react-toastify';

const DashboardMainContent = ({ state }) => {
  const [selectHistory, setSelectHistory] = useState({
    images: [],
    gif: "",
    color: '',
    video: ''
  })
  const [activeDB, setActiveDB] = useState("waiting")
  const [selectedGrid, setSelectedGrid] = useState()
  const [selectedInput, setSelectedInput] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [colors, setColors] = useState([
    `#ae${randomNum()}`,
    `#be${randomNum()}`,
    `#ce${randomNum()}`,
    `#de${randomNum()}`,
    `#ee${randomNum()}`,
    `#aa${randomNum()}`,
    `#ab${randomNum()}`,
    `#ac${randomNum()}`,
    `#ad${randomNum()}`,
    `#cc${randomNum()}`,
    `#ca${randomNum()}`,
    `#cd${randomNum()}`,
    `#dc${randomNum()}`,
  ])
  const [gif, setGif] = useState([
    "https://i.gifer.com/ApRO.gif",
    "https://www.icegif.com/wp-content/uploads/among-us-icegif-53.gif",
    "https://github.blog/wp-content/uploads/2020/12/game-off-pulse.gif?fit=1200%2C630",
    "https://media.tenor.com/mM4X7jIQtxsAAAAC/fun-play.gif",
    "https://media.tenor.com/pw9ZsUdsEYgAAAAj/capoo-blue-cat.gif",
    "https://i.pinimg.com/originals/e5/07/10/e507101e74bf1a3d3a4051359765462f.gif"
  ])
  const [images, setImages] = useState([
    "https://images.squarespace-cdn.com/content/v1/609df99e9252a310ee83fb29/757efbdc-f767-4c7f-ade5-dd48dfe8db03/zeedz-jobs.png",
    "https://news.artnet.com/app/news-upload/2021/12/Niftynaut.jpg",
    "https://i.pinimg.com/564x/ea/d4/4c/ead44cf05a01aeb2fff226a30051a69d.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ad55b5129002333.6161ca5983d3b.jpg",
    "https://i.pinimg.com/564x/7d/c6/d3/7dc6d3cb0a27dcf3ad0648d38911031e.jpg",
    "https://miro.medium.com/max/500/1*RjEqKbwshVsl7poyV3UlnA.jpeg",
  ])
  const [video, setVideo] = useState([
    "https://www.youtube.com/watch?v=i5qH9jjsNas",
    "https://www.youtube.com/watch?v=p_Fiqoe4tA8",
    "https://www.youtube.com/watch?v=cTKZF3lE_2Q",
    "https://www.youtube.com/watch?v=G1txwF6YsuM",
    "https://www.youtube.com/watch?v=xferGuozl4c"
  ])
  const Completionist = () => <span>Time Up</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{minutes}:{seconds}</span>;
    }
  };

  // layout Images
  const [vImage1, setVImage1] = useState()

  const addImage = (img) => {
    if (activeDB == utilActiveDB.v_single) {
      console.log(selectHistory)
      if (selectHistory.images.length < 2) {
        setSelectHistory({ ...selectHistory, images: [...selectHistory.images, img] })
      } else {
        toast.error("You can Select Up to 2 Image  For this Layout")
      }
    }
  }
  return (
    <div className='dashboard_main_content_inner' >
      <div className='round_time'>
        <div className='flex_content_between'>
          <span>ROUND</span>
          <span>
            <Countdown date={Date.now() + 10000} renderer={renderer} />
          </span>
        </div>
        <div className='mt-2'>
          <button className='btn btn_fullwidth_outlined ' style={{ textTransform: 'capitalize' }}> {state.topic} </button>
        </div>
      </div>
      <div className='db_playing_box_top'>
        <div className='db_dynamic_content'>
          {
            activeDB == utilActiveDB.waiting ?
              <div className='db_waiting' >
                <h2>WAITING FOR PLAYERS</h2>
                <h1><Countdown date={Date.now() + 10000} renderer={renderer} /></h1>
                <div className='text-center'>
                  <butotn className="btn text_black yellow_btn c_pointer" onClick={e => setActiveDB(utilActiveDB.topic)} >Start</butotn>
                </div>
              </div> : ''
          }
          {
            activeDB == utilActiveDB.topic ?
              <div className='db_waiting' >
                <h1>THE TOPIC IS </h1>
                <h2 className='text-center' style={{ textTransform: 'capitalize' }}>{state.topic}</h2>
              </div> : ''
          }
          {
            activeDB == utilActiveDB.voting ?
              <div>
                <div>
                  <div className='acc_nav_holder'>
                    <div className='account_nav d-flex' >
                      <div className='pn_profile_box' >
                        <div className='pn_profile_circle'></div>
                        <div className='pn_profile_img'>
                          <img src='/assets/1.png' />
                        </div>
                      </div>
                      <h2>User Name</h2>
                    </div>
                  </div>
                </div>
              </div> : ''
          }
          {
            activeDB == utilActiveDB.player ?
              <div>
                <div>
                  <ProfileBox />
                </div>
                <div className='meme_wrapper'>
                  <div className='meme_box'>
                    <span>MEME</span>
                  </div>
                </div>
              </div> : ''
          }
          {
            activeDB == utilActiveDB.gif ?
              <div className='selected_img'>
                <div className='selected_img_x'>
                  {/* <span>X</span> */}
                </div>
                <div className='selected_img_img'>
                  <div className='s_img_box'>
                    <img style={{ width: "200px" }} src={selectHistory.gif} />
                  </div>
                </div>
              </div> : ''
          }
          {
            activeDB == utilActiveDB.color ?
              <div className='text-center mt-4'>
                <div className='c_p' style={{ width: '200px', height: '200px', display: 'inline-block', marginTop: '20px', color: 'white', background: selectHistory.color }}>
                  <span style={{ lineHeight: '200px' }}>Color Selected</span>
                </div>
              </div>
              : ''
          }
          {
            activeDB == utilActiveDB.video ?
              <div className='text-center mt-4'>
                <iframe width="300" height="200" src={`https://www.youtube.com/embed/${getVideoId(selectHistory.video).id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              : ''
          }
          {
            activeDB == utilActiveDB.v_single ?
              <div className='selected_l mt-5 ml-5'>
                <div className='selected_l_x'>
                  <span style={{
                    color: "black",
                    fontSize: "34px",
                    fontWeight: "700",
                    cursor: "pointer"
                  }}>X</span>
                </div>
                <div className='selected_layout'>
                  {
                    selectHistory.images[0] ?
                      <div >
                        <img src={selectHistory.images[0]} />
                      </div> :
                      <div className='c_p' onClick={e => { setSelectedInput(utilSelectedInput.img) }} style={{ background: selectedGrid == "v_1" ? "#f9af12" : "black" }}>
                        <span>Select Image</span>
                      </div>
                  }     {
                    selectHistory.images[1] ?
                      <div >
                        <img src={selectHistory.images[1]} />
                      </div> :
                      <div className='c_p' onClick={e => { setSelectedInput(utilSelectedInput.img) }} style={{ background: selectedGrid == "v_1" ? "#f9af12" : "black" }}>
                        <span>Select Image</span>
                      </div>
                  }
                </div>
              </div> : ''
          }
          {
            activeDB == utilActiveDB.round_winner ?
              <div className=' r_winner text-center'>
                <h3> the winner of this round is</h3>
                <div>
                  <span>MEME</span>
                </div>
                <br />
                <button className='btn yellow_btn mt-2'>Next Game</button>
              </div> : ''
          }
          {
            activeDB == utilActiveDB.winner_result ?
              <div className=' winner_r text-center'>
                <h3> the winner of this Game is</h3>
                <div className='text-center'>
                  <ProfileBox name={"Player 1"} />
                </div>
                <br />
                <button className='btn yellow_btn mt-2'>Next Game</button>
              </div> : ''
          }
        </div>
      </div>
      {/* bottom side */}
      <div className='db_playing_box_bottom'>
        <div className='pb_icons d-flex'>
          <div className='pb_icon_box mr-3'>
            <img src='/assets/eraser.svg' />
          </div>
          <div className='pb_icon_box'>
            <img src='/assets/text.svg' />
          </div>
        </div>
        <div className='playing_tool_box mt-4'>
          <div className='tool_box_inner'>
            <div className='playing_tools mr-5'>
              <div className='playing_tool d-flex '>
                {/* <div className={`pl_icon_box ${selectedInput == utilSelectedInput.img ? 'active_pl_icon_box' : ''}`} onClick={e => setSelectedInput(utilSelectedInput.img)} >
                  <img src='/assets/image.svg' />
                </div> */}
                <div className={`pl_icon_box ${selectedInput == utilSelectedInput.layout ? 'active_pl_icon_box' : ''}`} onClick={e => setSelectedInput(utilSelectedInput.layout)}>
                  <img src='/assets/layout.svg' />
                </div>
                <div className={`pl_icon_box ${selectedInput == utilSelectedInput.color ? 'active_pl_icon_box' : ''}`} onClick={e => setSelectedInput(utilSelectedInput.color)}>
                  <img src='/assets/pencil.svg' />
                </div>
                <div className={`pl_icon_box ${selectedInput == utilSelectedInput.gif ? 'active_pl_icon_box' : ''}`} onClick={e => setSelectedInput(utilSelectedInput.gif)}>
                  <img src='/assets/gif.svg' />
                </div>
                <div className={`pl_icon_box ${selectedInput == utilSelectedInput.video ? 'active_pl_icon_box' : ''}`} onClick={e => setSelectedInput(utilSelectedInput.video)}>
                  <img src='/assets/video.svg' />
                </div>
                <div className={`pl_icon_box`}>
                  <img src='/assets/y_ok.png' style={{ borderRadius: '8px' }} />
                </div>
              </div>
            </div>
            <div className='playing_input '>

              {
                activeDB == "round_winner" ?
                  <div className='_overlay'></div> : ''
              }
              <div className='input_show' style={{
                height: selectedInput == utilSelectedInput.player ? "inherit" : "150px"
              }}>
                <div className='input_components pt-2'>
                  {
                    selectedInput == utilSelectedInput.img ?
                      <div>
                        <div className='input_img_container'>
                          <div className='sr-only' >
                            <input type={'file'} accept="image/x-png,image/jpeg" id="image_selector" />
                          </div>
                          {/* <div title='Select Image' onClick={e => document.getElementById("image_selector").click()} className='img_placeholder c_pointer'>
                            <img src='/assets/select_image.png' />
                          </div> */}
                          {
                            images.map(el => (
                              <>
                                <div key={el} title='Grab Image' onClick={e => { setVImage1("imgURL"); addImage(el) }} className='img_placeholder c_pointer'>
                                  <img src={`${el}`} />
                                </div>
                              </>
                            ))
                          }
                        </div>
                      </div> : ''
                  }
                  {
                    selectedInput == utilSelectedInput.color ?
                      <div>
                        <div className='placeholder_container'>
                          {
                            colors.map((el, i) => (
                              <div key={el} className='c_p color_placeholder  ' onClick={e => { setSelectedColor(`img${i}`); setSelectHistory({ ...selectHistory, color: el }); setActiveDB(utilActiveDB.color) }} style={{ background: el }}>
                                <div className='img' style={{
                                  display: selectedColor == `img${i}` ? 'block' : 'none'
                                }} >
                                  <img src='/assets/ok.svg' />
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div> : ''
                  }
                  {/* layout */}
                  {
                    selectedInput == utilSelectedInput.layout ?
                      <div className='input_grid'>
                        <div className='v_grid c_p' onClick={e => setActiveDB(utilActiveDB.v_single)}>
                          <div style={{ background: activeDB == "v_single" ? "#f9af12" : 'black' }} className='v_single' >
                            <span>1</span>
                          </div>
                          <div style={{ background: activeDB == "v_single" ? "#f9af12" : 'black' }} className='v_single' >
                            <span>2</span>
                          </div>
                        </div>
                        <div className='h_grid c_p'>
                          <div style={{ background: activeDB == "h_single" ? "#f9af12" : 'black' }} className='h_single ' >
                            <span>1</span>
                          </div>
                          <div style={{ background: activeDB == "h_single" ? "#f9af12" : 'black' }} className='h_single  ' >
                            <span>2</span>
                          </div>
                        </div>
                        <div className='h_3_grid c_p'>
                          <div style={{ background: activeDB == "h_single_3bar" ? "#f9af12" : 'black' }} className='h_single ' >
                            <span>1</span>
                          </div>
                          <div style={{ background: activeDB == "h_single_3bar" ? "#f9af12" : 'black' }} className='h_single ' >
                            <span>2</span>
                          </div>
                          <div style={{ background: activeDB == "h_single_3bar" ? "#f9af12" : 'black' }} className='h_single ' >
                            <span>3</span>
                          </div>
                        </div>
                      </div> : ''
                  }
                  {
                    selectedInput == utilSelectedInput.gif ?
                      <div>
                        <div className='input_img_container'>
                          {
                            gif.map(el => (
                              <div key={el} onClick={e => { setSelectHistory({ ...selectHistory, gif: el }); setActiveDB(utilActiveDB.gif) }} className='c_p img_placeholder'>
                                <img src={el} />
                              </div>
                            ))
                          }
                        </div>
                      </div> : ''
                  }

                  {
                    selectedInput == utilSelectedInput.video ?
                      <div>
                        <div className='input_img_container'>
                          {
                            video.map(el => (
                              <div onClick={e => { { setSelectHistory({ ...selectHistory, video: el }); setActiveDB(utilActiveDB.video) } }} key={el} className=' c_p img_placeholder' >
                                <div className='text-center'>
                                  <img src={`https://img.youtube.com/vi/${getVideoId(el).id}/0.jpg`} />
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div> : ''
                  }
                  {
                    selectedInput == utilSelectedInput.player ?
                      <div className='through_eggs'>
                        <div className='_eggs'>
                          <div className='t_egg_1'>
                            <img src='/assets/RottenEgg.png' />
                          </div>
                          <div className='t_egg_2'>
                            <img src='/assets/EasterEgg.png' />
                            <span>5s</span>
                          </div>
                        </div>
                        <h3>Through your eggs</h3>
                      </div> : ''
                  }
                </div>
              </div>
              {
                selectedInput != utilSelectedInput.player ?
                  <div className='p_search_bar'>
                    <div>
                      <div className='p_upload'>
                        <img src='/assets/upload.svg' />
                      </div>
                    </div>
                    <div className='input_grup'>
                      <span className='ps_icon'>
                        <SearchOutlinedIcon />
                      </span>
                      <input className='form-control' />
                    </div>
                  </div> : ''
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardMainContent