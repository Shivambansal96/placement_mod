import React, { useEffect, useState } from 'react'
import './App.css'
import country_icon from './assets/australia.png'
// import tick from './assets/double_tick.gif'
import tick from './assets/tick.png'
import '../style.scss'

const App = () => {

  const Short_term = '< 12 Months';
  const Long_term = '> 12 Months';

  // const [purchasePrice, setPurchasePrice] = useState('$30,000')  //user input
  // const [salePrice, setSalePrice] = useState('$20,000')    //user input
  // const [expenses, setExpenses] = useState('$5,000')    //user input
  
// Australia

  const [purchasePrice, setPurchasePrice] = useState(30000)  //user input
  const [salePrice, setSalePrice] = useState(20000)    //user input
  const [expenses, setExpenses] = useState(5000)    //user input
  
  const [investmentType, setInvestmentType] = useState('Short Term') // for radio button
  const [capitalGains, setCapitalGains] = useState(5000)
  const [discount, setDiscount] = useState(2500)
  const [cgAmount, setCGAmount] = useState(2500)
  const [taxToPay, setTaxToPay] = useState(0)

  const [annualIncome, setAnnualIncome] = useState()
// Australia

// England
const [country, setCountry] = useState('Australia')
// England

  const CalculateTaxForEngland = () => {

    setCapitalGains(purchasePrice - (salePrice + expenses)) //CG Done
  
    setDiscount(0.5 * Number(capitalGains))
  
    setCGAmount(0.5 * capitalGains)

  console.log(`discountE`, discount);

  
    // CalculateTaxOfEngland();

    switch(annualIncome) {

      case '1': 
        // tax: nil
        // taxAmount = 0;
        setTaxToPay(cgAmount * 0);
        break;
  
      case '2': 
          
        // taxAmount = (45000 - 18200) * 0.19;
        // taxAmount = 5092;
        setTaxToPay(cgAmount * 0.2);
  
        break;
  
      case '3': 
          
        // taxAmount = ((45000 - 18200) * 0.19) + ((120000 - 45000) * 0.325);
        // taxAmount = 5092 +  ((120000 - 45000) * 0.325)
        // taxAmount = 29467
        setTaxToPay(cgAmount * 0.4);
        break;
  
      case '4': 
          
        // taxAmount = ((45000 - 18200) * 0.19) + ((120000 - 45000) * 0.325) + ((180000 - 120000) * 0.37);
        // taxAmount = 51667
        setTaxToPay(cgAmount * 0.45);
  
  
        break;
  
      case '5': 
        // taxAmount = ((45000 - 18200) * 0.19) + ((120000 - 45000) * 0.325) + ((180000 - 120000) * 0.37) + ((income - 180000) * 0.45);
  
        // taxAmount = 60667;
        setTaxToPay(cgAmount * 0);
        break;
  
        default:
          setTaxToPay(cgAmount * 0);
          break;
  
    }


}


const CalculateTaxForAustralia = () => {

  setCapitalGains(purchasePrice - (salePrice + expenses)) //CG Done
  
  setDiscount(0.5 * Number(capitalGains))

  setCGAmount(0.5 * capitalGains)

  console.log(`discountA`, discount);

  // CalculateTaxOfAustralia();

  switch(annualIncome) {

    case '1': 
      // tax: nil
      // taxAmount = 0;
      setTaxToPay(cgAmount * 0);
      break;

    case '2': 
        
      // taxAmount = (45000 - 18200) * 0.19;
      // taxAmount = 5092;
      setTaxToPay(cgAmount * 0.19 * (investmentType=='Long Term' ? 1 : 2));

      break;

    case '3': 
        
      // taxAmount = ((45000 - 18200) * 0.19) + ((120000 - 45000) * 0.325);
      // taxAmount = 5092 +  ((120000 - 45000) * 0.325)
      // taxAmount = 29467
      setTaxToPay(cgAmount * 0.325 * (investmentType=='Long Term' ? 1 : 2));
      break;

    case '4': 
        
      // taxAmount = ((45000 - 18200) * 0.19) + ((120000 - 45000) * 0.325) + ((180000 - 120000) * 0.37);
      // taxAmount = 51667
      setTaxToPay(cgAmount * 0.37 * (investmentType=='Long Term' ? 1 : 2));


      break;

    case '5': 
      // taxAmount = ((45000 - 18200) * 0.19) + ((120000 - 45000) * 0.325) + ((180000 - 120000) * 0.37) + ((income - 180000) * 0.45);

      // taxAmount = 60667;
      setTaxToPay(cgAmount * 0.45 * (investmentType=='Long Term' ? 1 : 2));
      break;

      default:
        setTaxToPay(cgAmount * 0);
        break;

  }
  
    

}

useEffect(() => {

  if(country === 'Australia') {
    CalculateTaxForAustralia();
  }
  else {
    CalculateTaxForEngland();
  }


}, [country, annualIncome, investmentType])



  // console.log(`investmentType`, investmentType);

  // setPurchasePrice(`$ ${purchasePrice}`)

  // purchasePrice.split()

  

// useEffect(()=> {

//   setCapitalGains(purchasePrice - (salePrice + expenses)) //CG Done
  
//   setDiscount(0.5 * Number(capitalGains))

//   setCGAmount(0.5 * capitalGains)

//   CalculateTaxOfAustralia()
    


// }, [annualIncome, investmentType])





  return (
    <div id='App'>

          <div id="content">

            <div id="top">

              <div id="heading">
                <h1>Free Crypto Tax Calculator</h1>
              </div>

              <div id="heading_bottom">

                <div id="Financial_Year">
                  <p>Financial Year</p>
                  
                  <select name="" id="">
                    <option value="" >FY 2023-24</option>
                  </select>

                </div>


                <div id="Country">
                  <p>Country</p>
            
                  <select name="" id="" value={country} onChange={(e) => setCountry(e.target.value)} >              
                      <option value="Australia" >
                        {/* <img src={country_icon} alt="country" /> */}
                        Australia
                      </option>
                      <option value="England">England</option>
                  </select>

                </div>

              </div>

            </div>

            <hr />    {/* or border-bottom */}
     
            <div id="bottom">

                <div id="bottom_one"  >

                  <div id="purchase_price">
                      <p>Enter Purchase Price of Crypto</p>

                      <input type="number" value={purchasePrice} onChange={(e)=> setPurchasePrice(e.target.value)} name="" id="" />
                    </div>

                  <div id="sale_price">
                    <p>Enter Sale Price of Crypto</p>

                    <input type="number" value={salePrice} onChange={(e)=> setSalePrice(e.target.value)} name="" id="" />
                  </div>

                </div>

                <div id="bottom_two">

                  <div id="expenses">
                      <p>Enter your Expenses</p>

                      <input type="number" value={expenses} onChange={(e)=> setExpenses(e.target.value)} name="" id="" /> 
                  </div>

                  <div id="investment_type" style={{display: country === 'England' ? 'none' : 'flex' }}>
                    <p>Investment Type</p>

                    <div id="term_container">
                      <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div id="short_term">
                          <input type="radio" name="investment_type" id="" value='Short Term' onChange={(e)=>setInvestmentType(e.target.value)} checked={investmentType == 'Short Term'} /> Short Term
                        </div>
                          <label>{Short_term}</label>
                      </div>

                      <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div id="long_term">
                          <input type="radio" name="investment_type" id="" value='Long Term' onChange={(e)=>setInvestmentType(e.target.value)} checked={investmentType == 'Long Term'} />Long Term
                        </div>
                          <label>{Long_term}</label>
                      </div>

                    </div>

                    {/* <div id='term_container'>
                      <div id="short_term">
                        <button>
                          <img src={tick} alt="" />
                          <p>Short Term</p>
                        </button>
                        <p style={{ fontSize:'15px'}}>{Short_term}</p>
                      </div>

                      <div id="long_term">
                        <button>
                          <img src={tick} alt="" onClick={tickHandler} />
                          <p>Long Term</p>
                        </button>
                        <p style={{ fontSize:'15px'}}>{Long_term}</p>
                      </div>

                    </div> */}

                      {/* <fieldset>
                        <legend>Investment Type</legend>
                        <div class="toggle">
                          <input type="radio" name="sizeBy" value="weight" id="sizeWeight" checked="checked" />
                          <label for="sizeWeight">Short Term</label>
                          <input type="radio" name="sizeBy" value="dimensions" id="sizeDimensions" />
                          <label for="sizeDimensions">Long Term</label>
                        </div>
                      </fieldset> */}
                      

                  </div>

                </div>

                <div id="bottom_three" >

                  <div id="annual_income">
                    <p>Select your Annual Income</p>

                    <select name="" id="" value={annualIncome} onChange={(e)=> setAnnualIncome(e.target.value)}>
                      <option value={1}>{country === 'Australia' ? '$0 - $18,200' : '$0 - $12,570'}</option>
                      <option value={2}>{country === 'Australia' ? '$18,201 - $45,000' : '$12,571 - $50,270'}</option>                      
                      <option value={3}>{country === 'Australia' ? '$45,001 - $1,20,000' : '$50,270 - $150,000'}</option>
                      <option value={4}>{country === 'Australia' ? '$1,20,001 - $1,80,000' : '$150,000+'}</option>
                      <option value={5}>{country === 'Australia' ? '$1,80,001+' : null}</option>
                    </select>  
                  </div>


                  {console.log(`taxToPay`, taxToPay)}

                  <div id="tax_rate" style={{display: country === 'England' ? 'none' : 'flex' }}>
                    <p>Tax Rate</p>
                    <p>$ 5,902 + 32.5% of excess over $45,001 </p>
                  </div>

                </div>

                <div style={{display: country === 'England' ? 'none' : 'flex' }} id="bottom_four">
                        
                  <div id="capital_gains">
                    <p>Capital Gains Amount</p>

                    {/* <input type="number" value={capitalGains} onChange={(e)=> setCapitalGains(e.target.value)} name="" id="" /> */}
                    <p>{capitalGains}</p>
                  </div>

                  <div id="discount">
                    <p>Discount for Long Term Gains</p>

                    {/* <input type="number" value={discount} onChange={(e)=> setDiscount(e.target.value)} name="" id="" /> */}
                    <p>{discount}</p>
                  </div>
                  
                </div>

                <div id="bottom_five">

                  <div id="cg_tax">
                    <p>Net Capital Gains Tax Amount</p>
                    <h3 style={{color: '#0FBA83'}}>{cgAmount}</h3>
                  </div>

                  <div id="tax_to_pay">
                    <p>The tax you need to pay</p>
                    {/* <h3 style={{color: '#0141CF'}}>$ 812.5</h3> */}
                    <h3 style={{color: '#0141CF'}}>{taxToPay}</h3>

                  </div>

                </div>

            </div>

          </div>

    </div>
  )
}

export default App


