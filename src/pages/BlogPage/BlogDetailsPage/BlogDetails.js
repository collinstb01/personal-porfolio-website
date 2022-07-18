import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../../../component/Navbar'
import { getblog } from '../../../features/BlogSlice'

const BlogDetails = () => {
    const dispatch = useDispatch()
    const{blog, loading} = useSelector((state) => state.blog)
    const {id} = useParams()

    useEffect(() => {
      dispatch(getblog(id))
    }, [dispatch])
    
  return (
    <Main>
        <Navbar />
        {
          loading ? <div style={{width: "100%", justifyContent: "center", textAlign: "center"}}><h1>Loading...</h1></div>
          : 
          <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            src={blog?.blogPost?.image}
            alt=""
          />
          <h1 className="singlePostTitle">
            {blog?.blogPost?.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span>
              Author:
              <b className="singlePostAuthor">
                <Link className="link" to="/">
                  Collins Eguasa
                </Link>
              </b>
            </span>
            <span>{blog?.blogPost?.createdAt?.toString().slice(0, 10)}</span>
          </div>
          <p className="singlePostDesc">
            {blog?.blogPost?.message}
          </p>
        </div>
}

    </Main>
  )
}

export default BlogDetails

const Main = styled.div`
  flex: 9;


.singlePostWrapper {
  padding: 20px;
  padding-right: 0;
}

.singlePostImg {
  width: 100%;
  height: 300px;
  border-radius: 5px;
  object-fit: cover;
}

.singlePostTitle {
  text-align: center;
  margin: 10px;
  font-size: 28px;
  font-family: "Lora", sans-serif;
}

.singlePostEdit {
  float: right;
  font-size: 16px;
}

.singlePostIcon {
  margin-left: 10px;
  cursor: pointer;
}

.singlePostIcon:first-child {
  color: teal;
}
.singlePostIcon:last-child {
  color: tomato;
}

.singlePostInfo {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #be9656;
  font-family: "Varela Round", Arial, Helvetica, sans-serif;
}

.singlePostAuthor{
  margin-left: 5px;
}

.singlePostDesc {
  color: #666;
  font-size: 18px;
  line-height: 50px;
}

.singlePostDesc::first-letter {
  margin-left: 20px;
  font-size: 30px;
  font-weight: 600;
}



`