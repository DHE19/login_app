
import toast from 'react-hot-toast';
//validate username

const regexUsername = /^[a-zA-Z0-9._-]{3,15}$/;
const regexPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{4,}).*$/;
//validate login page username
export const usernameValidate = async (values)  =>{
    const erros = usernameVerify(values);

    return erros;

}

export const passwordValidate = async (values) =>{
    const erros = passwordVerify(values);

    return erros;
}

export const  resetPasswordVerify = async (values) =>{
    const erros = passwordVerify(values);

    if(values.password !== values.confirm_pwd)erros.exist = toast.error("Password not match")

}

const usernameVerify  = (values,error = {}) =>{

    if(!values.username) error.username = toast.error ('Username must be provided');
    else if(!regexUsername.test(values.username)) error.username = toast.error ('invalid username');
    
    
    return error;
}


const passwordVerify = (values, error ={}) =>{
    if(!values.password) error.password = toast.error ('Password must be provided');
    else if(!regexPassword.test(values.password)) error.password = toast.error ('Password must be provided');
}
