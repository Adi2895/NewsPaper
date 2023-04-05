import React, { Component } from 'react'
import eclipse from './Eclipse-1s-200px.gif'
export default class spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                    <img  className="my-3" src={eclipse} alt="loading" />
            </div>
            
        )
    }
}
