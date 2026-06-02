(function executeRule(current, previous) {
    // Auto-require approval for boardrooms
    if (current.type == 'boardroom' && current.requires_approval != true) {
        current.requires_approval = true;
    }
})(current, previous)
