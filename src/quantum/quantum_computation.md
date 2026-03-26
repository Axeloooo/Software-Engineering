# Quantum Computation

---

## Table of Contents

- [Quantum Gates](#quantum-gates)
- [Quantum Teleportation Circuit](#quantum-teleportation-circuit)
- [Superdense Coding Circuit](#superdense-coding-circuit)

---

## Quantum Gates

Quantum gates are the fundamental operations of quantum computation.  
They act on qubits and are represented as **unitary matrices**.

- A quantum state is a vector
- A gate is a matrix
- Evolution is matrix multiplication

\\[
|\psi'\rangle = U |\psi\rangle
\\]

Unlike classical gates:

- Quantum gates are **reversible**
- They operate on **probability amplitudes**, not bits

### Single-Qubit Gates

#### Basis States

A single qubit is represented as:

\\[
|0\rangle =
\begin{bmatrix}
1 \\\\
0
\end{bmatrix},
\quad
|1\rangle =
\begin{bmatrix}
0 \\\\
1
\end{bmatrix}
\\]

A general state:

\\[
|\psi\rangle = \alpha |0\rangle + \beta |1\rangle
\\]

with:

\\[
|\alpha|^2 + |\beta|^2 = 1
\\]

#### Pauli-X Gate (NOT Gate)

\\[
X =
\begin{bmatrix}
0 & 1 \\\\
1 & 0
\end{bmatrix}
\\]

\\[
X|0\rangle = |1\rangle, \quad X|1\rangle = |0\rangle
\\]

- Flips the qubit
- Equivalent to classical NOT

#### Pauli-Z Gate (Phase Flip)

\\[
Z =
\begin{bmatrix}
1 & 0 \\\\
0 & -1
\end{bmatrix}
\\]

\\[
Z|0\rangle = |0\rangle, \quad Z|1\rangle = -|1\rangle
\\]

- Does not change probabilities
- Changes **phase**

#### Hadamard Gate

\\[
H = \frac{1}{\sqrt{2}}
\begin{bmatrix}
1 & 1 \\\\
1 & -1
\end{bmatrix}
\\]

\\[
H|0\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)
\\]

\\[
H|1\rangle = \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)
\\]

- Creates **superposition**
- Converts deterministic states into probabilistic ones

#### Measurement and Probability

Measurement outcomes are determined by amplitudes:

\\[
P(0) = |\alpha|^2, \quad P(1) = |\beta|^2
\\]

Example:

\\[
|\psi\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)
\\]

\\[
P(0) = P(1) = \frac{1}{2}
\\]

#### Phase Factors

Quantum states can acquire a phase:

\\[
|\psi\rangle \rightarrow e^{i\theta} |\psi\rangle
\\]

Special cases:

\\[
e^{i\pi} = -1, \quad e^{i\pi/2} = i
\\]

- **Global phase**: no physical effect
- **Relative phase**: affects interference and measurement

#### Gate Composition

Multiple gates are applied in sequence:

\\[
U_2 U_1 |\psi\rangle
\\]

Order matters:

\\[
ZX|0\rangle \neq XZ|0\rangle
\\]

### Multi-Qubit Systems

#### Tensor Product

Multiple qubits are combined using the tensor product:

\\[
|a\rangle \otimes |b\rangle
\\]

Example:

\\[
|0\rangle \otimes |0\rangle = |00\rangle =
\begin{bmatrix}
1 \\\\
0 \\\\
0 \\\\
0
\end{bmatrix}
\\]

General rule:

\\[
\begin{bmatrix}
a \\\\
b
\end{bmatrix}
\otimes
\begin{bmatrix}
c \\\\
d
\end{bmatrix} =
\begin{bmatrix}
ac \\\\
ad \\\\
bc \\\\
bd
\end{bmatrix}
\\]

#### Multi-Qubit States

Two-qubit basis states:

- \\(|00\rangle\\)
- \\(|01\rangle\\)
- \\(|10\rangle\\)
- \\(|11\rangle\\)

These form a 4-dimensional vector space.

### Multi-Qubit Gates

#### CNOT Gate

The Controlled-NOT gate flips the target qubit if the control qubit is 1.

\\[
\text{CNOT} |00\rangle = |00\rangle
\\]
\\[
\text{CNOT} |01\rangle = |01\rangle
\\]
\\[
\text{CNOT} |10\rangle = |11\rangle
\\]
\\[
\text{CNOT} |11\rangle = |10\rangle
\\]

- Essential for **entanglement**
- Combines classical control with quantum behavior

#### SWAP Gate

Swaps two qubits:

\\[
|00\rangle \rightarrow |00\rangle
\\]

\\[
|01\rangle \rightarrow |10\rangle
\\]

\\[
|10\rangle \rightarrow |01\rangle
\\]

\\[
|11\rangle \rightarrow |11\rangle
\\]

- Exchanges quantum states
- Often implemented using multiple CNOT gates

#### Controlled-Z Gate (CZ)

Applies a phase flip when both qubits are 1:

\\[
|00\rangle \rightarrow |00\rangle
\\]

\\[
|01\rangle \rightarrow |01\rangle
\\]

\\[
|10\rangle \rightarrow |10\rangle
\\]

\\[
|11\rangle \rightarrow -|11\rangle
\\]

- Does not change bit values
- Changes **phase relationships**

### Parameterized Gates

#### Rotation Gate (Rx)

\\[
R_x(\theta) =
\begin{bmatrix}
\cos(\theta/2) & -i\sin(\theta/2) \\\\
-i\sin(\theta/2) & \cos(\theta/2)
\end{bmatrix}
\\]

- Represents rotation around the x-axis
- Generalizes discrete gates into continuous operations

#### General U Gate

\\[
U(\theta, \phi, \lambda)
\\]

- Most general single-qubit gate
- Can represent all rotations

Special cases:

- \\(U(\theta, 0, 0) = R_y(\theta)\\)
- \\(U(\theta, -\pi/2, \pi/2) = R_x(\theta)\\)

### Key Takeaways

- Quantum gates are **unitary matrix operations**
- Qubits evolve via **linear algebra**
- Measurement depends on **probability amplitudes**
- Tensor products define multi-qubit systems
- CNOT enables **entanglement**
- Phase plays a critical role in quantum behavior
- Gate order matters — operations are **not commutative**

---

## Quantum Teleportation Circuit

Quantum teleportation is a protocol that transfers an **unknown quantum state** from Alice to Bob using:

- Entanglement
- Classical communication
- Quantum gates

The original qubit is **destroyed**, and the state is **reconstructed** at Bob’s location.

\\[
|\psi\rangle = \alpha |0\rangle + \beta |1\rangle
\\]

Goal:

\\[
|\psi\rangle_A \rightarrow |\psi\rangle_B
\\]

### Circuit Overview

The teleportation circuit consists of three qubits:

1. Top wire: unknown state \\(|\psi\rangle\\)
2. Middle wire: Alice’s entangled qubit
3. Bottom wire: Bob’s entangled qubit

Key stages:

1. Create entanglement (EPR pair)
2. Perform Bell measurement (Alice)
3. Send classical bits
4. Apply correction (Bob)

The protocol uses:

- Hadamard (H)
- CNOT
- Measurement
- Conditional gates (X, Z)

### Step-by-Step Process

#### Step 1: Create Entanglement (EPR Pair)

Alice and Bob share a Bell state:

\\[
|\Psi^+\rangle = \frac{1}{\sqrt{2}}(|01\rangle + |10\rangle)
\\]

Created using:

- Hadamard on one qubit
- CNOT gate

This entanglement is the **resource** that enables teleportation.

#### Step 2: Combine with Unknown State

The full system becomes:

\\[
|\psi\rangle \otimes |\Psi^+\rangle
\\]

This expands into a superposition of **Bell states**:

\\[
|\psi\rangle \otimes |\Psi^+\rangle =
\frac{1}{2}(
|00\rangle (\alpha|0\rangle + \beta|1\rangle) +
|01\rangle (\alpha|1\rangle + \beta|0\rangle) +
|10\rangle (\alpha|0\rangle - \beta|1\rangle) +
|11\rangle (\alpha|1\rangle - \beta|0\rangle)
)
\\]

Key idea:

- The unknown state is now **distributed across all three qubits**

#### Step 3: Bell Measurement (Alice)

Alice applies:

1. CNOT (between her qubits)
2. Hadamard

Then measures both qubits.

Result:

\\[
\frac{1}{2}(
|00\rangle (\alpha|0\rangle + \beta|1\rangle) +
|01\rangle (\alpha|1\rangle + \beta|0\rangle) +
|10\rangle (\alpha|0\rangle - \beta|1\rangle) +
|11\rangle (\alpha|1\rangle - \beta|0\rangle)
)
\\]

Key idea:

- Measurement collapses the system into one of four cases.

### Bell States and Measurement

Alice’s measurement yields:

- \\(|00\rangle\\)
- \\(|01\rangle\\)
- \\(|10\rangle\\)
- \\(|11\rangle\\)

Each corresponds to a different transformation of Bob’s qubit.

**Important:**

Bob’s qubit is already **close to \\(|\psi\rangle\\)** — just modified by a known operation.

### Classical Communication and Correction

Alice sends **2 classical bits** to Bob.

Based on the result, Bob applies:

| Measurement | Operation |
| ----------- | --------- |
| 00          | Identity  |
| 01          | X         |
| 10          | Z         |
| 11          | XZ        |

After correction:

\\[
|\psi\rangle = \alpha|0\rangle + \beta|1\rangle
\\]

Bob now has the **exact original state**.

### Key Insights

#### 1. No Faster-Than-Light Communication

- Classical bits are required
- Teleportation is **not instantaneous communication**

#### 2. State is Not Copied

- The original qubit is destroyed during measurement
- This obeys the **no-cloning theorem**

#### 3. Entanglement is a Resource

- Without entanglement, teleportation is impossible
- It enables non-local correlations

#### 4. Measurement Drives the Protocol

- Measurement collapses the system
- Converts quantum information into classical bits

#### 5. Corrections Recover the State

- Bob’s qubit is always one operation away from \\(|\psi\rangle\\)
- Classical information tells him which one

### Conceptual Takeaways

- Teleportation = **entanglement + measurement + classical control**
- Information is transferred without moving the particle
- Quantum states behave as **global systems**, not local objects

---

## Superdense Coding Circuit

Superdense coding allows Alice to send **2 classical bits** to Bob by transmitting only **1 qubit**, using shared entanglement.

This is only possible because of **entanglement as a resource**.

The protocol works by encoding classical information into quantum states.

### Protocol Overview

1. Alice and Bob share an entangled Bell pair
2. Alice encodes 2 classical bits using a quantum gate
3. Alice sends her qubit to Bob
4. Bob performs a joint measurement to recover the 2 bits

### Step 1: Entanglement Preparation

Start with:

\\[
|00\rangle
\\]

Apply:

- Hadamard on first qubit
- CNOT (control = first, target = second)

Result:

\\[
|\Phi^+\rangle = \frac{1}{\sqrt{2}} (|00\rangle + |11\rangle)
\\]

This shared Bell state is distributed between Alice and Bob.

### Step 2: Alice Encoding

Alice encodes **two classical bits** by applying one of four operations to her qubit:

| Bits | Operation | Resulting State         |
| ---- | --------- | ----------------------- |
| 00   | \\(I\\)   | \\( \|\Phi^+\rangle \\) |
| 01   | \\(X\\)   | \\( \|\Psi^+\rangle \\) |
| 10   | \\(Z\\)   | \\( \|\Phi^-\rangle \\) |
| 11   | \\(Y\\)   | \\( \|\Psi^-\rangle \\) |

- Each operation maps the shared state to a **different Bell state**

Key idea:

Alice is not sending bits directly—she is **transforming entanglement**

### Step 3: Bob Decoding

After receiving Alice’s qubit, Bob performs:

1. CNOT
2. Hadamard (on first qubit)

This transforms Bell states into computational basis states:

\\[
|\Phi^+\rangle \rightarrow |00\rangle
\\]
\\[
|\Psi^+\rangle \rightarrow |01\rangle
\\]
\\[
|\Phi^-\rangle \rightarrow |10\rangle
\\]
\\[
|\Psi^-\rangle \rightarrow |11\rangle
\\]

Then Bob measures and recovers the **two classical bits**.

### Bell States and Encoding

The four Bell states:

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

Each represents a **distinct global state**.

### Information Gain

Classically:

- 1 bit per bit sent

Quantum (superdense coding):

- 2 bits per qubit

\\[
\log_2(4) = 2 \text{ bits}
\\]

However:

- In real systems (e.g., linear optics), not all Bell states are distinguishable
- Practical limit ≈ 1.58 bits per qubit

### Key Insights

#### 1. Entanglement Enables Compression

- Information is encoded into **global correlations**
- Not into a single qubit alone

#### 2. Alice Does Not Send Two Bits Directly

- She modifies her half of an entangled state
- The message exists in the **joint system**

#### 3. Bob Needs Both Qubits

- Without Alice’s qubit, Bob cannot decode anything
- Without prior entanglement, protocol fails

#### 4. This is the Reverse of Teleportation

- Teleportation: send 1 qubit using 2 classical bits
- Superdense coding: send 2 classical bits using 1 qubit

### Conceptual Takeaways

- Quantum information can be **compressed into entanglement**
- Operations on one qubit affect the entire system
- Measurement extracts classical information from quantum correlations
