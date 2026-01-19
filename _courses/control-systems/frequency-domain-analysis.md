---
layout: chapter
course: Control System Engineering
chapter_title: Frequency Domain Analysis
---

## Frequency Domain Analysis

Frequency domain analysis examines how a system responds to sinusoidal inputs at different frequencies.

### Frequency Response

The frequency response describes how a system responds to sinusoidal inputs across a range of frequencies.

### Bode Plots

Bode plots are graphical representations of:
- **Magnitude Plot**: Gain (in dB) vs. frequency
- **Phase Plot**: Phase shift vs. frequency

#### Advantages of Bode Plots

- Easy to sketch by hand
- Multiplicative factors become additive
- Clear visualization of system behavior

### Nyquist Plot

The Nyquist plot is a polar plot of the frequency response, used for:
- Stability analysis
- Gain and phase margins
- Relative stability assessment

### Gain and Phase Margins

- **Gain Margin (GM)**: Amount of gain increase before instability
- **Phase Margin (PM)**: Additional phase lag before instability

### Typical Values

- GM > 6 dB
- PM > 30°-60°

### Transfer Function Analysis

```
H(jω) = |H(jω)| ∠φ(ω)
```

Where:
- |H(jω)| = Magnitude
- φ(ω) = Phase angle

For more detailed content, visit the [full course on GitBook](https://zshujon.gitbook.io/control-theory/?page=frequency-domain).
