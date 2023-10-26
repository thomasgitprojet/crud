const User = ({infoUser}:any) => {
console.log(infoUser);

        return (
        
                <tr>
                <td>{infoUser.nom}</td>
                <td>{infoUser.username}</td>
                <td>
                    <button>eddit</button>
                    <button>delete</button>
                </td>
                </tr>                     
        
    )
            
                
}

export default User;