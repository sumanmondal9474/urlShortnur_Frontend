import { useState } from "react"
import axios from "axios"




const Input = () => {
    const [a, b] = useState()
    const [x,y] = useState()

    async function sortUrl() {
        y('*')
            try {
              const response = await axios.post("http://localhost:3000/url/shorten", {
                longUrl:a
                
              });
            y(response.data.data.shortUrl)
            } catch (error) {
              console.error(error);
            }
            
          }
    

    return (<div>
        <input type="text" onChange={(e) => {
            b(e.target.value)
        }} />
        {x==="*"?"wait":<><button onClick={sortUrl}>submit</button> <a href={x}>{x}</a></>}

       

        

    </div>
    )
}

export default Input