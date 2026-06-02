# PRD — Office Equipment & Workspace Booker

## Purpose
A ServiceNow scoped application that replaces messy spreadsheets used to track
desk bookings, loaner laptops, and conference/boardroom reservations. Employees
book bookable items for a time window; the system prevents double-booking and
routes high-value bookings (e.g. premium boardrooms) to a manager for approval.

## Users and roles
- **Employee** (`x_*.employee`): browse bookable items, create/cancel their own bookings.
- **Workspace Admin** (`x_*.workspace_admin`): manage bookable items, view all bookings, override.
- **Manager** (`x_*.manager`): approve/reject high-value booking requests.

## Key tables and fields
- **Bookable Item** (`x_*_bookable_item`)
  - `name` (string), `type` (choice: desk, laptop, conference_room, boardroom),
    `location` (reference: `cmn_location`), `requires_approval` (boolean),
    `active` (boolean).
- **Booking** (`x_*_booking`, extends `task`)
  - `bookable_item` (reference → Bookable Item), `start_time` (glide_date_time),
    `end_time` (glide_date_time), `requested_for` (reference → `sys_user`),
    `booking_state` (choice: requested, approved, rejected, cancelled).

## Business rules / logic
- **No double-booking**: a Script Include (`BookingConflictChecker`) detects
  overlapping confirmed bookings for the same `bookable_item`. Enforced by a
  before-insert/update Business Rule on `x_*_booking` and surfaced client-side.
- **Approval routing**: a Flow Designer flow triggers when a booking targets an
  item with `requires_approval = true` (e.g. boardroom) and routes it to the
  requester's manager for approval before the booking is confirmed.

## Interfaces
- Service Portal / Employee Center page so users can browse items and book them.
- Client Script on the Booking form to warn about conflicts before submit.

## Integrations
- None required for v1. (A later phase may add a weather-driven facilities flow.)

## Out of scope (v1)
- Recurring bookings, calendar sync, mobile-specific UI.
