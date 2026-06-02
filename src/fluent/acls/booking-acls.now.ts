import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'
import { employeeRole, workspaceAdminRole } from './bookable-item-acls.now'

// Booking ACLs
export const bookingRead = Acl({
    $id: Now.ID['booking_read_acl'],
    type: 'record',
    table: 'x_2057715_equipmen_booking',
    operation: 'read',
    roles: [employeeRole],
    script: `
    var isOwner = (current.requested_for == gs.getUserID());
    var isAdmin = gs.hasRole('x_2057715_equipmen.workspace_admin');
    var isManager = gs.hasRole('x_2057715_equipmen.manager');
    answer = isOwner || isAdmin || isManager;
    `,
    adminOverrides: true
})

export const bookingCreate = Acl({
    $id: Now.ID['booking_create_acl'],
    type: 'record',
    table: 'x_2057715_equipmen_booking',
    operation: 'create',
    roles: [employeeRole],
    adminOverrides: true
})

export const bookingWrite = Acl({
    $id: Now.ID['booking_write_acl'],
    type: 'record',
    table: 'x_2057715_equipmen_booking',
    operation: 'write',
    roles: [employeeRole],
    script: `
    var isOwner = (current.requested_for == gs.getUserID());
    var isAdmin = gs.hasRole('x_2057715_equipmen.workspace_admin');
    answer = isOwner || isAdmin;
    `,
    adminOverrides: true
})

export const bookingDelete = Acl({
    $id: Now.ID['booking_delete_acl'],
    type: 'record',
    table: 'x_2057715_equipmen_booking',
    operation: 'delete',
    roles: [workspaceAdminRole],
    adminOverrides: true
})
