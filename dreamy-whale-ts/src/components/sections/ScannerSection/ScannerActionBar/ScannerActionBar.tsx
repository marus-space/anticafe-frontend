import React from 'react';
import ActionBar from '../../../layouts/Section/ActionBar';
import classes from './ScannerActionBar.module.scss';

const ScannerActionBar: React.FC = () => (
    <div className={classes.component}>
        <ActionBar
            selectedItem={false}
            searchPlaceholder="Номер карты"
            actions={[]}
        />
    </div>
);

export default ScannerActionBar;
