import '@servicenow/sdk/global'
import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['check-booking-conflict'],
    name: 'Check Booking Conflict on Submit',
    table: 'x_2057715_equipmen_booking',
    type: 'onSubmit',
    script: Now.include('../../client/check-booking-conflict.js'),
})
