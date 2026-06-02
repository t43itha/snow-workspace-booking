import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

export const BookingConflictChecker = ScriptInclude({
    $id: Now.ID['BookingConflictChecker'],
    name: 'BookingConflictChecker',
    script: Now.include('../../server/script-includes/booking-conflict-checker.js'),
    description: 'Checks for overlapping bookings on the same bookable item. Client-callable via GlideAjax.',
    clientCallable: true,
    accessibleFrom: 'package_private',
})
