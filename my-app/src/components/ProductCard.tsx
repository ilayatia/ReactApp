import { cp } from "fs"
import { Url } from "url"

interface Props  {
    name :string
    price :number
    imageUrl:string
}
const ProductCard : React.FC<Props> = ({name,price,imageUrl}:Props)=>{
    return <div style={{border:"solid"}}>
        <p>Name : {name}</p>
        <p>Price : {price}</p>
        <img src={imageUrl}/>
    </div>
}
export default ProductCard