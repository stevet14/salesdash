/**
 * Created by stevet on 13/06/2016.
 */
import alt from '../alt';

class OpportunitiesActions {
    constructor() {
        this.generateActions(
            'getOpportunitiesSuccess',
            'getOpportunitiesFail'
        );
    }

    getOpportunities() {
            $.ajax({ url: '/api/opportunities'})
                .done((data) => {
                this.actions.getOpportunitiesSuccess(data);
        })
    .fail((jqXhr) => {
            this.actions.getOpportunitiesFail(jqXhr.responseJSON.message);
    });
}
}

export default alt.createActions(OpportunitiesActions);