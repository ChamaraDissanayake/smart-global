import axios from 'axios';
import { Insight } from '../utils/types/Insight';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const BASE_URL = import.meta.env.VITE_BASE_URL;

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
            thumbnail: response.video.thumbnail?.startsWith('uploads')
                ? `${BASE_URL}/${response.video.thumbnail}`
                : response.video.thumbnail || '',
            url: response.video.url?.startsWith('uploads')
                ? `${BASE_URL}/${response.video.url}`
                : response.video.url || '',
        }
    }),
    ...(response.article && {
        article: {
            title: response.article.title,
            description: response.article.description || '',
            thumbnail: response.article.thumbnail?.startsWith('uploads')
                ? `${BASE_URL}/${response.article.thumbnail}`
                : response.article.thumbnail || '',
            content: response.article.content || '',
            time: response.article.time || 0,
        }
    })
});


export const fetchInsights = async (params?: { page?: number; limit?: number }): Promise<{ data: Insight[]; total: number }> => {
    try {
        const { page = 1, limit = 10 } = params || {};
        const response = await axios.get<{ insights: ApiInsightResponse[]; pagination: { total: number } }>(
            `${API_BASE_URL}/insights`, { params: { page, limit } }
        );

        return {
            data: response.data.insights.map(transformInsightResponse),
            total: response.data.pagination.total
        };
    } catch (error) {
        console.error('Error fetching insights:', error);
        throw new Error('Failed to fetch insights');
    }
};