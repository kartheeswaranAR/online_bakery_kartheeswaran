// import React from 'react'
import imagedata from '../../imagedb.json'
// import { Axios } from 'axios'

function Brownies(){
    // const [data, setData] = React.useState([])
    // React.useEffect(() => {
    //         Axios.get('http://localhost:3001').then(res => {
    //             setData(res)
    //         }).catch(err => console.log(err))
    //     }, [])

    return(
        <div className='row'>
        <div className="images">
            {
                imagedata&&imagedata.map(imagedatas=>{
                    return(
                        <div className='box' key={imagedatas.id}>
                            <img src={imagedatas.image} />
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Brownies
