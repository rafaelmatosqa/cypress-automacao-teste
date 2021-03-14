import { base_login_url} from '../../../fixtures/config';
const USERNAME_INPUT = '#user_login';
const PASSWORD_INPUT = '#user_password';
const SUBMIT_BUTTON = 'input[name="submit"]';
const ERROR_MESSAGE = '.alert-error';


class LoginPage {

    static visit() {
        cy.visit(base_login_url)
    }

    static fillUsername(name){
       cy.get(USERNAME_INPUT).type(name);
    }

    static fillPassword(password){
        cy.get(PASSWORD_INPUT).type(password);
     }

     static submit() {
         cy.get(SUBMIT_BUTTON).click();
     }

     static shouldShowErrorMessage(){
         cy.get(ERROR_MESSAGE).contains('Login and/or password are wrong.')

     }

}

export default LoginPage;