import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function ConfusionBreadcrumb(props) {
    return (
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to={`/${props.parent}`}>{props.parent}</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{props.active}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.active}</h3>
                <hr />
            </div>
        </div>
    );
}

export default ConfusionBreadcrumb;