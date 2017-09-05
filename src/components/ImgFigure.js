/**
 * Created by pomelorange on 2017/9/5.
 */
import React from 'react';

export default class ImgFigure extends React.Component{
  render(){

    return(
      <figure>
        <img src={this.props.data.imageURL}
             alt={this.props.data.title}/>
        <figcaption>
          <h2>{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
}
