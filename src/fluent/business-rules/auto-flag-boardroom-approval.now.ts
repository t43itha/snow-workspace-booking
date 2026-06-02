import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'

/**
 * Auto-sets requires_approval = true when a bookable item's type is 'boardroom'.
 * Ensures boardrooms always route through the approval flow without admin intervention.
 */
BusinessRule({
    $id: Now.ID['auto-flag-boardroom-approval'],
    name: 'Auto Flag Boardroom Approval',
    table: 'x_2057715_equipmen_bookable_item',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    filterCondition: 'type=boardroom',
    script: Now.include('../../server/business-rules/auto-flag-boardroom-approval.js'),
})
