deploy: https://pf-viajes-final.herokuapp.com

                                                   RUTAS:

-change: cambia el rol de un usario a administrador o viceversa

-login: verifica datos de login al mismo tiempo de usuarios y admins

-admin:...

-users:...

-flights: muestra en tiempo real los vuelos que estan a punto de salir en el dia, incluye:
\_destino = ........................destination
\_aeropuerto = .....................airport
\_numero de vuelo = ................flightID (number)
\_horario de partida = .............departs
\_estado si esta retrasado = .......status
\_puerto de embarque = .............gate
\_fecha = ..........................date

-flights2: muestra en tiempo real los vuelos que estan en el aire y donde van a aterrizar, contiene los mismos datos que flights

-flightsAvailable:muestra la lista de vuelos programados, incluye:
\_origen = .........................origin
\_destino = ........................destination
\_imagen del destino = .............img
\_aeropuerto de salida = ...........airport
\_numero de vuelo = ................flightID (number)
\_horario de partida = .............departs
\_estado si esta retrasado = .......status
\_sala de embarque = ...............gate
\_fecha de salida = ................date
\_precio de usuario turista = ......price (number)
\_precio de primera clase = ........firstclase (number)
\_numero de asientos disponibles = .seating (number)
\_duracion de vuelo = ..............duration (number)
(datos provistos al azar, ante irregularidades se los puede modificar directamente de la carpeta /database/fligthAvailable
o mediante el uso de un put)

                                                         METODOS:

Todos los metodos de peticion se usan de la misma forma (salvo excepciones), en caso de algun error se enviara los detalles por respuesta (lista de rutas en /routes)

-GET: solo devuelve la info en un array, puede que algunas como users y admin esten vacias, habra que crearlas mediante un post

-POST: para crear solo habra que enviar la info requerida por el body como objeto, no se puede omitir ninguno de los datos de documento o no se creara. Visitar carpeta /models para ver la estructura de datos

-PUT: enviar el id por params, y la info a modificar por body como objeto, no hace falta que esten todos los datos, se puede enviar solo la parte a modificar

-DELETE: solo id por params

                                                  METODOS EXCEPCIONES:

Todas las contraseñas estan hasheadas por lo que la validacion de login solo se hara desde el back:

-GET(/login): debe enviarse por body los datos de ingreso como un objeto, de acuerdo a la respuesta podran redireccionar si es admin o usuario, y en caso de error mostrarlo:
\_datos de admin correctos= ...........'admin'
\_datos de user correctos = ...........'user'
\_name incorrecto = ...................'Invalid User'
\_name correcto/password incorrecta = .'Invalid Password'
