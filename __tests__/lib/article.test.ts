import { findOrCreateArticle } from '../../lib/article';
import { PrismaClient } from '@prisma/client';

jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    article: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  })),
}));

describe('findOrCreateArticle', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should find an existing article', async () => {
    const prisma = new PrismaClient();
    const url = 'https://example.com';
    const mockArticle = { id: 'cklv5cq600001i7rmn5repm1a', url };

    const findUniqueMock = prisma.article.findUnique as jest.Mock;
    findUniqueMock.mockResolvedValue(mockArticle);

    const article = await findOrCreateArticle(url, prisma);

    expect(article).toEqual(mockArticle);
    expect(prisma.article.findUnique).toHaveBeenCalledWith({ where: { url } });
  });

  it('should create a new article if not found', async () => {
    const prisma = new PrismaClient();
    const url = 'https://newarticle.com';
    const mockArticle = { id: 'cklv5cq600001i7rmn5repm1a', url };

    const findUniqueMock = prisma.article.findUnique as jest.Mock;
    findUniqueMock.mockResolvedValue(null);
    const createMock = prisma.article.create as jest.Mock;
    createMock.mockResolvedValue(mockArticle);  

    const article = await findOrCreateArticle(url, prisma);

    expect(article).toEqual(mockArticle);
    expect(prisma.article.findUnique).toHaveBeenCalledWith({ where: { url } });
    expect(prisma.article.create).toHaveBeenCalledWith({ data: { url } });
  });
});
