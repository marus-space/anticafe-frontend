import React from 'react';
import ActionBar from '../../../layouts/Section/ActionBar';
import classes from './ScannerActionBar.module.scss';

const ScannerActionBar: React.FC = () => (
    <ActionBar
        selectedItem={false}
        searchPlaceholder="Номер карты"
        actions={[]}
    />
);

export default ScannerActionBar;
