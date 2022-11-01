//--- JSON ---//
/** Javascript Objet Notatin
Es un formato de intercambio de archivos
Es utilizado para crear las API Rest
Es usado en bases de datos

¿Que es JSON?
Estab basado en un tipo de dato de javascript, en objetos
Es un formato lijero de untercambio de datos
Cuando nosotros pedimos datos a un servidor, este formatea los datos a formato JSON
JSON funciona con cualquier lenguaje de programacion

Tipos de datos
JSON tiene sus propios tipos de datos
- Numbers
- strings "Caracteres"
- Boolean t o f
- Arrays listas ordenadas
- objetos datos representados por clave valor
- Null datos que no estan disponibles o no existen

Reglas

- Par clave valor
name: "Santiago"
phone: 1126608939
age: 24

- Las claves van entre dobles comillas
"name": "Santiago"
"phone": 1126608939
"age": 24

- Todas las clases creadas siempre tienen que tener un valor

- Todos los pares clave valor van entre llaves
{
"name": "Santiago"
"phone": 1126608939
"age": 24
}

- Para separar todos los pares clave valor debemos usar comas
{
"name": "Santiago",
"phone": 1126608939,
"age": 24
}

- El ultimo elemento nunca debe llevar coma

- En json puedo colocar un objeto
{
"name": "Santiago"
"phone": 1126608939,
"adress": {
    city: "Buenos Aires"
    street: "Calle falsa 123"
}
"age": 24
}

- Los archivos JSON siempre deben terminar con la extencion .json

- Cuando enviamos informacion de un sistema a otro por lo general le damos informacion al otro sistema de que dato le estamos dando
*/

/** Mini aplicacion web */
/** Objeto en JavaScript */
const user = {
    "name": "Santiago",
    "lastname": "Quiroz",
    "age": 24,
    "hobbies":["correr", "nadar", "programar"],
    "adress":{
        "city": "Buenos Aires",
        "street": "calle falsa 123"
    },
    "married": false
}

console.log(user)
/** Convercion del objeto javascript a JSON */
console.log(JSON.stringify(user))