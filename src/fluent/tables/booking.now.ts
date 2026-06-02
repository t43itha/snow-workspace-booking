import '@servicenow/sdk/global'
import { Table, ReferenceColumn, DateTimeColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_2057715_equipmen_booking = Table({
    name: 'x_2057715_equipmen_booking',
    label: 'Booking',
    extends: 'task',
    allowWebServiceAccess: true,
    schema: {
        bookable_item: ReferenceColumn({
            label: 'Bookable Item',
            referenceTable: 'x_2057715_equipmen_bookable_item',
            mandatory: true
        }),
        start_time: DateTimeColumn({
            label: 'Start Time',
            mandatory: true
        }),
        end_time: DateTimeColumn({
            label: 'End Time',
            mandatory: true
        }),
        requested_for: ReferenceColumn({
            label: 'Requested For',
            referenceTable: 'sys_user',
            mandatory: true
        }),
        booking_state: ChoiceColumn({
            label: 'Booking State',
            mandatory: true,
            default: 'requested',
            choices: {
                requested: { label: 'Requested' },
                approved: { label: 'Approved' },
                rejected: { label: 'Rejected' },
                cancelled: { label: 'Cancelled' }
            }
        })
    }
})
