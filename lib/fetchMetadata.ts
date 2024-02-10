import axios from 'axios';
import cheerio from 'cheerio';

export async function fetchMetadata (url: string) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const title = $('title').text();
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
