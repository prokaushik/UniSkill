import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />

          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <select>
                <option value=''>Select City/Street</option>
                <option value='city1'>City 1</option>
                <option value='city2'>City 2</option>
                {/* Add more city options here */}
              </select>
            </div>
            <div className='box'>
              <span>Property Type</span>
              <select>
                <option value=''>Select Property Type</option>
                <option value='house'>House</option>
                <option value='apartment'>Apartment</option>
                {/* Add more property type options here */}
              </select>
            </div>
            <div className='box'>
              <span>Price Range</span>
              <select>
                <option value=''>Select Price Range</option>
                <option value='0-100000'>$0 - $100,000</option>
                <option value='100000-200000'>$100,000 - $200,000</option>
                {/* Add more price range options here */}
              </select>
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i> Search
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
