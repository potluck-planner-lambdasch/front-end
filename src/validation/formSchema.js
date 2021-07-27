import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('username required')
        .min(2, 'username must be at least 2 characters'),  
    password: yup
        .string()
        .trim()
        .required('password required')
        .min(5, 'password must be at least 5 characters')
        
})

export default formSchema