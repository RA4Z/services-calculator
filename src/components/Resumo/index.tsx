import { useEffect, useState } from 'react';
import { Button, notification } from 'antd';
import './styles.css'

interface Props {
    search: boolean
    time: number
    setSearch: any
}

export default function Resumo({ time, search, setSearch }: Props) {
    const [notificationOpen, setNotificationOpen] = useState(false);

    const openNotification = () => {
        if (!notificationOpen) {
            notification.open({
                message: 'Tempo de Serviço Calculado',
                description: (
                    <p>O tempo total desse serviço é de {time} dias!</p>
                ),
                duration: 7,
                closeIcon: null,
                placement: 'topRight',
                onClose: () => setNotificationOpen(false),
            });
            setNotificationOpen(true);
        }
    };

    useEffect(() => {
        if (time > 0) {
            openNotification();
            setSearch(false)
        }
    }, [time, search, setSearch])

    return (
        <Button
            type="primary"
            onClick={openNotification}
            style={{ display: 'none' }} />
    )
}