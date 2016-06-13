/**
 * Created by stevet on 13/06/2016.
 */
import alt from '../alt';
import OpportunitiesActions from '../actions/OpportunitiesActions';

class OpportunitiesStore {
    constructor() {
        this.bindActions(OpportunitiesActions);
        this.opportunitiesValidationState = '';
        this.opportunitiesHelpBlock = '';
        this.opportunities = [];
    }

    onGetOpportunitiesSuccess(data) {
        this.opportunitiesValidationState = 'has-success';
        this.opportunitiesHelpBlock = '';
        this.opportunities = data;
        console.log("get oopo success");

    }

    onGetOpportunitiesFail(errorMessage) {
        this.opportunitiesValidationState = 'has-error';
        this.opportunitiesHelpBlock = errorMessage;
    }
}

export default alt.createStore(OpportunitiesStore);