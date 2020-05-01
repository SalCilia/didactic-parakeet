import React from 'react'

function GithubRepo ({repo: {html_url, full_name, stargazers_count}}) {





    return(
        <div className="repo-div">
            <a href={html_url} target="_blank" rel="noopener noreferrer"><span>{full_name}</span></a>
            {stargazers_count}
            <img src="https://i.imgur.com/g0gbFkV.png" alt="stars" className="repo-star"/>
            </div>
    )

}






export default GithubRepo
