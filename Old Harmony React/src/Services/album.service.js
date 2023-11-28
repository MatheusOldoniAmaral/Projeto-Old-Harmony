import axios from 'axios';

export class AlbumService {
    findAll() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get('http://191.234.204.68:5000/produtos');
                resolve(response.data);
            } catch (error) {
                reject(error.response.data.message);
            }
        });
    }

    update(codigo, corpo) {
        return new Promise(async () => {
            await axios.put(`http://191.234.204.68:5000/produtos/${codigo}`, corpo);
        });
    }

    updateImage(codigo, formData) {
        return new Promise(async () => {
            await axios.put(`http://191.234.204.68:5000/produtos/${codigo}/capa`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        });
    }
}
