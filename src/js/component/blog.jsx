import React from 'react';
import PropTypes from 'prop-types';
import Store,{Context} from '../store/appcontext.jsx';

import '../../styles/blog.css';

function Blog(props){
    return(

            <Context.Consumer>
                {
                  ({store}) => {
                        return(
                            store.posts.map((item, index) => {
                              return (<div>
                              <h1 key={index}>{item.title}</h1>
                              <p key={index}>{item.date} by {item.author}</p>
                              <p key={index}>{item.content.substring(0,800)}</p>
                              </div>);
                            })
                        );
                     }
                }
            </Context.Consumer>
    );
}

Blog.propTypes = {
    items: PropTypes.array
};

export default Store(Blog);