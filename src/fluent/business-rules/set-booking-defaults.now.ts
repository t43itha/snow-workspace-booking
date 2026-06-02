import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['set-booking-defaults'],
    name: 'Set Booking Defaults',
    table: 'x_2057715_equipmen_booking',
    when: 'before',
    action: ['insert'],
    order: 50,
    script: Now.include('../../server/business-rules/set-booking-defaults.js'),
})
