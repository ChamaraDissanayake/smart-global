import axios from 'axios';
import { API_BASE_URL, BASE_URL } from '../utils/constants/base-url';
import { Insight } from '../utils/modals/Insight';

// Based on your console.log, the actual API response has a different structure
type ApiInsightResponse = {
    id: string;  // Changed from insightId to id
    category: string;
    video?: {
        title: string;
        thumbnail: string;
        url: string;
    };
    article?: {
        title: string;
        description: string;
        thumbnail: string;
        content: string;
        url: string;
        time?: number; // Added time as optional
    };
};

const transformInsightResponse = (response: ApiInsightResponse): Insight => ({
    id: response.id, // Now using response.id instead of response.insightId
    category: response.category,
    ...(response.video && {
        video: {
            title: response.video.title,
            thumbnail: response.video.thumbnail ? `${BASE_URL}/${response.video.thumbnail}` : '',
            url: response.video.url ? `${BASE_URL}/${response.video.url}` : ''
        }
    }),
    ...(response.article && {
        article: {
            title: response.article.title,
            description: response.article.description || '',
            thumbnail: response.article.thumbnail ? `${BASE_URL}/${response.article.thumbnail}` : '',
            content: response.article.content || '',
            time: response.article.time || 0,
            // Note: Your Insight type doesn't include url for article, but API returns it
            // You might want to add it to your Insight type if needed
        }
    })
});

export const fetchInsights = async (): Promise<Insight[]> => {
    try {
        const response = await axios.get<ApiInsightResponse[]>(`${API_BASE_URL}/insights`);
        return response.data.map(transformInsightResponse);
    } catch (error) {
        console.error('Error fetching insights:', error);
        throw new Error('Failed to fetch insights');
    }
};