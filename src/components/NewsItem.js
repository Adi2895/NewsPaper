import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title  , description, imageUrl , url , author , date , source} = this.props;
        let a = new Date({date}); 
        if(!date) {
            a.toGMTString(); 
        }
        return (
            <>
            <div className='my-3'>                
                <div className="card " style={{width: "20rem"}}>

                <div className="container" 
                style= {{display: 'flex' , 
                position: 'absolute', 
                justifyContent: 'flex-end'}}>
                <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                    <img height= "170px" width="170px" src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/133DF/production/_128751887_whatsappimage2023-02-25at15.44.09.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{ title} </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted" > By {author?author:"Unknown"} on {date?a:"..."}</small></p>
                        <a href={url} target = "main"className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>            
            </>
        )
    }
}
export default NewsItem
