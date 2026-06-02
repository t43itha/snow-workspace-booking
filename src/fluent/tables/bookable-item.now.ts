import '@servicenow/sdk/global'
import { Table, StringColumn, ChoiceColumn, ReferenceColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_2057715_equipmen_bookable_item = Table({
    name: 'x_2057715_equipmen_bookable_item',
    label: 'Bookable Item',
    extends: 'cmdb_ci',
    allowWebServiceAccess: true,
    schema: {
        name: StringColumn({
            label: 'Name',
            maxLength: 100,
            mandatory: true
        }),
        type: ChoiceColumn({
            label: 'Type',
            mandatory: true,
            choices: {
                desk: { label: 'Desk' },
                laptop: { label: 'Laptop' },
                conference_room: { label: 'Conference Room' },
                boardroom: { label: 'Boardroom' }
            }
        }),
        location: ReferenceColumn({
            label: 'Location',
            referenceTable: 'cmn_location'
        }),
        requires_approval: BooleanColumn({
            label: 'Requires Approval',
            default: false
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true
        })
    }
})
