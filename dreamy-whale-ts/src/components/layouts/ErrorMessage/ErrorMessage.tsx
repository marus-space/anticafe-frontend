import { message } from 'antd';
import 'moment/locale/ru';

const showErrorMessage = (errorMessage: any) => (
    message.error({
        content: errorMessage,
        style: { width: 'fit-content', margin: '80px 30px 0 80%' },
        key: errorMessage,
    })
);

export default showErrorMessage;
