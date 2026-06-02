import '@servicenow/sdk/global'
import { Flow, wfa, action, trigger } from '@servicenow/sdk/automation'

/**
 * Approval flow for bookings.
 * Triggers when a booking is created with booking_state = requested.
 * - If the bookable item has requires_approval = true, routes approval to
 *   the requester's manager. Approved -> booking_state = approved;
 *   Rejected -> booking_state = rejected (releases the slot).
 * - If requires_approval = false, auto-approves immediately.
 */
Flow(
  {
    $id: Now.ID['booking-approval-flow'],
    name: 'Booking Approval Flow',
    runAs: 'system'
  },
  wfa.trigger(
    trigger.record.created,
    { $id: Now.ID['booking_created_trigger'] },
    {
      table: 'x_2057715_equipmen_booking',
      condition: 'booking_state=requested',
      run_flow_in: 'background'
    }
  ),
  params => {
    // Look up the bookable item to check requires_approval
    const item = wfa.action(
      action.core.lookUpRecord,
      { $id: Now.ID['lookup_bookable_item'] },
      {
        table: 'x_2057715_equipmen_bookable_item',
        // @ts-ignore TS4111 - custom table fields come from index signature but dataPill requires dot access
        conditions: `sys_id=${wfa.dataPill(params.trigger.current.bookable_item, 'string')}`
      }
    )

    // If requires_approval is true, route to manager
    wfa.flowLogic.if(
      {
        $id: Now.ID['if_requires_approval'],
        condition: `${wfa.dataPill(item.record.requires_approval, 'boolean')}=true`
      },
      () => {
        // Look up the requester to get their manager
        const requester = wfa.action(
          action.core.lookUpRecord,
          { $id: Now.ID['lookup_requester'] },
          {
            table: 'sys_user',
            // @ts-ignore TS4111 - custom table fields come from index signature but dataPill requires dot access
            conditions: `sys_id=${wfa.dataPill(params.trigger.current.requested_for, 'string')}`
          }
        )

        // Request approval from the requester's manager
        const approval = wfa.action(
          action.core.askForApproval,
          { $id: Now.ID['request_manager_approval'] },
          {
            record: wfa.dataPill(params.trigger.current, 'reference'),
            table: 'x_2057715_equipmen_booking',
            approval_reason: 'High-value booking requires manager approval',
            approval_conditions: wfa.approvalRules({
              conditionType: 'OR',
              ruleSets: [
                {
                  action: 'ApprovesRejects',
                  conditionType: 'AND',
                  rules: [[{
                    ruleType: 'Any',
                    users: [wfa.dataPill(requester.record.manager, 'reference')],
                    groups: [],
                    manual: false
                  }]]
                }
              ]
            })
          }
        )

        // If approved, set booking_state to approved
        wfa.flowLogic.if(
          {
            $id: Now.ID['if_approved'],
            condition: `${wfa.dataPill(approval.approval_state, 'choice')}=approved`
          },
          () => {
            wfa.action(
              action.core.updateRecord,
              { $id: Now.ID['set_approved'] },
              {
                table_name: 'x_2057715_equipmen_booking',
                record: wfa.dataPill(params.trigger.current, 'reference'),
                values: TemplateValue({
                  booking_state: 'approved'
                })
              }
            )
          }
        )

        // If rejected, set booking_state to rejected
        wfa.flowLogic.if(
          {
            $id: Now.ID['if_rejected'],
            condition: `${wfa.dataPill(approval.approval_state, 'choice')}=rejected`
          },
          () => {
            wfa.action(
              action.core.updateRecord,
              { $id: Now.ID['set_rejected'] },
              {
                table_name: 'x_2057715_equipmen_booking',
                record: wfa.dataPill(params.trigger.current, 'reference'),
                values: TemplateValue({
                  booking_state: 'rejected'
                })
              }
            )
          }
        )
      }
    )

    // If no approval needed, auto-approve
    wfa.flowLogic.if(
      {
        $id: Now.ID['if_no_approval_needed'],
        condition: `${wfa.dataPill(item.record.requires_approval, 'boolean')}=false`
      },
      () => {
        wfa.action(
          action.core.updateRecord,
          { $id: Now.ID['auto_approve'] },
          {
            table_name: 'x_2057715_equipmen_booking',
            record: wfa.dataPill(params.trigger.current, 'reference'),
            values: TemplateValue({
              booking_state: 'approved'
            })
          }
        )
      }
    )
  }
)
