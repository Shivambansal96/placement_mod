import React, { useContext, useState } from 'react'
import './Homepage.scss'
import Navbar from '../Components/Navbar'
import Properties from '../Components/Properties'
import { data } from '../../propertyData'
import { storeContext } from '../Context API/storeContext'

const Homepage = () => {


  const { houseData,
    price, setPrice,
    date, setDate, 
    houseType, setHouseType,
    submitHandler, favHandler} = useContext(storeContext);



  return (
    <div id='homepage'>

        <Navbar heading={'Search properties to Rent'} />

        <br /><br />

        <div id='cards_container'>

            {houseData.map((props, index) => {

                return (

                <Properties
                  
                    id={index} 
                    key={index} 
                    item={props} 
                    name={props.name_of_property} 
                    price={props.amount_per_day} 
                    address={props.address}  
                    beds={props.no_of_beds}
                    baths={props.no_of_bathrooms}
                    size={props.size_of_room}
                    image_src={props.image_link}
                    
                                        
                    />

                )

            })}



        </div>
      
    </div>
  )
}

export default Homepage

