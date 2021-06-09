import { message } from 'antd';
import 'moment/locale/ru';

import classes from './ErrorMessage.module.scss';

const showErrorMessage = (errorMessage: string) => (
    message.error({
        content: errorMessage,
        style: { width: 'fit-content', margin: '80px 30px 0 80%' },
    })
);

export default showErrorMessage;
