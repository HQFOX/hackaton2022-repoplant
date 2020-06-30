*** Setting ***
Resource         _keywords.resource
Suite Setup      Run Keywords
...              Go To    ${URL}overview
...              AND    Set Window Size    1200    800
...              AND    Wait Until Element Is Visible    ${listViewButton}
...              AND    Click Button   ${listViewButton}
...              AND    wait until element is Visible    ${rows}
Test Template    validate focus when pressed a keyboard
Force Tags       keyboard
Documentation    https://www.w3.org/TR/wai-aria-practices/examples/grid/dataGrids.html
...              Not implemented: Page Up, Page Down, Control + Home, Control + End


*** Test Cases ***                   FROM              KEYBOARD      TO
focus ascending when pressed up      ${rows}${6th}     ARROW_UP      ${rows}${5th}
focus descending when pressed down   ${rows}${1st}     ARROW_DOWN    ${rows}${2nd}
focus first row when pressed home    ${rows}${last}    HOME          ${rows}${1st}
focus last when pressed arrow end    ${rows}${1st}     END           ${rows}${last}

# --- when focus does not move ---            FROM              KEYBOARD
keep focus when pressed up on first row       ${rows}${1st}     ARROW_UP
keep focus when pressed down on last row      ${rows}${last}    ARROW_DOWN
keep focus when pressed arrow right           ${rows}${1st}     ARROW_RIGHT
keep focus when pressed right on last row     ${rows}${last}    ARROW_RIGHT
keep focus when pressed arrow left            ${rows}${2nd}     ARROW_LEFT
keep focus when pressed left on first row     ${rows}${1st}     ARROW_LEFT


*** Variables ***
${1st}    :first-child
${2nd}    :nth-child(2)
${3rd}    :nth-child(3)
${4th}    :nth-child(4)
${5th}    :nth-child(5)
${6th}    :nth-child(6)
${last}   :last-child
