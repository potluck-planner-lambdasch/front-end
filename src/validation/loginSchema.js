import * as yup from 'yup'

const loginSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('username required')
        .min(3, 'username must be at least 3 characters'),
    password: yup
        .string()
        .trim()
        .required('password required')
        .min(5, 'password must be at least 5 characters'),
})

export default loginSchema