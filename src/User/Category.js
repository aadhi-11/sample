import React from 'react'
import './Style.css'

function Category() {
  return (
    <div className='main-div'>
      <div className="container">
        <div className="row">
          <div className="col">District</div>
          <div className="col">
            <input type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col">Place</div>
          <div className="col">
            <input type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col">Category</div>
          <div className="col">
            <select name="cat" id="cat">
                <option value="cat1">Category1</option>
                <option value="cat2">category2</option>
                <option value="cat3">category3</option>
 
            </select>
          </div>
        </div>
        <div className="row">
            <button className="btn">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Category
