import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        let {title,description,imgUrl,url} = this.props;
        return (
            <div className="card my-2" style={{width: '18rem'}}>
                <img src={imgUrl ? imgUrl : '/news.jpg'} className="card-img-top" alt="..." style={{width:"100%",height:'10rem'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text" style={{height:'4rem'}}>{description}</p>
                        <a href={url} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
            </div>
        )
    }
}
