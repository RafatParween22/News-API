import React from 'react'

function Header() {
  return (
	<>
		<div className="container-fluid">
			<div className="row header-row">			
				<div className="header-news">NewsAPI<span><img className='ellipse-image' src="ellipse.png"/>Org</span></div>
			</div>
			<div className='horizontal-line'></div>
			<div className='horizontal-line'></div>
			<form className="search-box">
				<img className='inside-search' src="search.png"/>
				<input type="search" placeholder='search'aria-label="Search"/>
				<button className='button' type="submit">Go</button>
			</form>
		</div>
	</>
  )
}

export default Header;