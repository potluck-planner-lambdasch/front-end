import * as yup from 'yup'

const createSchema = yup.object().shape({
    dateTime: yup
        .string()
        .trim()
        .required('date and time required'),
    location: yup
        .string()
        .trim()
        .required('location is required')
})

export default createSchema