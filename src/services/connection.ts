import axios from 'axios';

export async function registerCalculator(result: any) {
    const url = 'http://10.1.43.63:5000/SbcCalculator/Register';
    const data = {
        result: result,
    };
    await axios.post(url, data, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
}

export async function getServices() {
    try {
        const url = 'http://10.1.43.63:5000/SbcCalculator/Services/Display';
        const response = await axios.get(url, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        if (response.status === 200) {
            return response.data;
        } else {
            console.log(response.status)
            return []
        }
    } catch {
        console.log('Erro ao conectar com o servidor!')
        return []
    }
}

export async function getSpecials() {
    try {
        const url = 'http://10.1.43.63:5000/SbcCalculator/Specials/Display';
        const response = await axios.get(url, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        if (response.status === 200) {
            return response.data;
        } else {
            console.log(response.status)
            return []
        }
    } catch {
        console.log('Erro ao conectar com o servidor!')
        return []
    }
}
