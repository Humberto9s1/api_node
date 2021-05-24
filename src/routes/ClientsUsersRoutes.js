import { Router } from 'express';
import ClientsUsersController from '../controllers/ClientsUsersController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, ClientsUsersController.store);
// router.get('/', loginRequired, ClientsUsersController.index);
// router.get('/:id', loginRequired,ClientsUsersController.show);
router.put('/:id', loginRequired, ClientsUsersController.update);
router.delete('/:id', loginRequired, ClientsUsersController.delete);

export default router;

/**
 * Métodos de um Controller
 *
 *  index -> Lista todo os itens (usuários, produtos, carros, etcs) -> GET
 *  show -> Lista um item -> GET
 *  create -> Leva dados para serem usudos na view de criação -> GET
 *  store -> Salva os dados da view de Create no Banco -> POST
 *  edit -> Leva dados para serem usudos na view de edição -> GET
 *  update -> Atualiza os dados da view de edit no banco de dados ->PATCH OU PUT
 *  delete -> remove um registro do banco de dados -> DELETE
 */
