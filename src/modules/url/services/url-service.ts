import { UrlRepository } from '../repositories/url-repository';
import { Url } from '../entities/Url';
import { generateShortCode } from '../../../shared/utils/generateShortCode';


export class UrlService {

  async create(originalUrl: string) {

    const repository = new UrlRepository();

    const shortCode = generateShortCode();

    const url = await repository.create({
      originalUrl,
      shortCode
    });

    return url;
  }

  async findByCode(code: string) {

    const repository = new UrlRepository();

    const url = await repository.findByCode(code);

    if (!url) {
      throw new Error("URL not found");
    }

    url.clicks += 1;

    await repository.save(url);

    return url;
  }
}