import { Request, Response } from "express";
import { UrlService } from "../services/url-service";

export class UrlController {

  async shorten(req: Request, res: Response) {
    const { originalUrl } = req.body;

    const service = new UrlService();
    const url = await service.create(originalUrl);

    return res.json(url);
  }

  async redirect(req: Request, res: Response) {
    let code = req.params.code;
    if (Array.isArray(code)) {
      code = code[0];
    }
    const service = new UrlService();
    const url = await service.findByCode(code);
    return res.redirect(url.originalUrl);
  }
}