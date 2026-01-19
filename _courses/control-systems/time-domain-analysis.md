---
layout: chapter
course: Control System Engineering
chapter_title: Time Domain Analysis
---

## Time Domain Analysis

Time domain analysis examines how a system responds over time to various inputs.

### Transient Response

The transient response is the behavior of a system as it transitions from an initial state to a final state.

#### Key Performance Metrics

- **Rise Time**: Time to reach from 10% to 90% of final value
- **Peak Time**: Time to reach the first peak
- **Settling Time**: Time to settle within a certain percentage of final value
- **Overshoot**: Maximum peak value above final value
- **Steady-State Error**: Difference between desired and actual output

### System Order

- **First-Order Systems**: Simple exponential response
- **Second-Order Systems**: Can exhibit oscillations and overshoot
- **Higher-Order Systems**: Complex response characteristics

### Step Response

The step response is one of the most important characteristics:

```
G(s) = ωn² / (s² + 2ζωn*s + ωn²)
```

Where:
- ωn = Natural frequency
- ζ = Damping ratio

### Stability Analysis

A system is stable if its output remains bounded for bounded inputs.

For more detailed content, visit the [full course on GitBook](https://zshujon.gitbook.io/control-theory/?page=time-domain).
