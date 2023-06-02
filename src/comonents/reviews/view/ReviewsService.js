import { get } from '../../../services/httpService';

const getReviews = async () => get('/reviews');

export {
    getReviews
}