class CustomError {
    static createError({nombre = "Error", causa = "desconocido", mensaje, codigo}) {
        const error = new Error(mensaje)
        error.name = nombre
        error.causa = causa
        error.code = codigo

        throw error
    }
}

export default CustomError