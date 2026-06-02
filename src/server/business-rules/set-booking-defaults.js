(function executeRule(current, previous) {
    // Default requested_for to current user if not set
    if (gs.nil(current.requested_for)) {
        current.requested_for = gs.getUserID()
    }

    // Default booking_state to requested
    if (gs.nil(current.booking_state)) {
        current.booking_state = 'requested'
    }

    // Validate end_time is after start_time
    if (!gs.nil(current.start_time) && !gs.nil(current.end_time)) {
        var start = new GlideDateTime(current.start_time.toString())
        var end = new GlideDateTime(current.end_time.toString())
        if (end.compareTo(start) <= 0) {
            current.setAbortAction(true)
            gs.addErrorMessage('End time must be after start time.')
        }
    }
})(current, previous)
