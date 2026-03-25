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

⚠️ Order matters:

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

Coming soon!

---

## Superdense Coding Circuit

Coming soon!
