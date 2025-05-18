import React, { useContext } from 'react'
import "./Blog.css"
import { assets } from '../../assets/asset'
import { Context } from '../Context'

const Blog = () => {
  const { blog, url } = useContext(Context)
  return (
    <div style={{ background: "#f7f7f7" }}>
      <div className='blog-web-page' id='blog'>
        <div className="left-blog">
          <h1 className='kd font-semibold'> Latest Blog</h1>
          {
            blog.map((item, index) => {
              return (
                <div className="main-div" key={index}>
                  <div className="main-div-right">
                    <img src={`${url}/images/${item.image}`} alt="" className='blog-web-img' />
                  </div>
                  <div className="main-div-left">
                    <button className='topBtn'>{item.topBtnText}</button>
                    <h2 className='blog-web-heading'>{item.heading}</h2>
                    <p className='blog-web-para'>{item.text}</p>
                    <div className="mini-div-left-author-info">
                      <div className="shap-4"></div>
                      <img src={assets.dpImg} className='web-item-bg' alt="" />
                      <div className="info">
                        <h3 className='mini-web-heading text-black'>{item.authername}</h3>
                        <p>{item.timestamp}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="right-blog">
          <h2>Topics</h2>
          <div className='rigt-blog-first'>
            <div className='rigt-blog-div'>
              <div className='ff'>
                <img src={assets.db} className='right-img' alt="" /></div>
              <h1 className='right-blog-heading'>Database</h1>
            </div>
            <div className='rigt-blog-div'>
              <div className='ff'>
                <img src={assets.db} className='right-img' alt="" /></div>
              <h1 className='right-blog-heading'>Accessibility</h1>
            </div>
            <div className='rigt-blog-div'>
              <div className='ff'>
                <img src={assets.db} className='right-img' alt="" /></div>
              <h1 className='right-blog-heading'>Web Performance</h1>
            </div>
          </div>

          <div className="right-tag">
            <h1>Tags</h1>
            <div className='new-div'>
              <p>Do you want to learn more about how I can help your company overcome problems? Let us have a conversation.</p>
              <div className="image-group">
                <img src={assets.twitter} className='image-twt' alt="" />
                <img src={assets.twitter} className='image-twt' alt="" />
                <img src={assets.twitter} className='image-twt' alt="" />
              </div>
            </div>
          </div>
          <div className="right-newsLetter">
            <h1>Newsletter</h1>
            <div className="news-div">
              <p>Subscribe to our newsletter to be among the first to keep up with the latest updates.</p>
              <div className="letter-info">
                <input type="email" placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
