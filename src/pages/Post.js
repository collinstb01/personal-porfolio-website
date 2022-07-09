import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createproject, createskill } from '../features/SkillSlice'
import FileBase from "react-file-base64"
const Post = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        projectImg: "",
        projectName: "",
        projectDescription: "",
        projectUrl: "",
        projectGithub: ""
    })
    const [skillData, setSkillData] = useState({title: "", img: ""})
    console.log(skillData.title)
    const handle = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmitProject = () => {
        dispatch(createproject(formData))
    }
    
    const handleSubmitSkill = () => {
        dispatch(createskill(skillData))
    }

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
        <select>
            <option>

            </option>
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
       </div>
    </div>
  )
}

export default Post