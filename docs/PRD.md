# PRD — Office Equipment & Workspace Booker

## Purpose
A ServiceNow scoped application that replaces messy spreadsheets used to track
desk bookings, loaner laptops, and conference/boardroom reservations. Employees
book bookable items for a time window; the system prevents double-booking and
routes high-value bookings (e.g. premium boardrooms) to a manager for approval.

---

## v1 Scope (current release)

### Users and roles
| Role | Scope name | Capabilities |
|------|-----------|--------------|
| Employee | `x_2057715_equipmen.employee` | Browse active bookable items; create bookings for self; cancel own bookings |
| Workspace Admin | `x_2057715_equipmen.workspace_admin` | CRUD bookable items; view/cancel any booking; override conflicts |
| Manager | `x_2057715_equipmen.manager` | Approve/reject high-value booking requests routed via Flow Designer |

### Key tables and fields
- **Bookable Item** (`x_2057715_equipmen_bookable_item`, extends `cmdb_ci`)
  - `name` (string, mandatory), `type` (choice: desk, laptop, conference_room,
    boardroom), `location` (reference → `cmn_location`),
    `requires_approval` (boolean, default false), `active` (boolean, default true).
- **Booking** (`x_2057715_equipmen_booking`, extends `task`)
  - `bookable_item` (reference → Bookable Item, mandatory),
    `start_time` (glide_date_time, mandatory),
    `end_time` (glide_date_time, mandatory),
    `requested_for` (reference → `sys_user`, mandatory),
    `booking_state` (choice: requested, approved, rejected, cancelled;
    default: requested).

### Business rules / logic

#### No double-booking
- A **Script Include** (`BookingConflictChecker`) detects overlapping bookings
  for the same `bookable_item`.
- Overlap check includes both `requested` and `approved` states — a booking
  reserves the slot immediately upon creation, even before manager approval.
  This prevents races where two people request the same boardroom simultaneously.
- Enforced server-side by a before-insert/update Business Rule.
- Surfaced client-side via GlideAjax `onSubmit` check before form submission.

#### Approval routing
- A **Flow Designer flow** triggers on booking insert when the target item has
  `requires_approval = true`.
- The flow looks up the requester's manager (`sys_user.manager`) and routes an
  approval request.
- On approval → `booking_state` becomes `approved`.
- On rejection → `booking_state` becomes `rejected` (slot is released).
- Items without `requires_approval` are auto-approved immediately by the flow.

#### Cancellation
- An employee may cancel their own booking (sets `booking_state = cancelled`).
- Cancelled bookings release the slot (conflict checker excludes them).

### Interfaces (v1)
- **Native platform form** with client-side validation (time ordering, conflict
  warning). No Service Portal or Employee Center in v1.
- List views filtered by role for browsing/managing bookings.

### Design decisions (v1)
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Slot blocking | `requested` blocks the slot | Prevents approval-window races; simpler UX |
| Approval trigger | Per-item `requires_approval` flag | Flexible; admins control per-asset without code changes |
| Base table for items | `cmdb_ci` | Enables future CMDB/asset integration; acceptable overhead |
| UI surface | Native form + list | Fastest to ship; portal deferred to v2 |

---

## v2 Scope (future)
- Service Portal / Employee Center booking page with calendar view.
- Recurring bookings (daily/weekly patterns).
- Calendar sync (Outlook / Google Calendar).
- Mobile-specific responsive UI.
- Weather-driven facilities automation.
- Capacity/floor-plan visualization.

---

## Integrations
- None required for v1.

## Out of scope (all versions)
- Multi-tenant / cross-instance federation.
- Payment or chargeback workflows.
