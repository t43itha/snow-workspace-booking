import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'

/**
 * Fires on insert/update of bookings in active states (requested or approved).
 * Slot-blocking includes 'requested' to prevent approval-window races.
 */
BusinessRule({
    $id: Now.ID['prevent-double-booking'],
    name: 'Prevent Double Booking',
    table: 'x_2057715_equipmen_booking',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    filterCondition: 'booking_state=requested^ORbooking_state=approved',
    script: Now.include('../../server/business-rules/prevent-double-booking.js'),
})
