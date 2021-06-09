import { message } from 'antd';
import 'moment/locale/ru';

const showSuccessMessage = (successMessage: string) => (
    message.success({
        content: successMessage,
        style: { width: 'fit-content', margin: '80px 30px 0 80%' },
        key: successMessage,
    })
);

export default showSuccessMessage;
