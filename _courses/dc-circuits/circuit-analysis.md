---
layout: chapter
course: DC Circuits
chapter_title: Circuit Analysis Methods
---

## Circuit Analysis Methods

Various techniques exist for analyzing complex DC circuits.

### Kirchhoff's Laws

#### Kirchhoff's Current Law (KCL)
The sum of currents entering a node equals the sum leaving:
∑ I_in = ∑ I_out

#### Kirchhoff's Voltage Law (KVL)
The sum of voltages around a closed loop is zero:
∑ V = 0

### Analysis Techniques

#### Nodal Analysis
- Choose a reference node (ground)
- Apply KCL at each node
- Solve for node voltages

#### Mesh Analysis
- Identify mesh currents
- Apply KVL to each mesh
- Solve simultaneous equations

### Superposition Theorem

In linear circuits with multiple sources:
- Analyze each source independently
- Sum individual responses

### Thevenin and Norton Equivalents

Simplify complex circuits to:
- **Thevenin**: Voltage source + series resistance
- **Norton**: Current source + parallel resistance

For more detailed content, visit the [full course on GitBook](https://zshujon.gitbook.io/dc-circuits/).
