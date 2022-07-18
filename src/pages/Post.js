import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createproject, createskill } from '../features/SkillSlice'
import FileBase from "react-file-base64"
import { createblog } from '../features/BlogSlice'

const Post = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        projectImg: "",
        projectName: "",
        projectDescription: "",
        projectUrl: "",
        projectGithub: "",
        category: "",
    })
    const [skillData, setSkillData] = useState({title: "", img: "", category: ""})
    console.log(skillData.title)
    const handle = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    // console.log(formData.category)
    const handleSubmitProject = () => {
        dispatch(createproject(formData))
    }
    
    const handleSubmitSkill = () => {
        dispatch(createskill(skillData))
    }

 const handleSelectSkill = (e) => {
    setSkillData({...skillData,category: e.target.value})
    }

    const [blogForm, setBlogForm] = useState({
        image: "", title: "", message: "", category: "",
    })


    const handleSubmitBlog = () => {
        dispatch(createblog(blogForm))
    }
    console.log(skillData.category)
    return (
    <div>
       <div>
        <h1>Submit Projects</h1>
       <FileBase
       type="file"
        multiple={false}
        onDone={({base64}) => {
            setFormData({...formData, projectImg: base64})
        }}
       />
        <input placeholder="Enter project Name" name="projectName" value={formData.projectName} onChange={handle} />
        <input placeholder="Enter project Description" name="projectDescription" value={formData.projectDescription} onChange={handle} />
        <input placeholder="Enter project Url" name="projectUrl" value={formData.projectUrl} onChange={handle} />
        <input placeholder="Enter project github link" name="projectGithub" value={formData.projectGithub} onChange={handle} />
        <select onChange={handle} name="category" value={formData.category}>
            <option  value="choice">---option</option>
            <option  value="reactjs/redux">REACT JS/REDUX</option>
            <option value="react/native">REACT NATIVE</option>
            <option value="mern/stack">MERN STACK</option>
            <option value="html/css/js">HTML/CSS/JAVASCRIPT</option>
        </select>
        <button onClick={handleSubmitProject}>Submit</button>
       </div>
       <div>
       <h1>Submit Projects</h1>
       <FileBase
       type="file"
        multiple={false}
        onDone={({base64}) => {
            setSkillData({...skillData, img: base64})
        }}
       />
        <input placeholder="Enter project Name" value={skillData.title} name="title" onChange={(e) => 
            setSkillData({...skillData, title: e.target.value})} />
        <button onClick={handleSubmitSkill}>Submit</button>
        <select onChange={handleSelectSkill} value={skillData.category}>
            <option  value="choice">---option</option>
            <option  value="backend">BackEnd</option>
            <option value="frontend">FrontEnd</option>
        </select>
       </div>

       <div>
       <h1>Submit Blogs</h1>
       <FileBase
       type="file"
        multiple={false}
        onDone={({base64}) => {
            setBlogForm({...blogForm, image: base64})
        }}
       />
        <input placeholder="Enter Blog Title" value={blogForm.title} name="title" onChange={(e) => 
            setBlogForm({...blogForm, title: e.target.value})} />
        <input placeholder="Enter Blog Message" value={blogForm.message} name="message" onChange={(e) => 
            setBlogForm({...blogForm, message: e.target.value})} />
        <select onChange={(e) => setBlogForm({...blogForm, category: e.target.value})} value={blogForm.category} name="category">
            <option  value="choice">---option</option>
            <option  value="tech">Tech</option>
            <option  value="life">Life</option>
            <option value="coding">Coding</option>
        </select>
        <button onClick={handleSubmitBlog}>Submit</button>
       </div>
    </div>
  )
}

export default Post