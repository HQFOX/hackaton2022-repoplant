*** Settings ***
Library     SeleniumLibrary    timeout=15s    #version 4.5.0
Library     String
Variables   _variables.yaml
Variables   ../login/_variables.yaml

*** Keywords ***
Login and Navigate to Details
    Go To                           ${APPLICATION_URL}
    Clear Element Text              ${input_username}                        
    Clear Element Text              ${input_password}
    Input Text                      ${input_username}        admin          clear=True
    Input Text                      ${input_password}        password
    Click Button                    ${button_login}
    Wait Until Location Contains    overview
    Go To                           ${APPLICATION_URL}/${detailsPage}
    Wait Until Location Contains    details

Select Dropdown Value
    [Documentation]
    ...   Selects a dropdown value
    ...   Arguments:
    ...   - locator        
    ...   - value          
    [Arguments]        ${locator}    ${value}
    Click Element      ${locator}
    Wait Until Element Is Visible       css:ul[role='listbox']
    Click Element      css:li[role='option'][value='${value}']