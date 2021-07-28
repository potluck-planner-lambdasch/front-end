import axios from "axios";

export default function Potlucks(props) {
    const { baseURL } = props

    const [potlucks, setPotlucks] = useState([])


    axios.get(`${baseURL}/potluck`)
        .then(res => setPotlucks(res.data))
        .catch(err=>console.log(err))
        .finally(()=> console.log('done'))
    
    return(
        <div>
            {
            potlucks.map((obj) => {
                <Potluck dateTime={} location={}/>
            })
            }
        </div>
    )
}