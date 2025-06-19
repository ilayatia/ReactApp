import { cp } from "fs"

interface Props  {
    label :string
    color :string
}
const CostomButton : React.FC<Props> = ({label,color}:Props)=>{
    return <button style={{color}}>{label}</button>
}
export default CostomButton