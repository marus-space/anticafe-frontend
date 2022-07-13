import React from 'react';
import ActionBar from '../../../layouts/Section/ActionBar';
import classes from './CostActionBar.module.scss';

const CostActionBar: React.FC = (props) => (
    <div className={classes.component}>
        <ActionBar
            selectedItem={false}
            searchPlaceholder="Имя клиента"
            actions={[]}
        />
    </div>    
);

export default CostActionBar;
