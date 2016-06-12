/**
 * Created by stevet on 12/06/2016.
 */
import alt from '../alt';

class AddOpportunityActions {
    constructor() {
        this.generateActions(
            'addOpportunitySuccess',
            'addOpportunityFail',
            'updateProspect',
            'updateDescription',
            'invalidProspect',
            'invalidDescription'
        );
    }

    addOpportunity(prospect, description) {
        $.ajax({
            type: 'POST',
            url: '/api/opportunities',
            data: { prospect: prospect, description: description }
        })
            .done((data) => {
            this.actions.addOpportunitySuccess(data.message);
    })
.fail((jqXhr) => {
        this.actions.addOpportunityFail(jqXhr.responseJSON.message);
});
}
}

export default alt.createActions(AddOpportunityActions);