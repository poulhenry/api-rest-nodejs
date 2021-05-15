import { Request, Response } from 'express';

const categories = [];

class CategoriesController {
  index(request: Request, response: Response): Response {
    return response.json(categories);
  }

  store(request: Request, response: Response) {
    const { name, description } = request.body;

    categories.push({
      name,
      description,
    });

    return response.status(201).send();
  }
}

export default new CategoriesController();
