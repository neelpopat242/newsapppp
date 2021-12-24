import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title, description, imageUrl,newsUrl} = this.props;
        return (
            <div>
                <div className="card" >
                    <img src={!imageUrl?"https://media.istockphoto.com/photos/blurred-bangkok-city-night-background-picture-id1289383957?b=1&k=20&m=1289383957&s=170667a&w=0&h=RPOjeyn2pF77nnGXq1DOjPeunBgJ-00SMKGSzKkoctg=":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} rel ="noreferrer" target="_blank" className="btn btn-dark">View in Detail</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
