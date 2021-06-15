import React, {useEffect, useState} from "react";
import "./Content.css";
import allevents from "./images/all-events-unselected.svg";
import webinar from "./images/webinar-unselected.svg";
import codingevents from "./images/coding-events-unselected.svg";
import bootcamp from "./images/bootcamp_events_unselected-5397.png";
import workshop from "./images/workshop_unselected-5395.png";
import {Pagination} from "./Pagination"
import { Posts } from "./Posts";

const Content = () => {

  const [tagss, setTagss] = useState([])
  const [events, setEvents] = useState([])
  const [event_sub_category, setEvent_sub_category] = useState("Upcoming")
  const [event_category, setEvent_category] = useState("ALL_EVENTS")

    const getTags = async () =>{
        const response = await fetch('https://api.codingninjas.com/api/v3/event_tags');
        const data = await response.json();
        setTagss(data.data.tags);
    }
    useEffect(()=>{
      const getEvents = async () =>{
        const responseOfEvents = await fetch(`https://api.codingninjas.com/api/v3/events?event_category=${event_category}&event_sub_category=${event_sub_category}&tag_list=&offset=0`)
        const dataOfEvents = await responseOfEvents.json();
        setEvents(dataOfEvents.data.events)
      }
        getTags();
        getEvents();
    },[event_sub_category,event_category])
  
  //pagination
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = events.slice(indexOfFirstPost, indexOfLastPost)

  function paginate(pageNumber) {setCurrentPage(pageNumber);};

//toggling
    const [appState, changeState] = useState({
      activeObject: null,
      objects: [{id: 1},{id: 2},{id: 2},{id: 3},{id: 4},{id: 5}]
    })
    const [appState2, changeState2] = useState({
      activeObject2: null,
      objects2: [{id: 1},{id: 2},{id: 3}]
    })

    function toggleActive(index){
      changeState({...appState, activeObject: appState.objects[index]})
    }

    function toggleActiveStyles(index){
      if(appState.objects[index] === appState.activeObject){
        return "selected"
      }else{
        return "tab"
      }
    }

    function toggleActive2(index){
      changeState2({...appState2, activeObject2: appState2.objects2[index]})
    }

    function toggleActiveStyles2(index){
      if(appState2.objects2[index] === appState2.activeObject2){
        return "selected"
      }else{
        return "tab"
      }
    }



  return (
    <>
      <div id="landing-container">
        <div id="landing-content">
          <div id="content">
            <div id="list-header">
              <div className="header-text">Events & News</div>
              <div className="header-subtitle">Learn, Compete & Grow</div>
            </div>
            <div id="eventsWrapper" className="events-outer-wrapper">
              <div className="events-wrapper">
                <div className="tabs event-categories">
                  <a
                  href="#eventsWrapper"
                    className= {toggleActiveStyles(0)}
                    onClick={() => {setEvent_category("ALL_EVENTS"); toggleActive(0)}}
                    id="all-events"
                  >
                    <img src={allevents} alt="all_events_image"/> All Events{" "}
                  </a>
                  <a
                  href="#eventsWrapper"
                    className= {toggleActiveStyles(1)}
                    onClick={() => {setEvent_category("WEBINAR"); toggleActive(1)}}
                  >
                    <img src={webinar} alt="webinar_image"/> Webinars{" "}
                  </a>
                  <a
                  href="#eventsWrapper"
                    className= {toggleActiveStyles(2)}
                    onClick={() => {setEvent_category("CODING_EVENT"); toggleActive(2)}}
                  >
                    <img src={codingevents} alt="coding_events"/> Coding Events{" "}
                  </a>
                  <a
                  href="#eventsWrapper"
                    className= {toggleActiveStyles(3)}
                    onClick={() => {setEvent_category("BOOTCAMP_EVENTS"); toggleActive(3)}}
                  >
                    <img src={bootcamp} alt="bootcamp"/> Bootcamp Events{" "}
                  </a>
                  <a
                  href="#eventsWrapper"
                    className= {toggleActiveStyles(4)}
                    onClick={() => {setEvent_category("WORKSHOPS"); toggleActive(4)}}
                  >
                    <img src={workshop} alt="workshop" /> Workshop{" "}
                  </a>
                </div>
                <div className="tabs event-sub-categories">
                  <a
                  href="#eventsWrapper"
                    className= {toggleActiveStyles2(0)}
                    onClick={() => {setEvent_sub_category("Upcoming"); toggleActive2(0)}}
                  >
                    {" "}
                    Upcoming{" "}
                  </a>
                  <a
                  href="#eventsWrapper"
                    className= {toggleActiveStyles2(1)}
                  onClick={() => {setEvent_sub_category("Archived"); toggleActive2(1)}} >
                    {" "}
                    Archived{" "}
                  </a>
                  <a
                  href="#eventsWrapper"
                    className= {toggleActiveStyles2(2)}
                    onClick={() => {setEvent_sub_category("All Time Favorites"); toggleActive2(2)}}
                  >
                    {" "}
                    All Time Favorites{" "}
                  </a>
                </div>
                <div className="events-body">
                  <div className="event-cards-container">
                    <div className="events-container">
                    <Posts events={currentPosts} loading={loading}/>
                    </div>
                    <Pagination postsPerPage={postsPerPage} totalPosts={events.length} paginate={paginate}/>
                  </div>
                  <div className="tags-container">
                    <div className="heading">Tags</div>
                    <div className="tags-wrapper">
{/*------------------------------------------------------------------Using API-----------------------------------------------------------------------*/}
                      {/* <div className="tag">Interview perperation</div> */}
                      {/* <div className="tag">Contest Solution</div> */}
                   
                        {
                            tagss.map((currele, index) =>{
                                return(
                                    <div className="tag" key={index}>{currele}</div>
                                )
                            })
                        }
                      
                    </div>
                    <div className="count">See 10 more tags</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
{/*-------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <div className="container dark-back">
            <div className="footer-container">
              <img
                lazyload="https://files.codingninjas.in/cn-logo-dark-9824.svg"
                offset="0"
                alt="Coding Ninjas Logo"
                src="https://files.codingninjas.in/cn-logo-dark-9824.svg"
                className="  ng-lazyloaded"
              />
              <div className="second-container">
                <div className="container">
                  <p className="my-16">CODING NINJAS</p>
                  <div className="links">
                    <p>
                      <a
                        href="https://www.codingninjas.com/about"
                        target="_blank"
                        rel="noreferrer"
                      >
                        About Us
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.codingninjas.com/policy/privacy.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Privacy Policy
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.codingninjas.com/policy/tnc.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Terms &amp; Condition
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.codingninjas.com/policy/pricing-and-refund.pdf"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Pricing &amp; Refund Policy
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.codingninjas.com/bug-bounty"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Bug Bounty
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.codingninjas.com/customers"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Customers
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.codingninjas.com/press-release"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Press Release
                      </a>
                    </p>
                  </div>
                </div>
                <div className="container">
                  <p className="my-16">PRODUCTS</p>
                  <div className="links">
                    <p>
                      <a
                        href="https://www.codingninjas.com/courses"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Courses
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.codingninjas.com/start-learning"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Try courses for Free
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://careercamp.codingninjas.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Career Camp
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.codingninjas.com/hire-from-us"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Hire Talent
                      </a>
                    </p>
                  </div>
                </div>
                <div className="container">
                  <p className="my-16">COMMUNITY</p>
                  <div className="links">
                    <p>
                      <a
                        href="https://www.codingninjas.com/codestudio"
                        target="_blank"
                        rel="  noreferrer"
                      >
                        CodeStudio
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.codingninjas.com/blog"
                        target="_blank"
                        rel="  noreferrer"
                      >
                        Blog
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.codingninjas.com/events"
                        target="_blank"
                        rel="  noreferrer"
                      >
                        Events
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://campus.codingninjas.com"
                        target="_blank"
                        rel="  noreferrer"
                      >
                        Campus Ninja
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.codingninjas.com/affiliate"
                        target="_blank"
                        rel="  noreferrer"
                      >
                        Affiliate
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="third-container">
                <div className="social-container">
                  <p className="my-16">FOLLOW US ON</p>
                  <div className="social-links">
                    <a
                      href="https://www.facebook.com/codingninjas"
                      target="_blank"
                      rel="  noreferrer"
                    >
                      <img
                        lazyload="https://files.codingninjas.in/0000000000003240.png"
                        offset="0"
                        alt="Coding Ninjas Facebook Page"
                        src="https://files.codingninjas.in/0000000000003240.png"
                        className="  ng-lazyloaded"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/coding.ninjas/"
                      target="_blank"
                      rel="  noreferrer"
                    >
                      <img
                        lazyload="https://files.codingninjas.in/0000000000003241.png"
                        offset="0"
                        alt="Coding Ninjas Instagram Page"
                        src="https://files.codingninjas.in/0000000000003241.png"
                        className="  ng-lazyloaded"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/c/CodingNinjasIndia"
                      target="_blank"
                      rel="  noreferrer"
                    >
                      <img
                        lazyload="https://files.codingninjas.in/0000000000003245.png"
                        offset="0"
                        alt="Coding Ninjas Youtube Page"
                        src="https://files.codingninjas.in/0000000000003245.png"
                        className="  ng-lazyloaded"
                      />
                    </a>
                    <a
                      href="https://twitter.com/CodingNinjasOff"
                      target="_blank"
                      rel="  noreferrer"
                    >
                      <img
                        lazyload="https://files.codingninjas.in/0000000000003247.png"
                        offset="0"
                        alt="Coding Ninjas Twitter Page"
                        src="https://files.codingninjas.in/0000000000003247.png"
                        className="  ng-lazyloaded"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/coding-ninjas-india/"
                      target="_blank"
                      rel="  noreferrer"
                    >
                      <img
                        lazyload="https://files.codingninjas.in/0000000000003242.png"
                        offset="0"
                        alt="Coding Ninjas Linkedin Page"
                        src="https://files.codingninjas.in/0000000000003242.png"
                        className="  ng-lazyloaded"
                      />
                    </a>
                    <a
                      href="https://t.me/codingninjas_official"
                      target="_blank"
                      rel="  noreferrer"
                    >
                      <img
                        lazyload="https://files.codingninjas.in/telegram-8247.svg"
                        offset="0"
                        alt="Coding Ninjas Telegram Channel"
                        src="https://files.codingninjas.in/telegram-8247.svg"
                        className="  ng-lazyloaded"
                      />
                    </a>
                  </div>
                </div>
                <div className="container">
                  <p className="my-16">CONTACT US</p>
                  <div className="links">
                    <p className="row">
                      <img
                        src="https://files.codingninjas.in/0000000000003251.png"
                        alt="Coding Ninjas Toll Free Number"
                      />
                      <a href="tel:1800-123-3598">1800-123-3598</a>
                    </p>
                    <p className="row">
                      <img
                        src="https://files.codingninjas.in/0000000000003250.png"
                        alt="Coding Ninjas Contact Email"
                      />
                      <a
                        target="_top"
                        href="mailto:contact@codingninjas.com?Subject=Enquiry"
                      >
                        contact@codingninjas.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="back-white">
            <div className="footer-container back-white">
              <div className="container">
                <p className="my-16">Important Links</p>
                <div className="row">
                  <div className="important-links-section">
                    <p className="mr-12">Coding Courses for Beginners:</p>
                    <a
                      className="mr-8"
                      href="/courses/onlline-c-plus-plus-course"
                    >
                      C++ Foundation with Data Structures <span> | </span>
                    </a>
                    <a className="mr-8" href="/courses/online-java-course">
                      JAVA Foundation with Data Structures <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="/courses/online-interview-preparation"
                    >
                      Interview Preparation Course <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="/courses/online-competitive-programming-course"
                    >
                      Competitive Programming Course <span> | </span>{" "}
                    </a>
                    <a className="mr-8" href="/courses/online-python-course">
                      Python Foundation with Data Structures <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="/courses/online-aptitude-preparation"
                    >
                      Aptitude Preparation Course{" "}
                    </a>{" "}
                  </div>
                  <div className="important-links-section">
                    <p className="mr-12">Advanced Coding Course:</p>
                    <a
                      className="mr-8"
                      href="/courses/online-web-dev-with-react"
                    >
                      Advanced Front-End Web Development with React{" "}
                      <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="/courses/online-machine-learning-course"
                    >
                      Machine Learning and Deep Learning Course <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="/courses/online-full-stack-node-js-web-dev-course"
                    >
                      Full Stack Web Development Course <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="/courses/online-data-science-course"
                    >
                      Data Science &amp; Machine Learning Complete{" "}
                      <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="/courses/online-android-Development-kotlin"
                    >
                      Android Development with Kotlin{" "}
                    </a>{" "}
                  </div>
                  <div className="important-links-section">
                    <p className="mr-12">Career Tracks:</p>
                    <a
                      className="mr-8"
                      href="/courses/online-competitive-programming-track"
                    >
                      Ninja Competitive Programmer Track <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="/courses/online-android-development-career-track"
                    >
                      Ninja Android Developer Career Track <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="/courses/ninja-web-developer-career-track-mern-stack"
                    >
                      Ninja Web Developer Career Track - NodeJS &amp; ReactJs{" "}
                      <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="/courses/web-developer-career-track"
                    >
                      Ninja Web Developer Career Track - NodeJS <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="/courses/data-Scientist-career-track"
                    >
                      Ninja Data Scientist Career Track <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="/courses/machine-learning-engineer-career-track"
                    >
                      Ninja Machine Learning Engineer Career Track{" "}
                    </a>{" "}
                  </div>
                  <div className="important-links-section">
                    <p className="mr-12">Free Trial:</p>
                    <a
                      className="mr-8"
                      href="https://codingninjas.com/free-trial-courses/onlline-c-plus-plus-course"
                    >
                      C++ Foundation with Data Structures <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://codingninjas.com/free-trial-courses/online-java-course"
                    >
                      Java Foundation with Data Structures <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://codingninjas.com/free-trial-courses/online-competitive-programming-course"
                    >
                      Competitive Course <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://codingninjas.com/free-trial-courses/online-aptitude-preparation"
                    >
                      Aptitude Preparation Course <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://codingninjas.com/free-trial-courses/online-python-course"
                    >
                      Python Foundation with Data Structures <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://codingninjas.com/free-trial-courses/online-android-Development-kotlin"
                    >
                      Android Development with Kotlin Language <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://codingninjas.com/free-trial-courses/online-full-stack-node-js-web-dev-course"
                    >
                      Full Stack Web Development with NodeJS <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://codingninjas.com/free-trial-courses/online-web-dev-with-react"
                    >
                      Advanced Front-End Web Development with React{" "}
                      <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://codingninjas.com/free-trial-courses/online-data-science-course"
                    >
                      Data Science &amp; Machine Learning Complete{" "}
                      <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://codingninjas.com/free-trial-courses/online-interview-preparation"
                    >
                      Interview Preparation Course <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://codingninjas.com/free-trial-courses/online-machine-learning-course"
                    >
                      Machine Learning Course{" "}
                    </a>{" "}
                  </div>
                  <div className="important-links-section">
                    <p className="import { Pagination } from './Pagination';
mr-12">Free Contents:</p>
                    <a
                      className="mr-8"
                      href="https://www.codingninjas.com/free-content/c-foundation-with-data-structures"
                    >
                      C++ Foundation with Data Structures <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://www.codingninjas.com/free-content/java-foundation-with-data-structures"
                    >
                      Java Foundation with Data Structures <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://www.codingninjas.com/free-content/competitive-programming-course"
                    >
                      Competitive Programming Course <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://www.codingninjas.com/free-content/aptitude-preparation-course"
                    >
                      Aptitude Preparation Course <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://www.codingninjas.com/free-content/python-foundation-with-data-structures"
                    >
                      Python Foundation with Data Structures <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://www.codingninjas.com/free-content/android-development-with-kotlin"
                    >
                      Android Development with Kotlin Language <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://www.codingninjas.com/free-content/full-stack-web-development"
                    >
                      Full Stack Web Development with NodeJS <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://www.codingninjas.com/free-content/advanced-front-end-web-development-with-react"
                    >
                      Advanced Front-End Web Development with React{" "}
                      <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://www.codingninjas.com/free-content/data-science-machine-learning-complete"
                    >
                      Data Science &amp; Machine Learning Complete{" "}
                      <span> | </span>{" "}
                    </a>
                    <a
                      className="mr-8"
                      href="https://www.codingninjas.com/free-content/interview-preparation-course"
                    >
                      Interview Preparation Course{" "}
                    </a>{" "}
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
