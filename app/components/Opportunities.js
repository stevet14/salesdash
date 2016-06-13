/**
 * Created by stevet on 13/06/2016.
 */
import React from 'react';
import OpportunitiesStore from '../stores/OpportunitiesStore';
import OpportunitiesActions from '../actions/OpportunitiesActions';

class Opportunities extends React.Component {
    constructor(props) {
        super(props);
        this.state = OpportunitiesStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        OpportunitiesStore.listen(this.onChange);
        OpportunitiesActions.getOpportunities();
    }

    componentWillUnmount() {
        OpportunitiesStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className= 'container'>
            <table class="table">
                <thead>
                    <tr>
                        <th>Prospect</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody class="table">
                        {this.state.opportunities.map((opportunity) => {
                            return (
                                <div>
                                    <tr>
                                        <td>{opportunity.prospect}</td>
                                        <td>{opportunity.description}</td>
                                    </tr>
                                </div>
                            );
                        })}
                </tbody>
            </table>
        </div>
);
}
}

export default Opportunities;