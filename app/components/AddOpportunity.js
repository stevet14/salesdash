/**
 * Created by stevet on 12/06/2016.
 */
import React from 'react';
import AddOpportunityStore from '../stores/AddOpportunityStore';
import AddOpportunityActions from '../actions/AddOpportunityActions';

class AddOpportunity extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddOpportunityStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AddOpportunityStore.listen(this.onChange);
    }

    componentWillUnmount() {
        AddOpportunityStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();

//        var territory = this.state.territory.trim();
        var prospect = this.state.prospect.trim();
        var description = this.state.description.trim();
//        var salesStage = this.state.salesStage;
//        var status = this.state.status;

        if (!prospect) {
            AddOpportunityActions.invalidProspect();
            this.refs.prospectTextField.getDOMNode().focus();
        }

        if (!description) {
            AddOpportunityActions.invalidDescription();
            this.refs.descriptionTextField.getDOMNode().focus();
        }

        if (prospect && description) {
            AddOpportunityActions.addOpportunity(prospect, description);
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row flipInX animated'>
                    <div className='col-sm-8'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'>Add Opportunity</div>
                                <div className='panel-body'>
                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                        <div className={'form-group ' + this.state.prospectValidationState}>
                                            <label className='control-label'>Prospect</label>
                                            <input type='text' className='form-control' ref='prospectTextField' value={this.state.prospect}
                                                onChange={AddOpportunityActions.updateProspect} autoFocus/>
                                            <span className='help-block'>{this.state.prospectHelpBlock}</span>
                                        </div>
                                        <div className={'form-group ' + this.state.descriptionValidationState}>
                                            <label className='control-label'>Description</label>
                                            <input type='text' className='form-control' ref='descriptionTextField' value={this.state.description}
                                                onChange={AddOpportunityActions.updateDescription} />
                                            <span className='help-block'>{this.state.descriptionHelpBlock}</span>
                                        </div>
                                        <button type='submit' className='btn btn-primary'>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
);
}
}

export default AddOpportunity;