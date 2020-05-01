import React, {useState, useEffect} from 'react'
import axios from 'axios'
import GithubUser from './GithubUser'

function Followers(props) {

    const [followers,setFollowers]= useState([])


    useEffect(() => {

        const fetchData = async () => {
            const result = await axios(
                `https://api.github.com/users/${props.match.params.username}/followers`
            );
                setFollowers(result.data);
        };
        fetchData();
    }, [props.match.params.username]);




    return !followers
        ? <div>LOADING FOLLOWERS...</div>
        : <div className="followers-page">
            <h2>Followers of {props.match.params.username}</h2>
            {followers.map(user => <GithubUser user={user} />)} </div>   
            
}






export default Followers