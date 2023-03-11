import jwt from 'jsonwebtoken';

const llaveSecreta = 'miClaveSecreta';
export const autenticacionMiddleware = (request, response, next) => {
    try {
        const token = request.headers.authorization.split(' ')[1];   
        const descifrado = jwt.verify(token, llaveSecreta);
        request.datos = descifrado;
        next();           
    } catch (error) {
        return response.status(401).json({
          mensaje: 'Autenticación fallida'
        });
      }            
};
