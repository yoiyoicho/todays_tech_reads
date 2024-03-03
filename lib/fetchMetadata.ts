import axios from 'axios';
import { load } from 'cheerio';

export async function fetchMetadata (url: string) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = load(html);

    const title = $('title').first().text();
    const description = $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content');
    const ogImage = $('meta[property="og:image"]').attr('content');

    return {
      ...(title && { title }),
      ...(description && { description }),
      ...(ogImage && { ogImage }),
    };
  } catch (error) {
    return { };
  }
}
