import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

function Blogjum(props) {
	return (
		<Context.Consumer>
			{({ store }) => {
				return store.posts.map((item, index) => {
					if (index <= 0) {
						return (
							<div>
								<h1 key={index}>{item.title}</h1>
								<p key={index}>
									{item.content.substring(0, 400)}
								</p>
								<a href="">Continue Reading</a>
								<link>{item.link}</link>
							</div>
						);
					} else {
						return null;
					}
				});
			}}
		</Context.Consumer>
	);
}

Blogjum.propTypes = {
	items: PropTypes.array
};

export default Blogjum;
