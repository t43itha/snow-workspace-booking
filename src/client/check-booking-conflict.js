function onSubmit() {
    var item = g_form.getValue('bookable_item')
    var startTime = g_form.getValue('start_time')
    var endTime = g_form.getValue('end_time')

    if (!item || !startTime || !endTime) {
        return true // Let server-side mandatory validation handle it
    }

    // Synchronous check for conflict before submission
    var ga = new GlideAjax('BookingConflictChecker')
    ga.addParam('sysparm_name', 'checkConflict')
    ga.addParam('sysparm_bookable_item', item)
    ga.addParam('sysparm_start_time', startTime)
    ga.addParam('sysparm_end_time', endTime)

    // Exclude current record on updates
    if (!g_form.isNewRecord()) {
        ga.addParam('sysparm_exclude', g_form.getUniqueValue())
    }

    var response = ga.getXMLWait()
    var answer = response.responseXML.documentElement.getAttribute('answer')
    var result = JSON.parse(answer)

    if (result.conflict) {
        g_form.addErrorMessage('Booking Conflict: ' + result.message)
        return false
    }

    return true
}
