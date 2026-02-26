# Quantum Physics

---

## Table of Contents

- [Birth of Quantum Mechanics](#birth-of-quantum-mechanics)
- [Photoelectric Effect and Wave-Particle Duality](#photoelectric-effect-and-wave-particle-duality)
- [Bohr Model of the Atom](#bohr-model-of-the-atom)

---

### Birth of Quantum Mechanics

---

### Blackbody Radiation

A **blackbody** is an ideal object that:

- Absorbs 100% of incident electromagnetic radiation.
- Emits radiation that depends only on its temperature.
- Has an emission spectrum independent of its material.

A cavity with a small hole approximates a blackbody because radiation entering the hole undergoes many reflections and is almost completely absorbed before escaping.

---

### Intensity and Spectral Intensity

Total intensity (power per unit area):

$$
I = \frac{E}{A t}
$$

Spectral intensity (power per unit area per unit frequency):

$$
I_f = \frac{dE}{dA \, dt \, df}
$$

Total intensity is obtained by integrating over all frequencies:

$$
I = \int_0^\infty I_f \, df
$$

---

### Temperature Dependence

As temperature increases:

- The peak of the spectrum shifts to higher frequency.
- The peak wavelength decreases.
- The total emitted intensity increases rapidly.

Hotter objects change visible color:

- ~3000 K → red glow
- ~6000 K → yellow-white
- ~12000 K → bluish-white

---

### Wien’s Displacement Law

Peak frequency form:

$$
f_{\text{peak}} = (5.88 \times 10^{10} \, \text{Hz/K}) \, T
$$

Peak wavelength form:

$$
\lambda_{\text{peak}} = \frac{2.90 \times 10^{-3}\,\mathrm{m\cdot K}}{T}
$$

Scaling behavior:

- If $T$ doubles → $f_{\text{peak}}$ doubles.
- If $T$ doubles → $\lambda_{\text{peak}}$ halves.

---

### Stefan–Boltzmann Law

Total emitted intensity:

$$
I = \sigma T^4
$$

where

$$
\sigma = 5.67 \times 10^{-8}\,\mathrm{W\,m^{-2}\,K^{-4}}
$$

If temperature doubles, total emitted power increases by $2^4 = 16$.

---

### Classical Prediction: Rayleigh–Jeans Law

Classical equipartition assumes each mode has average energy:

$$
E = k_B T
$$

Number of modes per unit frequency is proportional to $f^2$.

Rayleigh–Jeans law:

$$
I_f^{RJ}(f,T) = \frac{2 f^2}{c^2} k_B T
$$

Total energy prediction:

$$
\int_0^\infty f^2 \, df = \infty
$$

This divergence at high frequency is called the **ultraviolet catastrophe**.

---

### Planck’s Quantum Hypothesis

Planck proposed that energy is quantized:

$$
E = n h f, \quad n = 0,1,2,\dots
$$

where

$$
h = 6.626 \times 10^{-34}\,\mathrm{J\cdot s}
$$

Average energy per mode becomes:

$$
\langle E \rangle = \frac{h f}{e^{hf/k_B T} - 1}
$$

Planck’s radiation law:

$$
I_f(f,T) = \frac{2 f^2}{c^2} \frac{h f}{e^{hf/k_B T} - 1}
$$

---

### Why Planck’s Law Resolves the Catastrophe

At high frequency ($hf \gg k_B T$):

$$
e^{hf/k_B T} \gg 1
$$

Thus

$$
\langle E \rangle \rightarrow 0
$$

High-frequency modes are exponentially suppressed, preventing divergence.

---

### Low-Frequency Limit (Classical Recovery)

When $hf \ll k_B T$, use the approximation:

$$
e^{hf/k_B T} \approx 1 + \frac{hf}{k_B T}
$$

Substituting:

$$
\langle E \rangle \approx k_B T
$$

Planck’s law reduces to the Rayleigh–Jeans result at low frequencies.

---

### Photon Energy

Energy of a single photon:

$$
E = h f
$$

Using wavelength:

$$
E = \frac{hc}{\lambda}
$$

---

### Key Constants

Planck constant:

$$
h = 6.626 \times 10^{-34}\,\mathrm{J\cdot s}
$$

Boltzmann constant:

$$
k_B = 1.381 \times 10^{-23} \, \text{J/K}
$$

Speed of light:

$$
c = 3.00 \times 10^8 \, \text{m/s}
$$

Stefan–Boltzmann constant:

$$
\sigma = 5.67 \times 10^{-8} \, \text{W/m}^2\text{K}^4
$$

---

### Conceptual Takeaways

- Classical physics fails because it assumes continuous energy.
- The number of modes grows with $f^2$, causing divergence.
- Quantization suppresses high-frequency energy.
- Planck’s law matches experiment at all frequencies.
- At low frequency → classical behavior.
- At high frequency → quantum behavior dominates.

---

## Photoelectric Effect and Wave-Particle Duality

---

### The Photoelectric Effect

The **photoelectric effect** occurs when light shines on a metal surface and electrons are ejected.

Key experimental observations:

- No electrons are emitted below a certain **threshold frequency**.
- Increasing light intensity increases the **number** of emitted electrons.
- Increasing light frequency increases the **kinetic energy** of emitted electrons.
- Emission occurs **instantly**, even at low intensity.

These results could not be explained using classical wave theory.

---

### Classical Prediction (Incorrect)

Classical wave theory predicted:

- Energy should depend on **intensity**, not frequency.
- Electrons should accumulate energy gradually.
- There should be a measurable time delay before emission.

Experiments showed this was completely wrong.

---

### Einstein’s Explanation (1905)

Einstein proposed that light consists of **particles called photons**.

Each photon carries energy:

$$
E = h f
$$

When a photon strikes an electron:

- Part of its energy is used to overcome the metal’s **work function**.
- The remainder becomes kinetic energy.

---

### Photoelectric Equation

Energy conservation gives:

$$
h f = W + K_{\text{max}}
$$

where:

- $W$ = work function (minimum energy needed to remove electron)
- $K_{\text{max}}$ = maximum kinetic energy of emitted electrons

Thus:

$$
K_{\text{max}} = h f - W
$$

---

### Threshold Frequency

The **threshold frequency** $f_0$ occurs when $K_{\text{max}} = 0$:

$$
h f_0 = W
$$

So:

$$
f_0 = \frac{W}{h}
$$

If $f < f_0$, no electrons are emitted — regardless of intensity.

This was impossible under classical physics.

---

### Experimental Graph

If we plot $K_{\text{max}}$ vs frequency:

$$
K_{\text{max}} = h f - W
$$

This is a straight line:

- Slope = $h$
- Intercept = $-W$
- Zero crossing = $f_0$

This experiment allowed direct measurement of Planck’s constant.

---

### Intensity vs Frequency

- **Intensity controls number of photons → number of electrons emitted**
- **Frequency controls energy per photon → kinetic energy of electrons**

Do not confuse these.

---

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

---

### Momentum of a Photon

Photons carry momentum even though they have no mass.

Using:

$$
E = p c
$$

Since $E = h f$ and $f = \frac{c}{\lambda}$:

$$
p = \frac{h}{\lambda}
$$

This will later connect to de Broglie matter waves.

---

### Key Constants

Planck constant:

$$
h = 6.626 \times 10^{-34}\,\mathrm{J\cdot s}
$$

Electron rest mass:

$$
m_e = 9.11 \times 10^{-31}\,\mathrm{kg}
$$

Speed of light:

$$
c = 3.00 \times 10^8\,\mathrm{m\,s^{-1}}
$$

---

### Conceptual Takeaways

- Light energy is quantized.
- Frequency determines photon energy.
- Intensity determines photon number.
- Wave and particle descriptions are both necessary.

---

## Bohr Model of the Atom

---
