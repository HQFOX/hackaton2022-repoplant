*** Setting ***
Resource         ../_keywords.resource
Resource         _variables.resource
Suite Setup      Delete All Cookies
Test Setup       Run Keywords
...              Go To    ${URL}
...              AND    wait Until Element Is Visible    css:button
Test Teardown    Delete All Cookies


*** Test Cases ***
access adoption app when pressed Log in
    click Button                     Log in
    Wait Until Location Contains     overview

check and uncheck remember me checkbox when her label is clicked
    Checkbox Should Not Be Selected    ${checkbox_remember}
    Click Element                      ${label_remember}
    Checkbox Should Be Selected        ${checkbox_remember}
    Click Element                      ${label_remember}
    Checkbox Should Not Be Selected    ${checkbox_remember}

show recovery form when Forgot your credentials button is pressed
    Wait Until Element Is Enabled    ${input_username}
    Page Should Not Contain          Recover Credentials
    Click Button                     Forgot your credentials?
    Wait Until Page Contains         Recover Credentials

show sent message and return to welcome login form when recovery button is pressed
    Wait Until Element Is Enabled       ${input_username}
    Click Button                        Forgot your credentials?
    Wait Until Page Contains            Recover Credentials
    Click Button                        Recover
    Wait Until Page Contains            instructions to recover your credentials were sent.
    Wait Until Page Does Not Contain    Recover Credentials
    Page Should Contain                 Forgot your credentials?

return to welcome login form when cancel button is pressed on recovery form
    Wait Until Element Is Enabled       ${input_username}
    Click Button                        Forgot your credentials?
    Wait Until Page Contains            Recover Credentials
    Click Button                        Cancel
    Wait Until Page Does Not Contain    Recover Credentials
    Page Should Contain                 Forgot your credentials?
