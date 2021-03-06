import { Router } from 'express';
import { CategoryRepository } from '../modules/cars/repositories/CategoryRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const routesCategory = Router();
const categoryRepository = new CategoryRepository();

routesCategory.get('/', (request, response) => {
  const categories = categoryRepository.list();

  return response.json(categories);
});

routesCategory.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoryRepository);
  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

export { routesCategory };
