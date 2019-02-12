import React from "react";

export class Blog extends React.Component {
	render() {
		return <div className="container">;
				<div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">;
					<div class="col-md-6 px-0">;
						<h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
						<p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>;
						<p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>;
					</div>;
				</div>;
			</div>;
<div className="row mb-2">
	<div className="col-md-6">
		<div className="card flex-md-row mb-4 shadow-sm h-md-250">
		<div className="card-body d-flex flex-column align-items-start">
			<strong class="d-inline-block mb-2 text-primary">World</strong>
			<h3 className="mb-0">
			<a className="text-dark" href="#">Featured post</a>
			</h3>
			<div className="mb-1 text-muted">Nov 12</div>
			<p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
			<a href="#">Continue reading</a>
		</div>
		<svg 
		className="bd-placeholder-img card-img-right flex-auto d-none d-lg-block"
		width="200" height="250" 
		preserveAspectRatio="xMidYMid slice" 
		focusable="false" 
		role="img" a
		ria-label="Placeholder:
		Thumbnail">
		<title>Placeholder</title></svg>
		</div>
	</div>
	<div className="col-md-6">
		<div className="card flex-md-row mb-4 shadow-sm h-md-250">
			<div className="card-body d-flex flex-column align-items-start">
				<strong className="d-inline-block mb-2 text-success">Design</strong>
				<h3 className="mb-0">
				<a className="text-dark" href="#">Post title</a>
				</h3>
				<div className="mb-1 text-muted">Nov 11</div>
				<p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
				<a href="#">Continue reading</a>
			</div>
			<svg className="bd-placeholder-img card-img-right flex-auto d-none d-lg-block" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect fill="#55595c" width="100%" height="100%"></rect><text fill="#eceeef" dy=".3em" x="50%" y="50%">Thumbnail</text></svg>
		</div>
	</div>
</div>;
	}
}