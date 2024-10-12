const generateInfoError = (user) => {
    return `
            Los datos del usuario están incompletos o no son válidos.
            Revisar ya que se necesitan los siguientes datos:
            - Nombre: Se requiere un String, pero recibí ${user.name || "ninguno"}
            - Apellido: Se requiere un String, pero recibí ${user.last_name || "ninguno"}
            - Email: Se requiere un String, pero recibí ${user.email || "ninguno"}
            `
}

export default generateInfoError