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

### Polarization as a Qubit

Photon polarization is a two-level quantum system:

\\[
|H\rangle =
\begin{bmatrix}
1 \\\\
0
\end{bmatrix}, \quad
|V\rangle =
\begin{bmatrix}
0 \\\\
1
\end{bmatrix}
\\]

General state:

\\[
|\psi\rangle = \alpha |H\rangle + \beta |V\rangle
\\]

with normalization:

\\[
|\alpha|^2 + |\beta|^2 = 1
\\]

### Jones Vector Representation

Polarization is represented as:

\\[
\begin{bmatrix}
E_x \\\\
E_y
\end{bmatrix}
\\]

This encodes:

- Amplitude
- Relative phase

### Linear Polarization

At angle \\(\theta\\):

\\[
|\theta\rangle =
\begin{bmatrix}
\cos\theta \\\\
\sin\theta
\end{bmatrix}
\\]

### Special Polarization States

Diagonal:

\\[
|D\rangle = \frac{1}{\sqrt{2}}
\begin{bmatrix}
1 \\\\
1
\end{bmatrix}
\\]

Anti-diagonal:

\\[
|A\rangle = \frac{1}{\sqrt{2}}
\begin{bmatrix}
1 \\\\
-1
\end{bmatrix}
\\]

### Circular Polarization

Right circular:

\\[
|R\rangle = \frac{1}{\sqrt{2}}
\begin{bmatrix}
1 \\\\
i
\end{bmatrix}
\\]

Left circular:

\\[
|L\rangle = \frac{1}{\sqrt{2}}
\begin{bmatrix}
1 \\\\
\-i
\end{bmatrix}
\\]

- Circular polarization arises from a **phase difference of \\(\pm \frac{\pi}{2}\\)**

### Polarizing Beam Splitter (PBS)

An optical element that separates light into two orthogonal polarizations:

- Transmits \\(|H\rangle\\)
- Reflects \\(|V\rangle\\)

Measurement probabilities:

\\[
P(H) = |\alpha|^2, \quad P(V) = |\beta|^2
\\]

After measurement, the state collapses to one basis state.

### Half-Wave Plate (HWP)

A half-wave plate introduces a phase shift between orthogonal components.

Matrix form:

\\[
HWP(\theta) =
\begin{bmatrix}
\cos 2\theta & \sin 2\theta \\\\
\sin 2\theta & -\cos 2\theta
\end{bmatrix}
\\]

### Important Cases

#### \\(\theta = 0^\circ\\)

\\[
HWP =
\begin{bmatrix}
1 & 0 \\\\
0 & -1
\end{bmatrix}
\\]

- Leaves \\(|H\rangle\\) unchanged
- Adds phase \\(-1\\) to \\(|V\rangle\\)

#### \\(\theta = 45^\circ\\)

\\[
HWP =
\begin{bmatrix}
0 & 1 \\\\
1 & 0
\end{bmatrix}
\\]

- Swaps \\(|H\rangle \leftrightarrow |V\rangle\\)

#### \\(\theta = 22.5^\circ\\)

\\[
HWP =
\frac{1}{\sqrt{2}}
\begin{bmatrix}
1 & 1 \\\\
1 & -1
\end{bmatrix}
\\]

- Equivalent to the **Hadamard transformation**

\\[
|H\rangle \rightarrow |D\rangle, \quad |V\rangle \rightarrow |A\rangle
\\]

### Physical Interpretation of HWP

A half-wave plate:

1. Splits the polarization into two orthogonal components
2. Introduces a phase difference of \\(\pi\\)
3. Recombines the components

This results in a rotation of polarization.

### Key Observations

- The transformation depends on **\\(2\theta\\)**, not \\(\theta\\)
- Wave plates perform **unitary operations**
- They act as quantum gates on polarization states

### Conceptual Takeaways

- Polarization is a quantum two-level system
- Phase determines the difference between linear and circular states
- Measurement projects onto a basis and destroys superposition
- Wave plates implement controlled transformations of quantum states

---

## Dense Coding

### Overview

Dense coding is a quantum communication protocol that allows sending **two classical bits** by transmitting **only one qubit**, using a shared entangled pair.

Key idea:

- Classical limit: 1 qubit → 1 bit
- With entanglement: 1 qubit → 2 bits

### Initial Setup

Alice and Bob share an entangled Bell state:

\\[
|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)
\\]

Ownership:

- Alice holds qubit 1
- Bob holds qubit 2

This shared entanglement is the key resource.

### Bell States

The four maximally entangled Bell states:

\\[
|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)
\\]

\\[
|\Phi^-\rangle = \frac{1}{\sqrt{2}}(|00\rangle - |11\rangle)
\\]

\\[
|\Psi^+\rangle = \frac{1}{\sqrt{2}}(|01\rangle + |10\rangle)
\\]

\\[
|\Psi^-\rangle = \frac{1}{\sqrt{2}}(|01\rangle - |10\rangle)
\\]

Interpretation:

- \\( \Phi \\): correlated bits (same values)
- \\( \Psi \\): anti-correlated bits (opposite values)
- \\( + / - \\): relative phase difference

### Encoding by Alice

Alice encodes 2 classical bits by applying one of four operations to her qubit:

\\[
I =
\begin{pmatrix}
1 & 0 \\\\
0 & 1
\end{pmatrix}
\\]

\\[
X =
\begin{pmatrix}
0 & 1 \\\\
1 & 0
\end{pmatrix}
\\]

\\[
Z =
\begin{pmatrix}
1 & 0 \\\\
0 & -1
\end{pmatrix}
\\]

\\[
XZ =
\begin{pmatrix}
0 & 1 \\\\
-1 & 0
\end{pmatrix}
\\]

Mapping:

| Bits | Operation  | Resulting State         |
| ---- | ---------- | ----------------------- |
| 00   | \\( I \\)  | \\( \|\Phi^+\rangle \\) |
| 01   | \\( X \\)  | \\( \|\Psi^+\rangle \\) |
| 10   | \\( Z \\)  | \\( \|\Phi^-\rangle \\) |
| 11   | \\( XZ \\) | \\( \|\Psi^-\rangle \\) |

Key idea:

- Alice **does not send two bits directly**
- She transforms the **shared entangled state**

### Transmission

After encoding:

- Alice sends her qubit to Bob
- Bob now has both qubits

Only **one qubit is physically transmitted**

### Decoding by Bob

Bob performs a **Bell-state measurement**.

- Each Bell state corresponds to a unique 2-bit message
- If all four states are distinguishable:

\\[
I = \log_2(4) = 2 \text{ bits}
\\]

This exceeds the classical limit.

### Information Capacity

Ideal case:

\\[
2 \text{ classical bits per qubit}
\\]

Classical limit:

\\[
1 \text{ bit per qubit}
\\]

Entanglement doubles the capacity.

### Physical Implementation (Linear Optics)

In practice, photons are used with polarization:

- \\( |H\rangle \\) = horizontal
- \\( |V\rangle \\) = vertical

Bell states become:

\\[
|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|HH\rangle + |VV\rangle)
\\]

\\[
|\Phi^-\rangle = \frac{1}{\sqrt{2}}(|HH\rangle - |VV\rangle)
\\]

\\[
|\Psi^+\rangle = \frac{1}{\sqrt{2}}(|HV\rangle + |VH\rangle)
\\]

\\[
|\Psi^-\rangle = \frac{1}{\sqrt{2}}(|HV\rangle - |VH\rangle)
\\]

### Alice’s Encoding with Wave Plates

Alice uses half-wave plates (HWPs):

- No HWP → \\( |\Psi^+\rangle \\)
- HWP(0°) → phase flip
- HWP(45°) → bit flip
- Both → combined transformation

These implement the operators \\( I, X, Z, XZ \\)

### Bell-State Measurement (BSA)

Bob uses:

- Beam splitter (BS)
- Polarizing beam splitters (PBS)
- Detectors

The measurement outcome depends on photon behavior:

- Interference at BS
- Polarization splitting at PBS

### Key Physical Effects

#### Bosonic Symmetry

Photons are identical particles:

\\[
|H_1 V_2\rangle = |V_2 H_1\rangle
\\]

This leads to interference effects.

#### Hong–Ou–Mandel Interference

At a beam splitter:

- Some states → photons bunch (same output)
- Some states → photons separate (different outputs)

This determines which Bell states can be distinguished.

### Detection Patterns

From the Bell-state analyzer:

- \\( |\Psi^-\rangle \\): photons exit different ports
- \\( |\Psi^+\rangle \\): same port, different detectors
- \\( |\Phi^\pm\rangle \\): same detector pattern

Key limitation:

- Cannot distinguish \\( |\Phi^+\rangle \\) vs \\( |\Phi^-\rangle \\)

### Practical Limitation

Linear optics cannot fully distinguish all Bell states.

Result:

- Only 3 distinguishable outcomes

\\[
I\_{\text{max}} = \log_2(3) \approx 1.58 \text{ bits}
\\]

### Improved Bell-State Analyzer

Using auxiliary entangled photons:

- Near-deterministic discrimination
- \\( \sim 75\% \\) success rate

Still limited by linear optics constraints.

### Conceptual Takeaways

- Entanglement enables higher communication capacity
- Information is encoded in **global quantum states**, not local bits
- Alice modifies a shared state, not her qubit alone
- Measurement requires joint operations on both qubits
- Physical implementations impose real limitations

### Common Misconceptions

- Alice does not “store two bits in one qubit”
- Bob cannot decode without receiving Alice’s qubit
- Entanglement alone does not transmit information
- Without entanglement → dense coding is impossible

---

## Quantum Teleportation

### Overview

Quantum teleportation is a protocol that transfers an **unknown quantum state** from one location to another using:

- Entanglement
- Classical communication

Key idea:

- The quantum state is **not copied**
- The original is **destroyed**
- The state is **reconstructed** at the destination

### The Problem

Given an unknown qubit:

\\[
|\psi\rangle = \alpha|0\rangle + \beta|1\rangle
\\]

Goal:

\\[
|\psi\rangle_A \rightarrow |\psi\rangle_B
\\]

Naively, one might try:

\\[
|\psi\rangle |0\rangle \rightarrow |\psi\rangle |\psi\rangle
\\]

This is **impossible**.

### No-Cloning Theorem

Unknown quantum states cannot be copied.

Reason:

Linearity implies:

\\[
C(\alpha|0\rangle + \beta|1\rangle)
= \alpha C|0\rangle + \beta C|1\rangle
\\]

But cloning would require:

\\[
(\alpha|0\rangle + \beta|1\rangle)(\alpha|0\rangle + \beta|1\rangle)
\\]

These expressions are not equal for general \\( \\alpha, \\beta \\).

Conclusion:

- Cloning is impossible
- State must be **transferred**, not duplicated

### Initial Setup

Three qubits:

- Qubit 1: unknown state \\( |\\psi\\rangle \\) (Alice)
- Qubit 2: entangled (Alice)
- Qubit 3: entangled (Bob)

Shared Bell state:

\\[
|\Phi^+\rangle_{23} =
\frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)
\\]

Ownership:

- Alice → qubits 1 and 2
- Bob → qubit 3

### Total Initial State

\\[
|\Psi\rangle =
|\psi\rangle_1 \otimes |\Phi^+\rangle_{23}
\\]

\\[
= (\alpha|0\rangle + \beta|1\rangle)
\frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)
\\]

This is a **three-qubit system**.

### Bell States

\\[
|\Phi^\pm\rangle =
\frac{1}{\sqrt{2}}(|00\rangle \pm |11\rangle)
\\]

\\[
|\Psi^\pm\rangle =
\frac{1}{\sqrt{2}}(|01\rangle \pm |10\rangle)
\\]

These form a complete basis for two qubits.

### Bell Basis Expansion

The total state can be rewritten as:

\\[
|\Psi\rangle =
\frac{1}{2} \Big(|\Phi^+\rangle\_{12} (\alpha|0\rangle + \beta|1\rangle)\_3
+|\Phi^-\rangle\_{12} (\alpha|0\rangle - \beta|1\rangle)\_3
+|\Psi^+\rangle\_{12} (\alpha|1\rangle + \beta|0\rangle)\_3
+|\Psi^-\rangle\_{12} (\alpha|1\rangle - \beta|0\rangle)\_3\Big)
\\]

Key insight:

- Alice’s measurement outcome determines Bob’s state

### Measurement by Alice

Alice performs a **Bell-state measurement** on qubits 1 and 2.

Result:

- One of four Bell states
- Produces **2 classical bits**

After measurement:

- Original state is destroyed
- Bob’s qubit collapses into a related state

### Conditional States at Bob

| Alice Outcome           | Bob’s State                                |
| ----------------------- | ------------------------------------------ |
| \\( \|\Phi^+\rangle \\) | \\( \alpha\|0\rangle + \beta\|1\rangle \\) |
| \\( \|\Phi^-\rangle \\) | \\( \alpha\|0\rangle - \beta\|1\rangle \\) |
| \\( \|\Psi^+\rangle \\) | \\( \alpha\|1\rangle + \beta\|0\rangle \\) |
| \\( \|\Psi^-\rangle \\) | \\( \alpha\|1\rangle - \beta\|0\rangle \\) |

Bob has a **modified version** of \\( |\\psi\\rangle \\).

### Classical Communication

Alice sends **2 classical bits** to Bob.

Important:

- Without this, Bob cannot recover the state
- No faster-than-light communication

### Correction by Bob

Bob applies an operation depending on Alice’s result:

| Bits | Operation  |
| ---- | ---------- |
| 00   | \\( I \\)  |
| 01   | \\( Z \\)  |
| 10   | \\( X \\)  |
| 11   | \\( XZ \\) |

After correction:

\\[
|\psi\rangle_B = \alpha|0\rangle + \beta|1\rangle
\\]

### Final Result

- Bob obtains the original quantum state
- Alice’s state is destroyed

\\[
|\psi\rangle_A \rightarrow |\psi\rangle_B
\\]

No duplication occurs.

### Physical Implementation (Optical Systems)

Qubits represented by polarization:

- \\( |H\\rangle \\) = horizontal
- \\( |V\\rangle \\) = vertical

Components:

- Beam splitter (BS)
- Polarizing beam splitters (PBS)
- Detectors

Bell-state analyzer:

- Can distinguish only some Bell states

### Practical Limitation

Linear optics can distinguish:

\\[
|\Psi^+\rangle, \quad |\Psi^-\rangle
\\]

But not:

\\[
|\Phi^+\rangle, \quad |\Phi^-\rangle
\\]

Result:

\\[
P\_{\text{success}} = \frac{1}{2}
\\]

Teleportation is probabilistic in practice.

### Conceptual Flow

1. Entanglement shared
2. Alice entangles unknown with Bell pair
3. Alice measures (destroys original state)
4. Classical bits sent to Bob
5. Bob applies correction
6. State reconstructed

### Conceptual Takeaways

- Quantum information cannot be copied
- Entanglement enables state transfer
- Classical communication is required
- Information is transferred, not particles
- Measurement redistributes quantum information

### Common Misconceptions

- Teleportation does not move matter
- Entanglement alone does not transmit information
- The state does not exist in two places
- Classical communication is essential

---

## Entanglement Swapping

Coming soon!

---

## Quantum Key Distribution (QKD): BB84

Coming soon!
