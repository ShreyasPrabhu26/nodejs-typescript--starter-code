import exppress from 'express';
import helloWorldController from '../controller/hellowWorldController';

const helloWorldRouter = exppress.Router();

helloWorldRouter.get('/', helloWorldController);

export default helloWorldRouter;