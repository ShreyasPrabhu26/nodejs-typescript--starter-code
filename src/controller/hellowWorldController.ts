import { Request, Response } from 'express';

function helloWorldController(req: Request, res: Response): void {
    res.send('Hello, World!');
}

export default helloWorldController;