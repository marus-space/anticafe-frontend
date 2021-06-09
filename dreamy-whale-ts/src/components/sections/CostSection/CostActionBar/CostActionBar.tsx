import React from 'react';
import ActionBar from '../../../layouts/Section/ActionBar';
import classes from './CostActionBar.module.scss';

const CostActionBar: React.FC = (props) => (
    <ActionBar
        selectedItem={false}
        searchPlaceholder="Имя клиента"
        actions={[]}
    />
);

export default CostActionBar;
