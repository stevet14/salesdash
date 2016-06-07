/**
 * Created by stevet on 07/06/2016.
 */
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
);
}
}

export default App;