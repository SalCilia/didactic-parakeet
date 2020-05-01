import React, {useState, useEffect} from 'react'
import axios from 'axios'
import GithubUser from './GithubUser'

function Following(props) {

    const [Following,setFollowing]= useState([])


    useEffect(() => {

        const fetchData = async () => {
            const result = await axios(
                `https://api.github.com/users/${props.match.params.username}/following`
            );
                setFollowing(result.data);
        };
        fetchData();
    }, [props.match.params.username]);




    return !Following
        ? <div>LOADING Following...</div>
        : <div className="Following-page">
            <h2>{props.match.params.username} follows</h2>
            {Following.map(user => <GithubUser user={user} />)} </div>   
            
}






export default Following