function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) return

    var startTime = g_form.getValue('start_time')
    if (!startTime || !newValue) return

    if (newValue <= startTime) {
        g_form.showFieldMsg('end_time', 'End time must be after start time.', 'error')
    } else {
        g_form.hideFieldMsg('end_time')
    }
}
