import './FullPost.css';
import Axios from 'axios';
import React, { Component } from 'react';

class FullPost extends Component {
    constructor(props) {
        super(props);
        this.state = {loadedPost: null}
    }

    setLoadedPost = () => {
        Axios.get(`posts/${this.props.id}`)
            .then(response => {
                this.setState({loadedPost: response.data});
            });
    }

    deletePostHandler = () => {
        // Axios DELETE
        Axios.delete(`posts/${this.props.id}`)
            .then(response => {
                console.log(response);
            });
    }

    componentDidUpdate() {
        if(this.props.id) {
            // Stops the update loop 
            if(!this.state.loadedPost)
                this.setLoadedPost();
            else if(this.state.loadedPost.id !== this.props.id)
                this.setLoadedPost();
        }
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" 
                        onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        else if(this.props.id)
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        return post;
    }
}

export default FullPost;