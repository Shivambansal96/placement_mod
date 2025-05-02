import React, { useContext, useState } from 'react'
import './Homepage.scss'
import Navbar from '../Components/Navbar'
import Properties from '../Components/Properties'
import { data } from '../../propertyData'
import { storeContext } from '../Context API/storeContext'

const Homepage = () => {

  const { houseData} = useContext(storeContext);
  const[visibleItems, setVisibleItems] = useState(10);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 10);
}

  return (
    <div id='homepage'>

        <Navbar />

        <br /><br />

        <div id='cards_container'>

            {
            houseData.slice(0, visibleItems).map((props, index) => {

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
            }
          )
        } 
          
            
        </div>

        {visibleItems < houseData.length &&
        <button className='load-more' onClick={loadMore}>
            Load More
            </button>
        }
      
    </div>
  )
}

export default Homepage
