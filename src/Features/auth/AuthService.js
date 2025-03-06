import axios from "axios"

export const register = async (formData) =>{
const res = await axios.post("/api/user/register" , formData)
localStorage.setItem('user' , JSON.stringify(res.data))
return res.data
// console.log(res.data);
}


export const login = async (formData) =>{
    const res = await axios.post("/api/user/login" , formData)
    localStorage.setItem('user' , JSON.stringify(res.data))
    return res.data
}