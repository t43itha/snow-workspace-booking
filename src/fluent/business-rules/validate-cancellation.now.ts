import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'

/**
 * Validates cancellation requests:
 * - Only the booking owner or a workspace_admin may cancel.
 * - Cannot cancel already-rejected or already-cancelled bookings.
 * Runs before update so the abort prevents the save.
 */
BusinessRule({
    $id: Now.ID['validate-cancellation'],
    name: 'Validate Booking Cancellation',
    table: 'x_2057715_equipmen_booking',
    when: 'before',
    action: ['update'],
    order: 200,
    filterCondition: 'booking_state=cancelled',
    script: Now.include('../../server/business-rules/validate-cancellation.js'),
})
