//la func recibe de param un user con mail y pass
export const login = async (usuario) => {
  try {
    //pedir la lista de usuario a json-server
    const respuesta = await fetch("http://localhost:3004/usuarios");
    const listaUsuarios = await respuesta.json();
    //buscar si el user q completo el form esta dentro de la lista de json-server
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    //preguntar si encontre el usuario
    if (usuarioBuscado) {
      // si encontre el user y el pass es correcto, esta todo ok
      if (usuarioBuscado.password === usuario.password) {
        console.log("todo esta perfecto");
        return usuarioBuscado
        }else{
            console.log('el pass es incorrecto')
            return null;
        }
      }
     else {
      //caso contrario, deberia indicar q mail y pass no son correctos, cartel de error
      console.log("el mail es incorrecto");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
