(function executeRule(current, previous) {
    // Only process state changes to 'cancelled'
    if (!current.booking_state.changes() || current.booking_state != 'cancelled') {
        return
    }

    var userId = gs.getUserID()
    var isOwner = (current.requested_for.toString() == userId)
    var isAdmin = gs.hasRole('x_2057715_equipmen.workspace_admin')

    // Only the booking owner or a workspace admin may cancel
    if (!isOwner && !isAdmin) {
        current.setAbortAction(true)
        gs.addErrorMessage('You can only cancel your own bookings.')
        return
    }

    // Cannot cancel a booking that is already rejected or cancelled
    if (previous.booking_state == 'rejected' || previous.booking_state == 'cancelled') {
        current.setAbortAction(true)
        gs.addErrorMessage('This booking is already ' + previous.booking_state + '.')
    }
})(current, previous)
