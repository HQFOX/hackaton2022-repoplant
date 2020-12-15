*** Settings ***
Library     SeleniumLibrary    timeout=15s    #version 4.5.0
Library     String
Variables   _variables.yaml

*** Keywords ***
Open Browser Webdriver
    [Documentation]
    ...   Opens browser with blank page and window-size=1920,1080 (width,height),
    ...   by default,  runs on headless mode, except on IE which does not support it \n
    ...   Arguments:
    ...   - url        (by default about:blank)
    ...   - browser    (by defautl is assuming Global variable ${BROWSER} )
    [Arguments]        ${url}=about:blank    ${browser}=${BROWSER}
    Open Browser       ${url}    ${browser}    options=add_argument("--headless")
    # Average browser window size (https://css-tricks.com/screen-resolution-notequalto-browser-window/)
    Set Window Size    1366    784

Close Browser Webdriver
    Delete All Cookies
    Close Browser
