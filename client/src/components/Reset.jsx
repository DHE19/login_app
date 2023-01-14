import { Link } from "react-router-dom"
import avatar from './../assets/img/avatar.jpeg'
import  styles from '../styles/username.module.css'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { resetPasswordVerify } from "../helper/validate"

const Reset = () => {

    const formik = useFormik({

        initialValues: {
            password: '',
            confirm_pwd: '',
            
        },
        validate: resetPasswordVerify,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values =>{
             console.log(values);
        }   
        }
    );



    return (
         <div className="container mx-auto ">
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <div className="flex justify-center items-center h-screen ">
                <div className={styles.glass}>
                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold"> Reset</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                            Enter your new password
                        </span>
                    </div>

                    <form className="py-20" onSubmit={formik.handleSubmit}>

                            <div className="textbox flex flex-col items-center gap-6">
                                <input type="password" {...formik.getFieldProps('password')} className={styles.textbox} placeholder="New Password" />
                                <input type="password" {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} placeholder="Confirm Password" />
                                <button className={styles.btn} type="submit"> Reset</button>
                            </div>

                    </form>
                </div>
            </div>

         </div>
    )
}

export default Reset
