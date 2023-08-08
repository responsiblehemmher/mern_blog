import React from 'react'
import logo1 from './asset/logo1.jpg';

function Post() {
  return (
    <div className="post">
        <div className="image">
         <img src={logo1} />
        </div>
       <div className="texts">
          <h2>African music industry: An outlook of trends in 2022</h2>
          <p className="info">
            <a className="author">Edunjobi Emmanuel</a>
            <time>2023-08-02 14:35</time>
          </p>
          <p className="summary">2021 has been an incredible and record-setting year for the African music industry and everybody will agree that its music has never more been more popular around the world.
          After a global lockdown and a pandemic-impacted 2020, we have seen the rise of musical talents across the continent, with a renewed vibrancy to set the tone for an active year.
          </p>  
        </div>
      </div>
  )
}

export default Post