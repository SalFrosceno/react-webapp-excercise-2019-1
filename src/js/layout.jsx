import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import { Login } from "./views/login.jsx";
import { Blogview } from "./views/blogview.jsx";
import { StoreView } from "./views/storeView.jsx";
import { Checkout } from "./views/checkout.jsx";
import { Cover } from "./views/cover.jsx";

import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/demo" component={Demo} />
						<Route path="/single/:theid" component={Single} />
						<Route path="/login" component={Login} />
						<Route path="/blogview" component={Blogview} />
						<Route path="/store" component={StoreView} />
						<Route path="/checkout" component={Checkout} />
						<Route path="/cover" component={Cover} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
