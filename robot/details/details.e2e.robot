*** Setting ***
Resource         resource.robot
Variables        _variables.yaml
Variables        ../_variables.yaml
Variables        ../login/_variables.yaml
Test Setup       Login and Navigate to Details
Test Teardown    Delete All Cookies

*** Test Cases ***
Table: checkboxes are selected when checkbox all is selected
    Go To                               ${APPLICATION_URL}/${detailsPage}
    Wait Until Location Contains        details
    Wait Until Element Is Visible       css:div[class*='HvPagination-pageSizeOptionsSelect']
    Select Dropdown Value               css:div[class*='HvPagination-pageSizeOptionsSelect']    20
    Click Element                       css:.HvBulkActions-root input[type='checkbox']
    Element Text Should Be              id:table-select-all-select-label                        13 / 13      
    Checkbox Should be selected         css:.HvBulkActions-root input[type='checkbox']
    @{checkedLines}=    Get WebElements    css:div.HvTable-tr[aria-selected=true]
    Length Should Be    ${checkedLines}    13
