import { get } from '../../services/httpService';

const getUsers = async () => get('/users');

export {
    getUsers
}