# Quantum Information

---

## Table of Contents

- [Quantum Interference](#quantum-interference)
- [Polarization and Wave Plates](#polarization-and-wave-plates)
- [Dense Coding](#dense-coding)
- [Quantum Teleportation](#quantum-teleportation)
- [Entanglement Swapping](#entanglement-swapping)
- [Quantum Key Distribution (QKD): BB84](#quantum-key-distribution-qkd-bb84)

---

## Quantum Interference

### Beam Splitter and Superposition

A **beam splitter (BS)** creates a quantum superposition of paths rather than splitting a photon physically.

For a 50/50 beam splitter:

\\[
| \text{in} \rangle \rightarrow \frac{1}{\sqrt{2}} | \text{transmitted} \rangle + \frac{i}{\sqrt{2}} | \text{reflected} \rangle
\\]

- The coefficients are **probability amplitudes**
- Probabilities are obtained by:

\\[
P = |\text{amplitude}|^2
\\]

### Single Beam Splitter Experiment

A photon incident on a beam splitter is detected at one of two detectors:

\\[
P(D_1) = P(D_2) = \frac{1}{2}
\\]

- The photon is never split between detectors
- This appears as classical randomness

### Multiple Paths Without Interference

With multiple beam splitters and independent paths:

\\[
P(D_1) = P(D_2) = P(D_3) = P(D_4) = \frac{1}{4}
\\]

- Probabilities distribute evenly
- No interference occurs when paths are independent

### Mach–Zehnder Interferometer

A Mach–Zehnder interferometer consists of:

1. Beam splitter (creates superposition)
2. Mirrors (redirect paths)
3. Second beam splitter (recombines paths)

### Interference of Amplitudes

The total amplitude at a detector is:

\\[
A_{\text{total}} = A_1 + A_2
\\]

The probability is:

\\[
P = |A_1 + A_2|^2
\\]

This differs from classical addition:

\\[
P \neq |A_1|^2 + |A_2|^2
\\]

### Example: Perfect Interference

For one detector:

\\[
A = \frac{i}{2} + \frac{i}{2} = i
\\]

\\[
P = |i|^2 = 1
\\]

For the other detector:

\\[
A = \frac{i^2}{2} + \frac{1}{2} = 0
\\]

\\[
P = 0
\\]

Result:

- All photons arrive at one detector
- No photons arrive at the other

### Role of Phase

A phase shift modifies a path:

\\[
|\psi\rangle \rightarrow e^{i\phi} |\psi\rangle
\\]

Total amplitude becomes:

\\[
A = A_1 + e^{i\phi} A_2
\\]

- Interference depends on relative phase
- Phase determines constructive or destructive interference

### Constructive and Destructive Interference

Constructive interference:

\\[
|A_1 + A_2|^2 \text{ is maximized}
\\]

Destructive interference:

\\[
A_1 + A_2 = 0
\\]

### Conditions for Interference

Interference occurs when:

- Paths are **indistinguishable**
- Phases are **coherent**

Blocking a path removes interference because only one amplitude remains.

### Conceptual Takeaways

- Quantum systems combine **amplitudes**, not probabilities
- Interference arises from **complex phase relationships**
- A photon behaves as a superposition of paths
- Measurement removes interference by destroying coherence

---

## Polarization and Wave Plates

Coming soon!

---

## Dense Coding

Coming soon!

---

## Quantum Teleportation

Coming soon!

---

## Entanglement Swapping

Coming soon!

---

## Quantum Key Distribution (QKD): BB84

Coming soon!
