interface Props  {
    name :string
    message :string
}
const GreetingCard : React.FC<Props> = ({name , message})=>{
    return <p>Hello {name}! , {message}</p>
}
export default GreetingCard