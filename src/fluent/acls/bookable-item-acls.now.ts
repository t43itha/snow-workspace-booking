import '@servicenow/sdk/global'
import { Acl, Role } from '@servicenow/sdk/core'

// Define app roles
export const employeeRole = Role({
    $id: Now.ID['employee_role'],
    name: 'x_2057715_equipmen.employee'
})

export const workspaceAdminRole = Role({
    $id: Now.ID['workspace_admin_role'],
    name: 'x_2057715_equipmen.workspace_admin',
    containsRoles: [employeeRole]
})

export const managerRole = Role({
    $id: Now.ID['manager_role'],
    name: 'x_2057715_equipmen.manager'
})

// Bookable Item ACLs
export const bookableItemRead = Acl({
    $id: Now.ID['bookable_item_read_acl'],
    type: 'record',
    table: 'x_2057715_equipmen_bookable_item',
    operation: 'read',
    roles: [employeeRole],
    script: `
    // Workspace admins see all items; others see only active
    if (gs.hasRole('x_2057715_equipmen.workspace_admin')) {
        answer = true;
    } else {
        answer = (current.active == true);
    }
    `,
    adminOverrides: true
})

export const bookableItemCreate = Acl({
    $id: Now.ID['bookable_item_create_acl'],
    type: 'record',
    table: 'x_2057715_equipmen_bookable_item',
    operation: 'create',
    roles: [workspaceAdminRole],
    adminOverrides: true
})

export const bookableItemWrite = Acl({
    $id: Now.ID['bookable_item_write_acl'],
    type: 'record',
    table: 'x_2057715_equipmen_bookable_item',
    operation: 'write',
    roles: [workspaceAdminRole],
    adminOverrides: true
})

export const bookableItemDelete = Acl({
    $id: Now.ID['bookable_item_delete_acl'],
    type: 'record',
    table: 'x_2057715_equipmen_bookable_item',
    operation: 'delete',
    roles: [workspaceAdminRole],
    adminOverrides: true
})
