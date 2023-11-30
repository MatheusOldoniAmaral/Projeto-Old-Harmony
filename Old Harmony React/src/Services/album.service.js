import axios from 'axios';

export class AlbumService {
    async findAll() {
        try {
            const response = await axios.get('http://191.234.204.68:5000/produtos');
            
            return response; 
        } catch (error) {
            throw error.response.data.message;
        }
    }

    async update(codigo, corpo) {
        await axios.put(`http://191.234.204.68:5000/produtos/${codigo}`, corpo);
        
    }

    async updateImage(codigo, formData) {
        await axios.put(`http://191.234.204.68:5000/produtos/${codigo}/capa`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}
