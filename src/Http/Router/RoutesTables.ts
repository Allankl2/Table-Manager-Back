import { Router } from 'express';
import ControllerTables from '../Controller/ControllerTables';
import loginRiquired from "../../Middlewares/middlewares"

const router =  Router();

router.get('/', ControllerTables.index);

export default router;
