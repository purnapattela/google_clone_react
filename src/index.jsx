// import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
	return (
		<div>
		<div>
			<header>
				<nav className="navbar">
				<ul>
					<li>
					<a className="link" href>Images</a>
					</li>
					<li>
					<div className="circle-shadow">
						<a className="menu-icon" href><i className="fa fa-th" /></a>
					</div>
					</li>
					<li>
					<div className="circle-shadow">
						<a className="user-icon" href><span>Z</span></a>
					</div>
					</li>
				</ul>
				</nav>
			</header>
			{/* Content */}
			<section className="content-section">
				<div className="content-wrapper">
				<div className="search-bar">
					<i className="fas fa-search" />
					{/* Search Box */}
					<input id="search-input" className="search-input" type="text" />
					<i className="fas fa-keyboard" />
					<i className="fas fa-microphone" />
				</div>
				<div className="search-btns">
					<button className="google-search-btn">Google Search</button>
					<button className="lucky-search-btn">I'm Feeling Lucky</button>
				</div>
				<div className="language">
					<p>Google Offered in: <a href>বাংলা</a></p>
				</div>
				</div>
			</section>
			{/* Footer */} 
			<footer>
				<div className="footer-content upper-footer">
				<p> Bangladesh </p>
				</div>
				<div className="footer-content lower-footer">
				<ul className="lower-left-footer">
					<li>
					<a href>About</a>
					</li>
					<li>
					<a href>Advertising</a>
					</li>
					<li>
					<a href>Business</a>
					</li>
					<li>
					<a href>How Search Works</a>
					</li>
				</ul>
				<ul className="lower-right-footer">
					<li>
					<a href>Privacy</a>
					</li>
					<li> 
					<a href>Terms</a>
					</li>
					<li>
					<a href>Settings</a>
					</li>
				</ul>
				</div>
			</footer>
			</div>

		</div>
	);
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
