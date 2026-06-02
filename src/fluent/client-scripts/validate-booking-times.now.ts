import '@servicenow/sdk/global'
import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['validate-booking-times'],
    name: 'Validate Booking Times',
    table: 'x_2057715_equipmen_booking',
    type: 'onChange',
    field: 'end_time',
    script: Now.include('../../client/validate-booking-times.js'),
})
