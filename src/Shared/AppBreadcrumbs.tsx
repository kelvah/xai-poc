import React from 'react';
import withBreadcrumbs, {BreadcrumbsProps} from "react-router-breadcrumbs-hoc";
import {Breadcrumb, BreadcrumbItem} from "@patternfly/react-core";

type TAuditParams = { id: string };

const AuditDetailBreadcrumb = (breadcrumb: BreadcrumbsProps<TAuditParams>) => {
    const { match } = breadcrumb;
    return (
        <span>ID #{match.params.id} Decision Detail</span>
    )
};

// todo: move routes config somewhere and consolidate with routes declaration
const routes = [
    { path: "/", breadcrumb: "Monitoring" },
    { path: "/dashboard", breadcrumb: "Domain Monitoring Dashboard" },
    { path: "/op-dashboard", breadcrumb: "Operational Monitoring Dashboard" },
    { path: "/audit", breadcrumb: "Audit Investigation" },
    { path: "/audit/:executionType/:id/model-lookup", breadcrumb: "Model Lookup"},
    { path: "/audit/:executionType/:id/input-data", breadcrumb: "Input Data"},
    { path: "/audit/:executionType/:id", breadcrumb: AuditDetailBreadcrumb }
];
const excludePaths = [
    '/audit/:executionType'
];

const BreadcrumbList = withBreadcrumbs(routes, { excludePaths })(({ breadcrumbs }) => {
    return (
        <Breadcrumb>
            {breadcrumbs.map(({match, location, breadcrumb}) => {
                    return (
                        <BreadcrumbItem
                            to={`#${match.url}`}
                            key={match.url}
                            isActive={location.pathname === match.url}
                            >
                                {breadcrumb}
                        </BreadcrumbItem>
                    )
                }
            )}
        </Breadcrumb>
    )
});

const AppBreadcrumbs = (<BreadcrumbList/>);

export default AppBreadcrumbs;