import axios from 'axios'
import React, {useState, useEffect} from 'react'
import ZoomableImage from "./ZoomableImage"

import "../styles/posts.scss"

function PostBunch() {
    const [state, setState] = useState({
        postList: []
    })
    useEffect(() => {
        fetchPosts()
        
    }, [])
    const fetchPosts = async () => {
        axios.get("https://audi-database-clone.herokuapp.com/posts/all")
        .then(response => {
            setState({
                postList: response.data
            })
        })
        .catch(error => console.log(`A malfunction took place as the posts were being fetched. Error: ${error}`))
    }
    console.log(state.postList)

    const renderedPosts = state.postList.length ? (
        state.postList.map((post, index) => {
            return (
                <div className="post card">
                    <div className="post-thumb">
                        <ZoomableImage image={post.image} contentAllowed="false"/>

                    </div>
                    <div className="postContent">
                        <p className="postCategory">{post.category} - {post.post_date}</p>
                        <h1 className="postTitle">{post.title}</h1>
                        <p className="postDescription">{post.description}</p>

                        <hr/>

                        <div className="e_tron-description">
                            
                            <span>Audi e-tron GT quattro: </span>
                            <span>Power consumption, combined*: 19.6–18.8 kWh/100km (NEDC); 21.6–19.9 kWh/100km (WLTP)</span>
                            <span>CO₂ emissions, combined*: 0 g/km</span>
                        </div>
                    </div>
                    
                    
                </div>
            )
        })
    ) : (
        <h4>AWAITING</h4>
    )
    return (
        <div className="post-bunch">
            {renderedPosts}
        </div>
    )
}

export default PostBunch
