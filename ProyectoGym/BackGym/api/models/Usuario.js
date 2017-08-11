/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:"string"
    },
    sexo:{
      type:"string"
    } ,
    email:{
      type:"string"
    } ,
    edad:{
      type:"string"
    } ,
    ci:{
      type:"string"
    } ,
    somatotipo:{
      type:"string"
    } ,
    universidad:{
      type:"string"
    }, pais:{
      type:"string"
    }, ciudad:{
      type:"string"
    }

  }
};

