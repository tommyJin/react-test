/**
 * Created by tommy on 2016/6/10.
 */
import React, {Component} from 'react';
import config from './greet.json';

class Greeter extends Component{
    render(){
        return(
            <div >
                {config.greetText}
            </div>
        );
    }
}

export default Greeter