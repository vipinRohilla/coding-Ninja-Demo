import React from 'react'
import "./Content.css";
export const Posts = ({events, loading}) => {
    if(loading){
        return <h2>loading...</h2>
    }
    return (
        <div className="events-container">
            {
                            events.map((currele, index) =>{
                                return(
                                  <a href=".events-container"className="event" key={currele.id}>
                                  <div className="card">
                                    <header>
                                      <div className="glass">
                                        <div className="cover-image-container">
                                          <div className="glass-main"></div>
                                          <img src={currele.cover_picture} alt="cover_picture"></img>
                                        </div>
                                      </div>
                                      <div className="event-status">
                                        <div className="event-status-container">
                                          <div className="circle"></div>
                                          <p>
                                            Registration <b>open</b> till{" "}
                                            <b> 19 Jun, 09:30 PM</b>
                                          </p>
                                        </div>
                                      </div>
                                    </header>
                                    <main>
                                      <p className="event-name">
                                        {currele.name}
                                      </p>
                                      <div className="details">
                                        <div className="event-info-item">
                                          <p className="item-label">
                                            <b>Starts on</b>
                                          </p>
                                          <p className="item-value">
                                            09:00 PM, 19 Jun 2021
                                          </p>
                                        </div>
                                        <div className="event-info-item price">
                                          <p className="item-label">
                                            <b>Entry Fee</b>
                                          </p>
                                          <p className="item-value">{currele.fees !== 0? currele.currency:""} {currele.fees === 0? "Free":currele.fees}</p>
                                        </div>
                                        <div className="event-info-item">
                                          <p className="item-label">
                                            <b>Venue</b>
                                          </p>
                                          <p className="item-value">{currele.venue}</p>
                                        </div>
                                      </div>
                                      <div className="short-description">
                                        {currele.short_desc}
                                      </div>
                                      <div className="tags-container">

                                      {
                                              currele.card_tags.map((curr, index) =>{
                                                  return(
                                                    <div className="tag" key={index}>{curr!=="" ? curr : ""}</div>
                                                    ) 
                                                  })
                                          }
                                        

                                      </div>
                                    </main>
                                    <footer>
                                      <div className="registered-users">
                                        <div id="profile-img-container">
                                          <div className="mat-tooltip-trigger user-image ">
                                          {
                                              currele.registered_users.top_users.map((curr, index) =>{
                                                  return(
                                                    <img  key={index} src={curr.image_url!==null? curr.image_url:"https://files.codingninjas.in/0000000000001272.png"} alt="image_url"></img>
                                                    ) 
                                                  })
                                          }
                                          
                                          </div>
                                          
                                        </div>
                                        <p className="count">
                                          and <b>{
                                            currele.registered_users.other_users_count
                                            }</b> other registered
                                        </p>
                                      </div>
                                      <div className="status">
                                        <img
                                          src="https://files.codingninjas.in/0000000000001272.png"
                                          height="30px" alt="status_image"
                                        ></img>
                                      </div>
                                    </footer>
                                  </div>
                                </a>
                                )
                            })
                        }
        </div>
    )
}
