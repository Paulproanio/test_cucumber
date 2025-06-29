#Ejercicio cubumber Paúl Proaño
Feature: Login de ingreso a un sistema, como usuario del sistema deseo ingresar al sistema por medio de el login de inicio de sesion.

Scenario: Ingreso al sistema 
    Given inicio de sesión del sistema en la página de login
    When  ingreso un nombre de usuario y contraseña válidos
    Then  debo ser redirigido a la página principal del sistema
     And  debo ver un mensaje de bienvenida