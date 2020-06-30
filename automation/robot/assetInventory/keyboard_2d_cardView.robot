*** Setting ***
Resource         _keywords.resource
Suite Setup      Run Keywords
...              Go To    ${URL}overview
...              AND    Set Window Size    1200    800
...              AND    Wait Until Element Is Visible    ${cards}
Test Template    validate focus when pressed a keyboard
Force Tags       keyboard
Documentation    https://www.w3.org/TR/wai-aria-practices/examples/grid/dataGrids.html
...              Not implemented: Page Up, Page Down, Control + Home, Control + End


*** Test Cases ***                   FROM              KEYBOARD       TO
focus next when pressed right        ${cards}${1st}    ARROW_RIGHT    ${cards}${2nd}
focus previous when pressed left     ${cards}${2nd}    ARROW_LEFT     ${cards}${1st}
focus ascending when pressed up      ${cards}${5th}    ARROW_UP       ${cards}${2nd}
focus descending when pressed down   ${cards}${1st}    ARROW_DOWN     ${cards}${4th}
focus first when pressed home        ${cards}${last}   HOME           ${cards}${1st}
focus last when pressed end          ${cards}${1st}    END            ${cards}${last}

#--- when focus does not move ---                             FROM              TO
keep focus when pressed right on rightmost card in the row    ${cards}${3rd}    ARROW_RIGHT
keep focus when pressed left on leftmost card in the row      ${cards}${4th}    ARROW_LEFT
keep focus when pressed right on last                         ${cards}${last}   ARROW_RIGHT
keep focus when pressed left on first                         ${cards}${1st}    ARROW_LEFT
keep focus when pressed up on first                           ${cards}${1st}    ARROW_UP
keep focus when pressed down on last                          ${cards}${last}   ARROW_DOWN


*** Variables ***
${1st}    :first-child>div
${2nd}    :nth-child(2)>div
${3rd}    :nth-child(3)>div
${4th}    :nth-child(4)>div
${5th}    :nth-child(5)>div
${6th}    :nth-child(6)>div
${last}   :last-child>div
