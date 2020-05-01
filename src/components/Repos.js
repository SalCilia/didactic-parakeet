import React ,{ useState, useEffect } from "react" 
import axios from 'axios'
import GithubRepo from './GithubRepo'


function Repos (props) {

    const [repos,setRepos]= useState([])


    useEffect(() => {

        const fetchData = async () => {
            const result = await axios(
                `https://api.github.com/users/${props.match.params.username}/repos`
            );
                setRepos(result.data);
        };
        fetchData();
    }, [props.match.params.username]);




    return !repos
        ? <div>LOADING REPOS...</div>
        : <div className="repos-page">
            <h2>Repos of {props.match.params.username}</h2>
            {repos.map(repo => <GithubRepo repo={repo} />)} </div>   
            



    
}





export default Repos