import React, { createContext, useState } from 'react'
import { data } from '../../propertyData';

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {

    const [houseData, setHouseData] = useState(data);
    const [price, setPrice] = useState();
    const [date, setDate] = useState('');
    const [houseType, setHouseType] = useState('');


    // console.log(houseData);
    
    const submitHandler = () => {
        
        
    console.log(`price`, price);
        
    let filteredData = data;

    console.log('start', filteredData);


    
    switch(price) {

        case "0" :
            filteredData;
            break;

        case "1" : 
            filteredData = filteredData.filter((item) => {
                return (

                    item.amount_per_day >= 0 && item.amount_per_day <= 500
                )
            })
            break;

        case "2" : 
            filteredData = filteredData.filter(item => 
            item.amount_per_day >= 501 && item.amount_per_day <= 1000
        )
            break;

        case "3" : 
        filteredData = filteredData.filter(item => 
            item.amount_per_day >= 1001 && item.amount_per_day <= 1500
        )
            break;

        case "4" : 
        filteredData = filteredData.filter(item => 
            item.amount_per_day >= 1501 && item.amount_per_day <= 2000
        )
            break;

        case "5" : 
        filteredData = filteredData.filter(item => 
            item.amount_per_day >= 2001 && item.amount_per_day <= 2500
        )
            break;

        case "6" : 
        filteredData = filteredData.filter(item => 
            item.amount_per_day >= 2501 && item.amount_per_day <= 3000
        )
            break;

        default :
            filteredData;
            break;


    }

    // console.log('after-price', filteredData);



console.log(`date`, date);

    if(date) {
        filteredData = filteredData.filter((item) => {
            return (
                new Date(item.available_from) <= new Date(date)
            )
        } 
        )
    }

    // console.log('after-date', filteredData);


    switch(houseType) {

        case "All" :
            filteredData;
            break;

        case "villa" :
            filteredData = filteredData.filter((item) => {
                return (
                    item.type === 'villa'
                )
            }) 
            break;

        case "mansion" :
            filteredData = filteredData.filter((item) => {
                return (
                    item.type === 'mansion'
                )
            }) 
            break;

        case "cottage" :
            filteredData = filteredData.filter((item) => {
                return (
                    item.type === 'cottage'
                )
            }) 
            break;

        case "House" :
            filteredData = filteredData.filter((item) => {
                return (
                    item.type === 'House'
                )
            }) 
            break;

        case "lodge" :
            filteredData = filteredData.filter((item) => {
                return (
                    item.type === 'lodge'
                )
            }) 
            break;

        default :
            filteredData;
            break;
                                    

    }

    setHouseData(filteredData);

    console.log('final filtered Data', houseData);


    }


    const likeHandler = (index) => {

    const updatedData = houseData.map((item, idx) => {
        if (idx === index) {
            return { ...item, liked: !item.liked };
        }
        return item;
    });

    setHouseData(updatedData);
        

    }

    const favHandler = () => {

        let filteredData = houseData.filter((item) => {
            return (
                item.liked == true
            )
        })

        console.log('b',filteredData);

        setHouseData(filteredData)

        console.log('a',filteredData);

        console.log(`houseData`, houseData);

    }




    

    const contextValues = {

        data,
    houseData, setHouseData,
    price, setPrice,
    date, setDate, 
    houseType, setHouseType,
    submitHandler,
    likeHandler,
    favHandler,

    }


  return (

    <storeContext.Provider value={contextValues}>

        {props.children}

    </storeContext.Provider>
  )
}

export default StoreContextProvider
