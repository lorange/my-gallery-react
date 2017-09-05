require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ImgFigure from './ImgFigure';

let imageDatas = require('../data/imageDatas.json');

imageDatas = (function getImageURL(imageDatasArr) {
    for(let i = 0, j = imageDatasArr.length; i < j; i++){
      let singleImageData = imageDatasArr[i];
      singleImageData.imageURL = require('../images/' + singleImageData.fileName);
      imageDatasArr[i] = singleImageData;
    }
  return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {

    let controllerUnits = [],
        imgFigures = [];

    imageDatas.map(function (value) {
      imgFigures.push(<ImgFigure data={value}/>);
    });

    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
