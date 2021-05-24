import jwt from 'jsonwebtoken';
import ClientsUsers from '../models/ClientsUsers';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['credenciais invalidas'],
      });
    }
    const clientsUsers = await ClientsUsers.findOne({ where: { email } });
    if (!clientsUsers) {
      return res.status(401).json({
        errors: ['Usuário não Existe'],
      });
    }

    if (!(await clientsUsers.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha Inválida'],
      });
    }

    const { id } = clientsUsers;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
