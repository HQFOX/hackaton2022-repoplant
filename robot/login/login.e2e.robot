*** Setting ***
Resource      ../resource.robot
Variables     _variables.yaml
Test Teardown    Delete All Cookies

*** Test Cases ***
My Login application should login with valid credentials
    Go To                           ${APPLICATION_URL}
    Location Should Contain         login
    Clear Element Text              ${input_username}                        
    Clear Element Text              ${input_password}
    Input Text                      ${input_username}        admin          clear=True
    Input Text                      ${input_password}        password
    Click Button                    ${button_login}
    Wait Until Location Contains    overview



