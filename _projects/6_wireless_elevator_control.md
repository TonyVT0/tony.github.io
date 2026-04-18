---
layout: page
title: Wireless Elevator Control
description: Replacing elevator cabling with Frequency Shift Keying (FSK) modulation, custom analog circuits and stepper motors.
img: assets/img/wireless-elevator-control/Figure3.png
importance: 10
giscus_comments: false
---

> **Project overview.** This project explores the feasibility of controlling an elevator system wirelessly to reduce infrastructure costs and mechanical complexity. By implementing **Frequency Shift Keying (FSK)** modulation and demodulation circuits, we successfully transmitted digital control signals through air to drive a stepper-motor elevator mechanism.

## Introduction

Modern elevators are tethered — literally — by complex wiring and communication infrastructure. The "traveling cable" in an elevator shaft is heavy, expensive and prone to wear. We asked a simple question: **can we cut the cord?**

Our team designed a wireless control system that replaces physical signal wires with radio-frequency communication. Using FSK we modulate digital data (button presses) into analog sine waves, transmit them wirelessly and demodulate them on the receiver side to control the elevator's logic and movement.

## System architecture

### 1. Communications protocol: FSK

We chose FSK for its noise immunity over Amplitude Shift Keying (ASK):

- **Logic high (1)** — high-frequency carrier (14 kHz)
- **Logic low (0)** — low-frequency carrier (7 kHz)

### 2. Transmitter (modulator)

The transmitter has two main stages: signal generation and mixing.

**Wien-bridge oscillators.** We built two Wien-bridge oscillators tuned to 7 kHz and 14 kHz. Their resonant frequency is

$$f_r = \frac{1}{2\pi RC}$$

**Mixer (Class-B amplifier).** A switching circuit acting as a Class-B amplifier mixes the two carriers: when the digital data is high, the NPN transistor activates and passes the 14 kHz wave; when low, the PNP transistor passes the 7 kHz wave.

![FSK modulated waveform]({{ '/assets/img/wireless-elevator-control/Figure1.png' | relative_url }})

_Figure 1: FSK modulated output. Note the distinct shift in frequency density representing binary data._

### 3. Receiver (demodulator)

Once the signal is received it must be converted back into a clean digital square wave for the microcontroller:

1. **Low-pass filter** — smooths the received FSK wave into an amplitude-varying signal.
2. **Envelope detector** — detects the edges of the signal.
3. **Decision circuit (comparator)** — compares input voltage against a 2.5 V reference; output is digital HIGH or LOW.

![Demodulated digital output]({{ '/assets/img/wireless-elevator-control/Figure2.png' | relative_url }})

_Figure 2: Clean digital square wave recreated by the comparator circuit._

## Electromechanical design

### Motor selection

We tested three motor types to drive the elevator shaft:

1. **Servo motors** — rejected; back-fed noise into the FSK circuit, triggering phantom floor calls.
2. **DC motors** — rejected; insufficient torque.
3. **Stepper motors (NEMA 17)** — **selected** for holding torque and precise position control.

The stepper is driven by an L298N driver and controlled by an Arduino Mega, which handles the floor logic (priority queues for up/down requests).

![Full circuit diagram]({{ '/assets/img/wireless-elevator-control/Figure3.png' | relative_url }})

_Figure 3: Complete schematic — transmitter, receiver and motor-driver interfaces._

## Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/1IsVAPilaZw" title="Wireless Elevator Control demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Challenges and key findings

1. **Range limitation.** Basic 433 MHz modules suffered severe signal degradation over short distances.
2. **Antenna tuning.** A quarter-wave antenna at 433 MHz is approximately 17 cm:

   $$\lambda = \frac{c}{f} = \frac{3 \times 10^8}{433 \times 10^6} \approx 0.69 \text{ m} \implies \frac{0.69}{4} \approx 0.17 \text{ m}$$

   Adding a 17 cm wire antenna significantly improved stability.

3. **Power-supply isolation.** Stepper motors create voltage dips that can reset the FSK receiver. Isolating motor power was mandatory.

## Conclusion

FSK is a viable method for wireless elevator control, but reliability depends heavily on RF signal quality. A commercial application would need error correction (checksums) and more powerful transceivers (LoRa, Zigbee) to ensure passenger safety and system robustness.
