*** Setting ***
Resource       _keywords.resource
Suite Setup    Run Keywords
...            Go To    ${URL}overview
...            AND    Set Window Size    1200    800
...            AND    Wait Until Element Is Visible    ${cards}
Test Teardown    Run Keywords
...              Double Click Element    ${searchBox}
...              AND   Press Keys    NONE    DELETE

*** Test Cases ***
filter cards when search box have text
    Page Should Contain Element    ${cards}        limit=20
    Press Keys                     ${searchBox}    17
    Page Should Contain Element    ${cards}        limit=1

hide all cards when search does not return data
    Press Keys                           ${searchBox}      João
    Wait Until Element Is Not Visible    ${cards}

show all results when user delete search text
    Press Keys                     ${searchBox}    17
    Page Should Contain Element    ${cards}        limit=1
    Press Keys                     ${searchBox}    BACKSPACE    BACKSPACE
    Page Should Contain Element    ${cards}        limit=20
