import './Blog.css';
import Axios from 'axios';
// import NewAxios from '../../axios';
import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import NewPost from '../../components/NewPost/NewPost';
import FullPost from '../../components/FullPost/FullPost';

class Blog extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            posts: [], selectedPostId: null, error: false
        }
    }

    postSelectedHandler = id => {
        this.setState({selectedPostId: id});
    }

    toJsxPosts = () => {
        return this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} author={post.author}
                clicked={() => this.postSelectedHandler(post.id)}/>;
        });
    }

    componentDidMount() {
        //Axios GET 
        Axios.get('posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Gaby'
                    }
                });

                this.setState({posts: updatedPosts});
            }).catch(error => {
                this.setState({error: true})
            });
    }

    render () {
        const posts = this.state.error ? <p>Something went wrong...</p> : this.toJsxPosts();

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;