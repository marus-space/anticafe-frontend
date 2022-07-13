import React from 'react';

import CostActionBar from './CostActionBar';
import CostTable from './CostTable';
import Section from '../../layouts/Section';
import classes from './CostSection.module.scss';

const CostSection: React.FC = () => {
    const routs = [
        {
            path: '/costs',
            title: 'Расходы',
            component:
                <>
                    <CostActionBar />
                    <CostTable />
                </>,
        },
    ];

    return(
        <div className={classes.component}>
            <Section routs={routs} />
        </div>
    );
};

export default CostSection;
