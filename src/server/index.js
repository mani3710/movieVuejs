import axios from "axios";


// const BASE_URL = 'http://ec2-65-2-4-216.ap-south-1.compute.amazonaws.com/api/v1';
const BASE_URL = 'https://yts.mx/api/v2';
const instanct =  axios.create({
    baseURL:BASE_URL,
    timeout:25000,
    headers:{
       
        "accept":"application/json",
        "Content-Type":"application/json"
    },
    validateStatusL:(status)=>{
        return status < 500;
    } 
});
export default instanct;
                   
export const setAuthToken = (token)=>{
    console.log("token ",`${token}`);
    instanct.defaults.headers.common.authorization  = `Basic ${token}`;
    // axios.defaults.headers.common.Authorization =`Bearer ${token}`;
}  
    
instanct.interceptors.request.use((config)=>{
  
    return config;

},(error)=>{
    return Promise.reject(error);
});

instanct.interceptors.response.use((response)=>{
    return response;
},(error)=>{
    return Promise.reject(error);
});
// Global Axios Config
axios.interceptors.request.use(
    (config) =>  config,
    (error)=> Promise.reject(error)
);
axios.interceptors.response.use(
    (response) =>  response,
    (error)=> Promise.reject(error)
)