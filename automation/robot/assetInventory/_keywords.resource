*** Setting ***
Resource    ../_keywords.resource
Resource    _variables.resource


*** Keywords ***
validate focus when pressed a keyboard
    [Arguments]    ${from}    ${keyboard}    ${to}=${from}
    Press Keys                       NONE    HOME
    Wait Until Element Is Visible    ${from}
    Click Element                    ${from}
    Press Keys                       NONE    ${keyboard}
    focus assertion by Browser       ${to}

focus assertion by Browser
    [Arguments]    ${locator}
    Run Keyword If                            '${BROWSER.lower()}'!='ie'
    ...   Element Should Be Focused           ${locator}
    ...   ELSE
    ...   Wait Until Page Contains Element    ${locator}\[class*=focused]
