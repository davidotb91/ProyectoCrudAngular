# ProyectoCrudAngular
Este proyecto fue elaborado con Sails  para el back end y Angular Para FrontEnd aplicando MVC
# BackGym
## Documentación importante para el desarollo
* Instalación de Sails
* Generación de API en Sails (modelo y controlador)
* Uso de Angular para el Front-Ent

## Comandos Importantes

### Instalar sailsjs

Sailsjs es un servidor web que se conecta a bases de datos y puede funcionar con aplicaciones en tiempo real, ayudandonos a crear REST APIs.

´´´
> npm install -g sails
´´´

El -g nos deja utilizarlo globalmente.

### Crear un proyecto en Sailsjs

´´´
> sails new NombreProyecto
´´´

### Levantar el servidor

´´´
> sails lift
´´´


´´´
> node app.js
´´´

El sails les pide opciones si no estan definidas, las opciones son:

- 1: SAFE MODE no se va a alterar la base de datos
- 2: ALTER MODE se va a alterar la base de datos si nosotros hicimos cambios en los modelos por ejemplo
- 3: DELETE MODE borra todos los datos de la base y vuelve a crear los modelos

## Servidor Web de Sailsjs

El servidor web de sails se encuentra localizado en la carpeta **assets**


## Generar API en Sailsjs
´´´
> Sails generate api NombreDeApi
´´´

#Instrucciones para la ejecución 
* En el directorio backgym digite sails lift 
* Luego en un navegador escriba la dirección http://localhost:1337/usuario



a [Sails](http://sailsjs.org) application

