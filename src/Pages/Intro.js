import React,{Component} from 'react';
import Bg from '../Assets/Images/pexels-dids-2510370.jpg';

class Intro extends Component {
    render() {
        return (
            <div>
                {/* <img src={Bg}/> */}
                <img src={ require('../Assets/Images/pexels-pascal-renet-1089307.jpg').default }/>
            </div>
        );
    }
}
export default Intro;
