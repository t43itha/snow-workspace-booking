var BookingConflictChecker = Class.create()
BookingConflictChecker.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    /**
     * Client-callable method: checks if a booking conflicts with existing bookings.
     * Parameters (via GlideAjax):
     *   sysparm_bookable_item - sys_id of the bookable item
     *   sysparm_start_time    - proposed start (glide_date_time string)
     *   sysparm_end_time      - proposed end (glide_date_time string)
     *   sysparm_exclude       - (optional) sys_id of current booking to exclude
     * Returns JSON: { conflict: true/false, message: "..." }
     */
    checkConflict: function() {
        var itemId = this.getParameter('sysparm_bookable_item')
        var startTime = this.getParameter('sysparm_start_time')
        var endTime = this.getParameter('sysparm_end_time')
        var excludeId = this.getParameter('sysparm_exclude') || ''

        var result = this._hasOverlap(itemId, startTime, endTime, excludeId)
        return JSON.stringify(result)
    },

    /**
     * Direct server-side call (used by Business Rule).
     * Design decision: both 'requested' AND 'approved' bookings block the slot.
     * This prevents approval-window races where two users request the same
     * time window simultaneously. A rejected/cancelled booking releases the slot.
     */
    _hasOverlap: function(itemId, startTime, endTime, excludeId) {
        if (gs.nil(itemId) || gs.nil(startTime) || gs.nil(endTime)) {
            return { conflict: false, message: 'Missing required parameters.' }
        }

        var gr = new GlideRecord('x_2057715_equipmen_booking')
        gr.addQuery('bookable_item', itemId)
        gr.addQuery('booking_state', 'IN', 'requested,approved')
        // Overlap: existing.start < proposed.end AND existing.end > proposed.start
        gr.addQuery('start_time', '<', endTime)
        gr.addQuery('end_time', '>', startTime)
        if (excludeId) {
            gr.addQuery('sys_id', '!=', excludeId)
        }
        gr.query()

        if (gr.next()) {
            return {
                conflict: true,
                message: 'This item is already booked from ' +
                    gr.start_time.getDisplayValue() + ' to ' +
                    gr.end_time.getDisplayValue() + ' (Booking: ' + gr.number + ').'
            }
        }

        return { conflict: false, message: '' }
    },

    type: 'BookingConflictChecker'
})
