*** Setting ***
Test Timeout     4 minutes
Resource         resource.robot
Variables        _variables.yaml
Variables        ../_variables.yaml
Variables        ../login/_variables.yaml
Test Setup       Run Keywords
...              Login and Navigate to Details
...              AND    Wait Until Element Is Visible       ${table}
Test Teardown    Delete All Cookies

*** Test Cases ***
Table: checkboxes are selected when checkbox all is selected
    Select Dropdown Value                   ${pageSizeDropdown}                            20     
    Click Element                           ${bulkActionCheckBox}
    Element Text Should Be                  ${bulkActionsSelectAllLabel}                   13 / 13      
    @{checkedLines}=    Get WebElements     ${rowsSelected}
    Length Should Be                        ${checkedLines}                                13
    Checkbox Should be selected             ${bulkActionCheckBox}

Table: parent checkbox are indeterminate when any checkbox is selected
    Element Attribute Value Should Be       ${bulkActionCheckBox}    data-indeterminate    false    
    Select Checkbox                         ${row1CheckBox}
    Element Text Should Be                  ${bulkActionsSelectAllLabel}                   1 / 13      
    @{checkedLines}=    Get WebElements     ${rowsSelected}
    Length Should Be                        ${checkedLines}                                1
    Element Attribute Value Should Be       ${bulkActionCheckBox}    data-indeterminate    true

Table: checkboxes are selected when select all button is clicked
    Select Checkbox                         ${row1CheckBox}
    Wait Until Page Contains                Select all
    Click Button                            Select all 13 items across all pages
    Element Text Should Be                  ${bulkActionsSelectAllLabel}                   13 / 13
    @{checkedLines}=    Get WebElements     ${rowsSelected}                                
    Length Should Be                        ${checkedLines}                                10
    checkbox Should Be Selected             ${bulkActionCheckBox}

Table: checkboxes are selected when they are selected one by one
    Click Element                           ${bulkActionCheckBox}
    Click Button                            ${paginationNextPage}
    Select Checkbox                         ${row1CheckBox}
    Select Checkbox                         ${row2CheckBox}
    Select Checkbox                         ${row3CheckBox}
    Element Text Should Be                  ${bulkActionsSelectAllLabel}                   13 / 13
    @{checkedLines}=    Get WebElements     ${rowsSelected}                                
    Length Should Be                        ${checkedLines}                                3
    Checkbox Should be selected             ${bulkActionCheckBox}
