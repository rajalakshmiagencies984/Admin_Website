import React,{useState} from 'react'
import './AddAdmin.scss'

import FormHeader from '../../Components/FormHeader/FormHeader'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'

const AddAdmin = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [password,setPassword]=useState("")

    const inputs =[
        {
            type:"text",
            id:"username",
            label:"Username",
            setData : (name)=>{
                setName(name)
            },
            value:name
        },
        {
            type:"email",
            id:"email",
            label:"Email",
            setData : (email)=>{
                setEmail(email)
            },
            value:email
        },
        {
            type:"tel",
            id:"phone",
            label:"Phone",
             setData : (phone)=>{
                setPhone(phone)
            },
            value:phone
        },
        {
            type:"password",
            id:"current-password",
            label:"Password",
             setData : (pass)=>{
                setPassword(pass)
            },
            value:password
        }
    ]
  return (
     <div className='add-admin-container'>
        <div className="box-outer">
          <div className="box shadow">
          <FormHeader />
          <p className="text-center heading">Create New Admin</p>
          <div className="form-container my-3">
            <form >
              {inputs.map((i,idx)=>(
                <Input key={idx} {...i} />
              ))}

              <Button value="Create Admin" />

            </form>
          </div>
           
          </div>
        </div>
    </div>
  )
}

export default AddAdmin