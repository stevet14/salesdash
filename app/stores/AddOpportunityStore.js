/**
 * Created by stevet on 12/06/2016.
 */
import alt from '../alt';
import AddOpportunityActions from '../actions/AddOpportunityActions';

class AddOpportunityStore {
    constructor() {
        this.bindActions(AddOpportunityActions);

        this.prospect = '';
        this.prospectHelpBlock = '';
        this.prospectValidationState = '';

        this.description = '';
        this.descriptionHelpBlock = '';
        this.descriptionValidationState = '';
    }

    onAddOpportunitySuccess(successMessage) {
        this.prospectValidationState = 'has-success';
        this.prospectHelpBlock = successMessage;
        this.prospect='';
        this.description='';
    }

    onAddOpportunityFail(errorMessage) {
        this.prospectValidationState = 'has-error';
        this.prospectHelpBlock = errorMessage;
    }

    onUpdateProspect(event) {
        this.prospect = event.target.value;
        this.prospectValidationState = '';
        this.prospectHelpBlock = '';
    }

    onUpdateDescription(event) {
        this.description = event.target.value;
        this.descriptionValidationState = '';
        this.descriptionHelpBlock = '';
    }

    onInvalidProspect() {
        this.prospectValidationState = 'has-error';
        this.prospectHelpBlock = 'Please enter a prospect name.';
    }

    onInvalidDescription() {
        this.descriptionValidationState = 'has-error';
        this.descriptionHelpBlock = 'Please enter a description for the opportunity.';
    }
}

export default alt.createStore(AddOpportunityStore);