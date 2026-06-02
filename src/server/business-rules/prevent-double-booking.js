(function executeRule(current, previous) {
    // Only check when relevant fields change or on insert
    if (current.operation() == 'update' &&
        !current.bookable_item.changes() &&
        !current.start_time.changes() &&
        !current.end_time.changes() &&
        !current.booking_state.changes()) {
        return
    }

    // Skip if booking is being cancelled or rejected
    if (current.booking_state == 'cancelled' || current.booking_state == 'rejected') {
        return
    }

    var checker = new BookingConflictChecker()
    var excludeId = current.operation() == 'update' ? current.sys_id.toString() : ''
    var result = checker._hasOverlap(
        current.bookable_item.toString(),
        current.start_time.toString(),
        current.end_time.toString(),
        excludeId
    )

    if (result.conflict) {
        current.setAbortAction(true)
        gs.addErrorMessage('Booking conflict: ' + result.message)
    }
})(current, previous)
