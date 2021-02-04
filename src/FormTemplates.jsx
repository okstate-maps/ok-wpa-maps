const editThisAction = {
    title: 'Edit feature',
    id: 'edit-this',
    className: 'esri-icon-edit'
};

const thisLooksOkAction = {
    title: 'Looks good!',
    id: 'this-looks-ok',
    className: 'esri-icon-check-mark'
};

export const CreateFormTemplate = {
        title: 'Land Info',
        elements: [{ // Autocasts to new GroupElement
          type: 'group',
          label: 'Owner Information',
          elements: [
              {
                type: 'field',
                fieldName: 'OwnerLastName',
                label: 'Owner\'s Last Name (if an individual)'
              },

              {
                type: 'field',
                fieldName: 'OwnerFirstNameAndMI',
                label: 'Owner\'s First Name or initials (if an individual)'
              },   
              {
                type: 'field',
                fieldName: 'OwnerOrgName',
                label: 'Owner (if an entity or organization)'
              }
          ]
        },

        { // Autocasts to new GroupElement
          type: 'group',
          label: 'Land and Improvement Valuation',
          elements: [
             {
                type: 'field',
                fieldName: 'LandValue',
                label: 'Land Value'
              },
              {
                type: 'field',
                fieldName: 'ImprovementsValue2',
                label: 'Improvements Value'
              },
          ]
        },
           {
                type: 'field',
                fieldName: 'TaxExempt',
                label: 'Marked with an X?'
              }
        ]
      }


export const ReviewFormTemplate = {
    title: 'Please doublecheck the info below.',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'OwnerLastName',
            label: 'Owner\'s Last Name (if an individual)'
          },

          {
            fieldName: 'OwnerFirstNameAndMI',
            label: 'Owner\'s First Name or initials (if an individual)'
          },   
          {
            fieldName: 'OwnerOrgName',
            label: 'Owner (if an entity or organization)'
          },
          {
            fieldName: 'LandValue',
            label: 'Land Value'
          },
          {
            fieldName: 'ImprovementsValue2',
            label: 'Improvements Value'
          },
          {
            fieldName: 'TaxExempt',
            label: 'Marked with an X?'
          }
        ]
      }
    ],
    //overwriteActions: true,
    actions: [thisLooksOkAction, editThisAction]
}



export default CreateFormTemplate;