import { AppDataSource } from "../../../config/dataSource";
import { Url } from "../entities/Url";

export class UrlRepository {

  repository = AppDataSource.getRepository(Url);

  async create(data: Partial<Url>) {
    const url = this.repository.create(data);
    return this.repository.save(url);
  }

  async findByCode(code: string) {
    return this.repository.findOne({
      where: { shortCode: code }
    });
  }

  async save(url: Url) {
    return this.repository.save(url);
  }
}