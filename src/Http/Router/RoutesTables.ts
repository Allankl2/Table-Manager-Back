import { Router,Application } from 'express';
import ControllerTables from '../Controller/ControllerTables';
import loginRiquired from "../../Middlewares/middlewares"

const router =  Router();

router.get('/',loginRiquired, ControllerTables);

export default router;
