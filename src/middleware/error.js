import { Errors } from "../services/errors/enum.js"

const handlerError = (error, req, res, next) => {
    console.log(error.causa)

    switch(error.code) {
        case Errors.RUTA_ERROR:
            res.send({status:"error", error: error.name})
            break

        case Errors.TIPO_INVALIDO:
            res.send({status:"error", error: error.name})
            break
        
        case Errors.BD_ERROR:
            res.send({status:"error", error: error.name})
            break
        
        case Errors.ACCESO_DENEGADO:
            res.send({status:"error", error: error.name})
            break

        case Errors.VALIDACION_FALLIDA:
            res.send({status:"error", error: error.name})
            break
        
        case Errors.RECURSO_NO_ENCONTRADO:
            res.send({status:"error", error: error.name})
            break   

        default:
            res.send({status:"error", error: error.name})
    }
}

export default handlerError