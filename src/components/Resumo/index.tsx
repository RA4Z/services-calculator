import { useEffect } from 'react';
import { Button, notification } from 'antd';
import './styles.css'

interface Props {
    search: boolean
    time: number
    setSearch: any
}

export default function Resumo({ time, search, setSearch }: Props) {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        const key = `notification-${time}`; // Cria uma chave única para cada notificação

        api.open({
            key: key, // Define a chave única
            message: 'Tempo de Serviço Calculado',
            description: (
                <p>O tempo total desse serviço é de {time} dias!</p>
            ),
            duration: 0,
            closeIcon: true,
            placement: 'topRight',
        });
    };

    useEffect(() => {
        if (time > 0) {
            openNotification();
            setSearch(false)
        }
    }, [time, search, setSearch]);

    return (
        <>
            {contextHolder} {/* Renderiza o contexto da notificação */}
            <Button
                type="primary"
                onClick={openNotification}
                style={{ display: 'none' }} />
        </>
    )
}