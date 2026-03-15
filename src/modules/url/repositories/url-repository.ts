import { AppDataSource } from "../../../config/dataSource";
import { Url } from "../entities/Url";

const urlRepository = AppDataSource.getRepository(Url);

export class UrlRepository {
 async createUrl(originalUrl: string, shortCode: string): Promise<Url> {
    const url = urlRepository.create({ originalUrl, shortCode });
    return await urlRepository.save(url);
  }

  async findByShortCode(shortCode: string): Promise<Url | null> {
    return await urlRepository.findOneBy({ shortCode });
  }

  async incrementClicks(url: Url): Promise<void> {
    url.clicks += 1;
    await urlRepository.save(url);
  }
  async save(url: Url): Promise<Url> {
    return await urlRepository.save(url);
  }
}
