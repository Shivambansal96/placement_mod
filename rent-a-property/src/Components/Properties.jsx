import React, { useContext, useRef, useState } from 'react'
import './Properties.scss'
import { FaHeart } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { GoDiamond } from "react-icons/go";
import { storeContext } from '../Context API/storeContext';


const Properties = (props) => {
  
    const {likeHandler, houseData, favHandler} = useContext(storeContext);

        let checkLike =  houseData[props.id].liked;

  return (

        <div id="property">

            <div id="top_image">
                <img src={props.image_src} alt="image_of_properties" />
                {/* <p>image</p> */}
            </div>

            <div id="bottom_info">

                <div className="up_info">

                    <div className="top_rent">
                        <p>Rs {props.price}/day</p>
                        
                        <i onClick={()=>likeHandler(props.id)} style={{color: checkLike ? 'red' : 'black'}} ><FaHeart /></i>       
                    </div>
                
                    <div className="mid_name">
                        {/* <p>House 1</p> */}
                        <h2>{props.name}</h2>
                    </div>

                    <div className="bottom_address">
                        {/* <p>204-abc nagar,xyz-road,MUMBAI</p> */}
                        <p>{props.address}</p>
                    </div>

                </div>

                <div className="down_info">

                    <div className="beds">
                        <i><FaBed /></i>
                        <p>

                            {
                            (props.beds == 1) ? `${props.beds} Bed` : `${props.beds} Beds`
                            }

                        </p>
                    </div>

                    <div className="baths">
                        <i><FaBath /></i>
                        <p>
                            {
                                (props.baths == 1) ? `${props.baths} Bath` : `${props.baths} Baths`
                            }
                        </p>
                    </div>

                    <div className="room_size">
                        <i><GoDiamond /></i>
                        <p>{props.size}</p>

                    </div>

                </div>

            </div>

        </div>




      
  )
}

export default Properties

