import React from 'react'
import {Link} from 'react-router-dom'

function GithubUser({user: {login, avatar_url}}) {

return(
<Link to={`/user/${login}`} >
    <img src={avatar_url}/>
    {login}
</Link>
);
};


export default GithubUser
