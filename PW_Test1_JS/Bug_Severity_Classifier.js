//As a QA Engineer, classify bugs based on two factors:frequency ("always", "often","rarely") and impact ("blocker", "major","minor").
// write a javscript program using nested if else that prints the bug severity level.
//classification matrix:
//- always + blocker --> P0 | alwyas + major --. P1 | always + minor --> P2
//- often + blocker --> P1  | often + major --> P2 | often + minor --> P3
//- rarely + blocker --> P2 | rarely + major --> P3 | rarely + minor --> P4

// input -- frequency = "always", impact = "blocker"

// output -- bug Title : checkout page crashes on applying coupon
// Frequency : always  , Impact : blocker , Severity: P0 - Critical : Stop Release immediately