import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}, [])

	const [text] = useTypewriter({
        words : ['Stock Market Analysis','Rules of Market','Trading','Investment','Psychology','Risk Management','Money Management'],
        loop:{},
    });
	return (
		<>
			<div>	
			  <div className="hero-section">
                 <div className="hero-heading">Welcome To Stockology !</div>
                 <div className="hero-subheading"> Let's learn The 
                     <span className="running-text">  {text}</span>
                     <span style={{color:'red'}}><Cursor/></span>            
                 </div>
                 {/* <div className="btn-pink" id="btn">Explore</div> */}
				 <button className="btn-pink" id="btn">
							<Link
								to="/medical"
								style={{ textDecoration: 'none', color: 'white' }}
							>
								Explore
							</Link>
						</button>

            </div>
            

			</div>

			<div className='Container'>
			<div className=" container">
				<div>
					<h2 className="h1 p-3">Functionality!</h2>
					<p className="">
						Get The Answers related to Stock Markets Basics and Related To Stock Market and Psychology.
					</p>
				</div>
				<div className="row">
					<div className="col-md col-lg col-xl mb-5">
						<div className="card p-4 text-dark">
							<div className="card-body">
								<img
									src="/assets/images/chat-img.avif"
									className="card-img-top img-fluid"
									alt="..."
									style={{width:"100%",height:"200px"}}
								/>
								<p className="card-text mt-3 ms-3">
									<strong>1)write Your Queries in chat:</strong> <br />
									Write The Queries with Detailed Description. 
									<br/>    .
								</p>
							</div>
						</div>
					</div>
				
					<div className="col-md col-lg col-xl">
						<div className="card p-4 text-dark">
							<div className="card-body">
								<img
									src="/assets/images/expert.jpg"
									className="card-img-top img-fluid"
									alt="..."
									style={{width:"100%",height:"200px"}}
								/>
								<p className="card-text mt-3 ms-3">
									<strong>2) Get Response From Experts:</strong> <br />
									The Answer Will Be Provided on the Basis of Rules and Facts.
								</p>
							</div>
						</div>
					</div>
			
				</div>
				<div className="injury-input-section mt-1">
					<h2 className="section-title pb-3">Recomended Books</h2>
					{/* <p className="section-description">
						Answer a few questions about your injury to get expert insights.
					</p> */}
						<div className="row">
					
			
					<div className="col-md col-lg col-xl mb-3">
						<div className="card p-4 text-dark">
							<div className="card-body">
								<img
									src="/assets/images/trading-in-zone.jpg"
									className="card-img-top"
									alt="..."
									style={{width:"100%",height:"200px"}}
								/>
								<p className="card-text mt-3 ms-3">
									<strong>Trading In The Zone</strong> <br />
									By: Mark Douglas.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md col-lg col-xl mb-3">
						<div className="card p-4 text-dark">
							<div className="card-body">
								<img
									src="/assets/images/the-disciplined-trader.jpg"
									className="card-img-top"
									alt="..."
									style={{width:"100%",height:"200px"}}
								/>
								<p className="card-text mt-3 ms-3">
									<strong>The Disciplined Trader</strong> <br />
									By: Mark Douglas.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md col-lg col-xl mb-3">
						<div className="card p-4 text-dark">
							<div className="card-body">
								<img
									src="/assets/images/psychology-of-money.jpg"
									className="card-img-top"
									alt="..."
									style={{width:"100%",height:"200px"}}
								/>
								<p className="card-text mt-3 ms-3">
									<strong>The Psychology Of Money</strong> <br />
									By: Morgan Housel.
								</p>
							</div>
						</div>
					</div>

				
				</div>
					<hr className="section-divider" />
					<Link to="#" className="get-started-link ">
						Get Now
					</Link>
				</div>
			</div>
			</div>
		</>
	)
}

export default Home
