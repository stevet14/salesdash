/**
 * Created by stevet on 07/06/2016.
 */
import React from 'react';


class Home extends React.Component {
    render() {
        return (

            <div className="container">
                <h1>Bootstrap Table Examples <a href="https://github.com/wenzhixin/bootstrap-table-examples"
                                                class="btn btn-primary" role="button" target="_blank">Learn
                    more &raquo;</a></h1>

                <div id="toolbar">
                    <button id="remove" class="btn btn-danger" disabled>
                        <i class="glyphicon glyphicon-remove"></i> Delete
                    </button>
                </div>
                <table id="table"
                       data-toolbar="#toolbar"
                       data-search="true"
                       data-show-refresh="true"
                       data-show-toggle="true"
                       data-show-columns="true"
                       data-show-export="true"
                       data-detail-view="true"
                       data-detail-formatter="detailFormatter"
                       data-minimum-count-columns="2"
                       data-show-pagination-switch="true"
                       data-pagination="true"
                       data-id-field="id"
                       data-page-list="[10, 25, 50, 100, ALL]"
                       data-show-footer="false"
                       data-side-pagination="server"
                       data-url="http://issues.wenzhixin.net.cn/examples/bootstrap_table/data"
                       data-response-handler="responseHandler">
                </table>
            </div>

        );
    }
}

export default Home;