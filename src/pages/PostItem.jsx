import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const PostItem = () => {
    return (
        <>
            <Navbar />
            <div className="post-item">
                <h2>Post Title</h2>
                <p>This is a sample post content. It can be a blog post, article, or any other type of content.</p>
                <button className="btn btn-primary">Read More</button>  
            </div>  
            <Footer />  
        </>
    );
};

export default PostItem;
