interface Props  {
    names :string[]
}
const UserList : React.FC<Props> = ({names}:Props)=>{
    return (<ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>)
}
export default UserList