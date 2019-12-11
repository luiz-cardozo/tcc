import { Router } from 'express';

// import UserController from './app/controllers/UserController';
// import SessionController from './app/controllers/SessionController';
// import FileController from './app/controllers/FileController';
// import ProviderController from './app/controllers/ProviderController';
// import ScheduleController from './app/controllers/ScheduleController';
// import NotificationController from './app/controllers/NotificationController';
// import AvailableController from './app/controllers/AvailableController';

// import AppointmentController from './app/controllers/AppointmentController';

// import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json('Hello');
});

/**
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);
routes.delete('/appointments/:id', AppointmentController.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

*/
export default routes;
