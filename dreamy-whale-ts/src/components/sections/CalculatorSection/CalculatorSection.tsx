import React from 'react';

import CalculatorForm from './CalculatorForm';
import Section from '../../layouts/Section';
import classes from './CalculatorSection.module.scss';

const CalculatorSection: React.FC = () => {
    const routs = [
        {
            path: '/calculator',
            title: 'Калькулятор стоимости посещений',
            component: <CalculatorForm />,
        },
    ];

    return (
        <div className={classes.component}>
            <Section routs={routs} />
        </div>
    );
};

export default CalculatorSection;
