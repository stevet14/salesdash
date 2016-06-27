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


        let charactersList = this.state.opportunities.map((opportunity, index)=> {
            return (

                <div key={opportunity._id} className='list-group-item animated fadeIn'>
                    <div className='media'>
                        <span className='position pull-left'>{index + 1}</span>
                        <div className='pull-left thumb-lg'>
                        </div>
                        <div className='media-body'>
                            <h4 className='media-heading'>
                                <small>Prospect: <strong>{opportunity.prospect}</strong></small>
                            </h4>
                            <br/>
                            <small>Description: <strong>{opportunity.description}</strong></small>

                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='list-group'>
                    {charactersList}
                </div>
            </div>
        );


    }
}

export default Opportunities;
