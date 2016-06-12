/**
 * Created by stevet on 09/06/2016.
 */
import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onChange(state) {
    }

    render() {

return (
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-5'>
                    <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
                    <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</p>
                    <p>You may view the <a href='https://github.com/stevet14/salesdash'>Source Code</a> behind this project on GitHub.</p>
                    <p>© 2016 Steve Taplin.</p>
                </div>
            </div>
        </div>
    </footer>
);
}
}

export default Footer;