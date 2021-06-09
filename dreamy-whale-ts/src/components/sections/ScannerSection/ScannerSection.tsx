import React from 'react';

import ScannerActionBar from './ScannerActionBar';
import ScannerTable from './ScannerTable';
import Section from '../../layouts/Section';
import classes from './ScannerSection.module.scss';

const ScannerSection: React.FC = () => {
    const routs = [
        {
            path: '/scanner',
            title: 'Записи со сканера',
            component: 
                <>
                    <ScannerActionBar />
                    <ScannerTable />
                </>,
        },
    ];

    return(
        <div className={classes.component}>
            <Section routs={routs} />
        </div>
    );
};

export default ScannerSection;
