*** Settings ***
Library     SeleniumLibrary    timeout=15s    #version 4.3.0
Resource    _variables.resource

*** Keywords ***
open browser webdriver
    [Documentation]
    ...   Open the chosen browser on the storybook url provided with options: \n
    ...    - *window-size=1920,1080;  start-maximized;  headless*
    ...   Arguments:
    ...   - url        url address of storybook (by default about:blank)
    ...   - browser    the desired browser ( by defautl is assuming variable ${BROWSER} )
    [Arguments]    ${url}=about:blank    ${browser}=${BROWSER}
    Open Browser    ${url}    ${browser}
    ...             options=add_argument("--window-size=1920,1080");\ add_argument("--headless")
    Maximize Browser Window

Login into adoption
    Go To                            ${URL}
    wait Until Element Is Visible    css:button
    click Button                     Log in
    Wait Until Location Contains     overview
