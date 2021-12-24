import React, { Component } from 'react'



export default class About extends Component {
    render() {
        return (
            <div >
                <div className="card bg-dark" style ={{width: "18rem"}} >
                    <img src="https://i.ibb.co/rdCVL3Z/np.jpg" style={{maxWidth : '100%',height:'auto'}} className="card-img-top" alt="..."/>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Neel Popat</li>
                        <li class="list-group-item">B.Tech in Computer Science , Ahmedabad University</li>
                        <li class="list-group-item"><a href="https://github.com/neelpopat242" target="_blank" class="card-link">Github</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
