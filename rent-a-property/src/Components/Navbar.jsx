import React, { useContext } from 'react'
import './Navbar.scss'
// import { Link } from 'react-router-dom'
import { data } from '../../propertyData'
import { storeContext } from '../Context API/storeContext'

const Navbar = (props) => {

    const { houseData, setHouseData,
        price, setPrice,
        date, setDate, 
        houseType, setHouseType,
        submitHandler, favHandler,
        search, setSearch, searchHandler} = useContext(storeContext)




  return (
    <div id='nav' className=' border-2 border-red-500'>

        <div id="top_nav">
            <div className="left">
                {/* <h1>Search properties to Rent</h1> */}
                <h1>{props.heading}</h1>
            </div>

            <div className="right">

                <div id="input_box">
                    <input type="text" name="" id="input_field" value={search} onChange={(e) => setSearch(e.target.value)}  />
                </div>

                <div id="search_button">
                    <button onClick={searchHandler} >Search</button>
                </div>

                <div id="liked_button_1" onClick={favHandler}>
                    <button>Liked</button>
                </div>

            </div>
            
                <div id="liked_button_mob" onClick={favHandler}>
                    <button>Liked</button>
                </div>

        </div>


        <div id="below_nav">
            <div id="filter_city">
                <p>City</p>

                <select name="" id="">
                    <option value="All">All</option>
                </select>

            </div>

            <div id="filter_date">
                <p>Date</p>

                <input type="date" name="" value={date} id="input_date" onChange={(e)=> setDate(e.target.value)} />
            </div>

            <div id="filter_price">
                <p>Price</p>

                <select name="" id="" value={price} onChange={(e)=> setPrice(e.target.value)}>
                    <option value={0}>All ranges</option>
                    <option value={1}>Rs 0-500</option>
                    <option value={2}>Rs 501-1000</option>
                    <option value={3}>Rs 1001-1500</option>
                    <option value={4}>Rs 1501-2000</option>
                    <option value={5}>Rs 2001-2500</option>
                    <option value={6}>Rs 2501-3000</option>
                </select>

            </div>

            <div id="filter_type">
                <p>Property Type</p>

                <select name="" id="" value={houseType} onChange={(e)=> setHouseType(e.target.value)} >
                    <option value='All'>All</option>
                    <option value='Villa'>Villa</option>
                    <option value='Mansion'>Mansion</option>
                    <option value='PG'>PG</option>
                    <option value='House'>House</option>
                    <option value='Lodge'>Lodge</option>
                </select>
            </div>

            <div id="submit_button">
                <button onClick={submitHandler}>Submit</button>
            </div>

        </div>
        
    </div>
  )
}

export default Navbar
