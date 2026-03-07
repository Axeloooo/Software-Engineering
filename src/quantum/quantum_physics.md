# Quantum Physics

---

## Table of Contents

- [Birth of Quantum Mechanics](#birth-of-quantum-mechanics)
- [Photoelectric Effect and Wave-Particle Duality](#photoelectric-effect-and-wave-particle-duality)
- [Bohr Model of the Atom](#bohr-model-of-the-atom)
- [Wave Function, Superposition, and Wave Packets](#wave-function-superposition-and-wave-packets)
- [Uncertainty Principle](#uncertainty-principle)
- [Schrodinger Equation](#schrodinger-equation)
- [Expectation Value](#expectation-value)

---

## Birth of Quantum Mechanics

### Blackbody Radiation

A **blackbody** is an ideal object that:

- Absorbs 100% of incident electromagnetic radiation.
- Emits radiation that depends only on its temperature.
- Has an emission spectrum independent of its material.

A cavity with a small hole approximates a blackbody because radiation entering the hole undergoes many reflections and is almost completely absorbed before escaping.

### Intensity and Spectral Intensity

Total intensity (power per unit area):

\\[
I = \frac{E}{A t}
\\]

Spectral intensity (power per unit area per unit frequency):

\\[
I_f = \frac{dE}{dA \, dt \, df}
\\]

Total intensity is obtained by integrating over all frequencies:

\\[
I = \int_0^\infty I_f \, df
\\]

### Temperature Dependence

As temperature increases:

- The peak of the spectrum shifts to higher frequency.
- The peak wavelength decreases.
- The total emitted intensity increases rapidly.

Hotter objects change visible color:

- ~3000 K → red glow
- ~6000 K → yellow-white
- ~12000 K → bluish-white

### Wien’s Displacement Law

Peak frequency form:

\\[
f_{\text{peak}} = (5.88 \times 10^{10} \, \text{Hz/K}) \, T
\\]

Peak wavelength form:

\\[
\lambda_{\text{peak}} = \frac{2.90 \times 10^{-3}\,\mathrm{m\cdot K}}{T}
\\]

Scaling behavior:

- If \\(T\\) doubles → \\(f\_{\text{peak}}\\) doubles.
- If \\(T\\) doubles → \\(\lambda\_{\text{peak}}\\) halves.

### Stefan–Boltzmann Law

Total emitted intensity:

\\[
I = \sigma T^4
\\]

where

\\[
\sigma = 5.67 \times 10^{-8}\,\mathrm{W\,m^{-2}\,K^{-4}}
\\]

If temperature doubles, total emitted power increases by \\(2^4 = 16\\).

### Classical Prediction: Rayleigh–Jeans Law

Classical equipartition assumes each mode has average energy:

\\[
E = k_B T
\\]

Number of modes per unit frequency is proportional to \\(f^2\\).

Rayleigh–Jeans law:

\\[
I_f^{RJ}(f,T) = \frac{2 f^2}{c^2} k_B T
\\]

Total energy prediction:

\\[
\int_0^\infty f^2 \, df = \infty
\\]

This divergence at high frequency is called the **ultraviolet catastrophe**.

### Planck’s Quantum Hypothesis

Planck proposed that energy is quantized:

\\[
E = n h f, \quad n = 0,1,2,\dots
\\]

where

\\[
h = 6.626 \times 10^{-34}\,\mathrm{J\cdot s}
\\]

Average energy per mode becomes:

\\[
\langle E \rangle = \frac{h f}{e^{hf/k_B T} - 1}
\\]

Planck’s radiation law:

\\[
I_f(f,T) = \frac{2 f^2}{c^2} \frac{h f}{e^{hf/k_B T} - 1}
\\]

### Why Planck’s Law Resolves the Catastrophe

At high frequency (\\(hf \gg k_B T\\)):

\\[
e^{hf/k_B T} \gg 1
\\]

Thus

\\[
\langle E \rangle \rightarrow 0
\\]

High-frequency modes are exponentially suppressed, preventing divergence.

### Low-Frequency Limit (Classical Recovery)

When \\(hf \ll k_B T\\), use the approximation:

\\[
e^{hf/k_B T} \approx 1 + \frac{hf}{k_B T}
\\]

Substituting:

\\[
\langle E \rangle \approx k_B T
\\]

Planck’s law reduces to the Rayleigh–Jeans result at low frequencies.

### Photon Energy

Energy of a single photon:

\\[
E = h f
\\]

Using wavelength:

\\[
E = \frac{hc}{\lambda}
\\]

### Key Constants

Planck constant:

\\[
h = 6.626 \times 10^{-34}\,\mathrm{J\cdot s}
\\]

Boltzmann constant:

\\[
k_B = 1.381 \times 10^{-23} \, \text{J/K}
\\]

Speed of light:

\\[
c = 3.00 \times 10^8 \, \text{m/s}
\\]

Stefan–Boltzmann constant:

\\[
\sigma = 5.67 \times 10^{-8} \, \text{W/m}^2\text{K}^4
\\]

### Conceptual Takeaways

- Classical physics fails because it assumes continuous energy.
- The number of modes grows with \\(f^2\\), causing divergence.
- Quantization suppresses high-frequency energy.
- Planck’s law matches experiment at all frequencies.
- At low frequency → classical behavior.
- At high frequency → quantum behavior dominates.

---

## Photoelectric Effect and Wave-Particle Duality

### The Photoelectric Effect

The **photoelectric effect** occurs when light shines on a metal surface and electrons are ejected.

Key experimental observations:

- No electrons are emitted below a certain **threshold frequency**.
- Increasing light intensity increases the **number** of emitted electrons.
- Increasing light frequency increases the **kinetic energy** of emitted electrons.
- Emission occurs **instantly**, even at low intensity.

These results could not be explained using classical wave theory.

### Classical Prediction (Incorrect)

Classical wave theory predicted:

- Energy should depend on **intensity**, not frequency.
- Electrons should accumulate energy gradually.
- There should be a measurable time delay before emission.

Experiments showed this was completely wrong.

### Einstein’s Explanation (1905)

Einstein proposed that light consists of **particles called photons**.

Each photon carries energy:

\\[
E = h f
\\]

When a photon strikes an electron:

- Part of its energy is used to overcome the metal’s **work function**.
- The remainder becomes kinetic energy.

### Photoelectric Equation

Energy conservation gives:

\\[
h f = W + K_{\text{max}}
\\]

where:

- \\(W\\) = work function (minimum energy needed to remove electron)
- \\(K\_{\text{max}}\\) = maximum kinetic energy of emitted electrons

Thus:

\\[
K_{\text{max}} = h f - W
\\]

### Threshold Frequency

The **threshold frequency** \\(f*0\\) occurs when \\(K*{\text{max}} = 0\\):

\\[
h f_0 = W
\\]

So:

\\[
f_0 = \frac{W}{h}
\\]

If \\(f < f_0\\), no electrons are emitted — regardless of intensity.

This was impossible under classical physics.

### Experimental Graph

If we plot \\(K\_{\text{max}}\\) vs frequency:

\\[
K_{\text{max}} = h f - W
\\]

This is a straight line:

- Slope = \\(h\\)
- Intercept = \\(-W\\)
- Zero crossing = \\(f_0\\)

This experiment allowed direct measurement of Planck’s constant.

### Intensity vs Frequency

- **Intensity controls number of photons → number of electrons emitted**
- **Frequency controls energy per photon → kinetic energy of electrons**

Do not confuse these.

### Wave–Particle Duality

Blackbody radiation suggested light energy is quantized.

The photoelectric effect showed:

- Light behaves like discrete particles.
- Energy transfer is localized and instantaneous.

Thus light exhibits **particle-like behavior**.

But interference experiments show light also behaves like a wave.

Conclusion:

Light has **wave–particle duality**.

It cannot be described fully as only a wave or only a particle.

### Momentum of a Photon

Photons carry momentum even though they have no mass.

Using:

\\[
E = p c
\\]

Since \\(E = h f\\) and \\(f = \frac{c}{\lambda}\\):

\\[
p = \frac{h}{\lambda}
\\]

This will later connect to de Broglie matter waves.

### Key Constants

Planck constant:

\\[
h = 6.626 \times 10^{-34}\,\mathrm{J\cdot s}
\\]

Electron rest mass:

\\[
m_e = 9.11 \times 10^{-31}\,\mathrm{kg}
\\]

Speed of light:

\\[
c = 3.00 \times 10^8\,\mathrm{m\,s^{-1}}
\\]

### Conceptual Takeaways

- Light energy is quantized.
- Frequency determines photon energy.
- Intensity determines photon number.
- Wave and particle descriptions are both necessary.

---

## Bohr Model of the Atom

### Atomic Spectra

When atoms are excited, they emit light at **discrete wavelengths**.

Instead of a continuous spectrum, hydrogen produces **sharp spectral lines**.

These lines form series:

- **Lyman series** → ultraviolet
- **Balmer series** → visible
- **Paschen series** → infrared

This showed that **atomic energy levels are discrete**.

### The Rydberg Formula

The wavelengths of hydrogen spectral lines follow the **Rydberg formula**:

\\[
\frac{1}{\lambda} = R_H
\left(
\frac{1}{n_f^2} - \frac{1}{n_i^2}
\right)
\\]

where

- \\(R_H = 1.097 \times 10^7 \, \mathrm{m^{-1}}\\)
- \\(n_i\\) = initial energy level
- \\(n_f\\) = final energy level

For emission:

\\[
n_i > n_f
\\]

### Bohr’s Model (1913)

Niels Bohr proposed a model of the hydrogen atom with three key assumptions:

1. Electrons move in **circular orbits** around the nucleus.
2. Only certain **quantized orbits** are allowed.
3. Radiation is emitted only when electrons **transition between energy levels**.

### Quantization of Angular Momentum

Bohr proposed that the electron’s angular momentum is quantized:

\\[
m v r = n \hbar
\\]

where

- \\(n = 1,2,3,\dots\\)
- \\(\hbar = \frac{h}{2\pi}\\)

This condition restricts electrons to **specific allowed orbits**.

### Radius of Allowed Orbits

Solving the force balance between Coulomb attraction and centripetal force gives:

\\[
r_n = n^2 a_0
\\]

where

\\[
a_0 = 5.29 \times 10^{-11} \, \text{m}
\\]

is the **Bohr radius**.

### Energy Levels of Hydrogen

The allowed energies of hydrogen are:

\\[
E_n = -\frac{13.6 \, \text{eV}}{n^2}
\\]

Properties:

- Energy levels become **closer together** as \\(n\\) increases.
- \\(E = 0\\) corresponds to a **free electron**.

### Photon Emission During Transitions

When an electron moves between levels:

\\[
\Delta E = E_i - E_f
\\]

A photon is emitted with energy:

\\[
hf = E_i - E_f
\\]

Thus:

\\[
\lambda = \frac{hc}{E_i - E_f}
\\]

This explains the **hydrogen spectral lines**.

### Connection to de Broglie Waves

The Bohr orbit condition can be interpreted as a **standing wave** condition:

\\[
2\pi r = n\lambda
\\]

Only wavelengths that fit an integer number of times around the orbit are allowed.

This links atomic structure to **matter waves**.

### Conceptual Takeaways

- Atomic energy levels are **quantized**.
- Spectral lines arise from **electron transitions**.
- Angular momentum is quantized in units of \\(\hbar\\).
- Bohr’s model explains hydrogen spectra but fails for multi-electron atoms.

---

## Wave Function, Superposition, and Wave Packets

### The Wave Function

Quantum particles are described by a **wave function**:

\\[
\psi(x,t)
\\]

The wave function contains all information about the particle.

The **probability density** of finding a particle is:

\\[
P(x,t) = |\psi(x,t)|^2
\\]

### Normalization

Because the particle must exist somewhere:

\\[
\int_{-\infty}^{\infty} |\psi(x,t)|^2 dx = 1
\\]

This is called the **normalization condition**.

### Plane Waves

A free particle can be described by a **plane wave**:

\\[
\psi(x,t) = A e^{i(kx - \omega t)}
\\]

where

- \\(k\\) = wave number
- \\(\omega\\) = angular frequency

Relations:

\\[
k = \frac{2\pi}{\lambda}
\\]

\\[
p = \hbar k
\\]

\\[
E = \hbar \omega
\\]

### Superposition of Waves

Quantum wave functions obey the **principle of superposition**.

If \\(\psi_1\\) and \\(\psi_2\\) are valid solutions, then:

\\[
\psi = \psi_1 + \psi_2
\\]

is also a valid solution.

Interference between waves produces new spatial structures.

### Superposition of Two Waves

Consider two waves:

\\[
\psi_1 = A \sin(k_1 x)
\\]

\\[
\psi_2 = A \sin(k_2 x)
\\]

Their sum is

\\[
\psi = 2A \sin(k_{avg} x)\cos\left(\frac{\Delta k}{2}x\right)
\\]

This creates an **envelope** that localizes the wave.

### Wave Packets

A **wave packet** is formed by combining many waves with different \\(k\\) values:

\\[
\psi(x) = \int g(k)\cos(kx)\,dk
\\]

Wave packets represent **localized particles**.

Properties:

- Narrow packet → wide range of \\(k\\)
- Wide packet → narrow range of \\(k\\)

### Spatial Localization

The spread in position and wave number satisfies

\\[
\Delta x \Delta k \sim 1
\\]

Using \\(p = \hbar k\\) gives the basis for the uncertainty principle.

### Conceptual Takeaways

- The wave function describes **probability amplitudes**.
- Superposition allows **interference and localization**.
- A localized particle corresponds to a **wave packet**.
- Localization requires a **range of momenta**.

---

## Uncertainty Principle

### Position–Momentum Uncertainty

A wave packet cannot have both perfectly defined position and momentum.

The fundamental relation is

\\[
\Delta x \Delta p \ge \frac{\hbar}{2}
\\]

This is the **Heisenberg uncertainty principle**.

### Origin of the Uncertainty Relation

A localized particle requires many wave numbers.

From Fourier analysis:

\\[
\Delta x \Delta k \approx \frac{1}{2}
\\]

Using

\\[
p = \hbar k
\\]

we obtain

\\[
\Delta x \Delta p \ge \frac{\hbar}{2}
\\]

### Energy–Time Uncertainty

A similar relation exists for energy and time:

\\[
\Delta E \Delta t \gtrsim \frac{\hbar}{2}
\\]

Short-lived states have large energy uncertainty.

### Physical Interpretation

The uncertainty principle does **not arise from measurement errors**.

Instead it reflects a **fundamental property of quantum states**.

Key consequences:

- A particle cannot have a perfectly defined trajectory.
- Confinement increases momentum uncertainty.

### Example: Particle in a Nucleus

If a proton is confined to

\\[
\Delta x \sim 10^{-15} \, \text{m}
\\]

then

\\[
\Delta p \gtrsim \frac{\hbar}{2\Delta x}
\\]

This implies a large **minimum kinetic energy**.

### Conceptual Takeaways

- Position and momentum cannot both be precisely known.
- Localization requires a wide momentum distribution.
- Quantum uncertainty is negligible for macroscopic objects.

---

## Schrodinger Equation

### Operators in Quantum Mechanics

Physical quantities are represented by **operators**.

Momentum operator:

$$
\hat{p} = -i\hbar \frac{\partial}{\partial x}
$$

Energy operator:

$$
\hat{E} = i\hbar \frac{\partial}{\partial t}
$$

### Time-Dependent Schrödinger Equation

The fundamental equation of quantum mechanics is

\\[
i\hbar \frac{\partial \psi}{\partial t} = -\frac{\hbar^2}{2m} \frac{\partial^2 \psi}{\partial x^2} + V(x)\,\psi
\\]

where

- \\(m\\) = particle mass
- \\(V(x)\\) = potential energy

### Time-Independent Schrödinger Equation

If the potential does not depend on time:

\\[
-\frac{\hbar^2}{2m} \frac{d^2 \psi}{dx^2} + V(x)\,\psi = E\psi
\\]

Solutions give the **allowed energy levels**.

### Free Particle

For a free particle:

\\[
V(x) = 0
\\]

Solutions are plane waves:

$$
\psi = Ae^{ikx} + Be^{-ikx}
$$

Energy:

$$
E = \frac{\hbar^2 k^2}{2m}
$$

### Particle in an Infinite Potential Well

Potential:

- \\(V = 0\\) inside the box
- \\(V = \infty\\) at the walls

Boundary conditions:

\\[
\psi(0) = \psi(L) = 0
\\]

Wave functions:

\\[
\psi_n(x) =
\sqrt{\frac{2}{L}}
\sin\left(\frac{n\pi x}{L}\right)
\\]

Allowed energies:

\\[
E_n = \frac{n^2 \pi^2 \hbar^2}{2mL^2} = \frac{n^2 h^2}{8mL^2}
\\]

### Quantum Tunneling

If a particle encounters a barrier with

\\[
E < V_0
\\]

classically it cannot cross.

Quantum mechanically, the wave function **penetrates the barrier**.

Transmission probability decreases exponentially with barrier width.

### Conceptual Takeaways

- Schrödinger’s equation governs quantum dynamics.
- Boundary conditions produce **quantized energies**.
- Wave functions determine probability distributions.
- Quantum particles can tunnel through barriers.

---

## Expectation Value

### Probability Density

The probability density of finding a particle at position \\(x\\) is

\\[
P(x) = |\psi(x)|^2
\\]

The total probability must equal 1.

### Expectation Value of Position

The **expectation value** of position is

\\[
\langle x \rangle =
\int_{-\infty}^{\infty}
x |\psi(x)|^2 dx
\\]

This represents the **average result of many measurements**.

### Expectation Value of an Operator

For any observable operator \\(\hat{O}\\):

\\[
\langle O \rangle =
\int \psi^* \hat{O} \psi \, dx
\\]

### Momentum Expectation Value

Using the momentum operator:

\\[
\langle \hat{p} \rangle =
\int
\psi^*
\left(
-i\hbar
\frac{\partial}{\partial x}
\right)
\psi \, dx
\\]

### Energy Expectation Value

Using the energy operator:

\\[
\langle \hat{E} \rangle =
\int
\psi^*
\left(
i\hbar
\frac{\partial}{\partial t}
\right)
\psi \, dx
\\]

### Expectation vs Measurement

Important distinctions:

- The expectation value is **not the most likely value**.
- It is the **average over many measurements**.

Individual measurements may produce different results.

### Conceptual Takeaways

- Quantum predictions are **probabilistic**.
- The wave function determines measurement statistics.
- Expectation values correspond to measurable averages.
