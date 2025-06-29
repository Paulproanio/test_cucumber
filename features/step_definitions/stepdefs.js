const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

  Given('inicio de sesión del sistema en la página de login', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'Muestra login';
         });

When('ingreso un nombre de usuario y contraseña válidos', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'Ingreso de credenciales';
});

Then('debo ser redirigido a la página principal del sistema', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'Ingreso al home del sistema';
});

Then('debo ver un mensaje de bienvenida', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'Bienvenido al sistema';
});